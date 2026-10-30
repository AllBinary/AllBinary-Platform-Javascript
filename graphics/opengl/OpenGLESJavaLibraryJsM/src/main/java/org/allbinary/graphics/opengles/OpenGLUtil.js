/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { RendererStrings } from '../../../../org/allbinary/graphics/opengles/renderer/RendererStrings.js';
//not GWT import const RendererStrings
import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
//not GWT import const OpenGLImageCache
import { OpenGLImageCacheFactory } from '../../../../org/allbinary/image/opengles/OpenGLImageCacheFactory.js';
//not GWT import const OpenGLImageCacheFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLCapabilities } from './OpenGLCapabilities.js';
//sameFolderImports - not GWT import - same folder const OpenGLCapabilities
import { OpenGLLogUtil } from './OpenGLLogUtil.js';
//sameFolderImports - not GWT import - same folder const OpenGLLogUtil
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
    onSurfaceCreated(...args) {
        if (args.length === 1)
            return this.onSurfaceCreated$overload1(args[0]);
        if (args.length === 2)
            return this.onSurfaceCreated$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: onSurfaceCreated');
    }
    onSurfaceCreated$overload1(gl) {
        try {
            if (!this.created) {
                this.created = true;
                PreLogUtil.put(CommonLabels.getInstance().START_LABEL + OpenGLCapabilities.getInstance().toString(), this, this.renderStrings.ON_SURFACE_CREATED);
            }
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.renderStrings.ON_SURFACE_CREATED, e);
            }
        }
    }
    onSurfaceCreated$overload2(gl, loadTextures) {
        try {
            loadTextures.load(gl);
            OpenGLLogUtil.getInstance().logError(gl);
        }
        catch (caught) {
            {
                const e = caught;
                this.logUtil.put(this.commonStrings.EXCEPTION, this, this.renderStrings.ON_SURFACE_CREATED, e);
            }
        }
    }
    //@Throws(Exception.constructor)
    onSurfaceChanged(gl, graphics) {
        if (!this.surfaceCreatedAndInitialized) {
            graphics.init();
            this.surfaceCreatedAndInitialized = true;
        }
        graphics.update();
        let progressCanvas = ProgressCanvasFactory.getInstance();
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
        let encapsulateImage = this.preResourceImageUtil.encapsulate(image);
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
        let runnable;
        ;
        let size = this.runnableList.size();
        ;
        for (let index = 0; index < size; index++) {
            runnable = this.runnableList.get(index);
            runnable.run();
        }
        this.runnableList.clear();
    }
    //@Throws(Exception.constructor)
    set(gl) {
        let size = this.list.size();
        ;
        let image;
        ;
        for (let index2 = 0; index2 < size; index2++) {
            image = this.list.get(index2);
            image.set(gl);
        }
    }
}
OpenGLUtil.instance = new OpenGLUtil();
