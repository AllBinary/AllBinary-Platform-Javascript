/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { System } from '../../../java/lang/System.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SynchObject } from '../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject = globalThis.org.allbinary.thread.SynchObject;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
export class LayerManager extends Object {
    constructor(layerManagerLogging) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
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
        System.gc();
        System.gc();
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
