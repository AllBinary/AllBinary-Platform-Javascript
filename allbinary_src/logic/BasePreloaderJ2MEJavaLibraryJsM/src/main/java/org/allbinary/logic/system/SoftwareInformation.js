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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { KotlinUtil } from '../../../../org/allbinary/KotlinUtil.js';
//not GWT import const KotlinUtil = globalThis.org.allbinary.KotlinUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SoftwareInformation extends Object {
    constructor(name, version, shortName) {
        super();
        this.name = name;
        this.version = version;
        this.shortName = new StringMaker().append(shortName).append(KotlinUtil.getShortName()).toString();
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getVersion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.version;
    }
    toShortString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.shortName;
    }
    toString() {
        var NAME = "Name: ";
        ;
        var VERSION = "Version: ";
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(NAME);
        stringBuffer.append(this.getName());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(VERSION);
        stringBuffer.append(this.getVersion());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
