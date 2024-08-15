// const {test, expect} = require('@playwright/test')

// test.only('Browser context Playwright test', async ({browser})=>
// {
//     // chrome - plugin/ cookies
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     const userName = page.locator('#username');
//     const passWord = page.locator("[type='password']");
//     const signIn = page.locator("#signInBtn");
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());

// // css, xpath 
//     await userName.fill("rahulshetty");
//     await passWord.fill("learning");
//     await signIn.click();
//     const cardTitles = page.locator(".card-body a");

//     console.log(await page.locator("[style*='block']").textContent());
//     await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//     // to wipe out old username text
//     await userName.fill("");
//     await userName.fill("rahulshettyacademy");
//     await signIn.click();



//     // After login
//     console.log(await cardTitles.nth(0).textContent());
//     console.log(await cardTitles.first().textContent());
//     console.log(await cardTitles.nth(2).textContent());
//     console.log(await cardTitles.last().textContent());

// // Grab list of all product
// const allTitles = await cardTitles.allTextContents();
// console.log(allTitles);








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