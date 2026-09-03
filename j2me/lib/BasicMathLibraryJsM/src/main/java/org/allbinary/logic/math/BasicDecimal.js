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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { ScaleFactorFactory } from './ScaleFactorFactory.js';
const ScaleFactorFactory = globalThis.org.allbinary.logic.math.ScaleFactorFactory;
export class BasicDecimal extends Object {
    static createBigDecimal(bigDecimal) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicDecimal(bigDecimal.getUnscaled());
    }
    constructor(units) {
        super();
        this.scaled = 0;
        this.factor = ScaleFactorFactory.getInstance().DEFAULT_SCALE_FACTOR;
        this.factorValue = ScaleFactorFactory.getInstance().DEFAULT_SCALE_VALUE;
        this.units = units;
        this.updateScaled();
    }
    setint(value) {
        this.units = value;
        this.updateScaled();
    }
    setlong(value) {
        this.units = value;
        this.updateScaled();
    }
    set(bigDecimal) {
        this.units = bigDecimal.getUnscaled();
        this.updateScaled();
    }
    addint(value) {
        this.units = this.units + value;
        this.updateScaled();
    }
    addlong(value) {
        this.units = this.units + value;
        this.updateScaled();
    }
    add(bigDecimal) {
        this.units = this.units + bigDecimal.getUnscaled();
        this.updateScaled();
    }
    subtractint(value) {
        this.units = this.units - value;
        this.updateScaled();
    }
    subtractlong(value) {
        this.units = this.units - value;
        this.updateScaled();
    }
    subtract(bigDecimal) {
        this.units = this.units - bigDecimal.getUnscaled();
        this.updateScaled();
    }
    multiplyint(value) {
        this.units = this.units * value;
        this.updateScaled();
    }
    multiplylong(value) {
        this.units = this.units * value;
        this.updateScaled();
    }
    multiply(bigDecimal) {
        this.units = this.units * bigDecimal.getUnscaled();
        this.updateScaled();
    }
    divideint(value) {
        this.units = this.units / value;
        this.updateScaled();
    }
    dividelong(value) {
        this.units = this.units / value;
        this.updateScaled();
    }
    divide(bigDecimal) {
        this.units = this.units / bigDecimal.getUnscaled();
        this.updateScaled();
    }
    getUnscaled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.units;
    }
    updateScaled() {
        this.scaled = Math.round((this.units / this.factorValue));
    }
    getScaled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scaled;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (this.units).toString();
        ;
    }
    getScaledFactor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.factor;
    }
    getScaledFactorValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.factorValue;
    }
}
BasicDecimal.ZERO_BIGDECIMAL = new BasicDecimal(0);
