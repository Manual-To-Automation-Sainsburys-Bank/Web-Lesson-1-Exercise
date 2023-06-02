const {By,Key,Builder,until} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");
 
async function successful_login() {
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var username = "wrongstudent";
        var password = "Password123";
 
        await driver.get("https://practicetestautomation.com/practice-test-login/");
            
        
        await driver.findElement(By.css("#username")).sendKeys(username);
        await driver.findElement(By.css("#password")).sendKeys(password);
        await driver.findElement(By.css("#submit")).click();

        console.log("d");

        await new Promise(res => setTimeout(res, 3000));
 
        //Verify the page title and print it
        let errorElementText = await driver.wait(until.elementLocated(By.css('#error')),10000).getText();
        console.log(errorElementText);

        console.log("d");
        assert(errorElementText.includes("username is invalid"));
        

    } catch (e) {
        console.log("Error there was an error: ", e);
    }
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
    
}
 
successful_login()