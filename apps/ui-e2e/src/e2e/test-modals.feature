Feature: Test Modals

  Scenario: I can work with modal windows
    Given I visit the test modals page
    When I open the info modal
    Then The info modal is visible
    When I close the info modal
    Then The info modal is not visible

    When I open the confirmation modal
    Then The confirmation modal is visible
    When I close the confirmation modal
    Then The confirmation modal is not visible
    And The confirmation label is not visible
    When I open the confirmation modal
    And I submit the confirmation the modal
    Then The confirmation modal is not visible
    And The confirmation label is visible

    When I open the user modal
    Then The user modal is visible
    When I close the user modal
    Then The user modal is not visible
    And The user label is not visible
    When I open the user modal
    And I fill the user modal form with Tester Testerov
    And I submit the user modal
    Then The user modal is not visible
    And The user modal has Tester Testerov


