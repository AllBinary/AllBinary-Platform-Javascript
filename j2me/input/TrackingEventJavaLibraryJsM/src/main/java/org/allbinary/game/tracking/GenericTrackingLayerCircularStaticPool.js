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
import { AllBinaryLayerCircularPool } from '../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GenericTrackingLayerCircularStaticPool extends AllBinaryLayerCircularPool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GenericTrackingLayerCircularStaticPool.SINGLETON;
    }
    constructor() {
        super();
    }
}
GenericTrackingLayerCircularStaticPool.SINGLETON = new GenericTrackingLayerCircularStaticPool();
