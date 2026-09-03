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
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not plain js import { NamedAngle } from '../../../../org/allbinary/math/NamedAngle.js';
const NamedAngle = globalThis.org.allbinary.math.NamedAngle;
//not plain js import { PositionStrings } from '../../../../org/allbinary/math/PositionStrings.js';
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSLayerLogHelper } from './RTSLayerLogHelper.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;
export class RTSLayerSelectedLogHelper extends RTSLayerLogHelper {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.positionStrings = PositionStrings.getInstance();
        this.TRACKTO_TURNTO = "trackTo:turnTo";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayerSelectedLogHelper.instanceC;
    }
    setClosestGeographicMapCellHistory(associatedAdvancedRTSGameLayer, pathsList) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(CommonLabels.getInstance().START);
        stringBuffer.appendint(pathsList.size());
        stringBuffer.append(" -> ");
        stringBuffer.append(StringUtil.getInstance().toString(pathsList));
        this.logUtil.putF(stringBuffer.toString(), this, "selected: setClosestGeographicMapCellHistory");
    }
    trackTo(associatedAdvancedRTSGameLayer, nextUnvisitedPathGeographicMapCellPosition, dx, dy, reason) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(StringUtil.getInstance().toString(nextUnvisitedPathGeographicMapCellPosition));
        stringBuffer.append(this.positionStrings.DX_LABEL);
        stringBuffer.appendint(dx);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.positionStrings.DY_LABEL);
        stringBuffer.appendint(dy);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(reason);
        this.logUtil.putF(stringBuffer.toString(), this, "selected: trackTo");
    }
    turnTo(associatedAdvancedRTSGameLayer, dx, dy, angleInfo, angle, movementAngle, evading, targetAngle) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(associatedAdvancedRTSGameLayer.getName());
        stringBuffer.append(" steering - ");
        stringBuffer.append(this.positionStrings.DX_LABEL);
        stringBuffer.appendint(dx);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.positionStrings.DY_LABEL);
        stringBuffer.appendint(dy);
        stringBuffer.append(" angle: ");
        stringBuffer.appendint(angle);
        stringBuffer.append(" movementAngle: ");
        stringBuffer.append(movementAngle.name);
        stringBuffer.append(this.commonSeps.FORWARD_SLASH);
        stringBuffer.appendshort(movementAngle.getValue());
        if (angleInfo !=
            null) {
            var angleIncrement = angleInfo.getAngleIncrementInfo().getAngleIncrement();
            ;
            stringBuffer.append(" angleIncrement: ");
            stringBuffer.appendshort(angleIncrement);
        }
        stringBuffer.append(" Evading: ");
        stringBuffer.appendboolean(evading);
        this.logUtil.putF(stringBuffer.toString(), this, this.TRACKTO_TURNTO);
    }
    doneMoving(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - done moving 0,0").toString(), this, this.TRACKTO_TURNTO);
    }
    closeEnough(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - close enough").toString(), this, this.TRACKTO_TURNTO);
    }
    movingLeft(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - allow movingLeft").toString(), this, this.TRACKTO_TURNTO);
    }
    movingRight(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - allow movingRight").toString(), this, this.TRACKTO_TURNTO);
    }
    movingUp(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - allow movingUp").toString(), this, this.TRACKTO_TURNTO);
    }
    movingDown(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - allow movingDown").toString(), this, this.TRACKTO_TURNTO);
    }
    currentMoveEnded(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - correct angle, but movement not needed for current deltas so reseting movement angle").toString(), this, this.TRACKTO_TURNTO);
    }
    evade(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - evade").toString(), this, this.TRACKTO_TURNTO);
    }
    rotateLeft(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - rotating left").toString(), this, this.TRACKTO_TURNTO);
    }
    rotateRight(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - rotating right").toString(), this, this.TRACKTO_TURNTO);
    }
    handle(associatedAdvancedRTSGameLayer, movementAngle) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - movementAngle: ").append(movementAngle.name).append(this.commonSeps.FORWARD_SLASH).appendshort(movementAngle.getValue()).toString(), this, this.TRACKTO_TURNTO);
    }
    noRotation(associatedAdvancedRTSGameLayer) {
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(" steering - Do not rotate").toString(), this, this.TRACKTO_TURNTO);
    }
    notOnPath(associatedAdvancedRTSGameLayer, geographicMapCellHistory, currentGeographicMapCellPosition, pathList) {
        var stringUtil = StringUtil.getInstance();
        ;
        this.logUtil.putF(new StringMaker().append(associatedAdvancedRTSGameLayer.getName()).append(CommonSeps.getInstance().SPACE).appendint(geographicMapCellHistory.getTotalVisited()).append(CommonSeps.getInstance().SPACE).append(stringUtil.toString(currentGeographicMapCellPosition)).append(" - trying to move but not on path: ").append(stringUtil.toString(pathList)).toString(), this, "turnTo");
    }
}
RTSLayerSelectedLogHelper.instanceC = new RTSLayerSelectedLogHelper();
