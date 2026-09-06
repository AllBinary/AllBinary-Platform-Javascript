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
//not GWT import const View = globalThis.android.view.View;
import { BaseViewWrapper } from '../../../org/allbinary/android/view/BaseViewWrapper.js';
//not GWT import const BaseViewWrapper = globalThis.org.allbinary.android.view.BaseViewWrapper;
import { ViewWrapper } from '../../../org/allbinary/android/view/ViewWrapper.js';
//not GWT import const ViewWrapper = globalThis.org.allbinary.android.view.ViewWrapper;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseGameStatistics } from './BaseGameStatistics.js';
//not GWT import - same folder const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;
export class AndroidGameStatistics extends BaseGameStatistics {
    constructor() {
        super();
        this.view = BaseViewWrapper.NULL_VIEW_WRAPPER;
        this.totalOnDraws = 0;
        this.ANDROID_STRING_ARRAY = new Array(14);
        this.TOTAL_ONDRAWS = " Total onDraws: ";
        this.ONDRAWS_RATE = " onDraws(/10) Sec: ";
        var stringUtil = StringUtil.getInstance();
        ;
        for (var index = 0; index < this.ANDROID_STRING_ARRAY.length; index++) {
            this.ANDROID_STRING_ARRAY[index] = stringUtil.EMPTY_STRING;
        }
    }
    initView(view) {
        super.init();
        this.view = new ViewWrapper(view);
        this.totalOnDraws = 0;
    }
    process() {
        this.view.postInvalidate();
    }
    nextOnDraw() {
        this.totalOnDraws++;
    }
    toStringArray() {
        var stringArray = super.toStringArray();
        ;
        for (var index = 0; index < stringArray.length; index++) {
            this.ANDROID_STRING_ARRAY[index] = stringArray[index];
        }
        var totalTime = this.getTimeDelayHelper().getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        totalTime = (totalTime / 10000);
        this.ANDROID_STRING_ARRAY[10] = this.TOTAL_ONDRAWS;
        this.ANDROID_STRING_ARRAY[11] = (this.totalOnDraws).toString();
        this.ANDROID_STRING_ARRAY[12] = this.ONDRAWS_RATE;
        this.ANDROID_STRING_ARRAY[13] = (this.totalOnDraws / totalTime).toString();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ANDROID_STRING_ARRAY;
    }
    toString() {
        var totalTime = this.getTimeDelayHelper().getElapsed(this.gameTickTimeDelayHelper.startTime);
        ;
        totalTime = (totalTime / 1000);
        if (totalTime > 0) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(super.toStringAt(totalTime));
            if (this.totalOnDraws > 0) {
                stringBuffer.append(this.TOTAL_ONDRAWS);
                stringBuffer.append(this.totalOnDraws.toString());
                stringBuffer.append(this.ONDRAWS_RATE);
                var drawsOverTime = (this.totalOnDraws / totalTime).toString();
                ;
                stringBuffer.append(drawsOverTime);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return stringBuffer.toString();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.NOT;
        }
    }
}
