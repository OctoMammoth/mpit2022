const Post = {
	Query: {
		findUniquePost: async (_parent, args, { prisma, checkToken }) => {
			const { liked, likes } = args.select
			delete args.select.liked
			delete args.select.likes
			let { where } = args
			let select = {
				...args.select
			}
			if (likes) {
				select._count = {
					select: {
						likes: true
					}
				}
			}
			let post = await prisma.post.findUnique({ select, where })
			let like
			if (liked) {
				let { id } = await checkToken()
				if (id) {
					like = await prisma.like.findFirst({
						where: {
							postId: post.id,
							userId: id
						}
					})
				}
			}
			let likesCount = post._count.likes
			delete post._count.likes
			return {
				...post,
				liked: like ? true : false,
				likes: likesCount
			}
		}
	},
	Mutation: {
		likePost: async (_parent, { postId }, { prisma, checkToken }) => {
			let { id: userId } = await checkToken()
			//Check liked or not
			const like = await prisma.like.findFirst({
				where: {
					postId,
					userId
				}
			})
			if (like) {
				return false
			}
			//Create Like
			await prisma.like.create({
				data: {
					user: {
						connect: {
							id: userId
						}
					},
					post: {
						connect: {
							id: postId
						}
					}
				}
			})
			return true
		},
		unlikePost: async (_parent, { postId }, { prisma, checkToken }) => {
			let { id: userId } = await checkToken()
			const like = await prisma.like.findFirst({
				where: {
					postId,
					userId
				}
			})
			if (!like) {
				return false
			}
			await prisma.like.deleteMany({
				where: {
					postId,
					userId
				}
			})
			return true
		}
	}
}

export default Post
