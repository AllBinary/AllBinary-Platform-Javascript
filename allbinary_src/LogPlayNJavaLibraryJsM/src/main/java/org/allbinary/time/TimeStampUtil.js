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
import { DateTimeFormat } from '../../../com/google/gwt/i18n/client/DateTimeFormat.js';
//not GWT import const DateTimeFormat
//import { Date } from '../../../java/util/Date.js';
//not GWT import const Date
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class TimeStampUtil extends Object {
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TimeStampUtil.instance;
    }
    constructor() {
        super();
    }
    getAsString() {
        var simpleDataFormat = DateTimeFormat.getFormat("yyyy-MM-dd HH:mm:ss.SSS");
        ;
        var date = new Date();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return simpleDataFormat.format(date);
        ;
    }
}
TimeStampUtil.instance = new TimeStampUtil();
