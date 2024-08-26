const {test,expect} = require("@playwright/test");

test("Calendar Validations",async({page})=>
{
    const monthNumber = "6";
    const date = "15";
    const year = "2027";

    const expectedList = [monthNumber, date, year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByText(year).click();

    // casting monthNumber
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();

    // multiple 15, so cant use getByText
    await page.locator("//abbr[text()='"+date+"']").click();

// assertion
    const inputs = await page.locator(".react-date-picker__inputGroup__input");
    for(let index = 0; index < inputs.length; index++)
    {
        const value = inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }



})