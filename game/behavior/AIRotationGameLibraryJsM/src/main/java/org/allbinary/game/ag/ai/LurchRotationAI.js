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
//not GWT import const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;
import { LurchAI } from '../../../../../org/allbinary/game/ag/ai/tactical/LurchAI.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { AngleIncrementInfo } 
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LurchRotationAI extends LurchAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
        var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.rotationAnimationInterface = rotationAnimationInterfaceCompositeInterface.getRotationAnimationInterface();
        this.update();
    }
    reverse() {
        super.reverse();
        this.update();
    }
    update() {
        if (this.currentRelativeAngle == 0) {
            var rotationAnimationInterface = this.rotationAnimationInterface;
            ;
            var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
            ;
            var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
            ;
            rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.RIGHT_FRAME.intValue());
        }
        else if (this.currentRelativeAngle == 180) {
            var rotationAnimationInterface = this.rotationAnimationInterface;
            ;
            var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
            ;
            var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
            ;
            rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.LEFT_FRAME.intValue());
        }
    }
}
