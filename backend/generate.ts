import { Generator } from "@paljs/generator"

new Generator(
	{ name: "sdl", schemaPath: "./prisma/schema.prisma" },
	{
		output: "./src/generated",
		excludeFieldsByModel: {
			User: ["code"]
		},
		excludeQueriesAndMutationsByModel: {
			Post: ["findUnique"]
		}
	}
).run()
