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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicVelocityProperties } from './BasicVelocityProperties.js';
//not GWT import - same folder const VelocityInterface
export class VelocityProperties extends BasicVelocityProperties {
    constructor(maxForwardVelocity, maxReverseVelocity) {
        super();
        this.maxForwardVelocity = 0;
        this.maxReverseVelocity = 0;
        this.setMaxForwardVelocity(maxForwardVelocity);
        this.setMaxReverseVelocity(maxReverseVelocity);
    }
    getMaxForwardVelocity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxForwardVelocity;
    }
    setMaxForwardVelocity(maxForwardVelocity) {
        this.maxForwardVelocity = maxForwardVelocity;
    }
    getMaxReverseVelocity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxReverseVelocity;
    }
    setMaxReverseVelocity(maxReverseVelocity) {
        this.maxReverseVelocity = maxReverseVelocity;
    }
    limitMaxXYForwardVelocity() {
        this.limitMaxXYVelocity(this.getMaxForwardVelocity());
    }
    limitMaxXYReverseVelocity() {
        this.limitMaxXYVelocity(this.getMaxReverseVelocity());
    }
    limitMaxYForwardVelocity() {
        this.limitMaxYVelocity(this.getMaxForwardVelocity());
    }
    limitMaxYReverseVelocity() {
        this.limitMaxYVelocity(this.getMaxReverseVelocity());
    }
    limitMaxXForwardVelocity() {
        this.limitMaxXVelocity(this.getMaxForwardVelocity());
    }
    limitMaxXReverseVelocity() {
        this.limitMaxXVelocity(this.getMaxReverseVelocity());
    }
    isOverXYMaxForwardVelocity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isOverXYMaxVelocity(this.getMaxForwardVelocity());
        ;
    }
    isOverXYMaxReverseVelocity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isOverXYMaxVelocity(this.getMaxReverseVelocity());
        ;
    }
    limitXYToForwardAndReverseMaxVelocity() {
        this.limitMaxXYForwardVelocity();
        this.limitMaxXYReverseVelocity();
    }
    limitMaxXYVelocity(maxVelocity) {
        this.limitMaxXVelocity(maxVelocity);
        this.limitMaxYVelocity(maxVelocity);
    }
    limitMaxPositiveYVelocity(maxVelocity) {
        if (this.velocityYBasicDecimal.getUnscaled() > maxVelocity) {
            this.velocityYBasicDecimal.setint(maxVelocity);
        }
    }
    limitMaxNegativeYVelocity(maxVelocity) {
        if (this.velocityYBasicDecimal.getUnscaled() < -maxVelocity) {
            this.velocityYBasicDecimal.setint(-maxVelocity);
        }
    }
    limitMaxYVelocity(maxVelocity) {
        this.limitMaxPositiveYVelocity(maxVelocity);
        this.limitMaxNegativeYVelocity(maxVelocity);
    }
    limitMaxXVelocity(maxVelocity) {
        if (this.velocityXBasicDecimal.getUnscaled() > maxVelocity) {
            this.velocityXBasicDecimal.setint(maxVelocity);
        }
        if (this.velocityXBasicDecimal.getUnscaled() < -maxVelocity) {
            this.velocityXBasicDecimal.setint(-maxVelocity);
        }
    }
    isOverXYMaxVelocity(maxVelocity) {
        if (this.velocityXBasicDecimal.getUnscaled() > maxVelocity) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (this.velocityXBasicDecimal.getUnscaled() < -maxVelocity) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (this.velocityYBasicDecimal.getUnscaled() > maxVelocity) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (this.velocityYBasicDecimal.getUnscaled() < -maxVelocity) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setVelocityi(magnitude, angle, otherAngle) {
        super.setVelocityi(magnitude, angle, otherAngle);
        this.limitXYToForwardAndReverseMaxVelocity();
    }
    addVelocityi(magnitude, angle, otherAngle) {
        super.addVelocityi(magnitude, angle, otherAngle);
        this.limitXYToForwardAndReverseMaxVelocity();
    }
}
VelocityProperties.NULL_VELOCITY_PROPERTIES = new VelocityProperties(0, 0);
