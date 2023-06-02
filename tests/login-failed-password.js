const {By,Key,Builder,until} = require("selenium-webdriver");
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

        await new Promise(res => setTimeout(res, 3000));
 
        //Verify the page title and print it
        let errorElementText = await driver.findElement(By.id('error')).getText();
        console.log(errorElementText);

        assert(errorElementText.includes("password is invalid"));
        

    } catch (e) {
        console.log("Error there was an error: ", e);
    }
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
    
}
 
failed_login()