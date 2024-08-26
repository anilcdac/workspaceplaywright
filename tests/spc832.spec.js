import { test, expect } from '@playwright/test';

test('Playwright Special Locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Admin@123");
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name: "Shop"}).click();
    
    // instead for each- here it applies getByText, using filter
    // getByRole("button") - no need to give button name, as single button
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
    
    await page.pause()


});
