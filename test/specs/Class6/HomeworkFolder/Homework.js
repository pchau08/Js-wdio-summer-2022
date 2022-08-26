const { expect } = require("chai");
const HomeworkDS = require ("./Darksky/DarkskyHomework");
const HomeworkFB = require ("./Facebook/FacebookHomework");
const HomeworkHotels = require ("./Hotels/HotelsHomework");



describe('Complete the automation using the POM design', () => {
    /**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

    it.only('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {
        const commandsDS = new HomeworkDS;
        await browser.url('https://www.hotels.com/');

        



         

        

       




    });
    
});

/**
 * Complete the automation using POM design
 */


/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */

/**
 * Tc-3:
 * https://www.facebook.com
 * 
 * Verify user gets error message when submit empty login form
 * expected error msg -> The email address or mobile number you entered isn't connected to an account.
 * 
 */

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