Feature: Test the profile form

  Scenario: I can submit and check the profile form
    Given I visit the profile page
    When I fill the form with Tester and Testerov
    And Submit the profile form
    Then I see in the header "Tester Testerov"
