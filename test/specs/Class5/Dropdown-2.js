const { expect } = require("chai");

describe('Dropdown with non-select tag', () => {
    it.only('Change the temp unit in darksky.net', async () => {
        /**
         * Change the temp-unit in darksky.net
         * 
         * 1. Launch darksky.net
         * 2. Change temp unit to "˚C, m/s"
         * 
         */
        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');

        await browser.pause(3000);

        await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//b').click();

        await browser.pause(1000);

        await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();

        await browser.pause(2000);

        const tempUnit = await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//span').getText();

        console.log(`\n\ntempUnit -> ${tempUnit}\n\n`);

        await browser.pause(5000);

    });


    it('Verify the temp value changes correct when user changes the temp unit', async () => {
        /**
         * Change the temp-unit in darksky.net
         * 
         * 1. Launch darksky.net
         * 2. Store the current-temp in a variable(fT)
         * 3. using tempConversion formula to convert fT into celsius (cT)
         * 4. Change temp unit to "˚C, mph"
         * 5. Verify the current-temp on web is equals to cT
         * 
         * cT = (fT - 32) × (5/9)
         * 
         */
        // 1. Launch darksky.net
        await browser.url('https://www.darksky.net/');

        await browser.pause(3000);

        const fText = await $('//span[@class="summary swap"]').getText();
        const fT = Number(fText.substring(0, fText.indexOf('˚')));
        // line-51 OR const fTemp = parseInt(fText);
        const fTInCelsius = (fT - 32) * (5/9);


        await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//b').click();

        await browser.pause(1000);

        await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();

        await browser.pause(2000);

        const tempUnit = await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//span').getText();

        await browser.pause(2000);

        const cText = await $('//span[@class="summary swap"]').getText();
        const cT = Number(cText.substring(0, cText.indexOf('˚')));

        expect(cT, 'Current Temp does not convert correctly').to.equal(fTInCelsius);

    });


    

});