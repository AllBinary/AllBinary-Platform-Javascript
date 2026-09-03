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
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
//not GWT import const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;
import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';
//not GWT import const PathFindingNodeCostInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfo;
export class PathFindingNodeCostInfoFactory extends PathFindingNodeCostInfoFactoryBase {
    constructor(max) {
        super();
        this.pathFindingNodeCostInfoAdjacencyList = new Array(max).fill(null).map(() => new Array(max).fill(0));
    }
    //@Throws(Exception.constructor)
    create(geographicMapInterface, goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd) {
        this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd);
    }
    //@Throws(Exception.constructor)
    getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd) {
        var pathFindingNodeCostInfo = this.getInstance(goingToGeographicMapCellPosition, geographicMapCellPosition);
        ;
        if (pathFindingNodeCostInfo ==
            null) {
            pathFindingNodeCostInfo = new PathFindingNodeCostInfo(costFromStart, costToEnd);
            pathFindingNodeCostInfo.setCalculatedTotalCost();
            this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition.getId()][goingToGeographicMapCellPosition.getId()] = pathFindingNodeCostInfo;
        }
        else {
            pathFindingNodeCostInfo.setCostFromStart(costFromStart);
            pathFindingNodeCostInfo.setCostToEnd(costToEnd);
            pathFindingNodeCostInfo.setCalculatedTotalCost();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathFindingNodeCostInfo;
    }
    getInstance(goingToFromGeographicMapCellPosition, geographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pathFindingNodeCostInfoAdjacencyList[geographicMapCellPosition.getId()][goingToFromGeographicMapCellPosition.getId()];
    }
    getTotalCost(geographicMapInterface, comingFromGeographicMapCellPosition, geographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstance(comingFromGeographicMapCellPosition, geographicMapCellPosition).totalCostP;
    }
}
