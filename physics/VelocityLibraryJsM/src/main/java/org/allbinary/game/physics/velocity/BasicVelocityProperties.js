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
import { Object } from '../../../../../java/lang/Object.js';
import { DirectionUtil } from '../../../../../org/allbinary/direction/DirectionUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
import { AxisMathVectorUtil } from '../../../../../org/allbinary/logic/math/vector/AxisMathVectorUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { PositionStrings } from '../../../../../org/allbinary/math/PositionStrings.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
export class BasicVelocityProperties extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
        this.directionUtil = DirectionUtil.getInstance();
        this.velocityXBasicDecimal = new BasicDecimal(0);
        this.velocityYBasicDecimal = new BasicDecimal(0);
        this.velocityZBasicDecimal = new BasicDecimal(0);
    }
    zero() {
        this.velocityXBasicDecimal.setint(0);
        this.velocityYBasicDecimal.setint(0);
        this.velocityZBasicDecimal.setint(0);
    }
    getVelocityXBasicDecimalP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocityXBasicDecimal;
    }
    getVelocityYBasicDecimalP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocityYBasicDecimal;
    }
    getVelocityZBasicDecimalP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.velocityZBasicDecimal;
    }
    setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal, direction, otherDirection) {
        var angle = this.directionUtil.getAngle(direction);
        ;
        var otherAngle = this.directionUtil.getAngle(otherDirection);
        ;
        this.setVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    }
    setVelocityWithDirection(magnitude, direction, otherDirection) {
        var angle = this.directionUtil.getAngle(direction);
        ;
        var otherAngle = this.directionUtil.getAngle(otherDirection);
        ;
        this.setVelocity(magnitude, angle, otherAngle);
    }
    addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal, direction, otherDirection) {
        var angle = this.directionUtil.getAngle(direction);
        ;
        var otherAngle = this.directionUtil.getAngle(otherDirection);
        ;
        this.addVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle);
    }
    addVelocityWithDirection(magnitude, direction, otherDirection) {
        var angle = this.directionUtil.getAngle(direction);
        ;
        var otherAngle = this.directionUtil.getAngle(otherDirection);
        ;
        this.addVelocity(magnitude, angle, otherAngle);
    }
    setVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle) {
        var magnitude = magnitudeBasicDecimal.getUnscaled();
        ;
        this.setVelocity(magnitude, angle, otherAngle);
    }
    addVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle) {
        var magnitude = magnitudeBasicDecimal.getUnscaled();
        ;
        this.addVelocity(magnitude, angle, otherAngle);
    }
    setVelocity(magnitude, angle, otherAngle) {
        this.setVelocityi(magnitude, Math.round(angle.getValue()), Math.round(otherAngle.getValue()));
    }
    addVelocity(magnitude, angle, otherAngle) {
        this.addVelocityi(magnitude, Math.round(angle.getValue()), Math.round(otherAngle.getValue()));
    }
    setVelocityi(magnitude, angle, otherAngle) {
        var xVector = (this.axisMathVectorUtil.calculateX(magnitude, angle) / this.velocityXBasicDecimal.getScaledFactorValue());
        ;
        var yVector = (this.axisMathVectorUtil.calculateY(magnitude, angle) / this.velocityYBasicDecimal.getScaledFactorValue());
        ;
        var zVector = (this.axisMathVectorUtil.calculateZ(magnitude, otherAngle) / this.velocityZBasicDecimal.getScaledFactorValue());
        ;
        this.velocityXBasicDecimal.setlong(xVector);
        this.velocityYBasicDecimal.setlong(yVector);
        this.velocityZBasicDecimal.setlong(zVector);
    }
    addVelocityi(magnitude, angle, otherAngle) {
        var xVector = (this.axisMathVectorUtil.calculateX(magnitude, angle) / this.velocityXBasicDecimal.getScaledFactorValue());
        ;
        var yVector = (this.axisMathVectorUtil.calculateY(magnitude, angle) / this.velocityYBasicDecimal.getScaledFactorValue());
        ;
        var zVector = (this.axisMathVectorUtil.calculateZ(magnitude, otherAngle) / this.velocityZBasicDecimal.getScaledFactorValue());
        ;
        this.velocityXBasicDecimal.addlong(xVector);
        this.velocityYBasicDecimal.addlong(yVector);
        this.velocityZBasicDecimal.addlong(zVector);
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var positionStrings = PositionStrings.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        stringBuffer.append("Velocity ");
        stringBuffer.append(positionStrings.X_LABEL);
        stringBuffer.append(stringUtil.toString(this.velocityXBasicDecimal));
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Y_LABEL);
        stringBuffer.append(stringUtil.toString(this.velocityYBasicDecimal));
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Z_LABEL);
        stringBuffer.append(stringUtil.toString(this.velocityZBasicDecimal));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
