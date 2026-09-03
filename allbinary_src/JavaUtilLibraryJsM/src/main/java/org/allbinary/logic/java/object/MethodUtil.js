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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const Method = globalThis.java.lang.reflect.Method;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ParamsUtil } from './ParamsUtil.js';
//not GWT import const ParamsUtil = globalThis.org.allbinary.logic.java.anyType.ParamsUtil;
export class MethodUtil extends Object {
    static viewAll(myClass, lineBreak) {
        var stringBuffer = new StringMaker();
        ;
        var method = myClass.getMethods();
        ;
        stringBuffer.append("Methods: ");
        stringBuffer.append(lineBreak);
        for (var index = 0; index < method.length; index++) {
            stringBuffer.append(method[index].getReturnType().getName());
            stringBuffer.append(" ");
            stringBuffer.append(method[index].getName());
            stringBuffer.append("(");
            ParamsUtil.viewParams(method[index].getParameterTypes());
            stringBuffer.append(")");
            stringBuffer.append(lineBreak);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor() {
        super();
    }
}
