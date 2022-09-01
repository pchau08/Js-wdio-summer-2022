/**
 * moment
 * 
 * To install moment library:
 *  npm install moment
 * 
 * Moment documentation:
 *  https://momentjs.com/docs/#/
 * 
 */

const moment = require("moment");

describe('Learning moment-library', () => {
    it('Basic moment library', () => {

        const now = moment();

        console.log(`\n\nnow --> ${now.format()}\n\n`);

        // date()
        console.log(`\n\nnow.date() -> ${now.date()}\n\n`);

        // month()
        console.log(`\n\nnow.month() -> ${now.month()}\n\n`);

        // year()
        console.log(`\n\nnow.year() -> ${now.year()}\n\n`);

        // hour()
        console.log(`\n\nnow.hour() -> ${now.hour()}\n\n`);

        // minute()
        console.log(`\n\nnow.minute() -> ${now.minute()}\n\n`);

        // second()
        console.log(`\n\nnow.second() -> ${now.second()}\n\n`);

        // millisecond()
        console.log(`\n\nnow.millisecond() -> ${now.millisecond()}\n\n`);



    })
});