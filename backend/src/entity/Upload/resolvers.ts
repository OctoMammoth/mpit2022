import { PrismaClient } from "@prisma/client"
import { S3 } from "aws-sdk"
import 'dotenv/config'

const { extname } = require("path")
const { v4: uuid } = require("uuid")
const { processUpload } = require("../../utils/upload.js")

const Upload = {
	Mutation: {
		singleUpload: async (_parent, { upload }, { prisma, s3 }: {prisma: PrismaClient, s3: S3}) => {
			const { createReadStream, filename, mimetype, encoding } = await upload

			const { Key } = await s3.upload({
                Bucket: `${process.env["AWS_S3_BUCKET"]}`,
				Body: createReadStream(),
				Key: `${uuid()}${extname(filename)}`,
				ContentType: mimetype
			}).promise()

            const Location = `${process.env["AWS_URI"]}/${process.env["AWS_S3_BUCKET"]}/${Key}`

            await prisma.file.create({
                data: {
                    filename,
                    mimetype,
                    encoding,
                    uri: Location
                }
            })

			return {
				filename,
				mimetype,
				encoding,
				uri: Location // (D)
			}
		},
		multiUpload: async (_parent, { uploads }, { prisma, s3 }) => {
			return uploads.map(async (upload: any) => {
				const { createReadStream, filename, mimetype, encoding } = await upload

				const { Location } = await s3.upload({
					Body: createReadStream(),
					Key: `${uuid()}${extname(filename)}`,
					ContentType: mimetype
				})
				return {
					filename,
					mimetype,
					encoding,
					uri: Location // (D)
				}
			})
		}
	}
}

export default Upload
