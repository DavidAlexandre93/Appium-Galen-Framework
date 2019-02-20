load("simple-example.js");
load("pages/WelcomePage.js");
//load("Events/EventScroll");

/*testOnAllDevices("Insights test", "/insights/software-testing", function (driver, device) {
    insights = new Insights(driver).waitForIt();
    checkLayout(driver, "specs/insights.gspec", device.tags, device.excludedTags);
    insights.loadMoreResults();   
});*/

testOnAllDevices("Welcome page", "/", function (driver, device) {
    //welcomePage = new WelcomePage(driver).waitForIt(); 
    checkLayout(driver, "specs/home.gspec", device.tags);
});

