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
//not GWT import const Animation
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const NullIndexedAnimationFactory
import { ExplosionResources } from '../../../../../org/allbinary/game/combat/damage/ExplosionResources.js';
//not GWT import const ViewPositionBase
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WeaponLayer } from './WeaponLayer.js';
//not GWT import - same folder const WeaponLayer
import { CollidableWeaponBehavior } from './CollidableWeaponBehavior.js';
//not GWT import - same folder const CollidableWeaponBehavior
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
