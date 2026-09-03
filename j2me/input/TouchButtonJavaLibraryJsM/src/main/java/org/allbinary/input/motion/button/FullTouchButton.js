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
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButton } from './TouchButton.js';
//not GWT import const TouchButtonResource = globalThis.org.allbinary.input.motion.button.TouchButtonResource;
export class FullTouchButton extends TouchButton {
    //@Throws(Exception.constructor)
    static createButton(touchButtonInput, touchButtonResource, rawRectangle, cellPosition, xBorder, yBorder) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new FullTouchButton(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(touchButtonResource.RESOURCE).getInstance(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(touchButtonResource.HINT).getInstance(0), rawRectangle, cellPosition, xBorder, yBorder);
    }
    constructor(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder) {
        super(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder);
        //For kotlin this is before the body of the constructor.
    }
    updateRectangle() {
        try {
            var pointFactory = PointFactory.getInstance();
            ;
            var x = this.rawRectangle.getWidth() * this.cellPositionP.getColumn();
            ;
            var y = this.rawRectangle.getHeight() * this.cellPositionP.getRow();
            ;
            this.rectangleP = new Rectangle(pointFactory.createXY(x, y), this.rawRectangle.getWidth() + (2 * this.xBorder), this.rawRectangle.getHeight() + (2 * this.yBorder));
            var point = this.rectangleP.getPoint();
            ;
            this.animationX = point.getX() + this.xBorder;
            this.animationY = point.getY() + this.yBorder;
            this.hintAnimationY = this.animationY - this.rectangleP.getHeight() >> 1;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "updateRectangle", e);
        }
    }
}
