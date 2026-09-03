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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const TouchButtonInput = globalThis.org.allbinary.input.motion.button.TouchButtonInput;
export class TouchButton extends Paintable {
    constructor(touchButtonInput, animationInterface, rawRectangle, cellPosition, xBorder, yBorder) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.rectangle = RectangleFactory.SINGLETON;
        this.animationX = 0;
        this.animationY = 0;
        this.touchButtonInput = touchButtonInput;
        this.animationInterface = animationInterface;
        this.rawRectangle = rawRectangle;
        this.cellPosition = cellPosition;
        this.xBorder = xBorder;
        this.yBorder = yBorder;
        this.updateRectangle();
        this.logUtil.putF(new StringMaker().append("Created: ").append(this.toString()).toString(), this, this.commonStrings.CONSTRUCTOR);
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, animationX, this.animationY);
    }
    updateRectangle() {
        try {
            var x = this.rawRectangle.getWidth() * this.cellPosition.getColumn();
            ;
            var y = this.rawRectangle.getHeight() * this.cellPosition.getRow();
            ;
            var pointFactory = PointFactory.getInstance();
            ;
            this.rectangle = new Rectangle(pointFactory.createXY(x + this.xBorder, y + this.yBorder), this.rawRectangle.getWidth(), this.rawRectangle.getHeight());
            var point = this.rectangle.getPoint();
            ;
            this.animationX = point.getX();
            this.animationY = point.getY();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "updateRectangle", e);
        }
    }
    getCellPositionP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellPosition;
    }
    getRectangleP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangle;
    }
    getTouchButtonInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.touchButtonInput;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        stringBuffer.append("TouchButton: ");
        stringBuffer.append(stringUtil.toString(this.rectangle));
        stringBuffer.append(" CellPosition: ");
        stringBuffer.append(stringUtil.toString(this.cellPosition));
        stringBuffer.append(" xBorder: ");
        stringBuffer.appendint(this.xBorder);
        stringBuffer.append(" yBorder: ");
        stringBuffer.appendint(this.yBorder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
