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
import { Object } from '../../../../../../../java/lang/Object.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//not GWT import const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackStartPointUtil extends Object {
    //@Throws(Exception.constructor)
    static get(geographicMapInterface, pathFindingInfo, index) {
        var list = pathFindingInfo.getStartPathFindingNodeList();
        ;
        var startPathFindingNode = list.get(index);
        ;
        var geographicMapCellPosition = startPathFindingNode.geographicMapCellPosition;
        ;
        var point = geographicMapCellPosition.getPoint();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return PointFactory.getInstance().createXY(point.getX(), point.getY() + geographicMapInterface.getAllBinaryTiledLayer().getHalfCellHeight());
        ;
    }
}
