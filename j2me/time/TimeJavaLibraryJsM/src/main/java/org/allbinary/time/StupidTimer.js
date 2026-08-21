/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Exception } from '../../../java/lang/Exception.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { ThreadObjectUtil } from '../../../org/allbinary/thread/ThreadObjectUtil.js';
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
