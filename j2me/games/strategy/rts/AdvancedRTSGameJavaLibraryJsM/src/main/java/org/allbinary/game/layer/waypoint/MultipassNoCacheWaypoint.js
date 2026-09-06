/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;
import { PathFindingInfoFactory } from '../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js';
//not GWT import const PathFindingInfoFactory = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.PathFindingInfoFactory;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;
import { PathFindingInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;
import { PathGenerator } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js';
//not GWT import const PathGenerator = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathGenerator;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointBase } from './WaypointBase.js';
//not GWT import - same folder const WaypointBase = globalThis.org.allbinary.game.layer.waypoint.WaypointBase;
export class MultipassNoCacheWaypoint extends WaypointBase {
    constructor(ownerLayer, sound) {
        super(sound);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.ownerLayer = ownerLayer;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    }
    releaseCachedPaths() {
    }
    //@Throws(Exception.constructor)
    getPathFindingInfo(geographicMapCellPosition) {
        var startGeographicMapCellPosition = geographicMapCellPosition;
        ;
        var endGeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition);
        ;
        if (endGeographicMapCellPosition ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return PathFindingInfo.NULL_PATH_FINDING_INFO;
        }
        if (startGeographicMapCellPosition == endGeographicMapCellPosition) {
            if (this.ownerLayer.shouldHandleStartSameAsEnd()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return PathFindingInfo.NULL_PATH_FINDING_INFO;
            }
            else {
                throw new Exception("Start should not be End: " + endGeographicMapCellPosition);
            }
        }
        var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var raceTrackGeographicMap = geographicMapInterface;
        ;
        var raceTrackGeographicMapCellTypeFactory = raceTrackGeographicMap.getGeographicMapCellTypeFactory();
        ;
        var customMapGenerator = raceTrackGeographicMap.getCustomMapGenerator();
        ;
        customMapGenerator.copyMapIntoCustomMap();
        var customMapArray = customMapGenerator.getCustomMapArray();
        ;
        customMapArray[startGeographicMapCellPosition.getRow()][startGeographicMapCellPosition.getColumn()] = raceTrackGeographicMapCellTypeFactory.getStartType();
        customMapArray[endGeographicMapCellPosition.getRow()][endGeographicMapCellPosition.getColumn()] = raceTrackGeographicMapCellTypeFactory.getEndType();
        var pathFindingInfo = PathFindingInfoFactory.getInstance().getInstancePathFindingInfo(raceTrackGeographicMap, customMapArray);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathFindingInfo;
    }
    //@Throws(Exception.constructor)
    getPathsList(geographicMapCellPosition, pathFindingInfo, multipassState) {
        try {
            if (pathFindingInfo ==
                null) {
                this.logUtil.putF("pathFindingInfo: " + pathFindingInfo, this, "getPathsList");
                //if statement needs to be on the same line and ternary does not work the same way.
                return BasicArrayListUtil.getInstance().getImmutableInstance();
                ;
            }
            var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            var list = PathGenerator.getInstance().createN(geographicMapInterface, pathFindingInfo, 2, multipassState);
            ;
            if (list !=
                null
                && list != BasicArrayListUtil.getInstance().getImmutableInstance()) {
                if (list.size() < 1) {
                    throw new Exception("Path may have been cleared by clearing caching");
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return list;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return BasicArrayListUtil.getInstance().getImmutableInstance();
            ;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "getPathsList", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return BasicArrayListUtil.getInstance().getImmutableInstance();
            ;
        }
    }
    //@Throws(Exception.constructor)
    getEndGeographicMapCellPosition(startGeographicMapCellPosition) {
        var endList = this.ownerLayer.getEndGeographicMapCellPositionList();
        ;
        var endGeographicMapCellPosition = BasicArrayListUtil.getInstance().getRandom(endList);
        ;
        if (startGeographicMapCellPosition == endGeographicMapCellPosition) {
            for (var index = endList.size() - 1; index >= 0; index--) {
                endGeographicMapCellPosition = endList.get(index);
                if (startGeographicMapCellPosition != endGeographicMapCellPosition) {
                    break;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return endGeographicMapCellPosition;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onBuildingEvent(event) {
    }
    reset() {
        this.getConnectedWaypointList().clear();
    }
    //@Throws(Exception.constructor)
    visit(unitLayer) {
        if (unitLayer.getGroupInterface()[0] != this.ownerLayer.getGroupInterface()[0]) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var size = this.getConnectedWaypointList().size();
        ;
        if (size > 0) {
            var unitWaypointBehavior = unitLayer.getWaypointBehavior();
            ;
            while (this.getConnectedWaypointList().size() > 0) {
                var rtsLayer = this.getConnectedWaypointList().get(0);
                ;
                if (rtsLayer.isDestroyed()) {
                    this.getConnectedWaypointList().remove(rtsLayer);
                }
                else {
                    unitLayer.handleCost(this.ownerLayer);
                    unitWaypointBehavior.insertWaypoint(0, rtsLayer);
                    break;
                }
            }
        }
    }
}
