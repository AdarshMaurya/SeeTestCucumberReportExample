package com.example.seecucumber.core;

<<<<<<< HEAD
public class AndroidApplication extends ApplicationDefaultImpl {

	public AndroidApplication(MyClient client, String appPackage,
			String launchActivity) {
		super(client, appPackage, launchActivity);
	}

	public void init(boolean clearData) {
		if (clearData) {
			client.applicationClearData(appPackage);
		}
		if (client!=null)
			client.launch(launchActivity, true, true);
	}

	public void handleElementIdentificationException() {

=======

public class AndroidApplication extends ApplicationDefaultImpl {

	public AndroidApplication(MyClient client, String appPackage, String launchActivity) {
		super(client,appPackage,launchActivity);
	}

	public void init(boolean clearData) {
		if(clearData){
			client.applicationClearData(appPackage);
		}
		client.launch(launchActivity, true, true);
	}

	public void handleElementIdentificationException() {
		
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
	}

	public void install(String appLocation) {
		client.install(appLocation + "\\eribank.apk", true, false);
<<<<<<< HEAD

	}

=======
		
	}


>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
}
