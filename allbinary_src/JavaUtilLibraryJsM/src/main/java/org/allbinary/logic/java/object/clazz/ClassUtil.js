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
import { Object } from '../../../../../../java/lang/Object.js';
//import { Class } from '../../../../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
import { ConstructorUtil } from '../../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js';
//not GWT import const ConstructorUtil
import { InterfaceUtil } from '../../../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js';
//not GWT import const InterfaceUtil
import { MethodUtil } from '../../../../../../org/allbinary/logic/java/anyType/MethodUtil.js';
//not GWT import const MethodUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ClassUtil extends Object {
    static viewAll(...args) {
        if (args.length === 2 && typeof args[1] === 'string')
            return this.viewAll$overload1(args[0], args[1]);
        if (args.length === 2 && typeof args[1] === 'string')
            return this.viewAll$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: viewAll');
    }
    static viewAll$overload1(anyType, lineBreak) {
        if (anyType !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ClassUtil.viewAll(anyType.constructor, lineBreak);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return "Object Null";
        }
    }
    static viewAll$overload2(myClass, lineBreak) {
        if (myClass !=
            null) {
            let stringBuffer = new StringMaker();
            ;
            let classes = myClass.getClasses();
            ;
            stringBuffer.append(lineBreak);
            stringBuffer.append("Class: ");
            stringBuffer.append(myClass.toString());
            stringBuffer.append(" uses ");
            stringBuffer.appendint(classes.length);
            stringBuffer.append(" other classes");
            stringBuffer.append(lineBreak);
            stringBuffer.append(lineBreak);
            stringBuffer.append("Classes: ");
            stringBuffer.append(lineBreak);
            for (let index = 0; index < classes.length; index++) {
                stringBuffer.append("Class: ");
                stringBuffer.append(classes[index].getName());
                stringBuffer.append(lineBreak);
            }
            stringBuffer.append(InterfaceUtil.viewAll(myClass.prototype.constructor, lineBreak));
            stringBuffer.append(lineBreak);
            stringBuffer.append(ConstructorUtil.viewAll(myClass.prototype.constructor, lineBreak));
            stringBuffer.append(lineBreak);
            stringBuffer.append(MethodUtil.viewAll(myClass.prototype.constructor, lineBreak));
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return "Class Null";
        }
    }
    constructor() {
        super();
    }
}
