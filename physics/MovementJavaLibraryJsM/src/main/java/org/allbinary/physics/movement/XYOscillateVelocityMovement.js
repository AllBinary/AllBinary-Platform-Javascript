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
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
//not GWT import const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;
//not plain js import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import const BasicConstantVelocityMovement = globalThis.org.allbinary.physics.movement.BasicConstantVelocityMovement;
export class XYOscillateVelocityMovement extends BasicConstantVelocityMovement {
    constructor(speedBasicDecimal, oscillateMin, oscillateMax) {
        super(speedBasicDecimal, new VelocityProperties(Math.round(speedBasicDecimal.getUnscaled()), Math.round(speedBasicDecimal.getUnscaled())));
        this.oscillate = 0;
        this.oscillatePositive = false;
        //For kotlin this is before the body of the constructor.
        this.oscillateMin = oscillateMin;
        this.oscillateMax = oscillateMax;
    }
    //@Throws(Exception.constructor)
    process(layer) {
        super.process(layer);
        if (this.oscillate < this.oscillateMin) {
            this.oscillatePositive = true;
            this.getVelocityProperties().getVelocityYBasicDecimalP().addint(3000);
        }
        else if (this.oscillate > this.oscillateMax) {
            this.oscillatePositive = false;
            this.getVelocityProperties().getVelocityYBasicDecimalP().subtractint(3000);
        }
        if (this.oscillatePositive) {
            this.oscillate++;
            this.getVelocityProperties().getVelocityXBasicDecimalP().addint(5000);
        }
        else {
            this.oscillate--;
            this.getVelocityProperties().getVelocityXBasicDecimalP().subtractint(5000);
        }
    }
}
