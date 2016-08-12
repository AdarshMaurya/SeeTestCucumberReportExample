package com.example.seecucumber.core;

public class IOSApplication extends ApplicationDefaultImpl {

	public IOSApplication(MyClient client, String appPackage,
			String launchActivity) {
		super(client, appPackage, launchActivity);
	}

	public void init(boolean clearData) {
		if (clearData) {
			client.applicationClearData(appPackage);
		}
<<<<<<< HEAD
		if (client!=null)
			client.launch(launchActivity, true, true);
=======
		client.launch(launchActivity, true, true);
>>>>>>> 62cfc4f486b1feb4c1669f100261d1e14959c5f8
	}

	public void handleElementIdentificationException() {

	}

	public void install(String appLocation) {
		client.install(appLocation + "\\eribank.apk", true, false);

	}

}
