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
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UrlGlobalsInterface } from './UrlGlobalsInterface.js';
//not GWT import - same folder const UrlGlobalsInterface = globalThis.org.allbinary.globals.UrlGlobalsInterface;
//implements
export class AppUrlGlobals extends UrlGlobalsInterface {
    constructor() {
        super(...arguments);
        this.path = StringUtil.getInstance().EMPTY_STRING;
    }
    isTestingMode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getWebappPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.path;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setWebappPath(path) {
        this.path = path;
        if (!(this.path.endsWith("\\") || this.path.endsWith("/"))) {
            this.path = this.path + "\\";
        }
    }
    getTestHtmlPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    //@Throws(Exception.constructor)
    getMainPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.path;
    }
}
AppUrlGlobals.NULL_APP_URL_GLOBALS = new AppUrlGlobals();
