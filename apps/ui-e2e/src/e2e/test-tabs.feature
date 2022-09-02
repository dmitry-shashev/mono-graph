Feature: Test Tabs

  Scenario: I can use tabs
    Given I visit the test tabs page

    When I see the current tab title "Tab 2"
    Then I see the tab content "Some tab 2"
    And I do not see tab content "Some tab 1"
    And I do not see tab content "Some tab 3"

    When I select the tab "Tab 3"
    Then I see the tab content "Some tab 3"
    And I do not see tab content "Some tab 1"
    And I do not see tab content "Some tab 2"
