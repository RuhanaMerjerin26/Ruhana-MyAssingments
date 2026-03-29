import test from "playwright/test";
import credentials from "../TestData/TestData.json";
import {parse} from "csv-parse/sync";
import fs from "fs";

test.describe.serial("Advance Features - json", async () => {

    for (let data of credentials) {
        test(`Test to read json file - ${data.TcaseId}`, async ({page}) => {

            await page.goto(`https://login.salesforce.com/?locale=in`);
            await page.locator(`[id="username"]`).fill(data.Username);
            await page.locator(`[id="password"]`).fill(data.Password);
            await page.locator(`[id="Login"]`).click();
            await page.waitForLoadState();
            console.log("Logged in with " + data.Username);

        })
    }
})

let records = parse(fs.readFileSync("TestData/csvData.csv"),{columns:true, skip_empty_lines:true})

test.describe.serial("Advance Features - CSV", async () => {

    for (let data1 of records) {
        test (`Test to read csv file - ${(data1 as any).tcid}`, async ({page}) => {

            await page.goto(`https://login.salesforce.com/?locale=in`);
            await page.locator(`[id="username"]`).fill((data1 as any).username);
            await page.locator(`[id="password"]`).fill((data1 as any).password);
            await page.locator(`[id="Login"]`).click();
            await page.waitForLoadState();
            console.log("Logged in with " + (data1 as any).username);
        })
    }
})