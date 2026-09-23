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
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not GWT import const UnitWaypointBehavior
import { PathFindingInfoFactory } from '../../../../../org/allbinary/game/media/graphics/geography/map/racetrack/PathFindingInfoFactory.js';
//not GWT import const PathFindingInfoFactory
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const RaceTrackGeographicMap
import { BasicGeographicMapExtractedPathsCacheFactory } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/BasicGeographicMapExtractedPathsCacheFactory.js';
//not GWT import const PathFindingInfo
import { PathGenerator } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/PathGenerator.js';
//not GWT import const PathGenerator
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointBase } from './WaypointBase.js';
//not GWT import - same folder const WaypointBase
export class Waypoint extends WaypointBase {
    constructor(ownerLayer, sound) {
        super(sound);
        this.logUtil = LogUtil.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.endList = this.basicArrayListUtil.getImmutableInstance();
        this.paths = this.basicArrayListUtil.NULL_ARRAY_OF_ARRAY;
        //For kotlin this is before the body of the constructor.
        this.ownerLayer = ownerLayer;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        if (this.paths != this.basicArrayListUtil.NULL_ARRAY_OF_ARRAY) {
            throw new RuntimeException();
        }
        this.endList = this.ownerLayer.getEndGeographicMapCellPositionList();
        this.paths = new Array(tiledLayer.getColumns()).fill(null).map(() => new Array(tiledLayer.getRows()).fill(0));
        this.clearPaths();
    }
    releaseCachedPaths() {
        for (var columnIndex = this.paths.length; --columnIndex >= 0;) {
            for (var rowIndex = this.paths.length; --rowIndex >= 0;) {
                var pathsList = this.paths[columnIndex][rowIndex];
                ;
                if (pathsList != this.basicArrayListUtil.getImmutableInstance()) {
                    BasicGeographicMapExtractedPathsCacheFactory.getInstance().release(pathsList);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    getPathsListFromCacheOnly(geographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.paths[geographicMapCellPosition.getColumn()][geographicMapCellPosition.getRow()];
    }
    //@Throws(Exception.constructor)
    getPathsListRunnable(geographicMapCellPosition) {
        var pathsList = this.paths[geographicMapCellPosition.getColumn()][geographicMapCellPosition.getRow()];
        ;
        if (pathsList == this.basicArrayListUtil.getImmutableInstance()) {
            pathsList = this.createPaths(geographicMapCellPosition);
            this.paths[geographicMapCellPosition.getColumn()][geographicMapCellPosition.getRow()] = pathsList;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathsList;
    }
    getEndGeographicMapCellPosition(startGeographicMapCellPosition) {
        var endGeographicMapCellPosition = this.basicArrayListUtil.getRandom(this.endList);
        ;
        if (startGeographicMapCellPosition == endGeographicMapCellPosition) {
            for (var index = this.endList.size() - 1; index >= 0; index--) {
                endGeographicMapCellPosition = this.endList.get(index);
                if (startGeographicMapCellPosition != endGeographicMapCellPosition) {
                    break;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return endGeographicMapCellPosition;
    }
    //@Throws(Exception.constructor)
    createPaths(startGeographicMapCellPosition) {
        if (this.endList.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
        var endGeographicMapCellPosition = this.getEndGeographicMapCellPosition(startGeographicMapCellPosition);
        ;
        if (endGeographicMapCellPosition ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
        if (startGeographicMapCellPosition == endGeographicMapCellPosition) {
            if (this.ownerLayer.shouldHandleStartSameAsEnd()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.basicArrayListUtil.getImmutableInstance();
                ;
            }
            else {
                throw new Exception("Start should not be End: " + this.endList.size());
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
        var list = PathGenerator.getInstance().getInstanceNoCache(geographicMapInterface, pathFindingInfo, 2);
        ;
        if (list.size() < 1) {
            throw new Exception("Path may have been cleared by clearing caching");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onBuildingEvent(event) {
        this.clearPaths();
    }
    clearPaths() {
        for (var columnIndex = this.paths.length; --columnIndex >= 0;) {
            for (var rowIndex = this.paths.length; --rowIndex >= 0;) {
                this.paths[columnIndex][rowIndex] = this.basicArrayListUtil.getImmutableInstance();
            }
        }
    }
    reset() {
        this.getConnectedWaypointList().clear();
        this.releaseCachedPaths();
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
