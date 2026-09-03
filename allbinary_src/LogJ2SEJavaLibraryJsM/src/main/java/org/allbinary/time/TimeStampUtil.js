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
import { SimpleDateFormat } from '../../../java/text/SimpleDateFormat.js';
//not GWT import const SimpleDateFormat = globalThis.java.text.SimpleDateFormat;
import { Calendar } from '../../../java/util/Calendar.js';
//not GWT import const Calendar = globalThis.java.util.Calendar;
//import { Date } from '../../../java/util/Date.js';
//not GWT import const Date = globalThis.java.util.Date;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class TimeStampUtil extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TimeStampUtil.instance;
    }
    constructor() {
        super();
        this.simpleDataFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
    }
    /*actual*/ getAsString() {
        var calendar = Calendar.getInstance();
        ;
        var date = calendar.getTime();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.simpleDataFormat.format(date);
        ;
    }
}
TimeStampUtil.instance = new TimeStampUtil();
