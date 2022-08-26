const { expect } = require('chai');
const Homepage = require('../../POM/Facebook/Homepage');
const Messengerpage = require('../../POM/Facebook/Messengerpage')

describe('Facebook Homework', () => {

    it('Verify user gets error message when submit empty login form', async () => {/**
    * Tc-3:
    * https://www.facebook.com
    * 
    * Verify user gets error message when submit empty login form
    * expected error msg -> The email address or mobile number you entered isn't connected to an account.
    * 
    */

    const hPage = new Homepage();
    const mPage = new Messengerpage();
    
    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com/');

    await hPage.clickLoginButton();

    await browser.pause(2000);

    await expect(hPage.getTextLoginError, 'Error message is NOT displayed when logging in without user credentials').to.equal(hPage.getTextLoginError);

    await browser.pause(2000);

    });

    it.only('Verify empty messenger login flow', async () => {
        /**
 * Tc-4:
 * https://www.facebook.com
 * 
 * Verify empty messenger login flow
 * 1. Click Messenger
 * 2. Verify 'Keep me signed in' is not selected
 * 3. Click 'Log In' button
 * 4. Verify link -> "Find your account and log in" is displayed
 * 5. Verify 'Continue' button is enabled
 * 6. Verify 'Keep me signed in' is not selected
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 * 
 */

         const hPage = new Homepage();
         const mPage = new Messengerpage();
    
         // 1. Launch facebook.com
         await browser.url('https://www.facebook.com/');

         await hPage.clickMessenger();

         await mPage.login();

         await mPage.keepMeSignedErrorMsg();

         await mPage.loginButtonIsEnabled();

         await mPage.keepMeSignedInEnabled()

         await mPage.clickKeepMeSignedInButton();

         await browser.pause(5000);

         await mPage.verifyCheckboxSelected();
         
    

         
    });

});






