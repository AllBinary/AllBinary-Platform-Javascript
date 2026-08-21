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
import { AllBinaryLayerCircularPool } from '../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
export class PickupLayerCircularStaticPool extends AllBinaryLayerCircularPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PickupLayerCircularStaticPool.SINGLETON;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    getInstanceXYZ(pickedUpLayerInterfaceFactoryInterface, x, y, z) {
        var pickupLayer = this.getNextInstance();
        ;
        pickupLayer.initXYZ(x, y, z);
        pickupLayer.init(pickedUpLayerInterfaceFactoryInterface, pickedUpLayerInterfaceFactoryInterface.getAnimationInterface());
        //if statement needs to be on the same line and ternary does not work the same way.
        return pickupLayer;
    }
}
PickupLayerCircularStaticPool.SINGLETON = new PickupLayerCircularStaticPool();
