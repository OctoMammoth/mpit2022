import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import GraphQLSetup from './graphql';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import PrismaSelectMiddleware from './utils/middlewares/prismaSelect';
import { permissions } from './utils/permissions'
const { BaseRedisCache } = require('apollo-server-cache-redis')
const Redis = require('ioredis')

const {
  graphqlUploadExpress,
} = require('graphql-upload');

const redis = new Redis({
  port: 6379,
  host: "127.0.0.1"
})

export async function startApolloServer(prisma: PrismaClient) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    schema: applyMiddleware(GraphQLSetup.schema, PrismaSelectMiddleware, permissions),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    context: ({req}) => {
      return {
        prisma
      }
    },
    cache: new BaseRedisCache({
      client: redis
    })
  });

  app.use(graphqlUploadExpress())

  // More required logic for integrating with Express
  await server.start();
  
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/graphql'
  });

  // Modified server startup
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}