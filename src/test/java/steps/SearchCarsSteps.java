package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsSearchPageActions;
import utils.SeleniumDriver;

public class SearchCarsSteps {
	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	CarsSearchPageActions carsSearchPageActions = new CarsSearchPageActions();

	@Given("^I am on the Home Page \"([^\"]*)\" of CarsGuide of Webpage$")
	public void i_am_on_the_Home_Page_of_CarsGuide_of_Webpage(String websiteURL) throws Throwable {
	   SeleniumDriver.openPage(websiteURL);
	}

	@When("^I moved the menu$")
	public void i_moved_the_menu(List<String> list) throws Throwable {
	   String menu = list.get(1);
	   System.out.println("Menu selected is : " +menu);
	   carsGuideHomePageActions.moveToBuySellMenu();
	    
	}

	@When("^click on \"([^\"]*)\" link$")
	public void click_on_link(String searchCars) throws Throwable {
	   carsGuideHomePageActions.clickOnSearchCarsMenu();
	    
	}

	@When("^select carbrand as \"([^\"]*)\" from AnyMake dropdown$")
	public void select_carbrand_as_from_AnyMake_dropdown(String carBrand) throws Throwable {
	   carsSearchPageActions.selectCarMake(carBrand);
	    
	}

	@When("^select carmodel as \"([^\"]*)\" from AnyModel dropdown$")
	public void select_carmodel_as_from_AnyModel_dropdown(String carModel) throws Throwable {
		carsSearchPageActions.selectCarModel(carModel);
	    
	}

	@When("^select location as \"([^\"]*)\" from AnyLocation dropdown$")
	public void select_location_as_from_AnyLocation_dropdown(String location) throws Throwable {
		carsSearchPageActions.selectLocation(location);
	    
	}

	@When("^select price as \"([^\"]*)\" from PriceMax dropdown$")
	public void select_price_as_from_PriceMax_dropdown(String carPrice) throws Throwable {
		carsSearchPageActions.selectCarPrice(carPrice);
	    
	}

	@When("^click on Find_Next_Car_button$")
	public void click_on_Find_Next_Car_button() throws Throwable {
	   carsSearchPageActions.clickOnFindMyNextCarButton();
	    
	}

	@Then("^I should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
		System.out.println("Car list found");
	    
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String expectedTitle) throws Throwable {
	   String actualTitle = SeleniumDriver.getDriver().getTitle(); 
	    Assert.assertEquals(actualTitle, expectedTitle);
	}


}
