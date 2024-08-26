// 6-24

const {test, expect} = require('@playwright/test')

test.only('Client App Login Demo', async ({page})=>
{
    const email = "anilkalshetti@gmail.com";
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
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
    // click on Cart button
    await page.locator("[routerlink*=cart]").click();

    // 2  so waiting till li comes - page loads properly- sync issue solved - if 1 element loaded, so page loaded
    await page.locator("div li").first().waitFor();

        // 1Auto- waiting- not available for isVisible  -    (sudo class - :has-text()  )
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();


    // click on button Checkout
    await page.locator("text=Checkout").click();
    // button[type="button"] . last()

    // select country dropdown- enter ind keyword sequentially,
    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    // in dropdown click on button
    const optionsCount = await dropdown.locator("button").count();

    for(let i = 0; i < optionsCount ; ++i)
        {
             const text = await dropdown.locator("button").nth(i).textContent();
            

            if( text === " India")
            {
                // click on India
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }

        // to check if 1st displayed email id same as login email id
    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

// Fill 1st column fields
        // credit card number
        await page.locator("input[value='4542 9931 9292 2293']").fill(" ");
        await page.locator("input[value='4542 9931 9292 2293']").fill("4542 9931 9292 2222");

        // cvv
        // await page.locator("body > app-root:nth-child(1) > app-order:nth-child(2) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)").fill("453");

        await page.locator("(//input[@type='text'])[3]").fill("Anil");

        await page.locator("input[name='coupon']").fill("rahulshettyacademy");


        // click on button "PLACE ORDER"
       await page.locator(".action__submit").click();




       expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
   await page.pause();

});