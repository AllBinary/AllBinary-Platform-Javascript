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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HelpPaintable extends Paintable {
    constructor(title, backgroundBasicColor, basicColor) {
        super();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.anchor = Anchor.TOP_LEFT;
        this.inputInfo = StringUtil.getInstance().getArrayInstance();
        this.titleBeginWidth = 0;
        this.beginWidthArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.charHeight = 0;
        this.title = title;
        this.basicColor = basicColor;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.titleBeginWidth = (font.stringWidth(this.title) >> 1);
        this.charHeight = font.getHeight();
        var size = this.inputInfo.length;
        ;
        for (var index = 0; index < size; index++) {
            this.beginWidthArray[index] = (font.stringWidth(this.inputInfo[index]) >> 1);
        }
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    setInputInfoP(inputInfo) {
        this.inputInfo = inputInfo;
        this.beginWidthArray = new Array(this.inputInfo.length);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var halfWidth = this.displayInfo.getLastHalfWidth();
        ;
        graphics.setColor(this.basicColor.intValue());
        graphics.drawString(this.title, halfWidth - this.titleBeginWidth, this.charHeight, this.anchor);
        var size = this.inputInfo.length;
        ;
        for (var index = 0; index < size; index++) {
            graphics.drawString(this.inputInfo[index], halfWidth - this.beginWidthArray[index], (index + 3) * this.charHeight, this.anchor);
        }
    }
}
