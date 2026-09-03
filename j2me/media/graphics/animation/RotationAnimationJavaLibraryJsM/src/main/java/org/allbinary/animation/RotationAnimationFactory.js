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
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
//not plain js import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const ProceduralAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.ProceduralAnimationInterfaceFactoryInterface;
import { NullRotationAnimation } from './NullRotationAnimation.js';
//not GWT import const NullRotationAnimation = globalThis.org.allbinary.animation.NullRotationAnimation;
import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
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
