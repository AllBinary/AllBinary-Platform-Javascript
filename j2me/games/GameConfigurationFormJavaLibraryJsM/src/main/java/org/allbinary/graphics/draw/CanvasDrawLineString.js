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
//not GWT import const Graphics
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DrawStringUtil } from './DrawStringUtil.js';
//not GWT import - same folder const DrawStringUtil
export class CanvasDrawLineString extends Object {
    constructor(x, y) {
        super();
        this.drawStringUtil = DrawStringUtil.getInstance();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.fontHeight = 0;
        this.x = x;
        this.y = y;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics, string, line) {
        this.myFontProcessor.process(graphics);
        this.drawStringUtil.drawCenterString(graphics, string, 0, string.length, this.x, this.y + (line * this.fontHeight));
    }
}
CanvasDrawLineString.NULL_CANVAS_DRAW_LINE_STRING = new CanvasDrawLineString(0, 0);
