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
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { VectorRotationGenerator } from './VectorRotationGenerator.js';
import { VectorExplosionGenerator } from './VectorExplosionGenerator.js';
export class IndependentVectorExplosionRotationAnimationFactory extends Object {
    constructor(vectorInfo, basicColor, vectorAnimationFactoryInterface) {
        super();
        this.framePoints = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
        this.vectorExplosionGenerator = VectorExplosionGenerator.getInstance();
        this.vectorInfo = vectorInfo;
        this.basicColor = basicColor;
        this.vectorAnimationFactoryInterface = vectorAnimationFactoryInterface;
        this.init();
    }
    //@Throws(Exception.constructor)
    init() {
        this.framePoints = VectorRotationGenerator.getInstance().getInstance(this.vectorInfo);
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        var frame = 0;
        ;
        if (animationInterface !=
            null) {
            var rotationAnimationInterface = animationInterface;
            ;
            frame = rotationAnimationInterface.getFrame();
        }
        var points = this.vectorExplosionGenerator.getInstance(this.framePoints[frame], 6, this.vectorExplosionGenerator.ROTATION);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.vectorAnimationFactoryInterface.getInstance(points, this.basicColor);
        ;
    }
}
