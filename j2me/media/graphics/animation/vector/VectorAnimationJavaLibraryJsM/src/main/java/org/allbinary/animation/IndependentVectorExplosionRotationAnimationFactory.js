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
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const VectorAnimationFactoryInterface = globalThis.org.allbinary.animation.VectorAnimationFactoryInterface;
import { VectorRotationGenerator } from './VectorRotationGenerator.js';
//not GWT import const VectorRotationGenerator = globalThis.org.allbinary.animation.VectorRotationGenerator;
import { VectorExplosionGenerator } from './VectorExplosionGenerator.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
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
