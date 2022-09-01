const {expect} = require("chai");
const HomeworkCommands = require("../HomeworkCommands");


class DarkskyHomework{

    hwCommands = new HomeworkCommands;
  

    feelsLike = '//span[contains(@class, "feels-like-text")]'
    lowTemp = '//span[contains(@class, "low-temp-text")]'
    highTemp =  '//span[contains(@class, "high-temp-text")]'
    zipCodeChecker = '//span[@class="summary swap"]'   
    searchButton = '//form[@id="searchForm"]//img[@alt="Search Button"]'
    allHourlyTemp = '//span[contains(text(),"°")]';


    async launchDarkSky() {
        await browser.url('https//www.darksky.net/');
    }

    async pause2Seconds() {
        await browser.pause(2000);
    }

    async getTextLowTemp () {
        await this.HomeworkCommands.getTextFromWebElement(this.lowTemp)
        return parseInt(this.getTextLowTemp);
    }

    async getTextHighTemp () {
        await this.HomeworkCommands.getTextFromWebElement(this.highTemp);
        return parseInt(this.highTemp);
    }

    async getTextFeelsLikeTemp () {
        await this.HomeworkCommands.getTextFromWebElement(this.feelsLike);
        return parseInt(this.feelsLike);
    }







}

module.exports = darkSkyHomework;
