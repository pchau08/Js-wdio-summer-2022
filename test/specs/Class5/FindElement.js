const { expect } = require("chai");

describe('Find Elements scenarios', () => {
    it.only('Getting multiple webElements', async () => {
        /**
         * Launch darksky.net
         * get all temp values
         */

        await browser.url('https://www.darksky.net/');

        await browser.pause(2000);

        const allTempElements = await $$('//span[contains(@class, "-text")]').getText();

        for (const tempElement of allTempElements) {
            console.log(await tempElement.getText());
        }

    })

    it('Verify the number of links of facebook-homepage is 46', async () => {
        /**
         * Launch facebook.com
         * Find all link-elements using a-tag
         * verify array-length should 46
         */
        await browser.url('https://www.facebook.com/');

        await browser.pause(2000);

        const linkElements = await $$('<a>');

        expect(linkElements.length, 'Number of links on facebook homepage is NOT as expected').to.equal(46);

    })

    it.only('Pick value from Auto-suggestion', async () => {
        /**
         * Launch hotels.com
         * Type 'New' in going to
         * Select 'Manhattan' from auto-suggestion
         */
        await browser.url('https://www.hotels.com/');

        await browser.pause(2000);

        await $("//button[@aria-label='Going to']").click();

        await browser.pause(2000);

        await $('#destination_form_field').setValue('New');

        await browser.pause(2000);

        /**
         * 1. Analyze if the auto-suggestions data are present as text-value or some-attribute's value in the dom
         * 2. Create a locator to get all auto-suggestion-elements
         * 3. use $$(findElements) to get all auto-suggestion-elements in an array
         * 4. use loop (for-of)
         *      pick an auto-suggestion-element from array
         *      apply getText or getAttribute on auto-suggestion-element (depending on step-1)
         *      if (above-value is equals to the value-user-wants-to-click)
         *          click auto-suggestion-element
         *          break;
         */
        const autoSuggestionElements = await $$("//div[@class='truncate']//strong");

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('manhattaN'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }

        await browser.pause(20000);


    });

    it('Select Aug-20 as checking date and Sep-4 as checkout date', async () => {
        await browser.url('https://www.hotels.com/');

        await browser.pause(2000);

        await $('#date_form_field-btn').click();

        await browser.pause(2000);

        /**
         * 1. Analyze if the date-values are present as text-value or some-attribute's value in the dom
         * 2. Create a locator to get all dates-elements of interested month  
         * 3. use $$(findElements) to get all date-elements in an array
         * 4. use loop (for-of)
         *      pick a date-element from array
         *      apply getText or getAttribute on date-element (depending on step-1)
         *      if (above-value is equals to the value-user-wants-to-click)
         *          click date-element
         *          break;
         */
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
            if (date.localeCompare("4") === 0) {
                await dateElement.click();
                break;
            }
        }

        await browser.pause(2000);

        await $('//button[@data-stid="apply-date-picker"]').click();

        await browser.pause(20000);

    });


});