const sampleTest = require('./sampleTest');
const { expect , assert } = require("chai");

// describe section : Feature
describe('Login', () => {
    // it-block : defines a testcase
    // it('Verify user can login with valid credentials', () => {
        
    //     const res = sampleTest.addNumbers(2,5);

    //     expect(res, "expect - addFunction does not work as expected").to.equal(7);
    //     assert.equal(res, 7, "assert - addFunction does not work as expected")

    //     expect(1===1, "fail the testcase").to.be.true;

    //     expect(1===2, "fail the testcase").to.be.false;

    // });

    it('Verify the page title', async () => {
        /**
         * To launch a webpage
         * function: url
         */
        await browser.url('https://www.facebook.com');

        /**
         * To pause the execution
         * function: pause
         */
        // await browser.pause(60000);

        /**
         * To get the page title
         * function: getTitle()
         */
        const pageTitle = await browser.getTitle();

        console.log('\nPage title');
        console.log(pageTitle);
        console.log('Page title\n');

        expectedPageTitle = 'Facebook – log in or sign up';
        expect(pageTitle, 'Facebook title is not as expected').to.equal(expectedPageTitle);       

    });

    it('Verify the correct url launches when we open a webpage', async () => {
        /**
         * Steps:
         *  1. Open webpage
         *  2. launch the webpage
         *  3. Verify opened url is equal to url we launched
         */

        // 1 and 2
        const launchUrl = 'https://www.facebook.com/';
        await browser.url(launchUrl);

        /**
         * To get the current url from webpage
         * function: getUrl()
         */
        const launchedUrl = await browser.getUrl();

        expect(launchedUrl, 'Correct url is NOT launched when we open a webpage').to.equal(launchUrl);

    });

    it.only('Misc functions from browser', async () => {
        const launchUrl = 'https://www.facebook.com/';
        await browser.url(launchUrl);

        /**
         * To get the windowHandle stored in browser-object
         * function: getWindowHandle()
         */
        const windowHandle = await browser.getWindowHandle();
        console.log('\nwindowHandle');
        console.log(windowHandle);
        console.log('windowHandle\n');

        await browser.pause(7000);

        /**
         * To go back in browser
         * function: back()
         */
        await browser.back();

        await browser.pause(7000);

        /**
         * To go forward in browser
         * function: forward()
         */
        await browser.forward();

        await browser.pause(7000);

        /**
         * To refresh a webpage
         * function: refresh()
         */
        await browser.refresh();

        /**
         * Other ways to refresh a webpage
         * 1. re-launch the url
         * 2. back() then forward()
         */
        await browser.pause(7000);

    });

});