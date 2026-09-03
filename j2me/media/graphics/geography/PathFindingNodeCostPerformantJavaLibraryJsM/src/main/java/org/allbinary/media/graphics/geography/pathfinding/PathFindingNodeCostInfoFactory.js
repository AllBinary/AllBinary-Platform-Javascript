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
//not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
//not GWT import const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;
export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
    constructor(max) {
        super();
    }
    //@Throws(Exception.constructor)
    create(geographicMapInterface, goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd) {
    }
    //@Throws(Exception.constructor)
    getTotalCost(geographicMapInterface, comingFromGeographicMapCellPosition, geographicMapCellPosition) {
        var geographicMapCellType = geographicMapInterface.getCellTypeAt(comingFromGeographicMapCellPosition);
        ;
        var geographicMapCellType2 = geographicMapInterface.getCellTypeAt(geographicMapCellPosition);
        ;
        var raceTrackGeographicMapCellType = geographicMapCellType;
        ;
        var raceTrackGeographicMapCellType2 = geographicMapCellType2;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return raceTrackGeographicMapCellType.getTravelCost() + raceTrackGeographicMapCellType2.getTravelCost();
    }
}
