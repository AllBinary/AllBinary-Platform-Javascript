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
//not GWT import const GPoint
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const TouchButtonInput
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
