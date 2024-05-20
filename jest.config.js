module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/", // add patterns to ignore files in node_modules if necessary
  ],
};
