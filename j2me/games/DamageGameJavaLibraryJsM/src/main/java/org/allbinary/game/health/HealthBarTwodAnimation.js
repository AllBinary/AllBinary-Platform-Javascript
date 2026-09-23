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
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HealthBarAnimation } from './HealthBarAnimation.js';
//not GWT import - same folder const HealthBarAnimation
export class HealthBarTwodAnimation extends HealthBarAnimation {
    constructor(layerInterface, location) {
        super(layerInterface, location);
        //For kotlin this is before the body of the constructor.
    }
    paintXY(graphics, x, y) {
        var ax = this.allbinaryLayer.getViewPosition().getX();
        ;
        this.basicSetColorUtil.setBasicColorP3(graphics, this.basicColor, this.colorP);
        graphics.fillRect(ax, this.getY() - 1, this.x2, this.thickness);
    }
}
