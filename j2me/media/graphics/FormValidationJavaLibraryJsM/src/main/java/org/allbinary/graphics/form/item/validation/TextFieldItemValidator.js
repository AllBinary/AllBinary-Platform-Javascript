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
//not GWT import const ABTextFieldItem = globalThis.org.allbinary.graphics.form.item.ABTextFieldItem;
import { ValidatorBase } from '../../../../../../org/allbinary/logic/control/validate/ValidatorBase.js';
//not GWT import const ValidatorBase = globalThis.org.allbinary.logic.control.validate.ValidatorBase;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TextFieldItemValidator extends ValidatorBase {
    constructor(textFieldItem, min, max, allowOnEmpty) {
        super();
        this.textFieldItem = textFieldItem;
        this.min = min;
        this.max = max;
        this.allowOnEmpty = allowOnEmpty;
    }
    isValid() {
        var booleanFactory = BooleanFactory.getInstance();
        ;
        var result = booleanFactory.TRUE;
        ;
        var string = this.textFieldItem.getString();
        ;
        var textLength = string.length;
        ;
        if ((textLength == 0 && this.allowOnEmpty) || textLength > this.min && textLength < this.max) {
        }
        else {
            if (textLength < this.min) {
                result = booleanFactory.FALSE;
            }
            else if (textLength > this.max) {
                result = booleanFactory.FALSE;
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
        if (textLength > this.min && textLength < this.max) {
        }
        else {
            var label = this.textFieldItem.getLabel();
            ;
            var name = label.substring(0, label.length - 2);
            ;
            if (textLength < this.min) {
                list.add(new StringMaker().append(name).append(" is to short").toString());
            }
            else if (textLength > this.max) {
                list.add(new StringMaker().append(name).append(" is to long").toString());
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
}
