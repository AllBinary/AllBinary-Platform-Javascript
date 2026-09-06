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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { GeographicMapDirectionUtil } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;
import { GeographicMapCellPathHistoryInfo } from '../../../../../org/allbinary/media/graphics/geography/pathfinding/GeographicMapCellPathHistoryInfo.js';
//not GWT import const GeographicMapCellPathHistoryInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.GeographicMapCellPathHistoryInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicDirectionAIHelper } from './BasicDirectionAIHelper.js';
//not GWT import - same folder const BasicDirectionAIHelper = globalThis.org.allbinary.game.ai.path.BasicDirectionAIHelper;
export class BasicAIProcessor extends Object {
    constructor(name, geographicMapCellHistory, geographicMapCellPathHistoryInfo, chosenPathList, angleInfo, seed) {
        super();
        this.geographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance();
        this.name = name;
        this.geographicMapCellHistory = geographicMapCellHistory;
        this.geographicMapCellPositionBasicArrayList = chosenPathList;
        this.geographicMapCellPathHistoryInfo = geographicMapCellPathHistoryInfo;
        this.setName(name);
        this.setNewPath(geographicMapCellHistory, chosenPathList);
        this.basicAI = new BasicDirectionAIHelper(this.getName(), angleInfo);
    }
    setNewPath(geographicMapCellHistory, chosenPathList) {
        this.setGeographicMapCellHistory(geographicMapCellHistory);
        this.geographicMapCellPositionBasicArrayList = chosenPathList;
        this.init();
    }
    init() {
        this.geographicMapCellPathHistoryInfo = new GeographicMapCellPathHistoryInfo();
        this.geographicMapCellPathHistoryInfo.setPreviousOnPathGeographicMapCellPosition(this.geographicMapCellPositionBasicArrayList.get(this.geographicMapCellPositionBasicArrayList.size() - 1));
        this.geographicMapCellPathHistoryInfo.setNextOnPathGeographicMapCellPosition(this.geographicMapCellPositionBasicArrayList.get(this.geographicMapCellPositionBasicArrayList.size() - 1));
        this.update();
    }
    //@Throws(Exception.constructor)
    goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition) {
        var keyDirection = -1;
        ;
        var goToGeographicMapCellPosition = this.geographicMapCellPathHistoryInfo.getNextChosenOnPathGeographicMapCellPosition();
        ;
        var geographicMapDirectionData = this.geographicMapDirectionUtil.getDirectionFromCellPositionToAdjacentCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition);
        ;
        if (geographicMapDirectionData == DirectionFactory.getInstance().NOT_BORDERED_WITH) {
            geographicMapDirectionData = this.geographicMapDirectionUtil.getDirectionFromCellPositionToCellPosition(currentGeographicMapCellPosition, goToGeographicMapCellPosition);
        }
        keyDirection = this.basicAI.getAIKeyPressedFromDirection(geographicMapDirectionData);
        //if statement needs to be on the same line and ternary does not work the same way.
        return keyDirection;
    }
    update() {
        this.geographicMapCellPathHistoryInfo.setNextUnvisitedOnPathGeographicMapCellPosition(this.getGeographicMapCellHistory().getFirstUnvisited());
        this.geographicMapCellPathHistoryInfo.setNextChosenOnPathGeographicMapCellPosition(this.geographicMapCellPathHistoryInfo.getNextUnvisitedOnPathGeographicMapCellPosition());
    }
    //@Throws(Exception.constructor)
    processAI(myManager, currentGeographicMapCellPosition) {
        var keyDirection = -1;
        ;
        if (this.geographicMapCellPositionBasicArrayList.contains(currentGeographicMapCellPosition)) {
            this.update();
            keyDirection = this.goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition);
            this.geographicMapCellPathHistoryInfo.setPreviousOnPathGeographicMapCellPosition(currentGeographicMapCellPosition);
        }
        else {
            keyDirection = this.goTowardNextChosenOnPathPosition(currentGeographicMapCellPosition);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return keyDirection;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getGeographicMapCellPathHistoryInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPathHistoryInfo;
    }
    setGeographicMapCellPathHistoryInfo(geographicMapCellPathHistoryInfo) {
        this.geographicMapCellPathHistoryInfo = geographicMapCellPathHistoryInfo;
    }
    getGeographicMapCellHistory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellHistory;
    }
    setGeographicMapCellHistory(geographicMapCellHistory) {
        this.geographicMapCellHistory = geographicMapCellHistory;
    }
}
