/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//not GWT import const Graphics
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SynchObject } from '../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not GWT import - same folder const Layer
export class LayerManager extends Object {
    constructor(layerManagerLogging) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.systemWrapper = ABSystemWrapper.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.list = new BasicArrayListD();
        this.anyType = new SynchObject();
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.layerManagerLogging = layerManagerLogging;
    }
    contains(layerInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.contains(layerInterface);
        ;
    }
    //@Throws(Exception.constructor)
    update(layerInterface) {
        var had = this.list.remove(layerInterface);
        ;
        if (had) {
            var nextLayerInterface;
            ;
            var size = this.list.size();
            ;
            for (var index = 0; index < size; index++) {
                nextLayerInterface = this.list.get(index);
                if (layerInterface.getZP() > nextLayerInterface.getZP()) {
                    this.list.addAt(index, layerInterface);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return;
                }
            }
            this.list.add(layerInterface);
        }
    }
    //@Throws(Exception.constructor)
    insert(layerInterface) {
        var nextLayerInterface;
        ;
        var size = this.list.size();
        ;
        for (var index = 0; index < size; index++) {
            nextLayerInterface = this.list.get(index);
            if (layerInterface.getZP() > nextLayerInterface.getZP()) {
                this.appendAt(layerInterface, index);
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
        }
        this.append(layerInterface);
    }
    //@Throws(Exception.constructor)
    append(layerInterface) {
        this.layerManagerLogging.append(layerInterface);
        this.list.add(layerInterface);
    }
    //@Throws(Exception.constructor)
    appendAt(layerInterface, index) {
        this.layerManagerLogging.appendAt(layerInterface, index);
        this.list.addAt(index, layerInterface);
    }
    //@Throws(Exception.constructor)
    remove(layerInterface) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 
        //mutex.withLock
        this.layerManagerLogging.remove(layerInterface);
        var result = this.list.remove(layerInterface);
        ;
        this.layerManagerLogging.removeResult(this, layerInterface, result);
    }
    getLayerAt(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.objectArray[index];
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.size();
        ;
    }
    //@Throws(Exception.constructor)
    cleanup() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 
        //mutex.withLock
        this.list.clear();
        this.layerManagerLogging.clear();
        this.tsUtil.gc();
        this.tsUtil.gc();
    }
    paint(g, x, y) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 
        //mutex.withLock
        var comp;
        ;
        for (var index = this.list.size(); --index >= 0;) {
            comp = this.list.objectArray[index];
            if (comp !=
                null
                && comp.isVisible()) {
                comp.paint(g);
            }
        }
    }
}
