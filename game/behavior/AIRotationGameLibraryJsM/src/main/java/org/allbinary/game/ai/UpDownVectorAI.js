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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicAI } from './BasicAI.js';
export class UpDownVectorAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.index = 0;
        //For kotlin this is before the body of the constructor.
        var velocityInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.velocityInterface = velocityInterfaceCompositeInterface.getVelocityProperties();
        this.velocityInterface.getVelocityYBasicDecimalP().setint(0);
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var y = this.getOwnerLayerInterface().getHeight() * 270;
        ;
        if (this.index < 5) {
            var basicDecimal = this.velocityInterface.getVelocityYBasicDecimalP();
            ;
            basicDecimal.setint(0);
            basicDecimal.addint(y);
            this.index++;
        }
        else if (this.index < 10) {
            var basicDecimal = this.velocityInterface.getVelocityYBasicDecimalP();
            ;
            basicDecimal.setint(0);
            basicDecimal.subtractint(y);
            this.index++;
        }
        else {
            this.index = 0;
            this.processAI(allBinaryLayerManager);
        }
    }
}
