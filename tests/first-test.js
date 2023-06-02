const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function first_test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        var searchString = "Automated Search String";
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://duckduckgo.com");
            
        
        await driver.findElement(By.id("searchbox_input")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

    } catch (e) {
        //It is always a safe practice to quit the browser after execution
        //await driver.quit();
        console.log("Error there was an error: ", e);
    }
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
}
 
first_test()