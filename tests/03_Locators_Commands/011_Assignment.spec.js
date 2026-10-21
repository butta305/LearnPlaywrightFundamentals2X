
import {test,expect} from '@playwright/test'

test('Verify and find the xpath for herokuapp',async ({page}) =>{
    test.setTimeout(60000);
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

     let make_appointment=page.locator("//a[@id='btn-make-appointment']");
     await make_appointment.click();

     let user_name = page.locator("//input[@id='txt-username']");
     await user_name.fill("John Doe");

     let password = page.locator("//input[@id='txt-password']");
     await password.fill("ThisIsNotAPassword");

     let login_button = page.locator("//button[@id='btn-login']");
     await login_button.click();

     //page.locator("//select[@id='combo_facility']").selectOption("Hongkong CURA Healthcare Center");

     let facility = page.locator("//select[@id='combo_facility']");
     await facility.selectOption({
    label: "Hongkong CURA Healthcare Center"
    });

     await page.locator("//input[@id='chk_hospotal_readmission']").check();

     let healthcare_program = page.locator("//input[@id='radio_program_medicaid']");
     await healthcare_program.check();

     const visitDate = page.locator('#txt_visit_date');
     await visitDate.click();
     await visitDate.pressSequentially("08/09/2026");
     await page.keyboard.press("Tab");   

     let comment = page.locator("//textarea[@id='txt_comment']");
     await comment.fill("This for Testing purpose");

     let book_appointment = page.locator("//button[@id='btn-book-appointment']");
     await book_appointment.click();
     console.log(page.url());
     
     let confirmation_message = page.locator("//h2[text()='Appointment Confirmation']");
     await expect(confirmation_message).toBeVisible();
     
     //await page.waitForTimeout(3000);
});