import { PrismaSelect } from "@paljs/plugins"

const PrismaSelectMiddleware = async (resolve: any, root: any, args: any, context: any, info: any) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}

export default PrismaSelectMiddleware