<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Authentication.feature");
formatter.feature({
  "id": "authentication",
  "tags": [
    {
      "name": "@sanityTest",
      "line": 19
    }
  ],
  "description": "As an end user I want to login in the application.",
  "name": "Authentication",
  "keyword": "Feature",
  "line": 20,
  "comments": [
    {
      "value": "#Author: adarshmaurya@softhinkers.com",
      "line": 1
    },
    {
      "value": "#Keywords Summary : Authentication",
      "line": 2
    },
    {
      "value": "#Feature: Authentication",
      "line": 3
    },
    {
      "value": "#Scenario: Authentication- User Login",
      "line": 4
    },
    {
      "value": "#Given: Some precondition step",
      "line": 5
    },
    {
      "value": "#When: Some key actions",
      "line": 6
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 7
    },
    {
      "value": "#And,But: To enumerate more Given,When,Then steps",
      "line": 8
    },
    {
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e",
      "line": 9
    },
    {
      "value": "#Examples: Container for s table",
      "line": 10
    },
    {
      "value": "#Background: List of steps run before each of the scenarios",
      "line": 11
    },
    {
      "value": "#\"\"\" (Doc Strings)",
      "line": 12
    },
    {
      "value": "#| (Data Tables)",
      "line": 13
    },
    {
      "value": "#@ (Tags/Labels):To group Scenarios",
      "line": 14
    },
    {
      "value": "#\u003c\u003e (placeholder)",
      "line": 15
    },
    {
      "value": "#\"\"",
      "line": 16
    },
    {
      "value": "## (Comments)",
      "line": 17
    },
    {
      "value": "#Sample Feature Definition Template",
      "line": 18
=======
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
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
    }
  ]
});
formatter.before({
<<<<<<< HEAD
  "duration": 8142823872,
  "status": "passed"
});
formatter.scenario({
  "id": "authentication;authentication--user-login",
  "tags": [
    {
      "name": "@android",
      "line": 23
    },
    {
      "name": "@iphone",
      "line": 23
    }
  ],
  "description": "",
  "name": "Authentication- User Login",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "Login Activity Is On Screen",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "User Enters Valid Username",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "User Enters Valid Password",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "User Click on Login Button",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "User Navigates to Main Activity",
  "keyword": "Then ",
  "line": 29
=======
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
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
});
formatter.match({
  "location": "Authentication.login_Activity_Is_On_Screen()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 298751680,
=======
  "duration": 306166463,
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Enters_Valid_Username()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 65276201,
=======
  "duration": 121003680,
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Enters_Valid_Password()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 95637282,
=======
  "duration": 64614788,
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Click_On_Login_Button()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 71019280,
=======
  "duration": 73111592,
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
  "status": "passed"
});
formatter.match({
  "location": "Authentication.user_Navigates_to_Main_Activity()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 809484764,
  "status": "passed"
});
formatter.after({
  "duration": 83499105,
  "status": "passed"
});
formatter.uri("features/MakePayment.feature");
formatter.feature({
  "id": "make-payment",
  "tags": [
    {
      "name": "@sanityTest",
      "line": 19
    }
  ],
  "description": "As an end user I want to make payment",
  "name": "Make Payment",
  "keyword": "Feature",
  "line": 20,
  "comments": [
    {
      "value": "#Author: adarshmaurya@softhinkers.com",
      "line": 1
    },
    {
      "value": "#Keywords Summary : Make Payment",
      "line": 2
    },
    {
      "value": "#Feature: Make Payment",
      "line": 3
    },
    {
      "value": "#Scenario: User Makes Payment",
      "line": 4
    },
    {
      "value": "#Given: Some precondition step",
      "line": 5
    },
    {
      "value": "#When: Some key actions",
      "line": 6
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 7
    },
    {
      "value": "#And,But: To enumerate more Given,When,Then steps",
      "line": 8
    },
    {
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e",
      "line": 9
    },
    {
      "value": "#Examples: Container for s table",
      "line": 10
    },
    {
      "value": "#Background: List of steps run before each of the scenarios",
      "line": 11
    },
    {
      "value": "#\"\"\" (Doc Strings)",
      "line": 12
    },
    {
      "value": "#| (Data Tables)",
      "line": 13
    },
    {
      "value": "#@ (Tags/Labels):To group Scenarios",
      "line": 14
    },
    {
      "value": "#\u003c\u003e (placeholder)",
      "line": 15
    },
    {
      "value": "#\"\"",
      "line": 16
    },
    {
      "value": "## (Comments)",
      "line": 17
    },
    {
      "value": "#Sample Feature Definition Template",
      "line": 18
    }
  ]
});
formatter.before({
  "duration": 8203772675,
  "status": "passed"
});
formatter.scenario({
  "id": "make-payment;make-payment",
  "tags": [
    {
      "name": "@android",
      "line": 23
    },
    {
      "name": "@iphone",
      "line": 23
    }
  ],
  "description": "",
  "name": "Make Payment",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Main Activity",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "User clicks on Make Payment",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "User Enters Phone Number",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "User Enters Name",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "User Enters Amount",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "User Selects Country",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "User Clicks Send Payment",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "Confirmation Dialog Box Pops out",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "User Clicks On Yes",
  "keyword": "And ",
  "line": 33
});
formatter.step({
  "name": "User Balance must decrease",
  "keyword": "Then ",
  "line": 34
});
formatter.match({
  "location": "MakePayment.user_is_on_main_activity()"
});
formatter.result({
  "duration": 339916580,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_clicks_on_make_payment()"
});
formatter.result({
  "duration": 889709329,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_enters_phone_number()"
});
formatter.result({
  "duration": 870774255,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_enters_name()"
});
formatter.result({
  "duration": 46424374,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_enters_amount()"
});
formatter.result({
  "duration": 66868962,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_selects_country()"
});
formatter.result({
  "duration": 860352987,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_clicks_send_payment()"
});
formatter.result({
  "duration": 795190828,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.confirmation_dialog_box_pops_out()"
});
formatter.result({
  "duration": 389205516,
  "status": "passed"
});
formatter.match({
  "location": "MakePayment.user_clicks_on_yes()"
});
formatter.result({
  "duration": 10137457570,
  "status": "failed",
  "error_message": "com.experitest.client.InternalException: Exception caught while executing click: Element was not identified: \u0027xpath\u003d//*[@text\u003d\u0027Yex\u0027]\u0027 at zone NATIVE\r\n\tat com.experitest.client.Client.execute(Client.java:176)\r\n\tat com.experitest.client.Client.click(Client.java:450)\r\n\tat com.example.seecucumber.stepdefinition.MakePayment.user_clicks_on_yes(MakePayment.java:90)\r\n\tat ✽.And User Clicks On Yes(features/MakePayment.feature:33)\r\n"
});
formatter.match({
  "location": "MakePayment.user_balance_must_decrease()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10117300739,
  "status": "failed",
  "error_message": "com.experitest.client.InternalException: Exception caught while executing click: Element was not identified: \u0027xpath\u003d//*[@id\u003d\u0027logoutButton\u0027]\u0027 at zone NATIVE\r\n\tat com.experitest.client.Client.execute(Client.java:176)\r\n\tat com.experitest.client.Client.click(Client.java:450)\r\n\tat com.example.seecucumber.stepdefinition.Hooks.Logout(Hooks.java:120)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat com.example.seecucumber.custom.CustomCucumberRunner.run(CustomCucumberRunner.java:45)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n"
});
=======
  "duration": 329452558,
  "status": "passed"
});
formatter.after({
  "duration": 105951661,
  "status": "passed"
});
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
});