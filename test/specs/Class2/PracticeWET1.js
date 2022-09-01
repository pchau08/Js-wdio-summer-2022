const { expect } = require("chai");


//  1. using id-attribute
//     id-attribute is always going to be unique in DOM
//     To check if id-value is unique, In chropath -> //*[@id='idValue']
describe('Verify Login Form', () => {

    it('Verify Email and Password Fields', async() => {
        //Launch Facebook
        await browser.url('https://www.facebook.com/'); //launch Facebook browser
        
        await browser.pause(2000); //Pause the launching 
        
        //Verify email textbook is enabled
        const emailInputBox = await $('#email'); //email ID in a variable. Store it in a variable so you do not have to find it again
        const isEmailInputEnabled = await emailInputBox.isEnabled(); //verify if the emailbox is enabaled
        expect(isEmailInputEnabled, 'Email input box is NOT enabled').to.be.true; 

        //Verify password text box is enabled 
        const pwdInputBox = await $('#pass');
        const isPwdInputEnabled = await pwdInputBox.isEnabled();
        expect(isPwdInputEnabled, 'Password input box is NOT enabaled').to.be.true;

        //Enter "patrick@abcd.com" in email
        await emailInputBox.setValue('patrick@abcd.com');

        //Verify "abcd@1234" as password
        pwdInputBox.setValue('abcd@1234');
     
    });
});

