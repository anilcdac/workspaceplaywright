const {test,expect} = require('@playwright/test')

test("Popup validations", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();

    // to check textbox with value Hide/Show example visible
    await expect(page.locator("#displayed-text")).toBeVisible();

    await page.locator("#hide-textbox").click();

    await expect(page.locator("#displayed-text")).toBeHidden();

    // switch to alert example
    page.on('dialog',dialog => dialog.accept());
    // page.on('dialog',dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();


    // hover
    await page.locator("#mousehover").hover();


    


})