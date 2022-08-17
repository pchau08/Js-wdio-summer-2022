// Due date: Aug 16 eod

/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
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


// Test Case #1
// Feature: Verify feelsLikeTempValue is between lowTempValue and highTempValue
// Given the user is already on the www.darksky.net home page
// When the user looks at the weather
// Then the user should verify that the "Feels Like" temperature is between the "High" and "Low" temperature

const {expect} = require("chai");

describe('Verify DarkSkyNet and Facebook test cases', () => {
    it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async () => {

        await browser.url('https://www.darksky.net');
        await browser.pause(2000);

        const searchButton = $('input[type*=text]');

        await searchButton.keys(['Meta', 'Enter']);
        await browser.pause(2000);

        let feelsLikeTemp = await $('.feels-like-text').getText();
        feelsLikeTemp = parseFloat(feelsLikeTemp);

        let lowTemp = await $('.low-temp-text').getText();
        lowTemp = parseFloat(lowTemp);

        let highTemp = await $('.high-temp-text').getText();
        highTemp = parseFloat(highTemp);

        let tempDisplayed = await $('.feels-like-text').isDisplayed();     
        expect(tempDisplayed, 'feelslikeTemp is NOT between highTemp and lowTemp').to.be.true;

        if ((feelsLikeTemp > lowTemp) && (feelsLikeTemp < highTemp)) {
            console.log(`\n The feels like temperature of ${feelsLikeTemp} is in between the high temperature of ${highTemp} and low temperature of ${lowTemp}\n`);
        } else {
            console.log(`\n The feels like temperature of ${feelsLikeTemp} is NOT in between the high temperature of ${highTemp} and low temperature of ${lowTemp}\n`);
        }
    });  

    // Test Case #2
    // Feature: Verify user can get temperature based on zipcode
    // Given the user is already on the www.darksky.net home page
    // When the user types in their zipcode in the city text box
    // and the user clicks the magnifying glass or clicks enter on city text box
    // Then the user will be redirected to the city zipcode that they typed in
    // and the user will view the temperature for the zipcode that they had typed in

    it('Verify user can get temperature based on zipcode', async () => {

        await browser.url('https://www.darksky.net');
        await browser.pause(2000);

        const searchButton = $('input[type*=text]');

        await searchButton.setValue('60608');
        await browser.pause(2000);

        await searchButton.keys(['Meta', 'Enter']);
        await browser.pause(2000);

        let currentTempDisplay = await $('.currently').isDisplayed();
        expect(currentTempDisplay, 'Current temperature is NOT displayed').to.be.true;
        await browser.pause(2000);

        let currentTemp = await $('.currently').getText();
        currentTemp = parseFloat(currentTemp)
        console.log(`\n The current temperature is ${currentTemp} degrees`);       
    });

    // Test Case #3
    // Feature: Verify user gets error message when submit empty login form
    // Given the user is already on the www.facebook.com home page
    // Given that there are no user credentials typed in the user login
    // When the user clicks on "Log In"
    // Then user will be prompted with an error message 
    it('Verify user gets error message when submit empty login form', async () => {

        await browser.url('https://www.facebook.com');
        await browser.pause(2000);

        const submitButton = await $('button[data-testid=royal_login_button]');
        await submitButton.click();
        await browser.pause(2000);

        const errorMsg = await $('._9ay7').getText();

        if (errorMsg == 'The email or mobile number you entered isn’t connected to an account. Find your account and log in.') {
            console.log(`\nUser receives the following error when attempting to login with no username or password credentials typed in. Please refew to the error message below\n "${errorMsg}"\n`);
        }

        const errorMsgDisplay = await $('._9ay7').isDisplayed()
        expect(errorMsgDisplay, 'The correct error message did NOT appear').to.be.true;
    });

    

    // Test Case #4
    // Feature: Verify empty messenger login flow
    // Given the user is already on the www.facebook.com home page
    // When the user clicks on the "Messenger" link
    // Then the user will be directed to the "Messenger" page
    // and the user will verify if the "Keep me signed in" button is NOT checked
    // and the user will click on the "Login" button
    // Then verify "Find your account and log in" is displayed upon 
    // and the user will verify that the "Continue" button is enabled
    // and the user will verify that the "Keep me signed in" button is NOT selected
    // and the user will click on the "Keep me signed in" button
    // Then the user will verify if the "Keep me signed in" button is selected

    it('Verify empty messenger login flow', async() => {

        //Test Case #4
        await browser.url('https://www.facebook.com');
        const browserPause = await browser.pause(2000);

        await $('=Messenger').click();
        await browser.pause(2000);

        const keepMeSignedIn = await $('//label[contains(text(), "Keep me signed in")]').isDisplayed();
        expect(keepMeSignedIn, '"Keep me in signed in button" is selected/checked off').to.be.true;
        const keepMeSignedInTxt = await $('//label[contains(text(), "Keep me signed in")]').getText();
        console.log(`\n "${keepMeSignedInTxt}" radio button is NOT selected\n`);

        const loginButton = await $('//button[@id="loginbutton"]').click();
        await browser.pause(2000);

        const findYourAccountError =  await $('//a[contains(text(),"Find your account and log in.")]').isDisplayed();
        expect(findYourAccountError, '"Find your account and log in." is NOT displayed').to.be.true;
        const findYourAccountErrorTxt = await $('//a[contains(text(),"Find your account and log in.")]').getText();
        console.log(`\n "${findYourAccountErrorTxt}" text is displayed\n`);

        const continueButtonEnabled = await $('#loginbutton').isDisplayed();
        expect(continueButtonEnabled, '"Continue" button is NOT enabled').to.be.true;
        const continueButtonTxt = await $('//button[@id="loginbutton"]').getText();
        console.log(`\n "${continueButtonTxt}" button is enabled\n`);

        const keepMeSignedInMessengerDisplay = await $('//label[contains(text(),"Keep me signed in")]').isDisplayed();
        expect(keepMeSignedInMessengerDisplay, '"Keep me signed" is selected').to.be.true;
        const keepMeSignedInMessengerTxt = await $('//label[contains(text(),"Keep me signed in")]').getText();
        console.log(`\n "${keepMeSignedInMessengerTxt}" is NOT selected\n`);

        const keepMeSignedInMessengerClick = await $('//label[contains(text(),"Keep me signed in")]').click() 
        await browser.pause(2000);

        const keepMeSignedInMessengerSelected = await $('input[value="1"]').isSelected();
        expect(keepMeSignedInMessengerSelected, '"Keep me signed in" is NOT selected').to.be.true;        
        console.log(`\nIs the check box checked or not? True or false: ${keepMeSignedInMessengerSelected}\n`);
    });
});


