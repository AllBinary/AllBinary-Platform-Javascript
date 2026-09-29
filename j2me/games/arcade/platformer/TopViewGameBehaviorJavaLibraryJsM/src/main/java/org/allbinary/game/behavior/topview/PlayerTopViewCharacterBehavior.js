/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const AllBinaryTiledLayer
import { TrackingEventCircularStaticPool } from '../../../../../org/allbinary/game/tracking/TrackingEventCircularStaticPool.js';
//not GWT import const TrackingEventCircularStaticPool
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const TrackingEventHandler
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const BasicGeographicMap
import { BasicGeographicMapUtil } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapUtil.js';
//not GWT import const GeographicMapCellPosition
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TopViewCharacterBehavior } from './TopViewCharacterBehavior.js';
//not GWT import - same folder const TopViewCharacterBehavior
export class PlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    terrainEvent(layer, direction, x, y, geographicMapInterfaceArray, geographicMapCellPosition) {
        TrackingEventHandler.getInstance().fireEvent(TrackingEventCircularStaticPool.getInstance().getNextInstance(layer));
    }
    terrainMove(layer, geographicMapInterfaceArray, x, y) {
        var basicGeographicMapUtil = BasicGeographicMapUtil.getInstance();
        ;
        basicGeographicMapUtil.setPosition(geographicMapInterfaceArray, x, y);
    }
    moveIfOnScreen(layer, ax, ay) {
    }
    isTiledLayerMoveable(terrainTiledLayer, x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (terrainTiledLayer.getXP() + DisplayInfoSingleton.getInstance().getLastWidth() < terrainTiledLayer.getWidth() || x < 0) && (terrainTiledLayer.getXP() > 0 || x > 0);
    }
}
