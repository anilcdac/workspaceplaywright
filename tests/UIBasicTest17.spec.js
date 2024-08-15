// 5-17  Handling static Select Dropdown options 

const {test, expect} = require('@playwright/test')

test('UI Controls', async ({page})=>
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


test.only('Child Window Handle', async ({browser})=>
    {
        //     // chrome - plugin/ cookies
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");    
        const documentLink = page.locator("[href*='documents-request']");


        // const page2 = context.waitForEvent('page'); //listen for any new page - promise (Pending/ Rejected/ Fulfilled)
        
        
        const [newPage] = await Promise.all(
        [
        context.waitForEvent('page'), //listen for any new page - promise (Pending/ Rejected/ Fulfilled)
        documentLink.click()  // new page is opening
        ]
        )

        // if 2 windows open -        const [newPage, newPage2] = await Promise.all(
        
        // newPage-  New Tab- child window
        const text = await newPage.locator(".red").textContent();
        console.log(text);
        
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0];
        console.log(domain);
    

        // Parent window- page
        await page.locator("#username").fill(domain);
        // await page.pause();
        console.log(await page.locator("#username").textContent());

    }
);