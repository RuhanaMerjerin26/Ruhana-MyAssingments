import path from "path/win32";
import {test} from "playwright/test"

// test("Handling Window", async ({page, context}) => {

//     await page.goto(`https://www.flipkart.com/`);
//     const searchbox = page.locator(`[placeholder="Search for Products, Brands and More"]`).first();
//     await searchbox.fill("Kechaoda A26");
//     await searchbox.press("Enter");
    
//     const newpage = context.waitForEvent("page")

//     await page.locator(`//a[contains(@href,"kechaoda-a26-pink")]`).click();
//     const childPage = await newpage;
//     await childPage.waitForLoadState();
//     const phonePrice = await childPage.locator(`//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]`).textContent();
//     console.log("Price : " + phonePrice);
// })

test ("Upload File", async ({page}) => {
    await page.goto(`https://leafground.com/file.xhtml;jsessionid=node0qmdifo8brour1457q9ij2a2it14242458.node0`);

    const filePromise = page.waitForEvent("filechooser");
    await page.locator(`//span[contains(@class,"fileupload-choose")]`).click();
    const fileUpload = await filePromise
    await fileUpload.setFiles([path.join(__dirname,`../TestData/download.jpg`), path.join(__dirname,`../TestData/download1.png`)])
    
})