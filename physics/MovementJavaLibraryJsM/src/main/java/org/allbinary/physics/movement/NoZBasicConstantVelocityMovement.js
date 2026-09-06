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
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
import { AxisMathVectorUtil } from '../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
//not GWT import const AxisMathVectorUtil = globalThis.org.allbinary.logic.math.vector.AxisMathVectorUtil;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Movement } from './Movement.js';
//not GWT import - same folder const Movement = globalThis.org.allbinary.physics.movement.Movement;
export class NoZBasicConstantVelocityMovement extends Movement {
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
        layer.moveDXYZ(xVector, yVector, 0);
    }
    //@Throws(Exception.constructor)
    process(layer) {
        layer.moveDXYZ(this.velocityProperties.getVelocityXBasicDecimalP().getScaled(), this.velocityProperties.getVelocityYBasicDecimalP().getScaled(), 0);
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
