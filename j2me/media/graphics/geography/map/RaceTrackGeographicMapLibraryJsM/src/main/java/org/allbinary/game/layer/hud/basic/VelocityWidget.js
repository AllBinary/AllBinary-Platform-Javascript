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
import { OpenGLFeatureUtil } from '../../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil
import { BasicHud } from '../../../../../../org/allbinary/game/graphics/hud/BasicHud.js';
//not GWT import const BasicColor
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
import { PrimitiveLongSingleton } from '../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
//not GWT import const PrimitiveLongSingleton
import { PrimitiveLongUtil } from '../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
//not GWT import const PrimitiveLongUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VelocityWidget extends BasicHud {
    constructor(powerOfTenVelocity, location, direction, basicColor) {
        super(location, direction, 2, basicColor);
        this.KILOMETERS_PER_HOUR_STR = [' ', 'k', 'm', '/', 'h'];
        this.totalChars = this.KILOMETERS_PER_HOUR_STR.length;
        this.string = PrimitiveLongSingleton.getInstance().ZERO;
        this.totalDigits = 1;
        this.offset = 0;
        this.offset2 = 0;
        //For kotlin this is before the body of the constructor.
        this.powerOfTenVelocity = powerOfTenVelocity;
        this.maxVelocity = powerOfTenVelocity;
        this.velocity = 0;
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(powerOfTenVelocity);
        this.updateMaxHeight = 14;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.updateMaxWidth = font.getSize() * (5 + MathUtil.getInstance().getTotalDigits(this.powerOfTenVelocity) + 1);
        super.updateMeasurement(graphics);
        this.offset = MyFontProcessor.defaultStringWidth(font, this.primitiveLongUtil.getMaxDigits()) + MyFontProcessor.defaultStringWidth(font, 2);
        this.offset2 = this.offset - MyFontProcessor.defaultStringWidth(font, this.totalDigits) - MyFontProcessor.defaultStringWidth(font, 2);
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocity;
    }
    add(value) {
        this.set(this.velocity + value);
    }
    set(value) {
        var lastVelocity = this.velocity;
        ;
        this.velocity = value;
        if (this.velocity > this.maxVelocity) {
            this.velocity = 0;
        }
        if (lastVelocity != this.velocity) {
            this.string = this.primitiveLongUtil.getCharArray(this.velocity * 18);
            if (OpenGLFeatureUtil.getInstance().isAnyThreed()) {
                this.totalDigits = this.primitiveLongUtil.getCurrentTotalDigits() + 1;
            }
            else {
                this.totalDigits = this.primitiveLongUtil.getCurrentTotalDigits();
            }
            this.myFontProcessor = this.updateMyFontProcessor;
        }
    }
    reduce(value) {
        this.set(this.velocity - value);
    }
    paint(graphics) {
        super.paintDXY(graphics, this.string, 0, this.totalDigits, this.KILOMETERS_PER_HOUR_STR, 0, this.totalChars, this.offset2, this.offset);
    }
}
