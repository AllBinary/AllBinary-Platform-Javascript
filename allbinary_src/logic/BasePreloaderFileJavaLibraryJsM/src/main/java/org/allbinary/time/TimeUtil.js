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
//not GWT import const Calendar = globalThis.java.util.Calendar;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TimeUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TimeUtil.instance;
    }
    setCalendar(calendar, yearString, monthString, dayString, hourString) {
        var year = new Integer(yearString).intValue();
        ;
        var month = new Integer(monthString).intValue();
        ;
        var day = new Integer(dayString).intValue();
        ;
        var hour = new Integer(hourString).intValue();
        ;
        calendar.set(year, month, day, hour, 0);
    }
    setCalendar(calendar, yearString, monthString, dayString, hourString, minuteString, secondString) {
        var year = new Integer(yearString).intValue();
        ;
        var month = new Integer(monthString).intValue();
        ;
        var day = new Integer(dayString).intValue();
        ;
        var hour = new Integer(hourString).intValue();
        ;
        var minute = new Integer(minuteString).intValue();
        ;
        var second = new Integer(secondString).intValue();
        ;
        calendar.set(year, month, day, hour, minute, second);
    }
    setExpirationCalendar(calendar, yearsString, monthsString, daysString, hoursString, minutesString, secondsString) {
        var year = calendar.get(Calendar.YEAR) + new Integer(yearsString).intValue();
        ;
        var month = calendar.get(Calendar.MONTH) + new Integer(monthsString).intValue();
        ;
        var day = calendar.get(Calendar.DAY_OF_MONTH) + new Integer(daysString).intValue();
        ;
        var hour = calendar.get(Calendar.HOUR) + new Integer(hoursString).intValue();
        ;
        var minute = calendar.get(Calendar.MINUTE) + new Integer(minutesString).intValue();
        ;
        var second = calendar.get(Calendar.SECOND) + new Integer(secondsString).intValue();
        ;
        calendar.set(year, month, day, hour, minute, second);
    }
    getTotalTime(yearString, monthString, dayString, hourString, minuteString, secondString) {
        var time = TimeUtil.calendar.getTimeInMillis();
        ;
        this.setExpirationCalendar(TimeUtil.calendar, yearString, monthString, dayString, hourString, minuteString, secondString);
        var timeDelta = TimeUtil.calendar.getTimeInMillis();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return timeDelta - time;
    }
}
TimeUtil.instance = new TimeUtil();
TimeUtil.calendar = Calendar.getInstance();
