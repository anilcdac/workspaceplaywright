// 4-15

const {test, expect} = require('@playwright/test')

test.only('Browser context-validating error login', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());

// css, xpath 
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();

// Grab list of all product

await page.waitForLoadState('networkidle');
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

});

