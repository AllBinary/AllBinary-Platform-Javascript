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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
import { FontDebugFactory } from '../../../../org/allbinary/graphics/font/FontDebugFactory.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TextAnimation } from './TextAnimation.js';
export class CustomTextAnimation extends TextAnimation {
    constructor(text, fontSize, animationBehavior) {
        super(text, animationBehavior);
        this.fontDebugFactory = FontDebugFactory.getInstance();
        this.lastText = StringUtil.getInstance().INIT_STRING;
        this.hasChanged = true;
        this.textWidth = 0;
        //For kotlin this is before the body of the constructor.
        this.fontSize = fontSize;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, fontSize);
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        var existingFont = graphics.getFont();
        ;
        this.fontDebugFactory.setFont(this.font, graphics);
        super.paintXYNoUpdate(graphics, x, y);
        this.fontDebugFactory.setFont(existingFont, graphics);
    }
    setScale(scaleX, scaleY) {
        if (scaleX != scaleY) {
            throw new RuntimeException();
        }
        this.hasChanged = true;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, Math.round((this.fontSize * scaleX)));
    }
    setText(text) {
        if (this.lastText != text) {
            this.hasChanged = true;
            this.lastText = text;
            super.setText(text);
        }
    }
    getText() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastText;
    }
    getWidth() {
        if (this.hasChanged) {
            this.textWidth = this.font.stringWidth(this.textArrayP[0]);
            this.hasChanged = false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.textWidth;
    }
    getFontHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.font.getHeight();
        ;
    }
}
