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
//not GWT import const AllBinaryLayer
import { BasicDecimal } from '../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal
import { AxisMathVectorUtil } from '../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
//not GWT import const AxisMathVectorUtil
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Movement } from './Movement.js';
//not GWT import - same folder const Movement
export class BasicConstantVelocityMovement extends Movement {
    constructor(basicDecimal, velocityProperties) {
        super();
        this.speedBasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;
        this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
        this.setSpeedBasicDecimal(basicDecimal);
        this.velocityProperties = velocityProperties;
    }
    init(speedBasicDecimal, angle, otherAngle) {
        this.speedBasicDecimal = speedBasicDecimal;
        var angleFactory = AngleFactory.getInstance();
        ;
        this.velocityProperties.setVelocityWithBigDecimal(speedBasicDecimal, angleFactory.getAt(angle), angleFactory.getAt(otherAngle));
    }
    moveOutsideRadius(layer, radius, angle, otherAngle) {
        var scaleFactorValue = this.speedBasicDecimal.getScaledFactorValue();
        ;
        var xVector = Math.round((this.axisMathVectorUtil.calculateX(radius, angle) / scaleFactorValue));
        ;
        var yVector = Math.round((this.axisMathVectorUtil.calculateY(radius, angle) / scaleFactorValue));
        ;
        var zVector = Math.round((this.axisMathVectorUtil.calculateZ(radius, otherAngle) / scaleFactorValue));
        ;
        layer.moveDXYZ(xVector, yVector, zVector);
    }
    //@Throws(Exception.constructor)
    process(layer) {
        layer.moveDXYZ(this.velocityProperties.getVelocityXBasicDecimalP().getScaled(), this.velocityProperties.getVelocityYBasicDecimalP().getScaled(), this.velocityProperties.getVelocityZBasicDecimalP().getScaled());
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocityProperties.toString();
        ;
    }
    stop() {
        this.velocityProperties.zero();
    }
    getVelocityProperties() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocityProperties;
    }
    setVelocityProperties(velocityProperties) {
        this.velocityProperties = velocityProperties;
    }
    setSpeedBasicDecimal(speedBasicDecimal) {
        this.speedBasicDecimal = speedBasicDecimal;
    }
    getSpeedBasicDecimal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.speedBasicDecimal;
    }
}
