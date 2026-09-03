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
//not GWT import const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ReverseVelocityBoundsVisitor extends Object {
    constructor(layerInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.layerInterface = layerInterface;
        var velocityInterfaceCompositeInterface = layerInterface;
        ;
        this.velocityInterface = velocityInterfaceCompositeInterface.getVelocityProperties();
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerInterface.getXP();
        ;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerInterface.getYP();
        ;
    }
    minX() {
        if (this.velocityInterface.getVelocityXBasicDecimalP().getUnscaled() < 0)
            this.velocityInterface.getVelocityXBasicDecimalP().multiplyint(-1);
    }
    maxX() {
        if (this.velocityInterface.getVelocityXBasicDecimalP().getUnscaled() > 0)
            this.velocityInterface.getVelocityXBasicDecimalP().multiplyint(-1);
    }
    minY() {
        if (this.velocityInterface.getVelocityYBasicDecimalP().getUnscaled() < 0)
            this.velocityInterface.getVelocityYBasicDecimalP().multiplyint(-1);
    }
    maxY() {
        if (this.velocityInterface.getVelocityYBasicDecimalP().getUnscaled() > 0)
            this.velocityInterface.getVelocityYBasicDecimalP().multiplyint(-1);
    }
}
