import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import PageProfile from '../cy-pages/page-profile'

Given('I visit the profile page', () => {
  PageProfile.open()
})

When(
  'I fill the form with {word} and {word}',
  (firstName: string, lastName: string) => {
    PageProfile.fillTheForm(firstName, lastName)
  }
)

When('Submit the profile form', () => {
  PageProfile.submitTheForm()
})

Then('I see in the header {string}', (fullName: string) => {
  PageProfile.checkTheTopFullName(fullName)
})
