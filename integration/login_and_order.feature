Feature: Login and Order Items

  Scenario: User logs in and purchases items
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user adds items to the cart
    And the user completes the checkout process
    And the purchase is successful