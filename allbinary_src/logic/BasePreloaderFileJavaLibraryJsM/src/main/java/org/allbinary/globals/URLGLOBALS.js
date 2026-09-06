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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AppUrlGlobals } from './AppUrlGlobals.js';
//not GWT import - same folder const UrlGlobalsInterface = globalThis.org.allbinary.globals.UrlGlobalsInterface;
export class URLGLOBALS extends Object {
    static init(urlGlobalsInterface) {
        URLGLOBALS.urlGlobalsInterface = urlGlobalsInterface;
    }
    static isTestingMode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return URLGLOBALS.urlGlobalsInterface.isTestingMode();
        ;
    }
    static getWebappPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return URLGLOBALS.urlGlobalsInterface.getWebappPath();
        ;
    }
    static getTestHtmlPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return URLGLOBALS.urlGlobalsInterface.getTestHtmlPath();
        ;
    }
    //@Throws(Exception.constructor)
    static getMainPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return URLGLOBALS.urlGlobalsInterface.getMainPath();
        ;
    }
}
URLGLOBALS.urlGlobalsInterface = AppUrlGlobals.NULL_APP_URL_GLOBALS;
