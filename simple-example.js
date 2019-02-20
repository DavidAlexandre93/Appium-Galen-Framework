
load("galen-bootstrap/galen-bootstrap.js");


$prod = "http://testapp.galenframework.com";
$gridAppium = "http://127.0.0.1:8001/wd/hub";

$galen.settings.website = $prod;
$galen.settings.website = "http://testapp.galenframework.com";
//$galen.registerDevice("mobile", inSeleniumGrid("mobile device", "450x800", ["mobile"]));
//$galen.registerDevice("tablet", inSingleBrowser("tablet emulation", "600x800", ["tablet"]));
//$galen.registerDevice("desktop", inSingleBrowser("desktop emulation", "1024x768", ["desktop"]));


//for running test on mobile device using appium:
$galen.registerDevice("mobile-android", inSeleniumGrid($gridAppium, "real mobile", ["mobile"], 
{desiredCapabilities:{automationName:"UIAutomator", browserName:"Chrome", platformName:"Android", platformVersion:"8.0", udid:"HAAZB600X236CSZ", deviceName:"ASUS_Z01KD", bundleId:"com.android.chrome"}}));


