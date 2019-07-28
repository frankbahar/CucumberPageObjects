@Used-Search-Cars
Feature: Acceptance testing to validate Used Search cars page is working
  In order to validate that 
  the Used search cars page is working fine
  we will do the acceptance testing

  @Used-Search-Cars-Positive
  Scenario: Validate used search cars page
    Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide of Webpage
    When I moved the menu
      | Menu       |
      | Buy + Sell |
      | Reviews    |
    And click on submenu Used Cars Search link
    And select carbrand as "Audi" from AnyMake dropdown
    And select car model
      | carModel |
      | A4       |
      | A3       |
    And select location as "SA - All" from AnyLocation dropdown
    And select price as "$2,000" from PriceMax dropdown
    And click on Find_Next_Car_button
    Then I should see list of searched cars
    And the page title should be "Used Audi A4 for Sale SA | carsguide"
