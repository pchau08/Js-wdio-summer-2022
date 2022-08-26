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

    it('get date value in a specific format', () => {
        /**
         * get current date in 8/22/22 (10/22/22)
         */
        const now = moment();

        console.log(`\n\nnow --> ${now.format()}\n\n`);


        console.log(`\n\nnow --> ${now.format('MMMM/D/YY')}\n\n`);

        /**
         * Dates -> D -- DD
         * Month -> M -- MM -- MMM -- MMMM
         * Year  -> YY -- YYYY
         * Hour -> h -- hh -- H -- HH (h: 12-hour format, H: 24-hour format)
         * Minute -> m -- mm
         * Second -> s -- ss
         * Timezone -> Z
         * am/pm    -> a/A (a: am/pm ; A: AM/PM)
         */

        // get current date in "MMM D-YYYY h*m*s a"

        console.log(`\n\nnow (MMM D-YYYY hh*m*s a) --> ${now.format('MMM D-YYYY h*m*s a')}\n\n`);





    })

    it('add/subtract dates using moment', () => {
        const now = moment();

        console.log(`\n\nnow --> ${now.format()}\n\n`);

        /**
         * add()
         * adds the attribute in the current date
         * 
         * to add days -> 'days'
         * to add months -> 'months'
         * to add year -> 'year'
         * to add hour -> 'hour'
         * to add minute -> 'minute'
         * to add second -> 'second' 
         * 
         */

        /**
         * subtract()
         * subtract the attribute in the current date
         * 
         * to subtract days -> 'days'
         * to subtract months -> 'months'
         * to subtract year -> 'year'
         * to subtract hour -> 'hour'
         * to subtract minute -> 'minute'
         * to subtract second -> 'second' 
         * 
         */

        now.add(22, 'days');
        now.add(-2, 'months');


        console.log(`\n\nnow --> ${now.format()}\n\n`);

        now.subtract(1, 'year');

        console.log(`\n\nnow --> ${now.format()}\n\n`);
        
    });

    it('Moment - is String in valid date format', () => {
        /**
         * Verify date on blog is in correct format
         * 1. Launch darksky.net
         * 2. Go to blog page
         * 3. Verify Dates are present in correct format (MMMM D, YYYY) -- Check
         */
        const dateStringFromWeb = '2020 03 31';

        const result = moment(dateStringFromWeb, 'MMMM D, YYYY').isValid();

        console.log(`\nresult -> ${result}\n`);


    });

    it('Moment - Set date as per need', () => {
        const now = moment();

        console.log(`\n\nnow -> ${now.format()}\n\n`);

        const now2 = moment().month('Dec').year(2022).date(25);

        console.log(`\n\nnow2 -> ${now2.format()}\n\n`);

        now2.add(7, 'days');

        console.log(`\n\nnow2 -> ${now2.format()}\n\n`);

        const newDate = moment('Dec 25 1990', 'MMM DD YYYY');
        console.log(`\n\nnewDate -> ${newDate.format()}\n\n`);


    });

    it('Moment - isAfter, isBefore, isSame, isBetween', () => {
        const date = moment();

        const date1 = moment().month('Dec').year(2022);

        const date2 = moment().month('Jan').year(2023);


        // is date appears after the date1 in calendar
        const dateAfterDate1 = date.isAfter(date1);
        console.log(`\n\ndateAfterDate1 -> ${dateAfterDate1}\n\n`);


        // is date1 appears before the date2 in calendar
        const date1BeforeDate2 = date1.isBefore(date2);
        console.log(`\n\ndate1BeforeDate2 -> ${date1BeforeDate2}\n\n`);

        // is date appears in between the date2 and date1 in calendar
        const dateBetweenDate1Date2 = date.isBetween(date1, date2);
        console.log(`\n\ndateBetweenDate1Date2 -> ${dateBetweenDate1Date2}\n\n`);

        // is date equals to date1
        const dateSameDate1 = date.isSame(date1);
        console.log(`\n\ndateSameDate1 -> ${dateSameDate1}\n\n`);



    });

    it('Moment - diff', () => {
        const currentDate = moment();

        const dueDate = moment('29-08-2022', 'DD-MM-YYYY');

        console.log(`\n\ncurrentDate -> ${currentDate.format()}\n\n`);

        console.log(`\n\ndueDate -> ${dueDate.format()}\n\n`);

        const diffInDates = dueDate.diff(currentDate, 'days');  // hours, minutes, year, months, weeks

        console.log(`\n\ndiffInDates -> ${diffInDates}\n\n`);

    });

});