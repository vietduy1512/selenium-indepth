const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to Url
        await driver.get('https://www.google.com');

        await driver.findElement(By.name('q')).sendKeys('Dota', Key.ENTER);

        let firstResult = await driver.wait(until.elementLocated(By.css('.r a')), 10000);

        firstResult.click();
        console.log(firstResult);
        console.log(await firstResult.getAttribute('textContent'));
    }
    finally{
        //driver.quit();
    }
};

example();