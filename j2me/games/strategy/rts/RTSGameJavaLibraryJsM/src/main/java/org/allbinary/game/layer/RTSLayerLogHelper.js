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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not plain js import { NamedAngle } 
const NamedAngle = globalThis.org.allbinary.math.NamedAngle;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import - same folder const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;
export class RTSLayerLogHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayerLogHelper.instance;
    }
    setClosestGeographicMapCellHistory(associatedAdvancedRTSGameLayer, pathsList) {
    }
    trackTo(associatedAdvancedRTSGameLayer, nextUnvisitedPathGeographicMapCellPosition, dx, dy, reason) {
    }
    turnTo(associatedAdvancedRTSGameLayer, dx, dy, angleInfo, angle, movementAngle, evading, targetAngle) {
    }
    doneMoving(associatedAdvancedRTSGameLayer) {
    }
    closeEnough(associatedAdvancedRTSGameLayer) {
    }
    movingLeft(associatedAdvancedRTSGameLayer) {
    }
    movingRight(associatedAdvancedRTSGameLayer) {
    }
    movingUp(associatedAdvancedRTSGameLayer) {
    }
    movingDown(associatedAdvancedRTSGameLayer) {
    }
    currentMoveEnded(associatedAdvancedRTSGameLayer) {
    }
    evade(associatedAdvancedRTSGameLayer) {
    }
    rotateLeft(associatedAdvancedRTSGameLayer) {
    }
    rotateRight(associatedAdvancedRTSGameLayer) {
    }
    handle(associatedAdvancedRTSGameLayer, movementAngle) {
    }
    noRotation(associatedAdvancedRTSGameLayer) {
    }
    notOnPath(associatedAdvancedRTSGameLayer, geographicMapCellHistory, currentGeographicMapCellPosition, pathList) {
    }
}
RTSLayerLogHelper.instance = new RTSLayerLogHelper();
