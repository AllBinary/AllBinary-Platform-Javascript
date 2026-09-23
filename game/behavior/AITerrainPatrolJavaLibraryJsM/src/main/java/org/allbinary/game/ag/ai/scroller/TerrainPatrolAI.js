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
//not GWT import const GameInput
import { BasicTerrainInfo } from '../../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
//not GWT import const TerrainEvent
import { TerrainEventCircularStaticPool } from '../../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
//not GWT import const TerrainEventCircularStaticPool
import { TerrainEventHandler } from '../../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
//not GWT import const TerrainEventHandler
import { TerrainEventListener } from '../../../../../../org/allbinary/game/terrain/TerrainEventListener.js';
//not GWT import const Angle
import { AngleFactory } from '../../../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PacePatrolAI } from './PacePatrolAI.js';
//not GWT import - same folder const PacePatrolAI
export class TerrainPatrolAI extends PacePatrolAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(hashtable, ownerLayerInterface, gameInput);
        this.terrainEventListener = new TerrainEventListener();
        this.DOWN = AngleFactory.getInstance().DOWN;
        this.CLIFF = new BasicTerrainInfo(this.DOWN);
        //For kotlin this is before the body of the constructor.
        TerrainEventHandler.getInstance(ownerLayerInterface).addListener(this.terrainEventListener);
        this.terrainEventListener.onTerrainEvent(TerrainEventCircularStaticPool.getInstance().getNext(this.CLIFF));
    }
    update() {
        super.update();
        this.changeDirectionIfCliffReached();
    }
    changeDirectionIfCliffReached() {
        var list = this.terrainEventListener.getList();
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var terrainEvent = list.removeAt(index);
            ;
            var basicTerrainInfo = terrainEvent.getBasicTerrainInfo();
            ;
            var angle = basicTerrainInfo.getAngle();
            ;
            if (angle == this.DOWN) {
                this.nextDirection();
                if (!this.isFollowLimitedByTerrain) {
                    this.logUtil.putF("Following Limited", this, "onTerrainEvent");
                    this.isFollowLimitedByTerrain = true;
                }
            }
        }
    }
}
