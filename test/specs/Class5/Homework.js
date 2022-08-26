// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */

/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 * 
 */
    const { expect } = require("chai");

    describe('DarkSky.net Timeline and Hotels.com check-in/check-out', () => {
    it('Verify timeline data in Darksky.net and print an array in the console', async () => {

        await browser.url('https://www.darksky.net/');
        await browser.pause(2000)

        let timeLine = []
        let i=0;

        const allHourlyTemp = await $$('//span[contains(text(),"°")]');

        for (const hourlyTempTimeLine of allHourlyTemp){
            timeLine[i] = await hourlyTempTimeLine.getText()
             i++;
        }
        console.log(timeLine);
    });
    /**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 * 
 */

    it.only('Verify destination and check-in/ and check-out dates are as user selected', async () => {

        await browser.url('https://www.hotels.com/')
        await browser.pause(2000);

        await $('//button[contains(@aria-label, "Going to")]').click();
        await browser.pause(2000);

        await $('//input[@id="destination_form_field"]').setValue('man');
        await browser.pause(2000);

        // const manilaClick = await $("//div[contains(text(),'National Capital Region, Philippines')]").click();

        const autoSuggestionElements = await $$("//div[@class='truncate']//strong");

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }

        await browser.pause(5000);
        await $('#date_form_field-btn').click();


        await browser.pause(2000);
        const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allAugDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("20") === 0) {
                await dateElement.click();
                break;
            }
        }
        

        const allSepDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allSepDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("5") === 0) {
                await dateElement.click();
                break;
            }
        }

        await browser.pause(5000);


    
    });
    
});

