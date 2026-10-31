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
//import { NumberFormatException } from '../../../../../../java/lang/NumberFormatException.js';
const NumberFormatException = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.NumberFormatException) !== null && _c !== void 0 ? _c : class {
});
import { Integer } from '../../../../../../java/lang/Integer.js';
//not GWT import const ABTextFieldItem
import { ValidatorBase } from '../../../../../../org/allbinary/logic/control/validate/ValidatorBase.js';
//not GWT import const ValidatorBase
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NumberTextFieldItemValidator extends ValidatorBase {
    constructor(textFieldItem, maxChars, min, max) {
        super();
        this.textFieldItem = textFieldItem;
        this.min = min;
        this.max = max;
        this.maxChars = maxChars;
    }
    isNumberValid(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BooleanFactory.getInstance().TRUE;
    }
    toNumberVector(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicArrayListD();
    }
    isValid() {
        let result = BooleanFactory.getInstance().TRUE;
        ;
        let string = this.textFieldItem.getString();
        ;
        let textLength = string.length;
        ;
        if (textLength > 0 && textLength < this.maxChars) {
            try {
                Integer.parseInt(this.textFieldItem.getString());
            }
            catch (caught) {
                if (caught instanceof NumberFormatException) {
                    const e = caught;
                    result = BooleanFactory.getInstance().FALSE;
                }
                else {
                    throw caught;
                }
            }
        }
        else {
            if (textLength < 1) {
                result = BooleanFactory.getInstance().FALSE;
            }
            else if (textLength > this.maxChars) {
                result = BooleanFactory.getInstance().FALSE;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return result;
    }
    toList() {
        let list = new BasicArrayListD();
        ;
        let string = this.textFieldItem.getString();
        ;
        let textLength = string.length;
        ;
        let label = this.textFieldItem.getLabel();
        ;
        let name = label.substring(0, label.length - 2);
        ;
        let smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        let stringMaker = new StringMaker();
        ;
        if (textLength > 0 && textLength < this.maxChars) {
            try {
                let number = smallIntegerSingletonFactory.createInstance(Integer.parseInt(this.textFieldItem.getString()));
                ;
                if (number.intValue() > this.min) {
                    stringMaker.delete(0, stringMaker.length());
                    list.add(stringMaker.append(name).append(" is to small").toString());
                }
                else if (number.intValue() > this.max) {
                    stringMaker.delete(0, stringMaker.length());
                    list.add(stringMaker.append(name).append(" is to large").toString());
                }
            }
            catch (caught) {
                if (caught instanceof NumberFormatException) {
                    const e = caught;
                    stringMaker.delete(0, stringMaker.length());
                    list.add(stringMaker.append(name).append(" is not a number").toString());
                }
                else {
                    throw caught;
                }
            }
        }
        else {
            if (textLength < 1) {
                stringMaker.delete(0, stringMaker.length());
                list.add(stringMaker.append(name).append(" is to short").toString());
            }
            else if (textLength > this.maxChars) {
                stringMaker.delete(0, stringMaker.length());
                list.add(stringMaker.append(name).append(" is to long").toString());
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
}
