const { expect } = require("chai");

describe('Verify login form', () => {

    it('Verify Email and password fields', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify email text box is enabled
         * 3. verify password text box is enabled
         * 4. Enter "deepak@abcd.com" in email
         * 5. Verify "abcd@1234" as password
         * 
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        // 2. Verify email text box is enabled
        const emailInputBox = await $('#email');
        const isEmailInputEnabled = await emailInputBox.isEnabled();
        expect(isEmailInputEnabled, 'Email input box is NOT enabled').to.be.true;

        // 3. verify password text box is enabled
        const pwdInputBox = await $('#pass');
        const isPwdInputEnabled = await pwdInputBox.isEnabled();
        expect(isPwdInputEnabled, 'Password input box is NOT enabled').to.be.true;

        // 4. Enter "deepak@abcd.com" in email
        await emailInputBox.setValue('deepak@abcd.com');

        await browser.pause(2000);

        // 5. Verify "abcd@1234" as password
        await pwdInputBox.setValue('abcd@1234');

        await browser.pause(10000);
    });

    it('Verify login button default state', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify Log In button is enabled
         * 3. Click on log In button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify Log In button is enabled
        const loginBtn = await $('button[data-testid=royal_login_button]');
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        expect(isLoginBtnEnabled, 'Log In button is NOT enabled').to.be.true;

        // 3. Click on log In button
        await loginBtn.click();

        await browser.pause(15000);

    });

    it('Verify Create New Account default state', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify Create New Account button is displayed
         * 3. Click Create New Account button
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Verify Create New Account button is displayed
        // link text
        // const createNewAccountBtn = await $('=Create New Account');
        
        // partial link text
        const createNewAccountBtn = await $('*=ccou');
        
        const isCreateNewAccountDisplayed = await createNewAccountBtn.isDisplayed();
        expect(isCreateNewAccountDisplayed, 'Create New Account button is NOT displayed').to.be.true;

        // 3. Click Create New Account button
        await createNewAccountBtn.click();

        await browser.pause(10000);

    });    
});