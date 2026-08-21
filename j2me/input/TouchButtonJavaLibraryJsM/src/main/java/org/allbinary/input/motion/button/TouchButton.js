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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
export class TouchButton extends Paintable {
    //@Throws(Exception.constructor)
    static createButton(touchButtonInput, touchButtonResource, rawRectangle, cellPosition, xBorder, yBorder) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TouchButton(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(touchButtonResource.RESOURCE).getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(touchButtonResource.HINT).getInstance(0), rawRectangle, cellPosition, xBorder, yBorder);
    }
    constructor(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.rectangleP = RectangleFactory.SINGLETON;
        this.animationX = 0;
        this.animationY = 0;
        this.hintAnimationY = 0;
        this.touchButtonInput = touchButtonInput;
        this.animationInterface = animationInterface;
        this.hintAnimationInterface = hintAnimationInterface;
        this.rawRectangle = rawRectangle;
        this.cellPositionP = cellPosition;
        this.xBorder = xBorder;
        this.yBorder = yBorder;
        this.updateRectangle();
        this.logUtil.putF(new StringMaker().append("Created: ").append(this.toString()).toString(), this, this.commonStrings.CONSTRUCTOR);
    }
    paintHint(graphics) {
        this.hintAnimationInterface.paintXY(graphics, this.animationX, this.hintAnimationY);
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, this.animationX, this.animationY);
    }
    updateRectangle() {
        try {
            var pointFactory = PointFactory.getInstance();
            ;
            var x = this.rawRectangle.getWidth() * this.cellPositionP.getColumn();
            ;
            var y = this.rawRectangle.getHeight() * this.cellPositionP.getRow();
            ;
            this.rectangleP = new Rectangle(pointFactory.createXY(x + this.xBorder, y + this.yBorder), this.rawRectangle.getWidth(), this.rawRectangle.getHeight());
            var point = this.rectangleP.getPoint();
            ;
            this.animationX = point.getX();
            this.animationY = point.getY();
            this.hintAnimationY = this.animationY - 32;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "updateRectangle", e);
        }
    }
    getCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellPositionP;
    }
    getRectangle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangleP;
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
        stringBuffer.append(stringUtil.toString(this.getRectangle()));
        stringBuffer.append(" CellPosition: ");
        stringBuffer.append(stringUtil.toString(this.cellPositionP));
        stringBuffer.append(" xBorder: ");
        stringBuffer.appendint(this.xBorder);
        stringBuffer.append(" yBorder: ");
        stringBuffer.appendint(this.yBorder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
