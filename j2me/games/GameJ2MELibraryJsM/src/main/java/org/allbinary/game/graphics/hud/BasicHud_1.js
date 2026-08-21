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
import { Object } from '../../../../../java/lang/Object.js';
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HudGraphicsPosition } from './HudGraphicsPosition.js';
import { BasicHudFactory } from './BasicHudFactory.js';
export class BasicHud_1 extends Object {
    constructor(location, direction, bufferZone, basicColor) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.canvasStrings = CanvasStrings.getInstance();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.location = 0;
        this.direction = 0;
        this.bufferZone = 0;
        this.hudGraphicsPosition = HudGraphicsPosition.NULL_HUD_GRAPHICS_POSITION;
        this.x = 0;
        this.y = 0;
        this.basicColor = BasicColorFactory.getInstance().BLACK;
        this.updateMaxWidth = 0;
        this.updateMaxHeight = 0;
        this.offsetY = 0;
        this.setLocation(location);
        this.setDirection(direction);
        this.setBufferZone(bufferZone);
        this.onDisplayChangeEvent(DisplayInfoSingleton.getInstance().displayChangeEvent);
        this.setBasicColorP(basicColor);
        this.color = basicColor.intValue();
    }
    updateMeasurement(graphics) {
        try {
            this.hudGraphicsPosition = this.getHudGraphicsPositionWH(this.displayInfo.getLastWidth(), this.displayInfo.getLastHeight(), this.updateMaxWidth, this.updateMaxHeight);
            this.x = this.hudGraphicsPosition.getPoint().getX();
            this.setY(this.hudGraphicsPosition.getPoint().getY());
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT, e);
        }
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    getLocation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.location;
    }
    getDirection() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.direction;
    }
    //@Throws(Exception.constructor)
    getHudGraphicsPositionWH(width, height, maxWidth, maxHeight) {
        var x = 0;
        ;
        var y = 0;
        ;
        var anchor = 0;
        ;
        var basicHudFactory = BasicHudFactory.getInstance();
        ;
        if (basicHudFactory.BOTTOMLEFT == this.getLocation()) {
            x = this.bufferZone + 2;
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.LEFT;
        }
        else if (basicHudFactory.BOTTOMRIGHT == this.getLocation()) {
            x = width - maxWidth;
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.RIGHT;
        }
        else if (basicHudFactory.TOPLEFT == this.getLocation()) {
            x = this.bufferZone + 2;
            y = this.bufferZone + 5;
            anchor = Anchor.TOP_LEFT;
        }
        else if (basicHudFactory.TOPRIGHT == this.getLocation()) {
            x = width - maxWidth;
            y = this.bufferZone + 5;
            anchor = Graphics.TOP & Graphics.RIGHT;
        }
        else if (basicHudFactory.TOPCENTER == this.getLocation()) {
            x = ((width - maxWidth) / 2);
            y = this.bufferZone + 5;
            anchor = Graphics.TOP & Graphics.HCENTER;
        }
        else if (basicHudFactory.BOTTOMCENTER == this.getLocation()) {
            x = ((width - maxWidth) / 2);
            y = height - maxHeight - this.bufferZone;
            anchor = Graphics.BOTTOM & Graphics.HCENTER;
        }
        else if (basicHudFactory.ABSOLUTE == this.getLocation()) {
            x = maxHeight;
            y = maxWidth;
            anchor = 0;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new HudGraphicsPosition(this.getPoint(x, y), anchor);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onDisplayChangeEvent(displayChangeEvent) {
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    getPoint(x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PointFactory.getInstance().createXY(x, y);
        ;
    }
    getBufferZone() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bufferZone;
    }
    setBufferZone(bufferZone) {
        this.bufferZone = bufferZone;
    }
    setLocation(location) {
        this.location = location;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    getHudGraphicsPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hudGraphicsPosition;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.color;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setY(y) {
        this.y = y;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    paintSSO(graphics, string, string2, offset) {
        this.myFontProcessor.process(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        graphics.drawString(string, this.x, this.getY(), this.hudGraphicsPosition.getAnchor());
        graphics.drawString(string2, this.x + offset, this.getY(), this.hudGraphicsPosition.getAnchor());
    }
    paintSSOO(graphics, string, string2, offset, offset2) {
        this.myFontProcessor.process(graphics);
        graphics.setColor(this.getColor());
        graphics.drawString(string, this.x + offset, this.getY(), this.hudGraphicsPosition.getAnchor());
        graphics.drawString(string2, this.x + offset2, this.getY(), this.hudGraphicsPosition.getAnchor());
    }
    paintDXY(graphics, charArray, offset, len, charArray2, offset2, len2, xOffset, xOffset2) {
        this.myFontProcessor.process(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        var y = this.getY();
        ;
        graphics.drawChars(charArray, offset, len, this.x + xOffset, y, this.hudGraphicsPosition.getAnchor());
        graphics.drawChars(charArray2, offset2, len2, this.x + xOffset2, y, this.hudGraphicsPosition.getAnchor());
    }
    paintDX(graphics, charArray, offset, len, charArray2, offset2, len2, xOffset) {
        this.myFontProcessor.process(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        var y = this.getY();
        ;
        graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition.getAnchor());
        graphics.drawChars(charArray2, offset2, len2, this.x + xOffset, y, this.hudGraphicsPosition.getAnchor());
    }
    paintOffsetAndLength(graphics, charArray, offset, len) {
        this.myFontProcessor.process(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        var y = this.getY();
        ;
        graphics.drawChars(charArray, offset, len, this.x, y, this.hudGraphicsPosition.getAnchor());
    }
    paint(graphics, string) {
        this.myFontProcessor.process(graphics);
        this.basicSetColorUtil.setBasicColorP(graphics, this.getBasicColorP());
        var y = this.getY() + this.offsetY;
        ;
        graphics.drawString(string, this.x, y, this.hudGraphicsPosition.getAnchor());
    }
}
