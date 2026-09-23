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
//not GWT import const FeaturedAnimationInterfaceFactoryInterfaceFactory
import { CountedPickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory
import { IconLayerFactory } from '../../../../../../../org/allbinary/game/layer/pickup/IconLayerFactory.js';
//not GWT import const IconLayerFactory
import { PickedUpLayerInterfaceFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerInterfaceFactory.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface
import { PickedUpLayerTypeFactory } from '../../../../../../../org/allbinary/game/layer/pickup/PickedUpLayerTypeFactory.js';
//not GWT import const AllBinaryLayer
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HealLayerCircularStaticPool } from './HealLayerCircularStaticPool.js';
//not GWT import - same folder const HealLayerCircularStaticPool
import { HealLayerFactory } from './HealLayerFactory.js';
//not GWT import - same folder const HealLayerFactory
import { HealthResources } from './HealthResources.js';
//not GWT import - same folder const HealthResources
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
