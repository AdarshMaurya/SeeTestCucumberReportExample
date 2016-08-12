package com.example.seecucumber.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		format = {"pretty","html:target/cucumber-html-report" ,"json:target/cucumber.json"},
		tags = {"@sanityTest","@android", "@iphone"},
		glue = "com.example.seecucumber.stepdefinition"
		
		)
public class RunSeeCuckTests {

}
