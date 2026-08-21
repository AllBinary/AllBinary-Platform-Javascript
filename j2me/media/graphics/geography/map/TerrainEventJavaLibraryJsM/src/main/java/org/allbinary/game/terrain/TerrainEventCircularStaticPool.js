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
import { Object } from '../../../../java/lang/Object.js';
import { AllBinaryEventCircularPool } from '../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TerrainEventFactory } from './TerrainEventFactory.js';
export class TerrainEventCircularStaticPool extends Object {
    constructor() {
        super(...arguments);
        this.EVENT_POOL = new AllBinaryEventCircularPool(20);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TerrainEventCircularStaticPool.instance;
    }
    init() {
        this.EVENT_POOL.initAllBinaryEventCircularPool(new TerrainEventFactory());
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getNext(basicTerrainInfo) {
        var trackingEvent = this.EVENT_POOL.getNextInstance();
        ;
        trackingEvent.setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo);
        //if statement needs to be on the same line and ternary does not work the same way.
        return trackingEvent;
    }
}
TerrainEventCircularStaticPool.instance = new TerrainEventCircularStaticPool();
