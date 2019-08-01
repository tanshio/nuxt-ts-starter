module.exports = {
  moduleFileExtensions: ['vue', 'ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
}
