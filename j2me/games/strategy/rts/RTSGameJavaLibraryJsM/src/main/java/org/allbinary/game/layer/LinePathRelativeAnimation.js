/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const Layer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LinePathAnimation } from './LinePathAnimation.js';
//not GWT import - same folder const LinePathAnimation
export class LinePathRelativeAnimation extends LinePathAnimation {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LinePathRelativeAnimation.instanceC;
    }
    paint(graphics, point, nextPoint, tiledLayer) {
        graphics.drawLine(nextPoint.getX() - tiledLayer.getXP(), nextPoint.getY() - tiledLayer.getYP(), point.getX() - tiledLayer.getXP(), point.getY() - tiledLayer.getYP());
    }
}
LinePathRelativeAnimation.instanceC = new LinePathRelativeAnimation();
