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
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font
import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { ABToGBUtil } from '../../../../org/allbinary/game/canvas/ABToGBUtil.js';
//not GWT import const AllBinaryGameCanvas
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const ScaleProperties
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomTextBox2 } from './CustomTextBox2.js';
//not GWT import - same folder const CustomTextBox2
import { CustomTextBoxIndexedAnimation } from './CustomTextBoxIndexedAnimation.js';
//not GWT import - same folder const CustomTextBoxIndexedAnimation
export class CustomTextBoxIndexedAnimationFactory extends Object {
    constructor(fontSize, maxLength) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.scaleProperties = new ScaleProperties();
        this.scaleProperties.scaleHeight = fontSize;
        this.maxLength = maxLength;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var abToGBUtil = ABToGBUtil.getInstance();
        ;
        var abCanvas = abToGBUtil.abCanvas;
        ;
        var font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.scaleProperties.scaleHeight);
        ;
        var customTextBox = new CustomTextBox2(abCanvas.getCustomCommandListener(), StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING, this.maxLength, TextField.ANY, font, abCanvas.getLayerManager().getBackgroundBasicColor(), abCanvas.getLayerManager().getForegroundBasicColor());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CustomTextBoxIndexedAnimation(customTextBox);
    }
    setInitialScale(scaleProperties) {
        var fontSize = this.scaleProperties.scaleHeight;
        ;
        this.scaleProperties = scaleProperties;
        if (this.scaleProperties.scaleHeight < 6) {
            this.scaleProperties.scaleHeight = fontSize;
        }
    }
}
