const { expect } = require("chai");

describe('Locator strategies part - 3', () => {
   it('Verify user can login', async () => {
        /**
         * 1. Launch facebook.com
         * 2. enter username
         * 3. enter password
         * 4. click login button
         * 
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        // 2. enter username
        const loginEmail = await $('//input[@name="email"]');
        await loginEmail.setValue('abcd@test.com');

        await browser.pause(2000);

        // 3. enter password
        const loginPwd = await $('//input[@data-testid="royal_pass"]');
        await loginPwd.setValue("abcd@1234");

        await browser.pause(2000);

        // 4. click login button
        const loginButton = await $('//button[text()="Log In"]');
        await loginButton.click();

        await browser.pause(20000);

   });

   
   it('Verify user can login - using partial attr-and-text value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. enter username
         * 3. enter password
         * 4. click login button
         * 
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        // 2. enter username
        const loginEmail = await $('//input[contains(@data-testid, "al_e")]');
        await loginEmail.setValue('abcd@test.com');

        await browser.pause(2000);

        // 3. enter password
        const loginPwd = await $('//input[contains(@placeholder, "sword")]');
        await loginPwd.setValue("abcd@1234");

        await browser.pause(2000);

        // 4. click login button
        const loginButton = await $('//button[contains(text(), "g In")] ');
        await loginButton.click();

        await browser.pause(20000);

   });


   it('Print all weather data point in console. - darksky', async () => {
        /**
         * 1. Launch darksky.net
         * 2. print all data points
         */
        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');

        await browser.pause(3000);

        // 2. print all data points
        const windSpeed = await $('//span[contains(@class , "wind__speed")]').getText();
        console.log(`Wind speed : ${windSpeed}`);

        await browser.pause(5000);

   });
});