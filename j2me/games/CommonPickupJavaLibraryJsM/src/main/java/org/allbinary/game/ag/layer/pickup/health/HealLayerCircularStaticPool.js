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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
import { AllBinaryLayerCircularPool } from '../../../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
//not GWT import const HealLayer = globalThis.org.allbinary.game.ag.layer.pickup.health.HealLayer;
export class HealLayerCircularStaticPool extends AllBinaryLayerCircularPool {
    constructor(allbinaryLayerFactoryInterface, total) {
        super();
        super.initAllBinaryLayerCircularPool(allbinaryLayerFactoryInterface, total);
    }
    //@Throws(Exception.constructor)
    visit(sourceLayerInterface) {
        var healLayer = this.getNextInstance();
        ;
        var healthInterfaceCompositeInterface = sourceLayerInterface;
        ;
        var healthInterface = healthInterfaceCompositeInterface.getHealthInterface();
        ;
        healLayer.visit(healthInterface);
    }
}
