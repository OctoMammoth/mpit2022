import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { makeExecutableSchema } from "@graphql-tools/schema"
import resolversArray from "../entity/resolvers"
import typeDefsArray from "../entity/typeDefs"
import generatedResolvers from '../generated/resolvers'
import generatedTypeDefs from '../generated/typeDefs'

const GraphQLSetup = () => {
	const typeDefs = mergeTypeDefs([...typeDefsArray, generatedTypeDefs])

	const resolvers = mergeResolvers([...resolversArray, ...generatedResolvers])

	const schema = makeExecutableSchema({ typeDefs, resolvers })

	return {
		typeDefs,
		resolvers,
		schema
	}
}

export default GraphQLSetup()
