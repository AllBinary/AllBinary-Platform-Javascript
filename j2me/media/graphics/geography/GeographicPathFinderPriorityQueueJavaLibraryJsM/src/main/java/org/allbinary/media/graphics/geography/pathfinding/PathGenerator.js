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
import { Object } from '../../../../../../java/lang/Object.js';
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;
export class PathGenerator extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PathGenerator.SINGLETON;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    init(geographicMapInterface = {}, totalPaths) {
    }
    //@Throws(Exception.constructor)
    getInstanceNoCache(geographicMapInterface, pathFindingInfo, totalPaths) {
        var geographicMapCellPositionBasicArrayList = this.create(geographicMapInterface, pathFindingInfo, totalPaths);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPositionBasicArrayList;
    }
    //@Throws(Exception.constructor)
    createList(geographicMapInterface, geographicMapCellHistory, pathFindingInfo, totalPaths) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    create(geographicMapInterface, pathFindingInfo, totalPaths) {
        var startPathFindingNodeList = pathFindingInfo.getStartPathFindingNodeList();
        ;
        var endPathFindingNodeList = pathFindingInfo.getEndPathFindingNodeList();
        ;
        var geographicPathFinderInterface = pathFindingInfo.getPathFinder();
        ;
        var geographicMapCellPositionBasicArrayList = geographicPathFinderInterface.searchTotalPath(startPathFindingNodeList, endPathFindingNodeList, totalPaths);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPositionBasicArrayList;
    }
    //@Throws(Exception.constructor)
    createN(geographicMapInterface, pathFindingInfo, totalPaths, multipassState) {
        var startPathFindingNodeList = pathFindingInfo.getStartPathFindingNodeList();
        ;
        var endPathFindingNodeList = pathFindingInfo.getEndPathFindingNodeList();
        ;
        var geographicPathFinderInterface = pathFindingInfo.getPathFinder();
        ;
        var geographicMapCellPositionBasicArrayList = geographicPathFinderInterface.searchTotalPathN(startPathFindingNodeList, endPathFindingNodeList, totalPaths, multipassState);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPositionBasicArrayList;
    }
    //@Throws(Exception.constructor)
    isValid(pathList, geographicMapCellHistory) {
        throw new RuntimeException();
    }
}
PathGenerator.SINGLETON = new PathGenerator();
