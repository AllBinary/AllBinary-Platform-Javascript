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
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CurrentlyPressedTouchButtonSingleton } from './CurrentlyPressedTouchButtonSingleton.js';
//not GWT import - same folder const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;
export class CurrentlyPressedTouchButtonSingletonDebug extends CurrentlyPressedTouchButtonSingleton {
    constructor() {
        super(...arguments);
        this.string = StringUtil.getInstance().EMPTY_STRING;
        this.listString = StringUtil.getInstance().EMPTY_STRING;
        this.append = StringUtil.getInstance().EMPTY_STRING;
        this.PRESSED_AND_FIRED = "pressed & fired";
        this.PRESSED_AND_NOT_FIRED = "pressed in button but not fired";
        this.ASSOCIATED_RELEASED_AND_FIRED = "assoc. rel & fired";
        this.RELEASED_AND_FIRED = "rel & fired 1";
        this.RELEASED_AND_FIRED_2 = "rel & fired 2";
        this.RELEASED_AND_NOT_FIRED = "rel & not fired";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CurrentlyPressedTouchButtonSingletonDebug.instanceC;
    }
    appendTouchButtonInput(append, touchButtonInput) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(touchButtonInput.toString());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(append);
        this.append = stringBuffer.toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
    }
    append(append) {
        this.append = new StringMaker().append(this.append).append(append).toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
    }
    clearLog(x, y) {
        this.append = new StringMaker().append(GPoint.toStringStatic(x, y, 0)).append(CommonSeps.getInstance().SPACE).toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
    }
    releaseAndNotFired() {
        this.append(this.RELEASED_AND_NOT_FIRED);
    }
    releaseAndFired(touchButtonInput) {
        this.appendTouchButtonInput(this.RELEASED_AND_FIRED, touchButtonInput);
    }
    releaseAndFired2(touchButtonInput) {
        this.appendTouchButtonInput(this.RELEASED_AND_FIRED_2, touchButtonInput);
    }
    releaseAndFiredAssociated(touchButtonInput) {
        this.appendTouchButtonInput(this.ASSOCIATED_RELEASED_AND_FIRED, touchButtonInput);
    }
    pressedAndFired(touchButtonInput) {
        this.appendTouchButtonInput(this.PRESSED_AND_FIRED, touchButtonInput);
    }
    pressedAndNotFired(touchButtonInput) {
        this.appendTouchButtonInput(this.PRESSED_AND_NOT_FIRED, touchButtonInput);
    }
    removeAt(index) {
        var touchButtonInput = super.removeAt(index);
        ;
        this.listString = this.list.toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
        //if statement needs to be on the same line and ternary does not work the same way.
        return touchButtonInput;
    }
    remove(touchButtonInput) {
        var isRemoved = super.remove(touchButtonInput);
        ;
        this.listString = this.list.toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
        //if statement needs to be on the same line and ternary does not work the same way.
        return isRemoved;
    }
    add(touchButtonInput) {
        super.add(touchButtonInput);
        this.listString = this.list.toString();
        this.string = new StringMaker().append(this.listString).append(this.append).toString();
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.string;
    }
}
CurrentlyPressedTouchButtonSingletonDebug.instanceC = new CurrentlyPressedTouchButtonSingletonDebug();
