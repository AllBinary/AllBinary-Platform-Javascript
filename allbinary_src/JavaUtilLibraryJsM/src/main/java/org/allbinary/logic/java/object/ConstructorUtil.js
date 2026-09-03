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
//not GWT import const Constructor = globalThis.java.lang.reflect.Constructor;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ConstructorUtil extends Object {
    static viewAll(myClass, lineBreak) {
        var stringBuffer = new StringMaker();
        ;
        var constructor = myClass.getConstructors();
        ;
        stringBuffer.append("Constructors: ");
        stringBuffer.append(lineBreak);
        for (var index = 0; index < constructor.length; index++) {
            stringBuffer.append(ConstructorUtil.view(constructor[index], lineBreak));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    static view(constructor, lineBreak) {
        if (constructor !=
            null) {
            var commonSeps = CommonSeps.getInstance();
            ;
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(constructor.getName());
            var classes = constructor.getParameterTypes();
            ;
            for (var index = 0; index < classes.length; index++) {
                stringBuffer.append(commonSeps.SPACE);
                stringBuffer.append(classes[index].getName());
                stringBuffer.append(commonSeps.COLON);
                stringBuffer.appendint(index);
            }
            stringBuffer.append(lineBreak);
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
        else if ()
            ;
    }
    constructor() {
        super();
    }
}
