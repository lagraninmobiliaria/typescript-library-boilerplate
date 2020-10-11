module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js', 'src/**/*.ts', '!src/**/*.(spec|test).(ts|js)'],

    tests: ['src/**/*.(spec|test).(ts|js)'],
    testFramework: 'jest',
    runMode: 'onsave',
    env: {
      type: 'node',
      runner: 'node',
    },
  }
}
