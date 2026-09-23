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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const Animation
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const AllBinaryLayer
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PickedUpLayerInterfaceFactory } from './PickedUpLayerInterfaceFactory.js';
//not GWT import - same folder const CountedPickedUpLayerInterfaceFactoryInterface
import { PickedUpLayerTypeFactory } from './PickedUpLayerTypeFactory.js';
//not GWT import - same folder const PickedUpLayerTypeFactory
import { IconLayer } from './IconLayer.js';
//not GWT import - same folder const IconLayer
import { CountedPickedUpLayerInterfaceFactoryPool } from './CountedPickedUpLayerInterfaceFactoryPool.js';
//not GWT import - same folder const PickedUpLayerType
export class CountedPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory {
    constructor(pickeUpLayerType, iconLayer, animationInterface) {
        super(pickeUpLayerType, iconLayer, animationInterface);
        //For kotlin this is before the body of the constructor.
        var list = CountedPickedUpLayerInterfaceFactoryPool.getInstance().getList();
        ;
        this.id = list.size();
        list.add(this);
    }
    //@Throws(Exception.constructor)
    getNextInstance(hashtable, x, y, z) {
        throw new Exception(CommonStrings.getInstance().NOT_IMPLEMENTED);
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
}
CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY = new CountedPickedUpLayerInterfaceFactory(PickedUpLayerTypeFactory.getInstance().NONE, IconLayer.NULL_ICON_LAYER, NullAnimationFactory.getFactoryInstance().getInstance(0));
