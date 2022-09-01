/**
 * There are two kinds of dropdown
 * 
 * 1. with <select> tag
 * 2. with any other tag
 * 
 * 
 * <select> tag dropdowns
 *      options in  select-tag are present index-wise
 *      options has value-attribute
 *      options has text-value
 * 
 * 
 * Steps to select value from dropdown:
 * 
 * 1. Find the dropdown webElement(or select-Tag)
 * 2. Using appropriate function in order to select specific data in dropdown
 *      selectByVisibleText
 *      selectByAttribute
 *      selectByIndex
 * 
 */

 describe('Dropdown tests', () => {
    it('Select data in dropdown', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click 'Create New Account' button
         * 3. Select Jan in month dropdown
         * 4. Select 2 in day dropdown
         * 5. Select 1990 in year dropdown
         * 
         */ 
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click 'Create New Account' button
        // const createNewAccountBtn = await $('=Create New Account');
        // await createNewAccountBtn.click();
        await $('=Create New Account').click();
        await browser.pause(2000);

        //  3. Select Jan in month dropdown
        await $('#month').selectByIndex(0);

        // 4. Select 2 in day dropdown
        await $('select[aria-label=Day]').selectByAttribute('value', '2');

        // 5. Select 1990 in year dropdown
        await $('#year').selectByVisibleText('1990');

        await browser.pause(15000);

    });
});