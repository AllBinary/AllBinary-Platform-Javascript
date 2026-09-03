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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlayerType extends Object {
    constructor(name, value) {
        super();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.name = name;
        this.id = value;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getName();
        ;
    }
}
