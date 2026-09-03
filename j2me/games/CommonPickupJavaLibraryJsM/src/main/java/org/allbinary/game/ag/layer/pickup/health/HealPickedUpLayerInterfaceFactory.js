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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;
import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
//not GWT import const IconLayerFactory = globalThis.org.allbinary.game.layer.pickup.IconLayerFactory;
import { PickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface = globalThis.org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface;
import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HealLayerCircularStaticPool } from './HealLayerCircularStaticPool.js';
//not GWT import const HealLayerCircularStaticPool = globalThis.org.allbinary.game.ag.layer.pickup.health.HealLayerCircularStaticPool;
import { HealLayerFactory } from './HealLayerFactory.js';
//not GWT import const HealLayerFactory = globalThis.org.allbinary.game.ag.layer.pickup.health.HealLayerFactory;
import { HealthResources } from './HealthResources.js';
//not GWT import const HealthResources = globalThis.org.allbinary.game.ag.layer.pickup.health.HealthResources;
export class HealPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory {
    //@Throws(Exception.constructor)
    static init() {
        HealPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = new HealPickedUpLayerInterfaceFactory();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HealPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    }
    constructor() {
        super(PickedUpLayerTypeFactory.getInstance().HEAL, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(HealthResources.getInstance().RESOURCE).getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(HealthResources.getInstance().RESOURCE).getInstance(0));
        this.pool = new HealLayerCircularStaticPool(new HealLayerFactory(), 1);
        //For kotlin this is before the body of the constructor.
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
    //@Throws(Exception.constructor)
    process(sourceLayerInterface) {
        this.pool.visit(sourceLayerInterface);
    }
}
HealPickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
