const Commands = require("../Commands");

class MessengerPage {
    commands = new Commands();

    loginEmail = '#email';
    loginPassword = '#pass';
    loginButton = '#loginbutton';
    keepMesignedInButton = "//label[contains(text(),'Keep me signed in')]";
    messengerLoginError = '//div[contains(text(),"The email or mobile number you entered")]';
    checkbox = 'input[type="checkbox"]'
    

    async keepMeSignedErrorMsg() {
        await this.commands.getTextFromWebElement(this.messengerLoginError);
        return (this.messengerLoginError);
    }

    async login() {
        await this.commands.clickWebElement(this.loginButton);
    }

    async loginButtonIsEnabled() {
        await this.commands.isWebElementDisplayed(this.loginButton);
    }

    async keepMeSignedInEnabled() {
        await this.commands.isWebElementDisplayed(this.keepMesignedInButton);
    }

    async clickKeepMeSignedInButton() {
        await this.commands.clickWebElement(this.keepMesignedInButton);
    }

    async verifyCheckboxSelected() {
        await this.commands.isSelected(this.keepMesignedInButton);
    }





}

module.exports = MessengerPage;