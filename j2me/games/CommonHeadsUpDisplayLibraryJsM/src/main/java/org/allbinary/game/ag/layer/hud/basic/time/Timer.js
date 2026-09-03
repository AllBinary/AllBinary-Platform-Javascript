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
import { Object } from '../../../../../../../../java/lang/Object.js';
//not plain js import { PrimitiveLongSingleton } from '../../../../../../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
const PrimitiveLongSingleton = globalThis.org.allbinary.logic.math.PrimitiveLongSingleton;
//not plain js import { PrimitiveLongUtil } from '../../../../../../../../org/allbinary/logic/math/PrimitiveLongUtil.js';
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;
import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Timer extends Object {
    constructor(maxTime) {
        super();
        this.startTime = -1;
        this.hundredthTime = 0;
        this.modifier = 0;
        this.hundrethsString = PrimitiveLongSingleton.getInstance().ZERO;
        this.totalDigits = 1;
        this.MAX = ['L', 'O', 'L'];
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(maxTime);
        this.maxTime = maxTime;
    }
    start() {
        this.hundredthTime = 0;
        this.startTime = this.gameTickTimeDelayHelper.startTime;
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hundredthTime;
    }
    update() {
        var lastLowerTime = this.hundredthTime;
        ;
        var currentTime = ((this.modifier + this.gameTickTimeDelayHelper.startTime) - this.startTime);
        ;
        if (currentTime < 0) {
            currentTime = 0;
        }
        this.hundredthTime = currentTime / 100;
        if (this.hundredthTime >= this.maxTime) {
            if (this.startTime > 0) {
                this.hundrethsString = this.MAX;
            }
        }
        else if (lastLowerTime != this.hundredthTime) {
            this.hundrethsString = this.primitiveLongUtil.getCharArray(Math.round(this.hundredthTime));
            this.totalDigits = this.primitiveLongUtil.getCurrentTotalDigits();
        }
    }
    reduce(value) {
        this.modifier -= value;
    }
    add(value) {
        this.modifier += value;
    }
    getTimeChars() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hundrethsString;
    }
    getCurrentTotalDigits() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalDigits;
    }
}
