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
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DrawStringUtil extends Object {
    constructor() {
        super(...arguments);
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.anchor = Anchor.TOP_LEFT;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DrawStringUtil.instance;
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
    drawCenterStrings(graphics, stringArray, maxWidth, charHeight, x, y) {
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
                    this.drawCenterString(graphics, string, offset, currentLength, x, y + ((index + extraLines++) * charHeight));
                    offset = offset + currentLength;
                    currentLength = linePortion;
                }
                extraLines--;
            }
        }
    }
}
DrawStringUtil.instance = new DrawStringUtil();
