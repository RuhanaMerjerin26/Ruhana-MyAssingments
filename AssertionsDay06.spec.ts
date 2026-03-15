import test, { expect } from "@playwright/test"


test("Test Assertions", async ({ page }) => {

    await page.goto('https://leafground.com/input.xhtml');
    const disabledTextbox = await expect(page.locator('xpath=//input[@placeholder="Disabled"]')).toBeDisabled();
    const enabledTextbox = await expect(page.locator('xpath=//input[@placeholder="Babu Manickam"]')).toBeEditable();
    await page.locator('xpath=//input[@placeholder="Babu Manickam"]').fill("Ruhana Merjerin");
    await expect.soft(page.locator('xpath=//input[@value="Chennai"]')).toBeDisabled({timeout:8000});
    await page.locator('xpath=//input[@value="Can you clear me, please?"]').clear();
    await page.locator('xpath=//input[@value="Can you clear me, please?"]').fill("Text cleared successfully");
})