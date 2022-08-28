import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import PageTestModals from '../cy-pages/page-test-modals'

Given('I visit the test modals page', () => {
  PageTestModals.open()
})

When('I open the info modal', () => {
  PageTestModals.openInfoModal()
})

Then('The info modal is visible', () => {
  PageTestModals.infoModalIsVisible()
})

When('I close the info modal', () => {
  PageTestModals.closeInfoModal()
})

Then('The info modal is not visible', () => {
  PageTestModals.infoModalIsNotVisible()
})

When('I open the confirmation modal', () => {
  PageTestModals.openConfirmationModal()
})

Then('The confirmation modal is visible', () => {
  PageTestModals.confirmationModalIsVisible()
})

When('I close the confirmation modal', () => {
  PageTestModals.closeConfirmationModal()
})

Then('The confirmation modal is not visible', () => {
  PageTestModals.confirmationModalIsNotVisible()
})

Then('The confirmation label is not visible', () => {
  PageTestModals.confirmationLabelNotVisible()
})

When('I submit the confirmation the modal', () => {
  PageTestModals.submitConfirmationModal()
})

Then('The confirmation label is visible', () => {
  PageTestModals.confirmationLabelVisible()
})

When('I open the user modal', () => {
  PageTestModals.openUserModal()
})

Then('The user modal is visible', () => {
  PageTestModals.userModalIsVisible()
})

When('I close the user modal', () => {
  PageTestModals.closeUserModal()
})

Then('The user modal is not visible', () => {
  PageTestModals.userModalIsNotVisible()
})

Then('The user label is not visible', () => {
  PageTestModals.userLabelNotVisible()
})

When(
  'I fill the user modal form with {word} {word}',
  (firstName: string, lastName: string) => {
    PageTestModals.fillUserModalForm(firstName, lastName)
  }
)

When('I submit the user modal', () => {
  PageTestModals.submitUserModal()
})

Then(
  'The user modal has {word} {word}',
  (firstName: string, lastName: string) => {
    PageTestModals.userLabelHas(firstName, lastName)
  }
)
