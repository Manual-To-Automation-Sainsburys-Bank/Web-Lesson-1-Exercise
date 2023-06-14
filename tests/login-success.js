const {By,Builder} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");
 
async function successful_login(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var username = "student";
        var password = "Password123";
 
        await driver.get("https://practicetestautomation.com/practice-test-login/");
            
        
        await driver.findElement(By.css("#username")).sendKeys(username);
        await driver.findElement(By.css("#password")).sendKeys(password);
        await driver.findElement(By.css("#submit")).click();
 
        //Verify the page title and print it
        assert((await driver.getCurrentUrl()).includes("logged-in-successfully"), "Correct webpage is displayed");

    } catch (e) {
        console.log("Error there was an error: ", e);
    }
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
}
 
successful_login()