/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import const AnimationInterfaceFactoryInterface
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { NullRotationAnimationFactory } from '../../../../../org/allbinary/animation/NullRotationAnimationFactory.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DecalAnimationInterfaceFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DecalAnimationInterfaceFactory.instance;
    }
    //@Throws(Exception.constructor)
    getAnimationFactory(basicGameResources, basicColor) {
        var animationInterfaceFactoryInterface;
        ;
        if (basicColor == BasicColorFactory.getInstance().RED) {
            animationInterfaceFactoryInterface = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(basicGameResources.RESOURCE);
        }
        else {
            animationInterfaceFactoryInterface = NullRotationAnimationFactory.getFactoryInstance();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return animationInterfaceFactoryInterface;
    }
}
DecalAnimationInterfaceFactory.instance = new DecalAnimationInterfaceFactory();
