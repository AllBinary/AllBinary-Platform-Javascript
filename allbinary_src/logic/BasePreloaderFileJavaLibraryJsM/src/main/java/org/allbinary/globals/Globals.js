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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { StringValidationUtil } from '../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
import { WebappClassLoaderInfo } from '../../../org/allbinary/logic/system/loader/WebappClassLoaderInfo.js';
//not GWT import const WebappClassLoaderInfo
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AppUrlGlobals } from './AppUrlGlobals.js';
//not GWT import - same folder const AppUrlGlobals
import { URLGLOBALS } from './URLGLOBALS.js';
//not GWT import - same folder const URLGLOBALS
export class Globals extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Globals.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    init(classLoader, pathString) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var appUrlGlobals = new AppUrlGlobals();
        ;
        appUrlGlobals.setWebappPath(pathString);
        URLGLOBALS.init(appUrlGlobals);
        WebappClassLoaderInfo.setLoader(classLoader);
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Setting Up AllBinary System Configuration Args: ");
        stringBuffer.append(pathString);
        stringBuffer.append(" ClassLoader: ");
        stringBuffer.append(classLoader.constructor.name.toString());
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.INIT);
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        if (stringValidationUtil.isEmpty(pathString)) {
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append("No Path Provided. Using Process Path: ");
            stringBuffer.append(pathString);
            stringBuffer.append(CommonSeps.getInstance().SPACE);
            stringBuffer.append(CommonSeps.getInstance().EQUALS);
            stringBuffer.append(CommonSeps.getInstance().SPACE);
            stringBuffer.append(URLGLOBALS.getWebappPath());
            this.logUtil.putF(stringBuffer.toString(), this, commonStrings.INIT);
        }
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append("Webapp Path Set To: ");
        stringBuffer.append(URLGLOBALS.getWebappPath());
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.INIT);
    }
}
Globals.instance = new Globals();
