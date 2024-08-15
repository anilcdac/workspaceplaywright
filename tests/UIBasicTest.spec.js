// const {test, expect} = require('@playwright/test')

// test.only('Browser context Playwright test', async ({browser})=>
// {
//     // chrome - plugin/ cookies
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());

// // css, xpath 
//     await page.locator('#username').fill("rahulshetty");
//     await page.locator("[type='password']").fill("learning");

//     await page.locator("#signInBtn").click();

//     console.log(await page.locator("[style*='block']").textContent());
//     await expect(page.locator("[style*='block']")).toContainText('Incorrect');


// });





// test('Page Playwright test', async ({page})=>
//     {
//         await page.goto("https://www.google.com");
//         // get title
//         await page.title();

//         // to print title of page in output
//         console.log(await page.title());
//         await expect(page).toHaveTitle("Google");


    
//     });