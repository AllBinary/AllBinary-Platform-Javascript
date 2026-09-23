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
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import - same folder const ProceduralAnimationInterfaceFactoryInterface
import { VectorExplosionGenerator } from './VectorExplosionGenerator.js';
//not GWT import - same folder const VectorAnimationInterface
import { VectorRotationAnimation } from './VectorRotationAnimation.js';
//not GWT import - same folder const Animation
export class VectorExplosionAnimationFactory extends Object {
    constructor(basicColor, animationBehaviorFactory) {
        super();
        this.vectorExplosionGenerator = VectorExplosionGenerator.getInstance();
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.setBasicColorP(basicColor);
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        var vectorRotationAnimationInterface = animationInterface;
        ;
        var frame = vectorRotationAnimationInterface.getFrame();
        ;
        var framePoints = vectorRotationAnimationInterface.getPoints(frame);
        ;
        var points = this.vectorExplosionGenerator.getInstance(framePoints, 6, this.vectorExplosionGenerator.ROTATION);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VectorRotationAnimation(points, this.getBasicColorP(), this.animationBehaviorFactory.getOrCreateInstance());
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
}
