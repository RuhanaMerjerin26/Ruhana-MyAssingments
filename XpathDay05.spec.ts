import {test} from "@playwright/test";

test(`Test to login Salesforce`, async ({ page }) =>  {

    await page.goto("https://login.salesforce.com/");
    await page.locator('xpath=//input[@name="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('xpath=//input[@type="password" and contains(@class,"password")]').fill("TestLeaf@2025");
})

test(`Test to handle dropdowns`, async ({ page }) =>  {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('xpath=//input[@name="USERNAME"]').fill("demosalesmanager");
    await page.locator('xpath=//input[@name="PASSWORD"]').fill("crmsfa");
    await page.locator('xpath=//input[@class="decorativeSubmit"]').click();
    await page.locator('xpath=//a[contains(text(),"CRM")]').click();
    await page.locator('xpath=//a[text()="Leads"]').click();
    await page.locator('xpath=//a[text()="Create Lead"]').click();
    await page.locator('xpath=//input[@id="createLeadForm_companyName"]').fill("Testing");
    await page.locator('xpath=//input[@id="createLeadForm_firstName"]').fill("Ruhana");
    await page.locator('xpath=//input[@id="createLeadForm_lastName"]').fill("MR");
    // await page.selectOption('xpath=//select[@id="createLeadForm_industryEnumId"]',{value :"IND_AEROSPACE"})
    // await page.selectOption('xpath=//select[@id="createLeadForm_industryEnumId"]',{label :"Aerospace"})
    let dropdownValues = await page.locator('xpath=//select[@id="createLeadForm_industryEnumId"]//option').allInnerTexts();
    //console.log(dropdownValues)
    console.log("The dropdown options are : ")
    for (let i of dropdownValues) {
        console.log(i)
    }
})