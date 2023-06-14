const {By,Builder,until} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");
 
async function failed_login() {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var username = "student";
        var password = "WrongPassword123";
 
        await driver.get("https://practicetestautomation.com/practice-test-login/");
            
        
        await driver.findElement(By.css("#username")).sendKeys(username);
        await driver.findElement(By.css("#password")).sendKeys(password);
        await driver.findElement(By.css("#submit")).click();
 
        // Get the text from the error element which should now be present.
        let errorElementText = await driver.wait(until.elementLocated(By.css('#error')),10000).getText();
        console.log(errorElementText);

        // Assert that the text in the error message is correct
        assert(errorElementText.includes("password is invalid"));
        

    } catch (e) {
        console.log("Error there was an error: ", e);
    }
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
    
}
 
failed_login()