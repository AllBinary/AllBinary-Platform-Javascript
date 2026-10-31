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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InterfaceUtil extends Object {
    static viewAll(myClass, lineBreak) {
        let stringBuffer = new StringMaker();
        ;
        let interfaces = myClass.getInterfaces();
        ;
        stringBuffer.append(lineBreak);
        stringBuffer.append("Interfaces: ");
        stringBuffer.append(lineBreak);
        for (let index = 0; index < interfaces.length; index++) {
            stringBuffer.append("Interface: ");
            stringBuffer.append(interfaces[index].getName());
            stringBuffer.append(lineBreak);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor(interfaceName, interfaces) {
        if (interfaceName !=
            null
            && interfaces !=
                null
            && interfaces.length > 0) {
            for (let index = 0; index < interfaces.length; index++) {
                if (interfaces[index].getName().indexOf(interfaceName) >= 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return interfaces[index];
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    static isImplemented(...args) {
        if (args.length === 2)
            return this.isImplemented$overload1(args[0], args[1]);
        if (args.length === 2 && typeof args[0] === 'string')
            return this.isImplemented$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: isImplemented');
    }
    static isImplemented$overload1(clazz, anyType) {
        let classes = anyType.constructor.name.getInterfaces();
        ;
        for (let index = 0; index < classes.length; index++) {
            if (clazz.toString().compareTo(classes[index].getName()) == 0)
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static isImplemented$overload2(className, anyType) {
        let classes = anyType.constructor.name.getInterfaces();
        ;
        for (let index = 0; index < classes.length; index++) {
            if (classes[index].getName().indexOf(className) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static isImplementedView(clazz, anyType) {
        let stringBuffer = new StringMaker();
        ;
        let classes = anyType.constructor.name.getInterfaces();
        ;
        stringBuffer.append("isImplementedView: \n");
        for (let index = 0; index < classes.length; index++) {
            stringBuffer.append(clazz.toString());
            stringBuffer.append(" should be = ");
            stringBuffer.append(classes[index].getName());
            stringBuffer.append(classes[index].getName());
            stringBuffer.append(CommonSeps.getInstance().NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor() {
        super();
    }
}
