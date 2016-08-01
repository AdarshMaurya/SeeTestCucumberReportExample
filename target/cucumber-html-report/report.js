$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Authentication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: adarshmaurya@softhinkers.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Authentication"
    },
    {
      "line": 3,
      "value": "#Feature: Authentication"
    },
    {
      "line": 4,
      "value": "#Scenario: Authentication- User Login"
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Authentication",
  "description": "As an end user I want to login in the application.",
  "id": "authentication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@sanityTest"
    }
  ]
});
formatter.before({
  "duration": 8251966492,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Authentication- User Login",
  "description": "",
  "id": "authentication;authentication--user-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@android"
    },
    {
      "line": 23,
      "name": "@iphone"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Login Activity Is On Screen",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User Enters Valid Username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User Enters Valid Password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Navigates to Main Activity",
  "keyword": "Then "
});
formatter.match({
  "location": "Authentication.login_Activity_Is_On_Screen()"
});
formatter.result({
  "duration": 306166463,
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Enters_Valid_Username()"
});
formatter.result({
  "duration": 121003680,
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Enters_Valid_Password()"
});
formatter.result({
  "duration": 64614788,
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Click_On_Login_Button()"
});
formatter.result({
  "duration": 73111592,
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Navigates_to_Main_Activity()"
});
formatter.result({
  "duration": 329452558,
  "status": "passed"
});
formatter.after({
  "duration": 105951661,
  "status": "passed"
});
});