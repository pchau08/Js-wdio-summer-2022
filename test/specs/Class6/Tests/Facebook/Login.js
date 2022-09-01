const { expect } = require('chai');
const Homepage = require('../../POM/Facebook/Homepage');

describe('POM Demo', () => {
    it('Verify user can login', async () => {

        const hPage = new Homepage();

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
        // const loginEmail = await $('//input[@aria-label="Email address or phone number"]');
        // await loginEmail.setValue('abcd@test.com');
        await hPage.enterLoginEmail('abcd@test.com')

        await browser.pause(2000);

        // 3. enter password
        // const loginPwd = await $('//input[@data-testid="royal_pass"]');
        // await loginPwd.setValue("abcd@1234");
        await hPage.enterLoginPassword('abcd@1234');

        await browser.pause(2000);

        // 4. click login button
        // const loginButton = await $('//button[text()="Log In"]');
        // await loginButton.click();
        await hPage.clickLoginButton();

        await browser.pause(20000);

    });

    it.only('Verify user can login - using POM', async () => {

        const hPage = new Homepage();
        /**
         * 1. Launch facebook.com
         * 2. enter username
         * 3. enter password
         * 4. click login button
         * 
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // await browser.pause(2000);
        // await hPage.enterLoginEmail('abcd@test.com')

        // await browser.pause(2000);
        // await hPage.enterLoginPassword('abcd@1234');

        // await browser.pause(2000);
        // await hPage.clickLoginButton();


        hPage.login('abcd@test.com', 'abcd@1234');

        await browser.pause(20000);

    });

    it('Verify login fields are enabled by default', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify loginEmail is enabled
         * 3. Verify loginPassword is enabled
         * 4. Verify loginButton is enabled
         */
        const hPage = new Homepage();

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Verify loginEmail is enabled
        // expect(await hPage.isLoginEmailFieldEnabled(), 'Login email field is NOT enabled').to.be.true;
        expect(await hPage.isLoginFieldEnabled('username'), 'Login email field is NOT enabled').to.be.true;

        // 3. Verify loginEmail is enabled
        // expect(await hPage.isLoginPwdFieldEnabled(), 'Login password field is NOT enabled').to.be.true;
        expect(await hPage.isLoginFieldEnabled('password'), 'Login password field is NOT enabled').to.be.true;
        
        // 4. Verify loginEmail is enabled
        // expect(await hPage.isLoginBtnEnabled(), 'Login button is NOT enabled').to.be.true;
        expect(await hPage.isLoginFieldEnabled('button'), 'Login button is NOT enabled').to.be.true;

    });

});