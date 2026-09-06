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
import { Integer } from '../../../../../../java/lang/Integer.js';
//not GWT import const ABTextFieldItem = globalThis.org.allbinary.graphics.form.item.ABTextFieldItem;
import { ValidatorBase } from '../../../../../../org/allbinary/logic/control/validate/ValidatorBase.js';
//not GWT import const ValidatorBase = globalThis.org.allbinary.logic.control.validate.ValidatorBase;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
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
        var result = BooleanFactory.getInstance().TRUE;
        ;
        var string = this.textFieldItem.getString();
        ;
        var textLength = string.length;
        ;
        if (textLength > 0 && textLength < this.maxChars) {
            try {
                Integer.parseInt(this.textFieldItem.getString());
                //: 
            }
            catch (e) {
                result = BooleanFactory.getInstance().FALSE;
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
        var list = new BasicArrayListD();
        ;
        var string = this.textFieldItem.getString();
        ;
        var textLength = string.length;
        ;
        var label = this.textFieldItem.getLabel();
        ;
        var name = label.substring(0, label.length - 2);
        ;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var stringMaker = new StringMaker();
        ;
        if (textLength > 0 && textLength < this.maxChars) {
            try {
                var number = smallIntegerSingletonFactory.createInstance(Integer.parseInt(this.textFieldItem.getString()));
                ;
                if (number.intValue() > this.min) {
                    stringMaker.delete(0, stringMaker.length());
                    list.add(stringMaker.append(name).append(" is to small").toString());
                }
                else if (number.intValue() > this.max) {
                    stringMaker.delete(0, stringMaker.length());
                    list.add(stringMaker.append(name).append(" is to large").toString());
                }
                //: 
            }
            catch (e) {
                stringMaker.delete(0, stringMaker.length());
                list.add(stringMaker.append(name).append(" is not a number").toString());
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
