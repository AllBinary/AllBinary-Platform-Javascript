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
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
import { BasicVelocityProperties } from '../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
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
export class ConstantVelocityNotifyViewChangeMovement extends Movement {
    constructor() {
        super();
        this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
        this.speedBasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;
        this.basicVelocityProperties = new BasicVelocityProperties();
    }
    init(speedBasicDecimal, angle, otherAngle) {
        this.speedBasicDecimal = speedBasicDecimal;
        var angleFactory = AngleFactory.getInstance();
        ;
        this.basicVelocityProperties.setVelocityWithBigDecimal(speedBasicDecimal, angleFactory.getAt(angle), angleFactory.getAt(otherAngle));
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
        var x = this.basicVelocityProperties.getVelocityXBasicDecimalP().getScaled();
        ;
        var y = this.basicVelocityProperties.getVelocityYBasicDecimalP().getScaled();
        ;
        var z = this.basicVelocityProperties.getVelocityZBasicDecimalP().getScaled();
        ;
        layer.moveDXYZ(x, y, z);
        if (x != 0 || y != 0 || z != 0) {
            layer.onViewPositionChangeEvent();
        }
    }
    stop() {
        this.basicVelocityProperties.zero();
    }
}
