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
import { Object } from '../../../../java/lang/Object.js';
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DrawVerticalStringUtil extends Object {
    constructor() {
        super(...arguments);
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.anchor = Anchor.TOP_LEFT;
        this.charHeight = 0;
        this.offsetY = 0;
        this.offsetXArray = NullUtil.getInstance().NULL_INT_ARRAY;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DrawVerticalStringUtil.instance;
    }
    updateMeasurement(graphics, string) {
        var openGLFeatureUtil = OpenGLFeatureUtil.getInstance();
        ;
        var font = graphics.getFont();
        ;
        this.charHeight = font.getHeight();
        this.offsetY = 0;
        if (J2MEUtil.isHTML()) {
            this.charHeight += 1;
        }
        else if (openGLFeatureUtil.isAnyThreed()) {
            this.charHeight += 2;
            if (AndroidUtil.isAndroid()) {
            }
            else {
                this.offsetY = 2 + (this.charHeight * 2 / 3);
            }
        }
        var size = string.length;
        ;
        var aChar;
        ;
        var offsetXArray = new Array(size);
        ;
        for (var index = size - 1; index >= 0; index--) {
            aChar = string[index];
            if (openGLFeatureUtil.isAnyThreed()) {
                offsetXArray[index] = font.charWidth(aChar) / 2;
            }
        }
        this.offsetXArray = offsetXArray;
    }
    paintVerticle(graphics, string, x, y, anchor) {
        var size = string.length;
        ;
        var aChar;
        ;
        for (var index = size - 1; index >= 0; index--) {
            aChar = string[index];
            graphics.drawChar(aChar, x + this.offsetXArray[index], y + (this.charHeight * index) + this.offsetY, anchor);
        }
    }
    drawCenterString(graphics, string, offset, length, x, y) {
        var width = (graphics.getFont().substringWidth(string, offset, length) >> 1);
        ;
        try {
            graphics.drawSubstring(string, offset, length, x - width, y, this.anchor);
            //: 
        }
        catch (e) {
            PreLogUtil.put(new StringMaker().append("Exception: stringLength: ").appendint(string.length).append(" offset: ").appendint(offset).append(" currentLength: ").appendint(length).toString(), this, "drawCenterString");
        }
    }
    drawCenterStrings(graphics, stringArray, maxWidth, x, y) {
        var extraLines = 0;
        ;
        for (var index = 0; index < stringArray.length; index++) {
            var string = stringArray[index];
            ;
            if (string != this.EMPTY_STRING) {
                var width = graphics.getFont().stringWidth(string);
                ;
                var minTotalLines = 1;
                ;
                if (width > maxWidth) {
                    minTotalLines = (width / maxWidth) + 1;
                }
                var linePortion = string.length / minTotalLines;
                ;
                var offset = 0;
                ;
                var currentLength = linePortion;
                ;
                var size = string.length;
                ;
                while (offset < size) {
                    if (offset + currentLength > size) {
                        currentLength = size - offset;
                    }
                    if (offset + currentLength != size) {
                        while (currentLength > 0 && stringArray[index][offset + currentLength] != ' ') {
                            currentLength--;
                        }
                        if (currentLength <= 4) {
                            currentLength = linePortion;
                        }
                    }
                    this.drawCenterString(graphics, string, offset, currentLength, x, y + ((index + extraLines++) * this.charHeight));
                    offset = offset + currentLength;
                    currentLength = linePortion;
                }
                extraLines--;
            }
        }
    }
}
DrawVerticalStringUtil.instance = new DrawVerticalStringUtil();
