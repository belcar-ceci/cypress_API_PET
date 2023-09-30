Feature: Automating the creation and retrieval of a user in the Petstore API

  Scenario: Creating a new user in the API
    Given I am on the Petstore API page
    When I make a POST request to create a user with the following data:
      """
        {
           "id": "111224",
           "username": "ferka",
           "firstName": "Fernanda",
           "lastName": "Carmona",
           "email": "ferkar@petshop.com",
           "password": "catwhitez",
           "phone": "666777900",
           "userStatus": "5"
        }
      """  
    Then the request should be successful


