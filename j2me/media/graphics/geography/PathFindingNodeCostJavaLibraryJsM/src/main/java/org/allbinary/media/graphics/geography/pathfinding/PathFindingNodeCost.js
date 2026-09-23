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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const GeographicMapCellPosition
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PathFindingNode } from './PathFindingNode.js';
//not GWT import - same folder const PathFindingNodeCostInfo
export class PathFindingNodeCost extends PathFindingNode {
    constructor(parent = {}, geographicMapCellPosition, pathFindingNodeCostInfo) {
        super(parent, geographicMapCellPosition);
        this.commonSeps = CommonSeps.getInstance();
        //For kotlin this is before the body of the constructor.
        this.pathFindingNodeCostInfoP = pathFindingNodeCostInfo;
        if (this.geographicMapCellPosition ==
            null) {
            throw new Exception("No GeographicMapCellPosition");
        }
        if (this.getPathFindingNodeCostInfo() ==
            null) {
            throw new Exception("No PathFindingNodeCostInfo");
        }
    }
    getPathFindingNodeCostInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pathFindingNodeCostInfoP;
    }
    setPathFindingNodeCostInfo(pathFindingNodeCostInfo) {
        this.pathFindingNodeCostInfoP = pathFindingNodeCostInfo;
    }
    compareTo(pathFindingNodeCost) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pathFindingNodeCostInfoP.compareTo(pathFindingNodeCost.pathFindingNodeCostInfoP);
        ;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.constructor.name.toString());
        stringBuffer.append(CommonLabels.getInstance().COLON_SEP);
        stringBuffer.append(this.getPathFindingNodeCostInfo().toString());
        stringBuffer.append(" Path: ");
        stringBuffer.append(this.geographicMapCellPosition.toString());
        var pathFindingNode = this.parent;
        ;
        while (pathFindingNode !=
            null) {
            stringBuffer.append(pathFindingNode.geographicMapCellPosition.toString());
            stringBuffer.append(this.commonSeps.SPACE);
            pathFindingNode = pathFindingNode.parent;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
PathFindingNodeCost.NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY = new Array(0).fill(null).map(() => new Array(0).fill(0));
