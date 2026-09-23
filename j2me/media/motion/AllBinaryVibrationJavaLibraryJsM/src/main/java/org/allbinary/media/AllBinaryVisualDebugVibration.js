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
import { Integer } from '../../../java/lang/Integer.js';
//not GWT import const Graphics
import { Anchor } from '../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor
import { DisplayInfoSingleton } from '../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryVibrationME } from './AllBinaryVibrationME.js';
//not GWT import - same folder const AllBinaryVibrationME
export class AllBinaryVisualDebugVibration extends AllBinaryVibrationME {
    constructor() {
        super(...arguments);
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);
        this.VIBRATING = "Vibrating";
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.anchor = Anchor.TOP_LEFT;
        this.width = 0;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.width = font.stringWidth(this.VIBRATING);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    vibrate(duration, type, volume) {
        this.timeDelayHelper.delay = duration;
    }
    paint(graphics) {
        if (this.timeDelayHelper.isTimeTNT()) {
            this.timeDelayHelper.delay = Integer.MAX_VALUE;
            this.myFontProcessor.process(graphics);
            graphics.drawString(this.VIBRATING, this.displayInfoSingleton.getLastHalfWidth() - (width >> 1), 0, this.anchor);
        }
    }
}
