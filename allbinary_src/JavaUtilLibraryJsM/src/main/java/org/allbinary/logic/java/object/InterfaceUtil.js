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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InterfaceUtil extends Object {
    static viewAll(myClass, lineBreak) {
        var stringBuffer = new StringMaker();
        ;
        var interfaces = myClass.getInterfaces();
        ;
        stringBuffer.append(lineBreak);
        stringBuffer.append("Interfaces: ");
        stringBuffer.append(lineBreak);
        for (var index = 0; index < interfaces.length; index++) {
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
            for (var index = 0; index < interfaces.length; index++) {
                if (interfaces[index].getName().indexOf(interfaceName) >= 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return interfaces[index];
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    static isImplemented(clazz, anyType = {}) {
        var classes = anyType.constructor.name.getInterfaces();
        ;
        for (var index = 0; index < classes.length; index++) {
            if (clazz.toString().compareTo(classes[index].getName()) == 0)
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static isImplemented(className, anyType = {}) {
        var classes = anyType.constructor.name.getInterfaces();
        ;
        for (var index = 0; index < classes.length; index++) {
            if (classes[index].getName().indexOf(className) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static isImplementedView(clazz, anyType = {}) {
        var stringBuffer = new StringMaker();
        ;
        var classes = anyType.constructor.name.getInterfaces();
        ;
        stringBuffer.append("isImplementedView: \n");
        for (var index = 0; index < classes.length; index++) {
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
