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
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const BasicGeographicMap
import { PathFinderGraphVisitorBase } from '../../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFinderGraphVisitorBase.js';
//not GWT import const PathFindingNode
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
//1.4.2
export class BasePathFinderGraphVisitor extends PathFinderGraphVisitorBase {
    constructor(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight) {
        super();
        this.geographicMapInterface = geographicMapInterface;
        this.edgeMinimum = edgeMinimum;
        this.minPathWeight = minPathWeight;
        this.maxPathWeight = maxPathWeight;
    }
    //@Throws(Exception.constructor)
    visit(graph = {}, startPathFindingNodeList, endPathFindingNodeList) {
    }
    //@Throws(Exception.constructor)
    fixPath(startPathFindingNodeList, endPathFindingNodeList, pathList) {
        var startPathFindingNode;
        ;
        for (var index = startPathFindingNodeList.size() - 1; index >= 0; index--) {
            startPathFindingNode = startPathFindingNodeList.get(index);
            pathList.remove(startPathFindingNode.geographicMapCellPosition);
            pathList.addAt(0, startPathFindingNode.geographicMapCellPosition);
        }
    }
    isValid(graphPath = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getInvalidReason(graphPath = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
}
