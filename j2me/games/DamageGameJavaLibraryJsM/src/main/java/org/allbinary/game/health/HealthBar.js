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
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
export class HealthBar extends Paintable {
    constructor(layerInterface, healthInterface, animationInterface, direction) {
        super();
        this.allbinaryLayer = layerInterface;
        this.animationInterface = animationInterface;
        this.healthInterface = healthInterface;
        this.healthInterface.addListener(this);
        this.onHealthChange();
    }
    onHealthChange() {
        this.animationInterface.onHealthChange(this.healthInterface.getHealth() * this.allbinaryLayer.getWidth() / this.healthInterface.getMaxHealth());
    }
    paint(graphics) {
        this.animationInterface.paintXY(graphics, 0, 0);
    }
    paintThreed(graphics) {
        this.animationInterface.paintThreedXYZ(graphics, 0, 0, 0);
    }
}
