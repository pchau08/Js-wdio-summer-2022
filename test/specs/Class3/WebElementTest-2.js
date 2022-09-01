const { expect } = require("chai");

describe('Locator strategies part - 2', () => {
    it('Verify login button default state', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify Log In button is enabled
         * 3. Click on log In button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify Log In button is enabled
        const loginBtn = await $('button[name*=gin]');
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        expect(isLoginBtnEnabled, 'Log In button is NOT enabled').to.be.true;

        // 3. Click on log In button
        await loginBtn.click();

        await browser.pause(15000);
    });

    it('Verify copy on login button is "Log In"', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify login button has text "Log In"
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify login button has text "Log In"
        /*
            find the webElement
            the text of webElement should be "Log In"
        */
       const loginButton = await $('button[data-testid*=l_l]');
       const loginBtnText = await loginButton.getText();
       expect(loginBtnText, 'Login In button text is NOT as expected').to.equal('Log In');

       await browser.pause(5000);

    });

    it('Verify text on empty emailInput box is "Email address or phone number"', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify copy in empty emailInput box is "Email address or phone number"
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify copy in empty emailInput box is "Email address or phone number"
        /*
            find the webElement
            the value of placeholder-attribute should be "Email address or phone number"
        */
       const emailInputBox = await $('input[aria-label*=Email]');
       const copyInEmptyEmailInputBox = await emailInputBox.getAttribute('placeholder');

       expect(copyInEmptyEmailInputBox, 'Text in empty email input box is NOT as expected').to.equal('Email address or phone number');


    });

    it.only('Verify copy on login button is "Log In" - using tagName to find element', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify login button has text "Log In"
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify login button has text "Log In"
        /*
            find the webElement
            the text of webElement should be "Log In"
        */
       const loginButton = await $('<button>');
       const loginBtnText = await loginButton.getText();
       expect(loginBtnText, 'Login In button text is NOT as expected').to.equal('Log In');

       await browser.pause(5000);

    });

    it('Verify none of the gender buttons is selected', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click 'Create New Account' button
         * 3. Verify female radio button is not selected
         * 4. if female button is not selected, click female radio button
         * 5. Verify female radio button is selected
         * 6. Verify male radio button is not selected
         * 7. Verify custom radio button is not selected
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click 'Create New Account' button
        // const createNewAccountBtn = await $('=Create New Account');
        // await createNewAccountBtn.click();
        await $('=Create New Account').click();

        await browser.pause(2000);

        // 3. Verify female radio button is not selected
        const fRadioButton = await $('input[value="1"]');
        const isFGenderSelected = await fRadioButton.isSelected();
        expect(isFGenderSelected, 'Female radio button is selected').to.be.false;

        // 4. if female button is not selected, click female radio button
        if (!isFGenderSelected) {
            await fRadioButton.click();
        }

        await browser.pause(2000);

        const isFGenderSelected_afterClick = await $('input[value="1"]').isSelected();
        expect(isFGenderSelected_afterClick, 'Female radio button is NOT selected').to.be.true;
    });



});