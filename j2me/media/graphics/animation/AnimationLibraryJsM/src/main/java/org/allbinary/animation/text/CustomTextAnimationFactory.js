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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomTextAnimation } from './CustomTextAnimation.js';
//not GWT import const CustomTextAnimation = globalThis.org.allbinary.animation.text.CustomTextAnimation;
import { AdjustCustomTextAnimation } from './AdjustCustomTextAnimation.js';
//not GWT import const AdjustCustomTextAnimation = globalThis.org.allbinary.animation.text.AdjustCustomTextAnimation;
export class CustomTextAnimationFactory extends Object {
    static createDXY(text, fontSize, dx, dy, animationBehaviorFactory) {
        var customTextAnimationFactory = new CustomTextAnimationFactory(text, fontSize, animationBehaviorFactory);
        ;
        customTextAnimationFactory.dx = dx;
        customTextAnimationFactory.dy = dy;
        //if statement needs to be on the same line and ternary does not work the same way.
        return customTextAnimationFactory;
    }
    constructor(text, fontSize, animationBehaviorFactory) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.basicColor = BasicColorFactory.getInstance().BLACK;
        this.dx = 0;
        this.dy = 0;
        this.scaleProperties = new ScaleProperties();
        this.text = text;
        this.scaleProperties.scaleHeight = Math.round(fontSize) - (fontSize / 4);
        this.initScaleHeight = this.scaleProperties.scaleHeight;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.initScaleHeight);
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var customTextAnimation;
        ;
        if (this.dx != 0 || this.dy != 0) {
            customTextAnimation = new AdjustCustomTextAnimation(this.text, this.scaleProperties.scaleHeight, this.dx, this.dy, this.animationBehaviorFactory.getOrCreateInstance());
        }
        else {
            customTextAnimation = new CustomTextAnimation(this.text, this.scaleProperties.scaleHeight, this.animationBehaviorFactory.getOrCreateInstance());
        }
        customTextAnimation.setBasicColorP(this.basicColor);
        //if statement needs to be on the same line and ternary does not work the same way.
        return customTextAnimation;
    }
    setInitialScale(scaleProperties) {
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.font.stringWidth(this.text);
        ;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.font.getHeight();
        ;
    }
}
