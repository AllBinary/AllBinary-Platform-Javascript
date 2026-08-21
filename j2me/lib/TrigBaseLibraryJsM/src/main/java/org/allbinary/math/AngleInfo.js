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
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
import { AngleIncrementInfoFactory } from './AngleIncrementInfoFactory.js';
import { FrameUtil } from './FrameUtil.js';
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
