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
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//import { Class } from '../../../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
//not GWT import const Constructor
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ConstructorUtil extends Object {
    static viewAll(myClass, lineBreak) {
        let stringBuffer = new StringMaker();
        ;
        let constructor = myClass.getConstructors();
        ;
        stringBuffer.append("Constructors: ");
        stringBuffer.append(lineBreak);
        for (let index = 0; index < constructor.length; index++) {
            stringBuffer.append(ConstructorUtil.view(constructor[index], lineBreak));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    static view(constructor, lineBreak) {
        if (constructor !=
            null) {
            let commonSeps = CommonSeps.getInstance();
            ;
            let stringBuffer = new StringMaker();
            ;
            stringBuffer.append(constructor.getName());
            let classes = constructor.getParameterTypes();
            ;
            for (let index = 0; index < classes.length; index++) {
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
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return "Constructor Null";
        }
    }
    constructor() {
        super();
    }
}
