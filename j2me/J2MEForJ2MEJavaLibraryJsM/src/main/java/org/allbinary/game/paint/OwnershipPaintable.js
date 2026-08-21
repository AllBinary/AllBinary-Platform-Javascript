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
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2MEForJ2ME
export class OwnershipPaintable extends Paintable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OwnershipPaintable();
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.COPYRIGHT = "AllBinary Copyright (c) 2011";
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.color = this.basicColor.intValue();
        this.anchor = Anchor.TOP_LEFT;
        this.COPYRIGHT_Y = 0;
        this.beginWidth = 0;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.COPYRIGHT_Y = 2 * font.getHeight();
        this.beginWidth = (font.stringWidth(this.COPYRIGHT) >> 1);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
        this.color = basicColor.intValue();
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        graphics.setColor(this.color);
        var halfWidth = this.displayInfo.getLastHalfWidth();
        ;
        var height = this.displayInfo.getLastHeight();
        ;
        graphics.drawString(this.COPYRIGHT, halfWidth - this.beginWidth, height - COPYRIGHT_Y, this.anchor);
    }
}
