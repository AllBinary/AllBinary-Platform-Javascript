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
import { Object } from '../../../java/lang/Object.js';
import { GameConfigurationCentral } from '../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
//not GWT import - same folder const ProceduralAnimationInterfaceFactoryInterface
import { NullRotationAnimation } from './NullRotationAnimation.js';
//not GWT import - same folder const NullRotationAnimation
import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const Animation
export class RotationAnimationFactory extends Object {
    static createFactory() {
        var totalAngle = AngleFactory.getInstance().TOTAL_ANGLE;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new RotationAnimationFactory(totalAngle, (totalAngle / GameConfigurationCentral.getInstance().getGameControlFidelity()));
    }
    constructor(totalAngle, angleIncrement) {
        super();
        this.totalAngle = totalAngle;
        this.angleIncrement = angleIncrement;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
        ;
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
        ;
    }
    setInitialScale(scaleProperties) {
    }
}
