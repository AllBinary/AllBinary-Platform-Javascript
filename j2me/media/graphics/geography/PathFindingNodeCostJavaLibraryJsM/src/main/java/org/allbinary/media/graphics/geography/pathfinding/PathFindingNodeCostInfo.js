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
import { Object } from '../../../../../../java/lang/Object.js';
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not GWT import - same folder const Comparable
import { PathFindingNodeCostInfoData } from './PathFindingNodeCostInfoData.js';
//not GWT import - same folder const PathFindingNodeCostInfoData
export class PathFindingNodeCostInfo extends Object {
    constructor(costFromStart, costToGoal) {
        super();
        this.pathFindingNodeCostInfoData = PathFindingNodeCostInfoData.getInstance();
        this.totalCostP = 0;
        this.costFromStartP = costFromStart;
        this.costToEndP = costToGoal;
        this.setCalculatedTotalCost();
    }
    setCostToEnd(costToEnd) {
        this.costToEndP = costToEnd;
    }
    setTotalCost(totalCost) {
        this.totalCostP = totalCost;
    }
    //@Throws(Exception.constructor)
    setCalculatedTotalCost() {
        this.totalCostP = this.costFromStartP + this.costToEndP;
        if (this.totalCostP > this.pathFindingNodeCostInfoData.MAX_NODE_COST) {
            throw new Exception("Max Cost Exceeded");
        }
    }
    setCostFromStart(cost) {
        this.costFromStartP = cost;
    }
    addCostFromStart(cost) {
        this.costFromStartP += cost;
    }
    compareTo(pathFindingNodeCostInfo) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return java.lang.Long.compare(this.totalCostP, pathFindingNodeCostInfo.totalCostP);
        ;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.constructor.name.toString());
        stringBuffer.append(CommonLabels.getInstance().COLON_SEP);
        stringBuffer.append("CostFromStart: ");
        stringBuffer.appendlong(this.costFromStartP);
        stringBuffer.append(" CostToEnd: ");
        stringBuffer.appendlong(this.costToEndP);
        stringBuffer.append(" TotalCost: ");
        stringBuffer.appendlong(this.totalCostP);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
