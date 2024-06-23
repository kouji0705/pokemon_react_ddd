module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@entities/(.*)$": "<rootDir>/src/domain/entities/$1",
		"^@enums/(.*)$": "<rootDir>/src/domain/enums/$1",
		"^@services/(.*)$": "<rootDir>/src/domain/services/$1",
	},
};
