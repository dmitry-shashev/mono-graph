const nxPreset = require('@nrwl/jest/preset').default

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: ['../../jest-extra-expects.ts'],
}
