/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Integer } from '../../../java/lang/Integer.js';
import { Calendar } from '../../../java/util/Calendar.js';
//not GWT import const Calendar
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TimeUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TimeUtil.instance;
    }
    setCalendar(calendar, yearString, monthString, dayString, hourString) {
        let year = new Integer(yearString).intValue();
        ;
        let month = new Integer(monthString).intValue();
        ;
        let day = new Integer(dayString).intValue();
        ;
        let hour = new Integer(hourString).intValue();
        ;
        calendar.set(year, month, day, hour, 0);
    }
    setCalendarWithTime(calendar, yearString, monthString, dayString, hourString, minuteString, secondString) {
        let year = new Integer(yearString).intValue();
        ;
        let month = new Integer(monthString).intValue();
        ;
        let day = new Integer(dayString).intValue();
        ;
        let hour = new Integer(hourString).intValue();
        ;
        let minute = new Integer(minuteString).intValue();
        ;
        let second = new Integer(secondString).intValue();
        ;
        calendar.set(year, month, day, hour, minute, second);
    }
    setExpirationCalendar(calendar, yearsString, monthsString, daysString, hoursString, minutesString, secondsString) {
        let year = calendar.get(Calendar.YEAR) + new Integer(yearsString).intValue();
        ;
        let month = calendar.get(Calendar.MONTH) + new Integer(monthsString).intValue();
        ;
        let day = calendar.get(Calendar.DAY_OF_MONTH) + new Integer(daysString).intValue();
        ;
        let hour = calendar.get(Calendar.HOUR) + new Integer(hoursString).intValue();
        ;
        let minute = calendar.get(Calendar.MINUTE) + new Integer(minutesString).intValue();
        ;
        let second = calendar.get(Calendar.SECOND) + new Integer(secondsString).intValue();
        ;
        calendar.set(year, month, day, hour, minute, second);
    }
    getTotalTime(yearString, monthString, dayString, hourString, minuteString, secondString) {
        let time = TimeUtil.calendar.getTimeInMillis();
        ;
        this.setExpirationCalendar(TimeUtil.calendar, yearString, monthString, dayString, hourString, minuteString, secondString);
        let timeDelta = TimeUtil.calendar.getTimeInMillis();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return timeDelta - time;
    }
}
TimeUtil.instance = new TimeUtil();
TimeUtil.calendar = Calendar.getInstance();
