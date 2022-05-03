import { ApolloServer } from "apollo-server-express"
import {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core"
import express from "express"
import http from "http"
import GraphQLSetup from "./graphql"
import { PrismaClient } from "@prisma/client"
import { applyMiddleware } from "graphql-middleware"
import PrismaSelectMiddleware from "./utils/middlewares/prismaSelect"
import { permissions } from "./utils/permissions"
import AWS from "aws-sdk"
import "dotenv/config"
import { checkRole } from "./utils/auth"
const { BaseRedisCache } = require("apollo-server-cache-redis")
const Redis = require("ioredis")
var SMSru = require("sms_ru")

var sms = new SMSru(process.env["SMS_RU_API"])

const s3 = new AWS.S3({
	accessKeyId: `${process.env["ACCESS_KEY_ID"]}`,
	secretAccessKey: `${process.env["SECRET_ACCESS_KEY_ID"]}`,
	endpoint: "http://127.0.0.1:9000",
	s3ForcePathStyle: true,
	signatureVersion: "v4",
})

const { graphqlUploadExpress } = require("graphql-upload")

const redis = new Redis({
	port: 6379,
	host: "127.0.0.1"
})

export async function startApolloServer(prisma: PrismaClient) {
	// Required logic for integrating with Express
	const app = express()
	const httpServer = http.createServer(app)

	// Same ApolloServer initialization as before, plus the drain plugin.
	const server = new ApolloServer({
		schema: applyMiddleware(GraphQLSetup.schema, PrismaSelectMiddleware, permissions),
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageGraphQLPlayground()
		],
		context: ({ req }) => {
			const { authorization } = req.headers

			const checkToken = async () => {
				const roles = ["USER", "ADMIN"]
				const checks = await Promise.all(
					roles.map(async (role) => {
						return await checkRole(authorization, role, prisma, false)
					})
				)
				const find = checks.find((object) => object)
				if (!find) throw new Error("Token timeout")
				return find
			}

			return {
				prisma,
				s3,
				sms,
				checkToken
			}
		},
		cache: new BaseRedisCache({
			client: redis
		})
	})

	app.use(graphqlUploadExpress())

	// More required logic for integrating with Express
	await server.start()

	server.applyMiddleware({
		app,

		// By default, apollo-server hosts its GraphQL endpoint at the
		// server root. However, *other* Apollo Server packages host it at
		// /graphql. Optionally provide this to match apollo-server.
		path: "/graphql"
	})

	// Modified server startup
	await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}
