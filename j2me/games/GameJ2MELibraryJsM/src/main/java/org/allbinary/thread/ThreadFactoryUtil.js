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
//not GWT import const RunnableCanvas = globalThis.org.allbinary.canvas.RunnableCanvas;
import { AllBinaryGameCanvas } from '../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;
import { DemoCanvas } from '../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
//not GWT import const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;
import { RunnableCanvasSingleThreadStartRunnable } from '../../../org/allbinary/game/displayable/canvas/RunnableCanvasSingleThreadStartRunnable.js';
//not GWT import const RunnableCanvasSingleThreadStartRunnable = globalThis.org.allbinary.game.displayable.canvas.RunnableCanvasSingleThreadStartRunnable;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const ABRunnable = globalThis.org.allbinary.thread.ABRunnable;
import { PrimaryThreadPool } from './PrimaryThreadPool.js';
//not GWT import - same folder const ThreadPool = globalThis.org.allbinary.thread.ThreadPool;
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
