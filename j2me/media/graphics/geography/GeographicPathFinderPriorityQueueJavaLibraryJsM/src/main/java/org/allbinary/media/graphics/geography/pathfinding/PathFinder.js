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
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
import { HashSet } from '../../../../../../java/util/HashSet.js';
//not GWT import const HashSet = globalThis.java.util.HashSet;
import { PriorityQueue } from '../../../../../../java/util/PriorityQueue.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
//not plain js import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } from '../../../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicPathFinderBase } from './GeographicPathFinderBase.js';
//not GWT import const GeographicPathFinderBase = globalThis.org.allbinary.media.graphics.geography.pathfinding.GeographicPathFinderBase;
import { PathFindingNodeCost } from './PathFindingNodeCost.js';
//not GWT import const PathFindingNodeCost = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCost;
import { PathFindingNodeCostInfo } from './PathFindingNodeCostInfo.js';
//not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;
export class PathFinder extends GeographicPathFinderBase {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.mathUtil = MathUtil.getInstance();
        this.openPriorityQueue = new PriorityQueue();
        this.closedSet = new HashSet();
        this.geographicMapInterface = NullUtil.getInstance().NULL_OBJECT;
        this.costArray = PathFindingNodeCost.NULL_PATH_FINDING_NODE_COST_ARRAY_ARRAY;
    }
    //@Throws(Exception.constructor)
    init(geographicMapInterface) {
        this.geographicMapInterface = geographicMapInterface;
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        this.costArray = new Array(tiledLayer.getColumns()).fill(null).map(() => new Array(tiledLayer.getRows()).fill(0));
        var basicGeographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var node;
        ;
        var sizeX = this.costArray.length;
        ;
        var sizeY = this.costArray[0].length;
        ;
        for (var column = 0; column < sizeX; column++) {
            for (var row = 0; row < sizeY; row++) {
                var geographicMapCellType = geographicMapInterface.getCellTypeAt(basicGeographicMapCellPositionFactory.getAt(column, row));
                ;
                var raceTrackGeographicMapCellType = geographicMapCellType;
                ;
                node = new PathFindingNodeCost(NullUtil.getInstance().NULL_OBJECT, basicGeographicMapCellPositionFactory.getAt(column, row), new PathFindingNodeCostInfo(raceTrackGeographicMapCellType.getTravelCost(), -1));
                this.costArray[column][row] = node;
            }
        }
    }
    searchTotalPath(startPathFindingNodeList, endPathFindingNodeList, totalPaths) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.search(startPathFindingNodeList.get(0), endPathFindingNodeList.get(0));
            ;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "search", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
    }
    //@Throws(Exception.constructor)
    searchTotalPathN(startPathFindingNodeList, endPathFindingNodeList, totalPaths, multipassState) {
        if (multipassState.step == 0) {
            multipassState.step++;
        }
        else if (multipassState.step == 1) {
            this.searchStart(startPathFindingNodeList.get(0), endPathFindingNodeList.get(0), multipassState);
        }
        else if (multipassState.step == 2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.searchN(startPathFindingNodeList.get(0), endPathFindingNodeList.get(0), multipassState);
            ;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicArrayListUtil.getImmutableInstance();
        ;
    }
    //@Throws(Exception.constructor)
    search(startPathFindingNode, endPathFindingNode) {
        var list = this.findPath(startPathFindingNode.geographicMapCellPosition, endPathFindingNode.geographicMapCellPosition);
        ;
        var pathList = new BasicArrayListD();
        ;
        pathList.add(list);
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathList;
    }
    //@Throws(Exception.constructor)
    searchStart(startPathFindingNode, endPathFindingNode, multipassState) {
        this.findPathStart(startPathFindingNode.geographicMapCellPosition, endPathFindingNode.geographicMapCellPosition, multipassState);
    }
    //@Throws(Exception.constructor)
    searchN(startPathFindingNode, endPathFindingNode, multipassState) {
        var list = this.findPathEnd(startPathFindingNode.geographicMapCellPosition, endPathFindingNode.geographicMapCellPosition, multipassState);
        ;
        if (list ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
        var pathList = new BasicArrayListD();
        ;
        pathList.add(list);
        multipassState.iteration = 0;
        multipassState.step = 0;
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathList;
    }
    //@Throws(Exception.constructor)
    findPath(start, target) {
        this.openPriorityQueue.clear();
        this.closedSet.clear();
        var discoveryCalculation = 0;
        ;
        var node;
        ;
        var targetColumn = target.getColumn();
        ;
        var targetRow = target.getRow();
        ;
        var sizeX = this.costArray.length;
        ;
        var sizeY = this.costArray[0].length;
        ;
        for (var column = 0; column < sizeX; column++) {
            for (var row = 0; row < sizeY; row++) {
                discoveryCalculation = this.mathUtil.abs(column - targetColumn) + this.mathUtil.abs(row - targetRow);
                node = this.costArray[column][row];
                node.pathFindingNodeCostInfoP.totalCostP = 0;
                node.pathFindingNodeCostInfoP.costToEndP = discoveryCalculation;
            }
        }
        var startNode = this.costArray[start.getColumn()][start.getRow()];
        ;
        this.openPriorityQueue.add(startNode);
        var geographicMapInterface = this.geographicMapInterface;
        ;
        var basicGeographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var targetNode = this.costArray[target.getColumn()][target.getRow()];
        ;
        var current;
        ;
        do {
            current = this.openPriorityQueue.poll();
            this.closedSet.add(current);
            if (current === targetNode) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.extractPath(start, current);
                ;
            }
            var neighbor;
            ;
            var neighborInfo;
            ;
            var calculatedCost = 0;
            ;
            for (var column = current.geographicMapCellPosition.getColumn() - 1; column < current.geographicMapCellPosition.getColumn() + 2; column++) {
                for (var row = current.geographicMapCellPosition.getRow() - 1; row < current.geographicMapCellPosition.getRow() + 2; row++) {
                    if (column > 0 && row > 0 && column < allBinaryTiledLayer.getColumns() && row < allBinaryTiledLayer.getRows() && geographicMapInterface.isOnMap(basicGeographicMapCellPositionFactory.getAt(column, row))) {
                        neighbor = this.costArray[column][row];
                        if (this.closedSet.contains(neighbor)) {
                            continue;
                        }
                        neighborInfo = neighbor.pathFindingNodeCostInfoP;
                        calculatedCost = neighborInfo.costToEndP + neighborInfo.costFromStartP + current.pathFindingNodeCostInfoP.totalCostP;
                        if (calculatedCost < neighborInfo.totalCostP || !this.openPriorityQueue.contains(neighbor)) {
                            neighborInfo.totalCostP = calculatedCost;
                            neighbor.parent = current;
                            if (!this.openPriorityQueue.contains(neighbor)) {
                                if (geographicMapInterface.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition)) {
                                    this.openPriorityQueue.add(neighbor);
                                }
                            }
                        }
                    }
                }
            }
        } while (!this.openPriorityQueue.isEmpty());
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    findPathStart(start, target, multipassState) {
        this.openPriorityQueue.clear();
        this.closedSet.clear();
        var discoveryCalculation = 0;
        ;
        var node;
        ;
        var targetColumn = target.getColumn();
        ;
        var targetRow = target.getRow();
        ;
        var sizeX = this.costArray.length;
        ;
        var sizeY = this.costArray[0].length;
        ;
        for (var column = 0; column < sizeX; column++) {
            for (var row = 0; row < sizeY; row++) {
                discoveryCalculation = this.mathUtil.abs(column - targetColumn) + this.mathUtil.abs(row - targetRow);
                node = this.costArray[column][row];
                node.pathFindingNodeCostInfoP.totalCostP = 0;
                node.pathFindingNodeCostInfoP.costToEndP = discoveryCalculation;
            }
        }
        var startNode = this.costArray[start.getColumn()][start.getRow()];
        ;
        this.openPriorityQueue.add(startNode);
        multipassState.step++;
    }
    //@Throws(Exception.constructor)
    findPathEnd(start, target, multipassState) {
        var geographicMapInterface = this.geographicMapInterface;
        ;
        var basicGeographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var targetNode = this.costArray[target.getColumn()][target.getRow()];
        ;
        var current;
        ;
        var total = 0;
        ;
        do {
            current = this.openPriorityQueue.poll();
            this.closedSet.add(current);
            if (current === targetNode) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.extractPath(start, current);
                ;
            }
            var neighbor;
            ;
            var neighborInfo;
            ;
            var calculatedCost = 0;
            ;
            for (var column = current.geographicMapCellPosition.getColumn() - 1; column < current.geographicMapCellPosition.getColumn() + 2; column++) {
                for (var row = current.geographicMapCellPosition.getRow() - 1; row < current.geographicMapCellPosition.getRow() + 2; row++) {
                    if (column > 0 && row > 0 && column < allBinaryTiledLayer.getColumns() && row < allBinaryTiledLayer.getRows() && geographicMapInterface.isOnMap(basicGeographicMapCellPositionFactory.getAt(column, row))) {
                        neighbor = this.costArray[column][row];
                        if (this.closedSet.contains(neighbor)) {
                            continue;
                        }
                        neighborInfo = neighbor.pathFindingNodeCostInfoP;
                        calculatedCost = neighborInfo.costToEndP + neighborInfo.costFromStartP + current.pathFindingNodeCostInfoP.totalCostP;
                        if (calculatedCost < neighborInfo.totalCostP || !this.openPriorityQueue.contains(neighbor)) {
                            neighborInfo.totalCostP = calculatedCost;
                            neighbor.parent = current;
                            if (!this.openPriorityQueue.contains(neighbor)) {
                                if (geographicMapInterface.isOfFourDirections(current.geographicMapCellPosition, neighbor.geographicMapCellPosition)) {
                                    this.openPriorityQueue.add(neighbor);
                                }
                            }
                        }
                    }
                }
            }
            total++;
            if (total > 10) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.basicArrayListUtil.getImmutableInstance();
                ;
            }
        } while (!this.openPriorityQueue.isEmpty());
        throw new RuntimeException();
    }
    extractPath(start, current) {
        var path = new BasicArrayListD();
        ;
        while (current.parent != NullUtil.getInstance().NULL_OBJECT) {
            path.add(current.geographicMapCellPosition);
            current = current.parent;
        }
        path.add(start);
        this.basicArrayListUtil.reverse(path);
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
}
