/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//not GWT import - same folder const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
export class MultiSelectPaintable extends SelectionHudPaintable {
    constructor() {
        super();
        this.rootNameList = new BasicArrayListD();
        this.totalCharArray = NullUtil.getInstance().NULL_CHAR_ARRAY;
        this.rootNamesString = StringUtil.getInstance().EMPTY_STRING;
        this.TOTAL = "Total Selected: ";
        this.backgroundColor = BasicColorFactory.getInstance().GREY.intValue();
        this.totalWidth = 0;
        this.textLine2Y = 0;
    }
    updateMeasurement(graphics) {
        super.updateMeasurement(graphics);
        var font = graphics.getFont();
        ;
        this.totalWidth = font.stringWidth(this.TOTAL);
        this.textLine2Y = (this.y + font.getHeight());
    }
    update(list) {
        this.clear();
        var size = list.size();
        ;
        this.totalCharArray = this.getPrimitiveLongUtil().getCharArray(size);
        for (var index = list.size() - 1; index >= 0; index--) {
            var rtsLayer = list.get(index);
            ;
            if (!this.rootNameList.contains(rtsLayer.getRootName())) {
                this.rootNameList.add(rtsLayer.getRootName());
            }
        }
        var COMMA_SEP = CommonSeps.getInstance().COMMA_SEP;
        ;
        var stringBuffer = new StringMaker();
        ;
        for (var index = this.rootNameList.size() - 1; index >= 0; index--) {
            var rootName = this.rootNameList.get(index);
            ;
            stringBuffer.append(rootName);
            if (index != 0) {
                stringBuffer.append(COMMA_SEP);
            }
        }
        this.rootNamesString = stringBuffer.toString();
    }
    clear() {
        this.rootNameList.clear();
    }
    paint(graphics) {
        graphics.setColor(this.backgroundColor);
        graphics.drawRect(this.getX(), this.y, this.getWidth(), this.getHeight());
        graphics.setColor(this.getColor());
        graphics.drawString(this.TOTAL, this.textX, this.y, 0);
        graphics.drawChars(this.totalCharArray, 0, this.getPrimitiveLongUtil().getCurrentTotalDigits(), this.textX + this.totalWidth, this.y, 0);
        graphics.drawString(this.rootNamesString, this.textX, this.textLine2Y, 0);
    }
}
