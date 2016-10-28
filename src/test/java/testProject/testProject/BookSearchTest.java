package testProject.testProject;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/testProject/testProject", plugin={"pretty","html:target/report"})
public class BookSearchTest {

}
