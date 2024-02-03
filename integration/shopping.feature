Feature: Shopping for Items

  Scenario: User adds items to the cart
    Given the user is logged in
    When the user adds items to the cart
    Then the items should be in the cart
