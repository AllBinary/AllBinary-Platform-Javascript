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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../../java/lang/Object.js';
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
//not GWT import - same folder const PathFindingNodeCostInfoFactoryBaseInterface = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBaseInterface;
export class PathFindingNodeCostInfoFactoryBase extends Object {
    //@Throws(Exception.constructor)
    create(geographicMapInterface, comingFromGeographicMapCellPosition, geographicMapCellPosition, costFromStart, costToEnd) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getTotalCost(geographicMapInterface, comingFromGeographicMapCellPosition, geographicMapCellPosition) {
        throw new RuntimeException();
    }
}
PathFindingNodeCostInfoFactoryBase.NULL_PATH_FINDING_NODE_COST_INFO_FACTORY_BASE = new PathFindingNodeCostInfoFactoryBase();
