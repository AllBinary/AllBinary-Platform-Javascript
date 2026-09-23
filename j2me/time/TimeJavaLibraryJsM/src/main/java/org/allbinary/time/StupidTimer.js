/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Exception } from '../../../java/lang/Exception.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Visitor
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { ThreadObjectUtil } from '../../../org/allbinary/thread/ThreadObjectUtil.js';
//not GWT import - same folder const TimeDelayHelper
export class StupidTimer extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.nullUtil = NullUtil.getInstance();
        this.threadObjectUtil = ThreadObjectUtil.getInstance();
    }
    visitBool(visitorInterface) {
        var result = visitorInterface.visit(this.nullUtil.NULL_OBJECT);
        ;
        var result2 = result.valueOf();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return result2;
    }
    //@Throws(Exception.constructor)
    visit(visitorInterface, timeDelayHelper) {
        var tookTooLong = false;
        ;
        var WAITING_FOR = "Waiting for: ";
        ;
        PreLogUtil.put(new StringMaker().append(WAITING_FOR).append(StringUtil.getInstance().toString(visitorInterface)).toString(), this, this.commonStrings.VISIT);
        var index = 0;
        ;
        while (this.visitBool(visitorInterface)) {
            if (index % 10 == 0) {
                PreLogUtil.put(new StringMaker().append(WAITING_FOR).appendint(index).toString(), this, this.commonStrings.VISIT);
            }
            index++;
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this) 
            //mutex.withLock
            this.threadObjectUtil.waitObjectFor(this, 1800);
            if (timeDelayHelper.isTimeTNT()) {
                tookTooLong = true;
                break;
            }
        }
        if (tookTooLong) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.VISIT, new Exception(new StringMaker().append("Took Too Long: ").append(StringUtil.getInstance().toString(visitorInterface)).toString()));
        }
        else {
            PreLogUtil.put(timeDelayHelper.toString(), this, this.commonStrings.VISIT);
        }
    }
    //@Throws(Exception.constructor)
    stopWaiting() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        this.threadObjectUtil.notifyObject(this);
    }
}
