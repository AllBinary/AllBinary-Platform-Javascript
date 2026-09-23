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
//not GWT import const Graphics
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Paintable } from './Paintable.js';
//not GWT import - same folder const Paintable
export class SimpleTextPaintable extends Paintable {
    constructor(text, basicColor) {
        super();
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.topScoresWidth = 0;
        this.fontHeight = 0;
        this.anchor = Anchor.TOP_LEFT;
        this.text = text;
        this.basicColor = basicColor;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.topScoresWidth = (font.stringWidth(this.text) >> 1);
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var width = this.displayInfoSingleton.getLast()[this.displayInfoSingleton.WIDTH];
        ;
        graphics.setColor(this.getBasicColorP().intValue());
        graphics.drawString(this.text, (width >> 1) - this.topScoresWidth, this.fontHeight, this.anchor);
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setText(text) {
        this.text = text;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    getText() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.text;
    }
}
