Feature: List names of sold pets

  Scenario: Collect names of sold pets
    Given I am on the Petstore API page
    When I make a GET request to retrieve sold pet names
    Then the request should be successful
    And the sold pet names should be listed