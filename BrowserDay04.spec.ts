import { chromium, firefox, test, webkit } from "@playwright/test"; 

// test(`Test to launch a Firefox browser`, async () =>  {


//     const browser =await firefox.launch() 
//     const context =await browser.newContext() 
//     const page    =await context.newPage() 
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000)
//     let pageTitle = page.url();
//     console.log(pageTitle)


//  })
//  test(`Test to launch a Webkitfox browser`, async () =>  {


//     const browser =await webkit.launch() 
//     const context =await browser.newContext() 
//     const page    =await context.newPage() 
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000)
//     let pageTitle = page.url();
//     console.log(pageTitle)


//  })

test(`Test to launch salesforce page`, async () => {

    const browser = await chromium.launch()
    const context =  await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();
    let verifyElementPresent = await page.locator(".viewport").innerText();
    console.log(verifyElementPresent)

})