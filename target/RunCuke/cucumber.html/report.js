$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working",
  "description": "In order to validate that \nthe search cars page is working fine\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 4243671074,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide of Webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I moved the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Buy + Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "Reviews"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select carmodel as \"1 Series\" from AnyModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select location as \"ACT - All\" from AnyLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select price as \"$1,000\" from PriceMax dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Find_Next_Car_button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the page title should be \"Bmw 1 Series for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_of_Webpage(String)"
});
formatter.result({
  "duration": 5488853606,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_moved_the_menu(String\u003e)"
});
formatter.result({
  "duration": 54881090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 4852612959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 145840091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_AnyModel_dropdown(String)"
});
formatter.result({
  "duration": 403432216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_AnyLocation_dropdown(String)"
});
formatter.result({
  "duration": 114136084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_PriceMax_dropdown(String)"
});
formatter.result({
  "duration": 133718970,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_Next_Car_button()"
});
formatter.result({
  "duration": 7782255559,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 61168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 6644301,
  "status": "passed"
});
formatter.after({
  "duration": 172556245,
  "status": "passed"
});
formatter.uri("UsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Used Search cars page is working",
  "description": "In order to validate that \r\nthe Used search cars page is working fine\r\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 4578098386,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate used search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide of Webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I moved the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "Buy + Sell"
      ],
      "line": 12
    },
    {
      "cells": [
        "Reviews"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "click on submenu Used Cars Search link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select carbrand as \"Audi\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "select car model",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 17
    },
    {
      "cells": [
        "A4"
      ],
      "line": 18
    },
    {
      "cells": [
        "A3"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select location as \"SA - All\" from AnyLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select price as \"$2,000\" from PriceMax dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on Find_Next_Car_button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the page title should be \"Used Audi A4 for Sale SA | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_of_Webpage(String)"
});
formatter.result({
  "duration": 7167384135,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_moved_the_menu(String\u003e)"
});
formatter.result({
  "duration": 43475864,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.click_on_submenu_Used_Cars_Search_link()"
});
formatter.result({
  "duration": 3590535165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 288922704,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.select_car_model(String\u003e)"
});
formatter.result({
  "duration": 259050723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_AnyLocation_dropdown(String)"
});
formatter.result({
  "duration": 168246530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_PriceMax_dropdown(String)"
});
formatter.result({
  "duration": 157600243,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_Next_Car_button()"
});
formatter.result({
  "duration": 4285980589,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 49463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 for Sale SA | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 4918376,
  "status": "passed"
});
formatter.after({
  "duration": 2295193954,
  "status": "passed"
});
});