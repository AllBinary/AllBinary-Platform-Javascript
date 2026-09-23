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
//not GWT import const GeographicMapCellPosition
import { BasePathFindingInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/BasePathFindingInfoFactory.js';
//not GWT import const BasePathFindingInfoFactory
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory
import { PathFinder } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinder.js';
//not GWT import const PathFinder
import { PathFindingInfo } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo
import { PathFindingNodeCostInfoFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoFactory.js';
//not GWT import const PathFindingNodeCostInfoFactory
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
//1.4.2
export class PathFindingInfoFactory extends BasePathFindingInfoFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PathFindingInfoFactory.instance;
    }
    static initMax(max) {
        PathFindingInfoFactory.MAX = max;
    }
    constructor() {
        super();
        this.pathFindingInfo = new PathFindingInfo(new PathFindingNodeCostInfoFactory(PathFindingInfoFactory.MAX), new BasicArrayListS(1), new BasicArrayListS(1));
        this.pathFinder = new PathFinder();
    }
    //@Throws(Exception.constructor)
    getInstancePathFindingInfo(geographicMapInterface, mapArray) {
        var pathFindingInfo = new PathFindingInfo(this.pathFindingInfo.getPathFindingNodeCostInfoFactoryInterface(), new BasicArrayListS(1), new BasicArrayListS(1));
        ;
        RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance().init();
        this.init(geographicMapInterface, pathFindingInfo, mapArray);
        this.pathFinder.init(geographicMapInterface);
        pathFindingInfo.setPathFinder(this.pathFinder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathFindingInfo;
    }
    //@Throws(Exception.constructor)
    init(geographicMapInterface, pathFindingInfo, mapArray) {
        super.init(geographicMapInterface, pathFindingInfo, mapArray);
        this.buildPathFindingNodes(geographicMapInterface, pathFindingInfo, mapArray);
    }
    //@Throws(Exception.constructor)
    buildPathFindingNodesForCellPosition(geographicMapInterface, pathFindingInfo, mapArray, cellPosition) {
    }
    //@Throws(Exception.constructor)
    buildPathFindingNodes(geographicMapInterface, pathFindingInfo, mapArray) {
        var geographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var totalColumns = allBinaryTiledLayer.getColumns();
        ;
        var totalRows = allBinaryTiledLayer.getRows();
        ;
        for (var column = 0; column < totalColumns; column++) {
            for (var row = 0; row < totalRows; row++) {
                this.buildPathFindingNodesForCellPosition(geographicMapInterface, pathFindingInfo, mapArray, geographicMapCellPositionFactory.getAt(column, row));
            }
        }
    }
}
PathFindingInfoFactory.instance = new PathFindingInfoFactory();
PathFindingInfoFactory.MAX = 32768;
