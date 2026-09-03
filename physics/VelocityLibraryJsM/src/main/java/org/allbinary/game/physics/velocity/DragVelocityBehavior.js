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
//not plain js import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VelocityBehaviorBase } from './VelocityBehaviorBase.js';
//not GWT import const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;
export class DragVelocityBehavior extends VelocityBehaviorBase {
    reduce(velocityProperties, nominator, denominator) {
        if (velocityProperties.getVelocityXBasicDecimalP().getUnscaled() != 0) {
            var basicDecimal = velocityProperties.getVelocityXBasicDecimalP();
            ;
            basicDecimal.multiplyint(nominator);
            basicDecimal.divideint(denominator);
        }
        if (velocityProperties.getVelocityYBasicDecimalP().getUnscaled() != 0) {
            var basicDecimal = velocityProperties.getVelocityYBasicDecimalP();
            ;
            basicDecimal.multiplyint(nominator);
            basicDecimal.divideint(denominator);
        }
    }
    reduceX(velocityProperties, nominator, denominator) {
        var basicDecimal = velocityProperties.getVelocityXBasicDecimalP();
        ;
        if (basicDecimal.getUnscaled() != 0) {
            basicDecimal.multiplyint(nominator);
            basicDecimal.divideint(denominator);
        }
    }
    reduceY(velocityProperties, nominator, denominator) {
        if (velocityProperties.getVelocityYBasicDecimalP().getUnscaled() != 0) {
            var basicDecimal = velocityProperties.getVelocityYBasicDecimalP();
            ;
            basicDecimal.multiplyint(nominator);
            basicDecimal.divideint(denominator);
        }
    }
}
DragVelocityBehavior.instance = new DragVelocityBehavior();
