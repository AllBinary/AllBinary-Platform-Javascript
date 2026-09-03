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
import { Integer } from '../../../java/lang/Integer.js';
//not GWT import const View = globalThis.android.view.View;
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidGameStatistics } from './AndroidGameStatistics.js';
//not GWT import const AndroidGameStatistics = globalThis.org.allbinary.canvas.AndroidGameStatistics;
export class ProfilingRefreshHelper extends AndroidGameStatistics {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ProfilingRefreshHelper.instance;
    }
    constructor() {
        super();
        this.firstTime = true;
        this.bestFrameProcessingTime = 0;
        this.worstFrameProcessingTime = 0;
        this.frameProcessingTimeElapsed = 0;
    }
    initView(view) {
        super.initView(view);
        this.frameProcessingTimeElapsed = this.getTimeDelayHelper().getStartTime();
        this.bestFrameProcessingTime = Integer.MAX_VALUE;
        this.worstFrameProcessingTime = 0;
    }
    nextFrame() {
        this.frameProcessingTimeElapsed = Date.now() - this.frameProcessingTimeElapsed;
        if (this.firstTime != true) {
            if (this.frameProcessingTimeElapsed > this.worstFrameProcessingTime)
                this.worstFrameProcessingTime = Math.round(this.frameProcessingTimeElapsed);
            if (this.frameProcessingTimeElapsed < this.bestFrameProcessingTime)
                this.bestFrameProcessingTime = Math.round(this.frameProcessingTimeElapsed);
        }
        else {
            this.firstTime = false;
        }
        super.nextFrame();
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(super.toString()).append(" Worst: ").appendint(this.worstFrameProcessingTime).append(" Best: ").appendint(this.bestFrameProcessingTime).toString();
        ;
    }
}
ProfilingRefreshHelper.instance = new ProfilingRefreshHelper();
