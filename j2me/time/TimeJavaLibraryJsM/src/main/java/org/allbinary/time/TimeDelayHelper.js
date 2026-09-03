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
import { Long } from '../../../java/lang/Long.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TimeDelayHelper extends Object {
    constructor(delay) {
        super();
        this.startTime = -1;
        this.elapsedTimeAtPause = Long.MIN_VALUE;
        this.delay = delay;
        this.setStartTimeTNT();
    }
    isTimeTNT() {
        var currentTime = Date.now();
        ;
        if (currentTime - this.startTime > this.delay) {
            this.startTime = currentTime;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isTimeSinceTNT(delay) {
        var currentTime = Date.now();
        ;
        if (currentTime - this.startTime > delay) {
            this.startTime = currentTime;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isTime(currentTime) {
        if (currentTime - this.startTime > this.delay) {
            this.startTime = currentTime;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isTimeWithoutReset(currentTime) {
        if (currentTime - this.startTime > this.delay) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isTimeSince(delay, currentTime) {
        if (currentTime - this.startTime > this.delay) {
            this.startTime = currentTime;
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getElapsedTNT() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Date.now() - this.startTime;
    }
    getElapsed(currentTime) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return currentTime - this.startTime;
    }
    isElapsed(currentTime, time) {
        if (this.getElapsed(currentTime) > time) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isElapsedTNT(time) {
        if (this.getElapsedTNT() > time) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    getStartTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startTime;
    }
    setStartTimeTNT() {
        this.startTime = Date.now();
    }
    pause() {
        this.elapsedTimeAtPause = this.getElapsedTNT();
        this.startTime = Long.MAX_VALUE;
    }
    resume() {
        if (this.elapsedTimeAtPause != Long.MIN_VALUE) {
            this.startTime = Date.now() + this.elapsedTimeAtPause;
            this.elapsedTimeAtPause = Long.MIN_VALUE;
            this.setStartTimeTNT();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toStringAt(currentTime) {
        var elapsed = this.getElapsed(currentTime);
        ;
        if (elapsed > 0) {
            var commonLabels = CommonLabels.getInstance();
            ;
            var elapsedAsString = (elapsed).toString();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return new StringMaker().append(commonLabels.START).appendlong(this.startTime).append(commonLabels.CURRENT).appendlong(currentTime).append(commonLabels.ELAPSED).append(elapsedAsString).toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
    toString() {
        var currentTime = Date.now();
        ;
        var elapsed = this.getElapsed(currentTime);
        ;
        if (elapsed > 0) {
            var commonLabels = CommonLabels.getInstance();
            ;
            var elapsedAsString = (elapsed).toString();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return new StringMaker().append(commonLabels.START).appendlong(this.startTime).append(commonLabels.CURRENT).appendlong(currentTime).append(commonLabels.ELAPSED).append(elapsedAsString).toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return StringUtil.getInstance().EMPTY_STRING;
        }
    }
}
