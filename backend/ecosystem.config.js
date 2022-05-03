module.exports = {
	apps: [
		{
			name: "NodeServer",
			script: "npm",
			automation: false,
			args: "run start",
			env: {
				NODE_ENV: "development",
				DATABASE_URL: "postgresql://admin:vq012mv9@localhost:5432/dev?schema=public",
				ACCESS_KEY_ID: "wLKUUgA9AcgYysUn",
				SECRET_ACCESS_KEY_ID: "f41ytRVgzoMzpVDXq4Taf97Zr4J0tl64",
				AWS_S3_BUCKET: "data1",
				AWS_URI: "https://s3.3limbs.ml",
				SMS_RU_API: "EF483F1B-C4B0-B0CD-1BE4-7DE802BB5E15",
				USER_SECRET: "gj0js912",
				ADMIN_SECRET: "0v01k8s4",
				PORT: 4001
			},
			env_production: {
				NODE_ENV: "production",
				DATABASE_URL: "postgresql://admin:vq012mv9@localhost:5432/database?schema=public",
				ACCESS_KEY_ID: "wLKUUgA9AcgYysUn",
				SECRET_ACCESS_KEY_ID: "f41ytRVgzoMzpVDXq4Taf97Zr4J0tl64",
				AWS_S3_BUCKET: "data1",
				AWS_URI: "https://s3.3limbs.ml",
				SMS_RU_API: "EF483F1B-C4B0-B0CD-1BE4-7DE802BB5E15",
				USER_SECRET: "gj0js912",
				ADMIN_SECRET: "0v01k8s4",
                PORT: 4000
			}
		}
	]
}
