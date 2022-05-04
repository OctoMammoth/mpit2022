import { PrismaClient } from "@prisma/client"
const randomize = require("randomatic")
const jwt = require("jsonwebtoken")
const { PrismaSelect } = require("@paljs/plugins")

const User = {
	Mutation: {
		auth: async (_parent, { tel }, { prisma, sms }: { prisma: PrismaClient; sms: any }, info) => {
			const User = await prisma.user.findUnique({ where: { tel } })
			const code = randomize("0", 4)
			if (!User) {
				await prisma.user.create({ data: { tel, code } })
				// await sms.sms_send(
				// 	{
				// 		to: "7" + tel,
				// 		text: code
				// 	},
				// 	(e) => {
				// 		console.log(e.description)
				// 	}
				// )
                console.log(code)
				return {
					status: "isNewUser"
				}
			}
			// await sms.sms_send(
			// 	{
			// 		to: "7" + tel,
			// 		text: code
			// 	},
			// 	(e) => {
			// 		console.log(e.description)
			// 	}
			// )
            console.log(code)

			await prisma.user.update({ data: { code }, where: { tel } })
			return {
				status: "codeSended"
			}
		},
		verify: async (
			_parent,
			{ tel, code },
			{ prisma, sms }: { prisma: PrismaClient; sms: any },
			info
		) => {
			const User = await prisma.user.findUnique({ where: { tel } })
			// if (code) {
			if (User?.code === code) {
				const token = jwt.sign({ id: User?.id }, process.env[`USER_SECRET`])
				return {
					status: "success",
					token
				}
			}
			return {
				status: "error"
			}
		}
	},
	Query: {
		me: async (_parent, args, { prisma, checkToken }, info) => {
			const select = new PrismaSelect(info).value
			const { id } = await checkToken()
			return prisma.user.findUnique({ where: { id }, ...select })
		}
	}
}

export default User
