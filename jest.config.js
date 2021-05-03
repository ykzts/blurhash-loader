module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: {
        module: 'commonjs',
        target: 'es2015'
      }
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/packages/*/test/**/*.test.ts']
}
