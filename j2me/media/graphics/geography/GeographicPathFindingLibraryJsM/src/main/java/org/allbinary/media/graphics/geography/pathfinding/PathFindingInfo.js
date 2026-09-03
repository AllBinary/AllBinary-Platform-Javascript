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
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } from '../../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not GWT import const PathFindingInfoInterface = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfoInterface;
import { PathFindingNodeCostInfoFactoryBase } from './PathFindingNodeCostInfoFactoryBase.js';
//not GWT import const PathFindingNodeCostInfoFactoryBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoFactoryBase;
import { GeographicPathFinderBase } from './GeographicPathFinderBase.js';
//not GWT import const PathFindingNode = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNode;
export class PathFindingInfo extends Object {
    constructor(pathFindingNodeCostInfoFactoryInterface, startPathFindingNodeList, endPathFindingNodeList) {
        super();
        this.pathFinder = GeographicPathFinderBase.NULL_GEOGRAPHIC_PATH_FINDER_BASE;
        this.pathFindingNodeCostInfoFactoryInterface = pathFindingNodeCostInfoFactoryInterface;
        this.startPathFindingNodeList = startPathFindingNodeList;
        this.endPathFindingNodeList = endPathFindingNodeList;
    }
    getStartPathFindingNodeList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startPathFindingNodeList;
    }
    getEndPathFindingNodeList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.endPathFindingNodeList;
    }
    getPathFinder() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pathFinder;
    }
    addStartPathFindingNode(startPathFindingNode) {
        this.startPathFindingNodeList.add(startPathFindingNode);
    }
    addEndPathFindingNode(endPathFindingNode) {
        this.endPathFindingNodeList.add(endPathFindingNode);
    }
    setPathFinder(pathFinder) {
        this.pathFinder = pathFinder;
    }
    getPathFindingNodeCostInfoFactoryInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pathFindingNodeCostInfoFactoryInterface;
    }
}
PathFindingInfo.NULL_PATH_FINDING_INFO = new PathFindingInfo(PathFindingNodeCostInfoFactoryBase.NULL_PATH_FINDING_NODE_COST_INFO_FACTORY_BASE, BasicArrayListUtil.getInstance().getImmutableInstance(), BasicArrayListUtil.getInstance().getImmutableInstance());
