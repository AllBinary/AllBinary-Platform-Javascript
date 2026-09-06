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
import { Thread } from '../../../java/lang/Thread.js';
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
import { NullWaitGameRunnable } from '../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js';
//not GWT import const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;
import { MyCanvas } from '../../../org/allbinary/graphics/displayable/MyCanvas.js';
//not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { NullThread } from '../../../org/allbinary/thread/NullThread.js';
//not GWT import const RunnableInterface = globalThis.org.allbinary.thread.RunnableInterface;
import { ThreadObjectUtil } from '../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import const ThreadObjectUtil = globalThis.org.allbinary.thread.ThreadObjectUtil;
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Processor } from './Processor.js';
//not GWT import - same folder const Processor = globalThis.org.allbinary.canvas.Processor;
import { RunnableCanvasRefreshHelper } from './RunnableCanvasRefreshHelper.js';
//not GWT import - same folder const RunnableCanvasRefreshHelper = globalThis.org.allbinary.canvas.RunnableCanvasRefreshHelper;
export class RunnableCanvas extends MyCanvas {
    constructor(commandListener, childNameList, hasParam) {
        super(CommonStrings.getInstance().UNKNOWN, childNameList);
        this.nullUtil = NullUtil.getInstance();
        this.stdUtil = StdUtil.getInstance();
        this.systemWrapper = ABSystemWrapper.getInstance();
        this.thread = NullThread.NULL_THREAD;
        this.currentThread = NullThread.NULL_THREAD;
        this.running = false;
        this.loopTimeHelper = new TimeDelayHelper(NullWaitGameRunnable.getInstance().WAIT);
        this.runnableCanvasRefreshHelper = Processor.getInstance();
        this.commonLabels = CommonLabels.getInstance();
        this.threadObjectUtil = ThreadObjectUtil.getInstance();
        this.SET_RUNNING = "setRunning";
        this.IS_RUNNING = "isRunning";
        this.THREAD = "Thread: ";
        this.NOT_EQUAL = " != ";
        this.PAUSE_SLEEP = "pause sleep";
        this.START_PAUSE = "start pause - game thread sleep at: ";
        this.END_PAUSE = "end pause - game thread sleep at: ";
        this.PROCESS_LOOP_SLEEP = "processLoopSleep";
        this.pauseWait = 0;
        this.notified = false;
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(new StringMaker().append("delay: ").appendint(this.loopTimeHelper.delay).toString(), this, this.commonStrings.CONSTRUCTOR);
        this.runnableCanvasRefreshHelper = new RunnableCanvasRefreshHelper(this);
        if (commandListener !=
            null) {
            this.initCommands(commandListener);
        }
        else if (hasParam) {
            this.logUtil.putF("commandListener was null", this, "initCommands");
        }
    }
    initCommands(cmdListener) {
        this.logUtil.putF(this.commonStrings.NOT_IMPLEMENTED, this, "initCommands");
    }
    isMainCanvas() {
        if (this.getCustomCommandListener() !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    setThread(thread) {
        this.thread = thread;
    }
    setRunning(running) {
        this.running = running;
        if (!this.running) {
            this.thread = NullThread.NULL_THREAD;
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this) 
            //mutex.withLock
            this.threadObjectUtil.notifyObject(this);
        }
        this.logUtil.putF(new StringMaker().append(this.IS_RUNNING).appendboolean(this.running).toString(), this, this.SET_RUNNING);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isRunning() {
        if (this.thread == this.currentThread) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.running;
        }
        else {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(this.THREAD);
            if (this.thread !=
                null) {
                stringBuffer.append(this.thread.toString());
            }
            stringBuffer.append(this.NOT_EQUAL);
            if (this.currentThread !=
                null) {
                stringBuffer.append(StringUtil.getInstance().toString(this.currentThread));
            }
            this.logUtil.putF(stringBuffer.toString(), this, this.IS_RUNNING);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getLoopTimeHelperP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loopTimeHelper;
    }
    setWait(wait) {
        this.loopTimeHelper.delay = wait;
        this.pauseWait = wait * 3;
        this.logUtil.putF(new StringMaker().append("setWait - delay: ").appendint(this.loopTimeHelper.delay).toString(), this, this.commonStrings.CONSTRUCTOR);
    }
    getWait() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loopTimeHelper.delay;
    }
    setCurrentThread() {
        this.currentThread = Thread.currentThread();
    }
    setCurrentThreadFake() {
        this.currentThread = this.thread;
    }
    showNotify() {
        try {
            this.stopWaiting();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "showNotify", e);
        }
    }
    //@Throws(Exception.constructor)
    stopWaiting() {
        this.notified = true;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        this.threadObjectUtil.notifyObject(this);
        this.repaint();
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    waitOnNotify(wait) {
        if (!this.notified) {
            if (wait > 0) {
                this.threadObjectUtil.waitObjectFor(this, wait);
            }
            else {
                this.threadObjectUtil.waitObject(this);
            }
        }
    }
    //@Throws(Exception.constructor)
    processSleep() {
        Thread.sleep(this.pauseWait);
    }
    isPausable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    processGameSleep(sleep) {
        Thread.sleep(sleep);
    }
    //@Throws(Exception.constructor)
    processLoopSleep() {
        this.runnableCanvasRefreshHelper.process();
        if (this.isPaused()) {
            var stringMaker = new StringMaker();
            ;
            if (this.isRunning() && !this.isSingleThread()) {
                stringMaker.delete(0, stringMaker.length());
                var currentTimeMillis = this.systemWrapper.currentTimeMillis();
                ;
                this.logUtil.putF(stringMaker.append(this.START_PAUSE).appendlong(currentTimeMillis).append(this.PAUSE_SLEEP).appendlong(this.pauseWait).toString(), this, this.PROCESS_LOOP_SLEEP);
                while (this.isPaused() && this.isRunning() && !this.isSingleThread()) {
                    this.processSleep();
                    if (!this.isPausable()) {
                        stringMaker.delete(0, stringMaker.length());
                        this.logUtil.putF(stringMaker.append(this.END_PAUSE).appendlong(currentTimeMillis).toString(), this, this.PROCESS_LOOP_SLEEP);
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return;
                    }
                }
            }
        }
        var elapsedTime = this.loopTimeHelper.getElapsedTNT();
        ;
        var wait = this.loopTimeHelper.delay;
        ;
        if (elapsedTime > wait) {
            elapsedTime = wait;
        }
        else {
            this.processGameSleep(wait - elapsedTime);
        }
    }
    isSingleThread() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    run() {
        this.setCurrentThread();
    }
    //@Throws(Exception.constructor)
    end2() {
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
}
