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
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchScreenTypesFactory } from './TouchScreenTypesFactory.js';
export class TouchScreenFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchScreenFactory.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.touch = false;
        this.multiTouch = false;
        this.multiTouchDistinct = false;
        this.touchScreenType = TouchScreenTypesFactory.getInstance().NOTOUCH;
        try {
            this.setTouch(true);
            this.setMultiTouch(false);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, TouchScreenFactory.SINGLETON, commonStrings.GET_INSTANCE, e);
        }
    }
    setMultiTouch(multiTouch) {
        this.multiTouch = multiTouch;
    }
    isMultiTouch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multiTouch;
    }
    setTouch(touch) {
        this.touch = touch;
    }
    isTouch() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touch;
    }
    setMultiTouchDistinct(multiTouchDistinct) {
        this.multiTouchDistinct = multiTouchDistinct;
    }
    isMultiTouchDistinct() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multiTouchDistinct;
    }
    setTouchScreenType(touchScreenType) {
        this.touchScreenType = touchScreenType;
    }
    getTouchScreenType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touchScreenType;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("TouchScreen: ");
        stringBuffer.appendboolean(this.isTouch());
        stringBuffer.append(" MultiTouch: ");
        stringBuffer.appendboolean(this.isMultiTouch());
        stringBuffer.append(" Distinct MultiTouch: ");
        stringBuffer.appendboolean(this.isMultiTouchDistinct());
        stringBuffer.append(" TouchScreenType: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.getTouchScreenType()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
TouchScreenFactory.SINGLETON = new TouchScreenFactory();
