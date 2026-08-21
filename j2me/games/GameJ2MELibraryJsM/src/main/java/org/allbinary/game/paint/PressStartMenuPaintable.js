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
import { AppletUtil } from '../../../../org/allbinary/AppletUtil.js';
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
import { TouchScreenFactory } from '../../../../org/allbinary/input/motion/button/TouchScreenFactory.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PressStartMenuPaintable extends Paintable {
    constructor() {
        super();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.PRESS_START = "Press Screen To Start";
        this.KEY_START = "Press or Click F2 To Begin";
        this.MENU_START = "Press Start From The Menu To Begin";
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.startString = StringUtil.getInstance().EMPTY_STRING;
        this.timeDelayHelper = new TimeDelayHelper(1100);
        this.flash = false;
        this.anchor = Anchor.TOP_LEFT;
        this.beginWidth = 0;
        this.line = 0;
        if (TouchScreenFactory.getInstance().isTouch()) {
            this.startString = this.PRESS_START;
        }
        else if (AppletUtil.isAppletLoader(this)) {
            this.startString = this.KEY_START;
        }
        else {
            this.startString = this.MENU_START;
        }
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.beginWidth = (graphics.getFont().stringWidth(this.startString) >> 1);
        this.line = (4 * MyFontProcessor.defaultCharWidth(font)) + (font.getHeight() >> 1);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    paint(graphics) {
        if (this.timeDelayHelper.isTimeTNT()) {
            if (this.isFlash()) {
                this.setFlash(false);
            }
            else {
                this.setFlash(true);
            }
        }
        if (this.isFlash()) {
            this.myFontProcessor.process(graphics);
            graphics.drawString(this.startString, displayInfo.getLastHalfWidth() - beginWidth, displayInfo.getLastHeight() - line, this.anchor);
        }
    }
    setFlash(flash) {
        this.flash = flash;
    }
    isFlash() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.flash;
    }
}
