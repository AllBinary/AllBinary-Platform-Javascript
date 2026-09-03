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
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;
export class RTSLayer2SelectedLogHelper extends RTSLayer2LogHelper {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.TRACK_TO_FIRE_OR_MOVE = "trackTo:fireOrMove";
        this.BUILDING_CHASE = "buildingChase";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayer2SelectedLogHelper.instanceC;
    }
    steeringUp(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Up").toString(), this, this.TRACK_TO_FIRE_OR_MOVE);
    }
    steeringFireOrStop(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Fire/All Stop").toString(), this, this.TRACK_TO_FIRE_OR_MOVE);
    }
    buildingAbove(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" Building Above").toString(), this, this.BUILDING_CHASE);
    }
    buildingChaseLeft(pathFindingLayerInterface, angle) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Going Left: ").appendint(angle).toString(), this, this.BUILDING_CHASE);
    }
    buildingChaseRight(pathFindingLayerInterface, angle) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Going Right: ").appendint(angle).toString(), this, this.BUILDING_CHASE);
    }
    buildingDown(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" Building Below").toString(), this, this.BUILDING_CHASE);
    }
    buildingChaseDown(pathFindingLayerInterface, angle) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Going Down: ").appendint(angle).toString(), this, this.BUILDING_CHASE);
    }
    buildingChaseUp(pathFindingLayerInterface, angle) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" steering - Going Up: ").appendint(angle).toString(), this, this.BUILDING_CHASE);
    }
    buildingLeft(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" Building Left").toString(), this, this.BUILDING_CHASE);
    }
    buildingRight(pathFindingLayerInterface) {
        this.logUtil.putF(new StringMaker().append(pathFindingLayerInterface.getName()).append(" Building Right").toString(), this, this.BUILDING_CHASE);
    }
}
RTSLayer2SelectedLogHelper.instanceC = new RTSLayer2SelectedLogHelper();
