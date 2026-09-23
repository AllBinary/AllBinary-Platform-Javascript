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
import { LifeLayerCircularStaticPool } from './LifeLayerCircularStaticPool.js';
//not GWT import - same folder const LifeLayerCircularStaticPool
import { LifeLayerFactory } from './LifeLayerFactory.js';
//not GWT import - same folder const LifeLayerFactory
import { LifeResources } from './LifeResources.js';
//not GWT import - same folder const LifeResources
export class LifePickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory {
    //@Throws(Exception.constructor)
    static init() {
        LifePickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = new LifePickedUpLayerInterfaceFactory();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LifePickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface;
    }
    constructor() {
        super(PickedUpLayerTypeFactory.getInstance().LIFE, IconLayerFactory.getInstance(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(LifeResources.getInstance().RESOURCE).getInstance(0), 10, 10), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(LifeResources.getInstance().RESOURCE).getInstance(0));
        this.pool = new LifeLayerCircularStaticPool(new LifeLayerFactory(), 1);
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
LifePickedUpLayerInterfaceFactory.pickedUpLayerInterfaceFactoryInterface = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
