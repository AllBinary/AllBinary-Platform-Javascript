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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import - same folder const AngleIncrementInfo
import { AngleIncrementInfoFactory } from './AngleIncrementInfoFactory.js';
//not GWT import - same folder const AngleIncrementInfoFactory
import { FrameUtil } from './FrameUtil.js';
//not GWT import - same folder const FrameUtil
export class AngleInfo extends Object {
    static getInstance(angleIncrement) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AngleInfo(AngleIncrementInfoFactory.getInstance().getAt(angleIncrement));
    }
    constructor(angleIncrementInfo) {
        super();
        this.angle = 0;
        this.frameUtil = FrameUtil.getInstance();
        this.angleIncrementInfo = angleIncrementInfo;
    }
    adjustAngle(frame) {
        var newAngle = this.angleIncrementInfo.getAngleIncrement() * frame - 90;
        ;
        this.setAngle(this.frameUtil.adjustAngleToFrameAngle(newAngle));
    }
    getAngle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angle;
    }
    setAngle(angle) {
        this.angle = angle;
    }
    getAngleIncrementInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrementInfo;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(AngleInfo.ANGLE);
        stringBuffer.appendshort(this.angle);
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(StringUtil.getInstance().toString(this.getAngleIncrementInfo()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
AngleInfo.ANGLE = "Angle: ";
