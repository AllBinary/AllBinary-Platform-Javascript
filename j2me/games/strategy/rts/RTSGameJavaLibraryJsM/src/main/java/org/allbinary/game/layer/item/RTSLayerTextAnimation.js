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
//not GWT import const Image
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RTSLayerTextAnimation extends Animation {
    constructor(text, image) {
        super();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.fontHeight = 0;
        this.text = text;
        this.image = image;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        super.paintXY(graphics, x, y);
        var adjustedCostY = this.image.getHeight() - this.fontHeight;
        ;
        graphics.drawString(this.text, x, y + adjustedCostY, 0);
    }
}
