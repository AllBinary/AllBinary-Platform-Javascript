/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const Graphics
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const CustomTextBox
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import - same folder const TextInterface
import { TextChangeListener } from './TextChangeListener.js';
//not GWT import - same folder const TextChangeListener
export class CustomTextBoxIndexedAnimation extends IndexedAnimation {
    constructor(customTextBox) {
        super(AnimationBehavior.getInstance());
        this.lastText = StringUtil.getInstance().INIT_STRING;
        this.hasChanged = true;
        this.textChangeListener = TextChangeListener.getInstance();
        //For kotlin this is before the body of the constructor.
        this.customTextBox = customTextBox;
    }
    setBasicColorP(basicColor) {
        this.customTextBox.getTextFieldItem().setForegroundBasicColorP(basicColor);
    }
    setBackgroundBasicColorP(basicColor) {
        this.customTextBox.getTextFieldItem().setBackgroundBasicColorP(basicColor);
    }
    setTextWithOnMeasure(text, textChangeListener) {
        this.setText(text);
        this.textChangeListener = textChangeListener;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.textChangeListener.onMeasure();
        this.textChangeListener = TextChangeListener.getInstance();
    }
    setText(text) {
        if (this.lastText != text) {
            this.hasChanged = true;
            this.lastText = text;
            this.customTextBox.getTextFieldItem().setString(text);
        }
    }
    getText() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customTextBox.getTextFieldItem().getString();
        ;
    }
    onEventRaw(keyCode, deviceId, repeated) {
        this.customTextBox.onEventRaw(keyCode, deviceId, repeated);
    }
    getFontHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customTextBox.getTextFieldItem().getFontHeight();
        ;
    }
    paintXY(graphics, x, y) {
        this.customTextBox.paintXY(graphics, x, y);
    }
    paintThreedXYZ(graphics, x, y, z) {
    }
}
