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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
import { ExplosionResources } from '../../../../../org/allbinary/game/combat/damage/ExplosionResources.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WeaponLayer } from './WeaponLayer.js';
import { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';
export class SimpleWeaponLayer extends WeaponLayer {
    //@Throws(Exception.constructor)
    static createDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().getProcedural(ExplosionResources.getInstance().THIRD_EXPLOSION_RESOURCE).getInstanceAnimation(NullIndexedAnimationFactory.getFactoryInstance().getInstance(0));
        ;
    }
    constructor(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition) {
        super(name, remoteInfo, multiPlayerType, movement, animationInterface, destroyedAnimationInterface, rectangle, viewPosition);
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(new CollidableWeaponBehavior(true));
    }
}
