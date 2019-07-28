package steps;

import java.util.List;

import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsSearchPageActions;
import pages.actions.UsedCarsSearchPageActions;

public class UsedCarsSteps {
	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();

	@When("^click on submenu Used Cars Search link$")
	public void click_on_submenu_Used_Cars_Search_link() throws Throwable {
		carsGuideHomePageActions.clickOnUsedCarsSearchMenu();
	}
	
	@When("^select car model$")
	public void select_car_model(List<String> list) throws Throwable {
		 String model = list.get(1);
		 System.out.println("Model selected is : " +model);
		 usedCarsSearchPageActions.selectCarModel(model);      
	}

	
}
