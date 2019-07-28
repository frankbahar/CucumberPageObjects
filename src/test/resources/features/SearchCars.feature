@Search-Cars
Feature: Acceptance testing to validate Search cars page is working
  In order to validate that 
  the search cars page is working fine
  we will do the acceptance testing

  @Search-Cars-Positive
  Scenario: Validate search cars page
    Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide of Webpage
    When I moved the menu
      | Menu       |
      | Buy + Sell |
      | Reviews    |
    And click on "Search Cars" link
    And select carbrand as "BMW" from AnyMake dropdown
    And select carmodel as "1 Series" from AnyModel dropdown
    And select location as "ACT - All" from AnyLocation dropdown
    And select price as "$1,000" from PriceMax dropdown
    And click on Find_Next_Car_button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series for Sale ACT | carsguide"