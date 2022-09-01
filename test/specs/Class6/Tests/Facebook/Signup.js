const Homepage = require("../POM/Facebook/Homepage");
const SignUpPage = require("../POM/Facebook/SignUpPage");

describe('Sign Up', () => {
    it('Select Nov 12 1990 as birth date', async () => {

        const hPage = new Homepage();
        const suPage = new SignUpPage();

        /**
         * 1. Launch facebook
         * 2. Click on Create New Account
         * 3. Select month as Nov
         * 4. Select date as 12
         * 5. Select year as 1990
         */
        // 1. Launch facebook
        await browser.url('/');

        // 2. Click on Create New Account
        await hPage.clickCreateNewAccount();

        // 3. Select month as Nov
        // 4. Select date as 12
        // 5. Select year as 1990 
        // await suPage.selectBirthDate('12', 'Nov', '1990');

        await suPage.selectBirthDate('12 nOv 1990');

        await browser.pause(10000);

    });
});