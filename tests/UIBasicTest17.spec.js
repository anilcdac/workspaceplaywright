// 5-17  Handling static Select Dropdown options 

const {test, expect} = require('@playwright/test')

test.only('UI Controls', async ({page})=>
{

   
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");    
    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control")
    const documentLink = page.locator("[href*='documents-request']");

    // dropdown
    await dropdown.selectOption("consult");

    // radio button
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();

    // assertion
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked(); 

    // await page.pause();

    // checkbox 5-18
    await page.locator("#terms").click();
    console.log(await page.locator("#terms").isChecked());
    await expect(page.locator("#terms")).toBeChecked(); // assertion
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();

    // await page.pause();


    // 5-19 - blinking text
    await expect(documentLink).toHaveAttribute("class","blinkingText");





    
});