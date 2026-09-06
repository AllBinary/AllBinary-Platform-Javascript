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
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FREEBLISKET_PATH_GLOBALS extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FREEBLISKET_PATH_GLOBALS.instance;
    }
    constructor() {
        super();
        this.TEMPLATEPATH = "template" + AbPathData.getInstance().SEPARATOR;
        this.STYLEPATH = this.TEMPLATEPATH + "style" + AbPathData.getInstance().SEPARATOR;
        this.THEMEPATH = this.STYLEPATH + "theme" + AbPathData.getInstance().SEPARATOR;
        this.DBINITPATH = PATH_GLOBALS.getInstance().INIT_PATH + "db" + AbPathData.getInstance().SEPARATOR;
        this.LINEDATAPATH = PATH_GLOBALS.getInstance().INIT_PATH + "lineData" + AbPathData.getInstance().SEPARATOR;
        this.LICENSEERRORPAGE = "LicensingError.jsp";
        this.ERRORPAGE = "Error.jsp";
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("install");
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.INSTALLPATH = stringBuffer.toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append(PATH_GLOBALS.getInstance().INIT_PATH);
        stringBuffer.append("views");
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.XSLPATH = stringBuffer.toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append(this.XSLPATH);
        stringBuffer.append("configuration");
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.CONFIGURATIONPATH = stringBuffer.toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append(this.CONFIGURATIONPATH);
        stringBuffer.append("user");
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.USERCONFIGURATIONPATH = stringBuffer.toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringBuffer.append(this.CONFIGURATIONPATH);
        stringBuffer.append("context");
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.CONTEXTCONFIGURATIONPATH = stringBuffer.toString();
        stringBuffer.delete(0, stringBuffer.length());
    }
}
FREEBLISKET_PATH_GLOBALS.instance = new FREEBLISKET_PATH_GLOBALS();
