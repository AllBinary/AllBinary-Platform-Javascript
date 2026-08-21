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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
import { WeaponProperties } from '../../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
import { IconLayerFactory } from '../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
import { PickedUpLayerTypeFactory } from '../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MineLayerCircularStaticPool } from './MineLayerCircularStaticPool.js';
import { MineWeaponResources } from './MineWeaponResources.js';
export class MineCountedPickedUpLayerInterfaceFactory extends CountedPickedUpLayerInterfaceFactory {
    //@Throws(Exception.constructor)
    static init() {
        MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = new MineCountedPickedUpLayerInterfaceFactory();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    }
    constructor() {
        super(PickedUpLayerTypeFactory.getInstance().MINE, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(MineWeaponResources.getInstance().DROP_ICON_RESOURCE).getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(MineWeaponResources.getInstance().DROP_RESOURCE).getInstance(0));
        this.weaponLayerCircularStaticPool = MineLayerCircularStaticPool.getInstance();
        this.weaponProperties = new WeaponProperties(-1, -1, 0, 8000, 10);
        this.smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 3;
    }
    //@Throws(Exception.constructor)
    getNextInstance(hashtable, x, y, z) {
        var sourceLayerInterface = hashtable.get(this.smallIntegerSingletonFactory.getAt(0));
        ;
        var angle = hashtable.get(this.smallIntegerSingletonFactory.getAt(1));
        ;
        var scoreableInterface = sourceLayerInterface;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.weaponLayerCircularStaticPool.getInstanceWeaponLayer(sourceLayerInterface, x, y, z, Math.round(angle.intValue()), 0, this.weaponProperties, scoreableInterface);
        ;
    }
}
MineCountedPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
