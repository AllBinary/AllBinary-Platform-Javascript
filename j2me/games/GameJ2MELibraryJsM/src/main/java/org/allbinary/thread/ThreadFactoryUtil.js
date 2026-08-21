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
import { Thread } from '../../../java/lang/Thread.js';
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
import { DemoCanvas } from '../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
import { RunnableCanvasSingleThreadStartRunnable } from '../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { PrimaryThreadPool } from './PrimaryThreadPool.js';
export class ThreadFactoryUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ThreadFactoryUtil.instance;
    }
    getInstanceGameCanvasRunnable(runnable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstanceType(runnable, runnable.getType());
        ;
    }
    getInstanceForRunnable(runnable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getInstanceType(runnable, runnable.getType());
        ;
    }
    getInstanceType(runnable, type) {
        var commonStrings = CommonStrings.getInstance();
        ;
        if (J2MEUtil.isHTML()) {
            if (type == DemoCanvas.TYPE || type == AllBinaryGameCanvas.TYPE) {
                var demoGameSingleThreadStartRunnable = new RunnableCanvasSingleThreadStartRunnable(runnable);
                ;
                PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for DemoCanvas/AllBinaryGameCanvas under PlayN/HTML5: ").append(StringUtil.getInstance().toString(runnable)).toString(), this, commonStrings.CONSTRUCTOR);
                var primaryThreadPool = PrimaryThreadPool.getInstance();
                ;
                primaryThreadPool.runTask(demoGameSingleThreadStartRunnable);
            }
            else {
                PreLogUtil.put(new StringMaker().append("Using Pseudo Thread for Runnable under PlayN/HTML5: ").append(StringUtil.getInstance().toString(runnable)).toString(), this, commonStrings.CONSTRUCTOR);
                var primaryThreadPool = PrimaryThreadPool.getInstance();
                ;
                primaryThreadPool.runTask(runnable);
            }
        }
        var thread = new Thread(runnable, runnable.toString());
        ;
        this.logUtil.putF(thread.toString(), this, commonStrings.CONSTRUCTOR);
        //if statement needs to be on the same line and ternary does not work the same way.
        return thread;
    }
    start(thread) {
        thread.start();
    }
}
ThreadFactoryUtil.instance = new ThreadFactoryUtil();
