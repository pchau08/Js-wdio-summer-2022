const moment = require("moment");
const Commands = require("../Commands");

class Homepage {

    goingToLocator = "//button[@aria-label='Going to']";
    goingToLocatorWithDestination = '//button[contains(@data-stid, "hotels-destination-menu-trigger")]';
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";

    calendarButtonLocator = '#date_form_field-btn';

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[2]";
    backButtonOnCalendarLocator = "(//button[@data-stid='date-picker-paging'])[1]";

    disabledCalendarDates = '//button[@class="uitk-date-picker-day is-disabled"]';

    doneSearchButton = '(//button[@data-stid="apply-date-picker"])[1]';

    searchButton = '#submit_button';

    calendarCheckInDate = '#hotels-check-in-btn';
    calendarCheckOutDate = '#hotels-check-out-btn';


    commands = new Commands;


    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
        await browser.pause(2000);
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
        await browser.pause(1000);
    }

    async selectCheckInDate(monthName, year, checkInDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.backButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {

        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.backButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }

    async clickOnDoneButton() {
        await this.commands.clickWebElement(this.doneSearchButton);
        await browser.pause(1000);
    }

    async clickOnSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
        await browser.pause(1000);
    }

    async verifyDisabledDates() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
        await browser.pause(1000);
        await this.commands.clickWebElement(this.backButtonOnCalendarLocator)
        await browser.pause(1000);
        await this.commands.isWebElementEnabled(this.disabledCalendarDates);
        await browser.pause(1000);
    }

    async verifyDestinationAfterSearch(goingToDestination) {
        await this.commands.getTextFromWebElement(this.goingToLocatorWithDestination)
        await browser.pause(1000);
    }

    async verifyCheckInAndCheckOut() {
        await this.commands.getTextFromWebElement(this.calendarCheckInDate);
        await this.commands.getTextFromWebElement(this.calendarCheckOutDate);
    }

    

}
module.exports = Homepage;