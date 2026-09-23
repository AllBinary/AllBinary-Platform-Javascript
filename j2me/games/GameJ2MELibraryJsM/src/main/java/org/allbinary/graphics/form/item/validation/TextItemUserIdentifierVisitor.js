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
import { TextNotificationUtil } from '../../../../../../org/allbinary/game/input/TextNotificationUtil.js';
//not GWT import const TextNotificationUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { StringValidationUtil } from '../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil
import { Visitor } from '../../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TextItemUserIdentifierVisitor extends Visitor {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
    }
    visit(anyType = {}) {
        var value = anyType;
        ;
        if (value.length < 2) {
            var charValue = value[0];
            ;
            var stringValidationUtil = StringValidationUtil.getInstance();
            ;
            if (stringValidationUtil.isNumber(value)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return BooleanFactory.getInstance().TRUE;
            }
            else if (this.isLetter(charValue)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return BooleanFactory.getInstance().TRUE;
            }
            else {
                try {
                    TextNotificationUtil.getInstance().fireError("Only Letters & Numbers Allowed");
                    //: 
                }
                catch (e) {
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.VISIT, e);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return BooleanFactory.getInstance().FALSE;
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return BooleanFactory.getInstance().FALSE;
        }
    }
    isLetter(charValue) {
        var value = Math.round(charValue);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value > 64 && value < 91) || (value > 96 && value < 123);
    }
}
