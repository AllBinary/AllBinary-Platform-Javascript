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
import { Object } from '../../../java/lang/Object.js';
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonPhoneStrings } from '../../../org/allbinary/string/CommonPhoneStrings.js';
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { Angle } from './Angle.js';
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { NamedAngle } from './NamedAngle.js';
const NamedAngle = globalThis.org.allbinary.math.NamedAngle;
//not plain js import { FrameUtil } from './FrameUtil.js';
const FrameUtil = globalThis.org.allbinary.math.FrameUtil;
export class AngleFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AngleFactory.instance;
    }
    static main(args) {
        var stringMaker = new StringMaker();
        ;
        var angleFactory = AngleFactory.getInstance();
        ;
        for (var index = 0; index < 360; index++) {
            stringMaker.appendint(index).append(CommonSeps.getInstance().FORWARD_SLASH).appendshort(angleFactory.getClosestDirection(index).getValue()).append(CommonSeps.getInstance().NEW_LINE);
        }
        LogUtil.getInstance().putF(stringMaker.toString(), "main", "main");
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.TOTAL_ANGLE = 360;
        this.QUARTER_TOTAL_ANGLE = 90;
        this.angleArray = new Array(Math.round(this.TOTAL_ANGLE));
        this.NEGATIVE_ONE = -1;
        this.NOT_ANGLE = new NamedAngle(this.NEGATIVE_ONE, CommonStrings.getInstance().EMPTY);
        this.frameUtil = FrameUtil.getInstance();
        var commonPhoneStrings = CommonPhoneStrings.getInstance();
        ;
        var total = this.angleArray.length;
        ;
        this.UP = new NamedAngle(0, commonPhoneStrings.UP);
        this.angleArray[0] = this.UP;
        for (var index = 1; index < 90; index++) {
            this.angleArray[index] = new Angle(index);
        }
        this.RIGHT = new NamedAngle(90, commonPhoneStrings.RIGHT);
        this.angleArray[90] = this.RIGHT;
        for (var index = 91; index < 180; index++) {
            this.angleArray[index] = new Angle(index);
        }
        this.DOWN = new NamedAngle(180, commonPhoneStrings.DOWN);
        this.angleArray[180] = this.DOWN;
        for (var index = 181; index < 270; index++) {
            this.angleArray[index] = new Angle(index);
        }
        this.LEFT = new NamedAngle(270, commonPhoneStrings.LEFT);
        this.angleArray[270] = this.LEFT;
        for (var index = 271; index < total; index++) {
            this.angleArray[index] = new Angle(index);
        }
    }
    getAt(index) {
        var adjustedIndex = Math.round(this.frameUtil.adjustAngleToFrameAngle(index));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleArray[adjustedIndex];
    }
    getClosestDirection(angle) {
        if ((angle >= 315 && angle < 360) || (angle >= 0 && angle < 45)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.UP;
        }
        else if (angle >= 45 && angle < 135) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.RIGHT;
        }
        else if (angle >= 135 && angle < 225) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.DOWN;
        }
        else if (angle >= 225 && angle < 315) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.LEFT;
        }
        throw new RuntimeException();
    }
    getGeneralDirection() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.NOT_ANGLE;
    }
}
AngleFactory.instance = new AngleFactory();
