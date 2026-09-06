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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const TechEventListenerInterface = globalThis.org.allbinary.game.rts.technology.event.TechEventListenerInterface;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RTSLayerCostAnimation extends Animation {
    constructor(image, layerInterfaceFactoryInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(10000);
        this.DOLLAR = "$";
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.costString = NullUtil.getInstance().NULL_CHAR_ARRAY;
        this.len = 0;
        this.adjustedCostX = 0;
        this.fontHeight = 0;
        this.image = image;
        this.layerInterfaceFactoryInterface = layerInterfaceFactoryInterface;
        this.update();
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.adjustedCostX = font.stringWidth(this.DOLLAR);
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    onEvent(event) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onTechEvent(event) {
        try {
            this.update();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "onTechEvent", e);
        }
    }
    //@Throws(Exception.constructor)
    update() {
        this.len = 0;
        this.costString = this.primitiveLongUtil.getCharArray(this.layerInterfaceFactoryInterface.getCost());
        this.len = this.primitiveLongUtil.getCurrentTotalDigits();
    }
    paintXY(graphics, x, y) {
        this.myFontProcessor.process(graphics);
        super.paintXY(graphics, x, y);
        var adjustedCostY = this.image.getHeight() - this.fontHeight;
        ;
        var xa = x + 2;
        ;
        graphics.drawString(this.DOLLAR, xa, y + adjustedCostY, 0);
        graphics.drawChars(this.costString, 0, this.len, x + this.adjustedCostX, y + adjustedCostY, 0);
    }
}
