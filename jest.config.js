module.exports = {
  verbose  : true,
  transform: {
    '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',
    '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  setupTestFrameworkScriptFile: '<rootDir>/jest-setup.js'
};
