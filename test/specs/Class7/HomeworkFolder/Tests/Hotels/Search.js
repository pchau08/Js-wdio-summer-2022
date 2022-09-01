const Homepage = require("../../POM/Hotels/Homepage");

describe('Search Feature', () => {
    it('Verify search page shows correct user entry', async () => {
        const homepage = new Homepage();
        /**
         * Tc-5:
         * 
         * Verify destination and check-in and check-out dates are as user selected
         * 
         * 1. Launch hotels.com
         * 2. Type "man" in destination
         * 3. Select "Manila" from auto-suggestion
         * 4. Select Sep10 to Sep-25 as check-in and check-out respectively
         * 5. Click Search button
         * 6. Verify destination has Manila
         * 7. Verify check-in date in Sep-10
         * 8. Verify check-out date in Sep-25
         * 
         */

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');

        // 2. Type "man" in destination
        await homepage.enterDestination('man');

        // 3. Select "Manila" from auto-suggestion
        await homepage.selectDestinationFromAutoSuggestion('Manila')

        // 4. Select Sep10 to Sep-25 as check-in and check-out respectively
        await homepage.clickOnCalendarButton();

        await homepage.selectCheckInDate('December', '2022', '25');

        await homepage.selectCheckOutDate('January', '2023', '10');

        await homepage.clickOnDoneButton();

        await homepage.clickOnSearchButton();

        await browser.pause(5000);

    })
    it('Verify that disabled calendar dates are NOT enabled', async () => {
        const homepage = new Homepage();
            // 1. Launch hotels.com
            await browser.url('https://www.hotels.com/');

            // 2. Type "man" in destination
            await homepage.enterDestination('Man');
    
            // 3. Select "Manila" from auto-suggestion
            await homepage.selectDestinationFromAutoSuggestion('Manila')
    
            // 4. Select Sep10 to Sep-25 as check-in and check-out respectively
            await homepage.verifyDisabledDates();

            await browser.pause(5000);

           
    });

    /**
 * Tc-2:
 * 
 * Verify destination and check-in and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select tomorrow's date as check-in date (Aug-23)
 * 5. Select 5 days from check-in as check-out (Aug-28)
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date is tomorrow's date
 * 8. Verify check-out date in 5-days from check-in date
 * 
 */

    it.only('Verify destination and check-in and check-out dates are as user selected', async () => {
        const homepage = new Homepage();

        await browser.url('https://www.hotels.com/');
        await homepage.enterDestination('Man');
        await homepage.selectDestinationFromAutoSuggestion('Manila');
        await homepage.clickOnCalendarButton();
        await homepage.selectCheckInDate('August', '2022', '26');
        await homepage.selectCheckOutDate('August', '2022', '31');
        await homepage.clickOnDoneButton();
        await browser.pause(1000);
        await homepage.clickOnSearchButton();
        await browser.pause(2000);
        await homepage.verifyDestinationAfterSearch();
        await browser.pause(2000);
        await homepage.verifyCheckInAndCheckOut();

        await browser.pause(5000);
    });
});



