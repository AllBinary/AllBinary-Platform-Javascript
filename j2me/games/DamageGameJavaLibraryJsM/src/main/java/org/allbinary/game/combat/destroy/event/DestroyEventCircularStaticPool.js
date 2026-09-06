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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
import { AllBinaryEventCircularPool } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js';
//not GWT import const AllBinaryEventCircularPool = globalThis.org.allbinary.logic.util.event.AllBinaryEventCircularPool;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DestroyEventFactory } from './DestroyEventFactory.js';
//not GWT import - same folder const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;
export class DestroyEventCircularStaticPool extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DestroyEventCircularStaticPool.instance;
    }
    constructor() {
        super();
        this.EVENT_POOL = new AllBinaryEventCircularPool(20);
    }
    init(combatGameCanvas) {
        this.EVENT_POOL.initAllBinaryEventCircularPool(new DestroyEventFactory(combatGameCanvas));
    }
    //@Throws(Exception.constructor)
    getInstanceForLayer(layerInterface) {
        var destroyedEvent = this.EVENT_POOL.getNextInstance();
        ;
        destroyedEvent.setLayerInterfaceForCircularStaticPool(layerInterface);
        //if statement needs to be on the same line and ternary does not work the same way.
        return destroyedEvent;
    }
}
DestroyEventCircularStaticPool.instance = new DestroyEventCircularStaticPool();
