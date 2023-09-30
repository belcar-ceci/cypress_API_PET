Feature: Adding a new pet into the store
    I want to add a new pet in the petstore
    Its better than let it alone in the streets

  Scenario: Insert a new pet with available status
    Given I set the request body to:
      """
        
        {
            "id": 999348444,
            "category": {
               "id": 2,
               "name": "Bulbasur Pokemon"
            },
            "name": "Cecilia Carbel",
            "photoUrls": [
              "www.google.com"
            ],
            "tags": [
                {
                "id": 37,
                "name": "TestQA"
                }
            ],
            "status": "sold"
        }
      """
    When I send the API request
    Then the response status should be 200
    And the response body should contain:
      """
        {
            "id": 999348444,
            "category": {
               "id": 2,
               "name": "Bulbasur Pokemon"
            },
            "name": "Cecilia Carbel",
            "photoUrls": [
              "www.google.com"
            ],
            "tags": [
                {
                "id": 37,
                "name": "TestQA"
                }
            ],
            "status": "sold"
        }
      """