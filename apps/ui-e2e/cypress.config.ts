import { defineConfig } from 'cypress'
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    baseUrl: 'http://localhost:4200',
    specPattern: '**/*.feature',
    supportFile: false,
    setupNodeEvents,
  },
})
