// 6-24

const {test, expect} = require('@playwright/test')

test.only('Client App Login Demo', async ({page})=>
{
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anilkalshetti@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
// await page.locator(".card-body b").last().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    // Iterate v 6-25
    const count = await products.count()
    for(const i = 0; i < count ; ++i)
    {
        if( await products.nth(i).locator("b").textContent() === productName)
        {
            // add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    // Assertions v 6-26

    // <button _ngcontent-rso-c33="" routerlink="/dashboard/cart" class="btn btn-custom" style="margin-top: -10px;" tabindex="0"><i _ngcontent-rso-c33="" class="fa fa-shopping-cart"></i>&nbsp; Cart <label _ngcontent-rso-c33="" style="background-color: #96161f; border-radius: 2px; color: white; padding-left: 7px; padding-right: 7px;">1</label></button>
    // click on My Cart button
    await page.locator("[routerlink*=cart]").click();

    // 2  so waiting till li comes - page loads properly- sync issue solved - if 1 element loaded, so page loaded
    await page.locator("div li").first().waitFor();

        // 1Auto- waiting- not available for isVisible
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();


    // click on button Checkout
    await page.locator("text=Checkout").click();
    // button[type="button"] . last()
    await page.pause();

});

