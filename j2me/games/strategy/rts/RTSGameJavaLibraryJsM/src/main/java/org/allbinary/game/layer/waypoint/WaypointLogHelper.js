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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WaypointLogHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointLogHelper.instance;
    }
    onWaypointEvent(associatedAdvancedRTSGameLayer, advancedRTSGameLayer) {
    }
    addWaypointFromBuilding(associatedAdvancedRTSGameLayer, advancedRTSGameLayer) {
    }
    addWaypointFromBuildingList(associatedAdvancedRTSGameLayer, advancedRTSGameLayer, list) {
    }
    insertWaypoint(associatedAdvancedRTSGameLayer, index, rtsLayer, waypointName) {
    }
    insertWaypointList(associatedAdvancedRTSGameLayer, index, rtsLayer, waypointName, list) {
    }
    setRandomGeographicMapCellHistoryList(associatedAdvancedRTSGameLayer, pathsList) {
    }
    moveAwayFromBuilding(associatedAdvancedRTSGameLayer) {
    }
    needToMove(associatedAdvancedRTSGameLayer, unitWaypointBehavior) {
    }
    setRandomGeographicMapCellHistory(associatedAdvancedRTSGameLayer) {
    }
    setCurrentPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer, existingCurrentPathGeographicMapCellPosition, currentPathGeographicMapCellPosition) {
    }
    setNextUnvisitedPathGeographicMapCellPosition(associatedAdvancedRTSGameLayer, existingNextUnvisitedPathGeographicMapCellPosition, nextUnvisitedPathGeographicMapCellPosition) {
    }
}
WaypointLogHelper.instance = new WaypointLogHelper();
