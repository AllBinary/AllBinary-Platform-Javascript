/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { RendererStrings } from '../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
//not GWT import const RendererStrings = globalThis.org.allbinary.graphics.opengles.renderer.RendererStrings;
import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
//not GWT import const PreResourceImageUtil = globalThis.org.allbinary.image.PreResourceImageUtil;
//not plain js import { OpenGLESImage } from '../../../../org/allbinary/image/opengles/OpenGLESImage.js';
const OpenGLESImage = globalThis.org.allbinary.image.opengles.OpenGLESImage;
//not GWT import const OpenGLImageCache = globalThis.org.allbinary.image.opengles.OpenGLImageCache;
import { OpenGLImageCacheFactory } from '../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js';
//not GWT import const OpenGLImageCacheFactory = globalThis.org.allbinary.image.opengles.OpenGLImageCacheFactory;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject = globalThis.org.allbinary.thread.SynchObject;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLCapabilities } from './OpenGLCapabilities.js';
//not GWT import const OpenGLCapabilities = globalThis.org.allbinary.graphics.opengles.OpenGLCapabilities;
import { OpenGLLogUtil } from './OpenGLLogUtil.js';
//not GWT import const OpenGLLogUtil = globalThis.org.allbinary.graphics.opengles.OpenGLLogUtil;
export class OpenGLUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.renderStrings = RendererStrings.getInstance();
        this.canvasStrings = CanvasStrings.getInstance();
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.preResourceImageUtil = PreResourceImageUtil.getInstance();
        this.lockObject = new SynchObject();
        this.anyType = new SynchObject();
        this.list = new BasicArrayListD();
        this.runnableList = new BasicArrayListD();
        this.created = false;
        this.surfaceCreatedAndInitialized = false;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLUtil.instance;
    }
    onSurfaceCreated(gl) {
        try {
            if (!this.created) {
                this.created = true;
                PreLogUtil.put(CommonLabels.getInstance().START_LABEL + OpenGLCapabilities.getInstance().toString(), this, this.renderStrings.ON_SURFACE_CREATED);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.renderStrings.ON_SURFACE_CREATED, e);
        }
    }
    onSurfaceCreated(gl, loadTextures) {
        try {
            loadTextures.load(gl);
            OpenGLLogUtil.getInstance().logError(gl);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.renderStrings.ON_SURFACE_CREATED, e);
        }
    }
    //@Throws(Exception.constructor)
    onSurfaceChanged(gl, graphics) {
        if (!this.surfaceCreatedAndInitialized) {
            graphics.init();
            this.surfaceCreatedAndInitialized = true;
        }
        graphics.update();
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.update(graphics);
        getInstance = OpenGLImageCacheFactory.getInstance();
        getInstance;
        getInstance.
            update(gl);
        this.processRunnables();
        this.set(gl);
    }
    addImage(image) {
        var encapsulateImage = this.preResourceImageUtil.encapsulate(image);
        ;
        if (encapsulateImage != image) {
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this.anyType) 
            //mutex.withLock
            this.list.add(encapsulateImage);
            //if statement needs to be on the same line and ternary does not work the same way.
            return encapsulateImage;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    clear() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.anyType) 
        //mutex.withLock
        this.list.clear();
    }
    addRunnable(runnable) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lockObject) 
        //mutex.withLock
        if (!this.runnableList.contains(runnable)) {
            this.runnableList.add(runnable);
            this.displayInfoSingleton.add(this.canvasStrings.SCALED_IMAGES);
        }
    }
    processRunnables() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lockObject) 
        //mutex.withLock
        var runnable;
        ;
        var size = this.runnableList.size();
        ;
        for (var index = 0; index < size; index++) {
            runnable = this.runnableList.get(index);
            runnable.run();
        }
        this.runnableList.clear();
    }
    //@Throws(Exception.constructor)
    set(gl) {
        var size = this.list.size();
        ;
        var image;
        ;
        for (var index2 = 0; index2 < size; index2++) {
            image = this.list.get(index2);
            image = imageimage;
            image.
                set(gl);
        }
    }
}
OpenGLUtil.instance = new OpenGLUtil();
