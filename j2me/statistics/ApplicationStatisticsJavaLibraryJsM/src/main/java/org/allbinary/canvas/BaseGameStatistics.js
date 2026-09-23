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
import { Integer } from '../../../java/lang/Integer.js';
import { PrimitiveLongSingleton } from '../../../org/allbinary/logic/math/PrimitiveLongSingleton.js';
//not GWT import const PrimitiveLongSingleton
import { ScaleFactorFactory } from '../../../org/allbinary/logic/math/ScaleFactorFactory.js';
//not GWT import const ScaleFactorFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const GameTickTimeDelayHelper
import { GameTickTimeDelayHelperFactory } from '../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BaseGameStatistics extends Object {
    constructor() {
        super();
        this.timeDelayHelper = new TimeDelayHelper(Integer.MAX_VALUE);
        this.updateDelayHelper = new TimeDelayHelper(2000);
        this.totalRefreshes = 0;
        this.totalFrames = 0;
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.DEFAULT_SCALE_FACTOR = ScaleFactorFactory.getInstance().DEFAULT_SCALE_FACTOR;
        this.NOT = "Not enough Time to Calculate";
        this.EMPTY_STRING = StringUtil.getInstance().EMPTY_STRING;
        this.STRING_ARRAY = [
            " Total Time: ", this.EMPTY_STRING, " Total Frames: ", this.EMPTY_STRING, " Frames/10 Sec: ", this.EMPTY_STRING, " Total Paints: ", this.EMPTY_STRING, " Paints/10 Sec: ", this.EMPTY_STRING
        ];
        this.SPACE_CHAR = ' ';
        this.PLUS_CHAR = '+';
        this.X_CHAR = 'X';
        this.CHAR_ARRAY = [
            ['F', 'r', 'a', 'm', 'e', 's', '/', '1', '0', ' ', 'S', 'e', 'c', ':'], ['X', 'X'], ['P', 'a', 'i', 'n', 't', 's', '/', '1', '0', ' ', 'S', 'e', 'c', ':'], ['X', 'X']
        ];
        this.primitiveLongSingleton = PrimitiveLongSingleton.getInstance();
    }
    init() {
        this.timeDelayHelper.setStartTimeTNT();
        this.totalRefreshes = 0;
        this.totalFrames = 0;
    }
    add(string) {
    }
    process() {
    }
    nextFrame() {
        this.totalFrames++;
    }
    nextRefresh() {
        this.totalRefreshes++;
    }
    getRefreshRate() {
        var elapsed = this.timeDelayHelper.getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        if (elapsed > 1) {
            var time = (this.totalRefreshes / (elapsed >> this.DEFAULT_SCALE_FACTOR));
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return time;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return 0;
        }
    }
    getTimeDelayHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.timeDelayHelper;
    }
    to2DCharArray() {
        var totalTime = this.timeDelayHelper.getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        totalTime = (totalTime >> this.DEFAULT_SCALE_FACTOR);
        if (totalTime > 0 && this.updateDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            var framesPerSec = Math.round((this.totalFrames / totalTime));
            ;
            if (framesPerSec < 10) {
                this.CHAR_ARRAY[1][0] = this.SPACE_CHAR;
                this.CHAR_ARRAY[1][1] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[framesPerSec];
            }
            else if (framesPerSec < 100) {
                var tens = framesPerSec / 10;
                ;
                var removeTens = tens * 10;
                ;
                this.CHAR_ARRAY[1][0] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[tens];
                this.CHAR_ARRAY[1][1] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[framesPerSec - removeTens];
            }
            else {
                this.CHAR_ARRAY[1][0] = this.PLUS_CHAR;
                this.CHAR_ARRAY[1][1] = this.PLUS_CHAR;
            }
            var refreshesPerSec = Math.round((this.totalRefreshes / totalTime));
            ;
            if (refreshesPerSec < 10) {
                this.CHAR_ARRAY[3][0] = this.X_CHAR;
                this.CHAR_ARRAY[3][1] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[refreshesPerSec];
            }
            else if (refreshesPerSec < 100) {
                var tens = refreshesPerSec / 10;
                ;
                var removeTens = tens * 10;
                ;
                this.CHAR_ARRAY[3][0] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[refreshesPerSec / 10];
                this.CHAR_ARRAY[3][1] = this.primitiveLongSingleton.NUMBER_CHAR_ARRAY[refreshesPerSec - removeTens];
            }
            else {
                this.CHAR_ARRAY[3][0] = this.PLUS_CHAR;
                this.CHAR_ARRAY[3][1] = this.PLUS_CHAR;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.CHAR_ARRAY;
    }
    toStringArray() {
        var totalTime = this.timeDelayHelper.getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        totalTime = (totalTime / 10000);
        if (totalTime > 0) {
            this.STRING_ARRAY[1] = (totalTime).toString();
            this.STRING_ARRAY[3] = (this.totalFrames).toString();
            this.STRING_ARRAY[5] = (this.totalFrames / totalTime).toString();
            this.STRING_ARRAY[7] = (this.totalRefreshes).toString();
            this.STRING_ARRAY[9] = (this.totalRefreshes / totalTime).toString();
        }
        else {
            var string = this.EMPTY_STRING;
            ;
            this.STRING_ARRAY[1] = string;
            this.STRING_ARRAY[3] = string;
            this.STRING_ARRAY[5] = string;
            this.STRING_ARRAY[7] = string;
            this.STRING_ARRAY[9] = string;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.STRING_ARRAY;
    }
    toStringAt(totalTime) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.STRING_ARRAY[0]);
        stringBuffer.appendlong(totalTime);
        stringBuffer.append(this.STRING_ARRAY[2]);
        stringBuffer.appendlong(this.totalFrames);
        stringBuffer.append(this.STRING_ARRAY[4]);
        stringBuffer.appendlong(this.totalFrames / totalTime);
        if (this.totalRefreshes > 0) {
            stringBuffer.append(this.STRING_ARRAY[6]);
            stringBuffer.appendlong(this.totalRefreshes);
            stringBuffer.append(this.STRING_ARRAY[8]);
            stringBuffer.appendlong(this.totalRefreshes / totalTime);
            stringBuffer.append(CommonSeps.getInstance().NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    toString() {
        var totalTime = this.timeDelayHelper.getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        totalTime = (totalTime / 1000);
        if (totalTime > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.toStringAt(totalTime);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NOT;
        }
    }
}
