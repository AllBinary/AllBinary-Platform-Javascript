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
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
import { Thread } from '../../../java/lang/Thread.js';
//not GWT import const InputStream
import { Image } from '../../../javax/microedition/lcdui/Image.js';
//not GWT import const Image
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { J2MEUtil } from '../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const LazyImageRotationAnimation
import { GameGlobalsFactory } from '../../../org/allbinary/canvas/GameGlobalsFactory.js';
//not GWT import const GameGlobalsFactory
import { Processor } from '../../../org/allbinary/canvas/Processor.js';
//not GWT import const Processor
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { ABToGBUtil } from '../../../org/allbinary/game/canvas/ABToGBUtil.js';
//not GWT import const AllBinaryGameCanvas
import { GDLazyResources } from '../../../org/allbinary/game/gd/resource/GDLazyResources.js';
//not GWT import const GDLazyResources
import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const BaseImageLoadingProcessor
import { ConcurrentImageLoadingProcessor } from '../../../org/allbinary/thread/ConcurrentImageLoadingProcessor.js';
//not GWT import const ConcurrentImageLoadingProcessor
import { SynchObject } from '../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCacheBase } from './ImageCacheBase.js';
//not GWT import - same folder const ImageCacheBase
//import { NotHTMLEndProcessor } from './NotHTMLEndProcessor.js';
//not GWT import - same folder const NotHTMLEndProcessor
//import { FirstProcessor } from './FirstProcessor.js';
//not GWT import - same folder const FirstProcessor
//import { NotHTMLProcessor } from './NotHTMLProcessor.js';
//not GWT import - same folder const NotHTMLProcessor
//import { HTMLEndProcessor } from './HTMLEndProcessor.js';
//not GWT import - same folder const HTMLEndProcessor
export class ImageCache extends ImageCacheBase {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.systemWrapper = ABSystemWrapper.getInstance();
        this.tsUtil = TsUtil.getInstance();
        this.concurrentImageLoadingProcessor = new ConcurrentImageLoadingProcessor(this);
        this.commonStrings = CommonStrings.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.resourceUtil = ResourceUtil.getInstance();
        this.gameGlobalsFactory = GameGlobalsFactory.getInstance();
        this.gdResources = GDResources.getInstance();
        this.loadNowList = new BasicArrayListD();
        this.loadSoonList = new BasicArrayListD();
        this.loadList = new BasicArrayListD();
        this.loadAfterList = new BasicArrayListD();
        this.lock = new SynchObject();
        this.firstTime = true;
        this.totalLoaded = 0;
        this.progressEnded = false;
        this.hasAnyLazyAnimationFactories = false;
        //inner= member=true isStatic=
        this.NotHTMLProcessor = class extends Processor {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            process() {
                concurrentImageLoadingProcessor.runTask();
            }
        };
        //inner= member=true isStatic=
        this.NotHTMLEndProcessor = class extends Processor {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            process() {
                var progressCanvas = ProgressCanvasFactory.getInstance();
                ;
                progressCanvas.endIfPaintedSinceStart();
            }
        };
        //inner= member=true isStatic=
        this.HTMLEndProcessor = class extends Processor {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            process() {
                var size = gdResources.currentLayoutRequiredTotal;
                ;
                //Otherwise - statement - EmptyStmt
                if (size == 0) {
                    var progressCanvas = ProgressCanvasFactory.getInstance();
                    ;
                    progressCanvas.endIfPaintedSinceStart();
                }
                else if (totalLoaded > size / 12) {
                    var progressCanvas = ProgressCanvasFactory.getInstance();
                    ;
                    progressCanvas.endIfPaintedSinceStart();
                    endProcessor = new this.NotHTMLEndProcessor();
                }
            }
        };
        //inner= member=true isStatic=
        this.FirstProcessor = class extends Processor {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            process() {
                ImageCache.prototype.firstProcess();
            }
        };
        this.processor = new this.FirstProcessor();
        this.endProcessor = Processor.getInstance();
        this.LOAD_IMAGE_FOR_ANIMATION = "Load Image Animation";
    }
    firstProcess() {
        var logUtil = LogUtil.getInstance();
        ;
        var isHTML = J2MEUtil.isHTML();
        ;
        if (isHTML) {
            this.processor = Processor.getInstance();
            this.endProcessor = new this.HTMLEndProcessor();
        }
        else {
            this.processor = new this.NotHTMLProcessor();
            this.endProcessor = new this.NotHTMLEndProcessor();
            try {
                runTask();
                //: 
            }
            catch (e) {
                logUtil.putF(this.commonStrings.EXCEPTION, this, this.commonStrings.END_METHOD_NAME);
            }
        }
    }
    addListener(renderer = {}) {
    }
    //@Throws(Exception.constructor)
    waitForLoadNow() {
        if (this.firstTime) {
            var abToGBUtil = ABToGBUtil.getInstance();
            ;
            var abCanvas = abToGBUtil.abCanvas;
            ;
            while (this.loadNowList.isEmpty() && (!abCanvas.isInitialized() || (abCanvas.isInitialized() && this.hasAnyLazyAnimationFactories)) && !this.progressEnded) {
                Thread.sleep(120);
            }
            this.firstTime = false;
        }
    }
    //@Throws(Exception.constructor)
    loadImageForAnimation() {
        var lazyImageRotationAnimation = null;
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        if (this.loadNowList.isEmpty()) {
            this.endProcessor.process();
            if (this.loadSoonList.isEmpty()) {
                if (this.loadAfterList.isEmpty()) {
                    if (this.firstTime) {
                    }
                    else if (this.gameGlobalsFactory.newCanvas) {
                    }
                    else {
                        this.loadNextImage();
                    }
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return;
                }
                else {
                    lazyImageRotationAnimation = this.loadAfterList.get(0);
                    if (this.loadImageForLazyAnimation(lazyImageRotationAnimation)) {
                        this.loadAfterList.remove(lazyImageRotationAnimation);
                    }
                }
            }
            else {
                lazyImageRotationAnimation = this.loadSoonList.get(0);
                if (this.loadImageForLazyAnimation(lazyImageRotationAnimation)) {
                    this.loadSoonList.remove(lazyImageRotationAnimation);
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        lazyImageRotationAnimation = this.loadNowList.get(0);
        if (this.loadImageForLazyAnimation(lazyImageRotationAnimation)) {
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this.lock) 
            //mutex.withLock
            this.loadNowList.remove(lazyImageRotationAnimation);
            if (lazyImageRotationAnimation.layoutIndex != 0) {
                var list = this.getAssociated(lazyImageRotationAnimation);
                ;
                //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
                //synchronized(this.lock) 
                //mutex.withLock
                var size = list.size();
                ;
                if (size > 0) {
                    this.loadSoonList.addAllList(list);
                }
            }
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            var isHTML = J2MEUtil.isHTML();
            ;
            if (this.loadNowList.isEmpty() && (!isHTML || this.firstTime)) {
                progressCanvas.endFromInitialLazyLoadingComplete();
            }
            else {
                if (this.totalLoaded % 10 == 0) {
                    progressCanvas.addNormalPortion(1, this.LOAD_IMAGE_FOR_ANIMATION);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    loadImages() {
        while (!this.loadList.isEmpty() || !this.loadNowList.isEmpty()) {
            this.loadImageForAnimations();
            this.loadNextImage();
        }
    }
    //@Throws(Exception.constructor)
    loadImageForAnimations() {
        while (!this.loadNowList.isEmpty()) {
            this.loadImageForAnimation();
        }
    }
    //@Throws(Exception.constructor)
    loadRemainingAnimations() {
        while (!this.loadAfterList.isEmpty() || !this.loadNowList.isEmpty()) {
            while (!this.loadNowList.isEmpty()) {
                this.loadImageForAnimation();
            }
            var lazyImageRotationAnimation = null;
            ;
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this.lock) 
            //mutex.withLock
            if (!this.loadAfterList.isEmpty())
                lazyImageRotationAnimation = this.loadAfterList.removeAt(0);
            if (lazyImageRotationAnimation !=
                null) {
                this.loadImageForLazyAnimation(lazyImageRotationAnimation);
            }
        }
    }
    //@Throws(Exception.constructor)
    loadImageForLazyAnimation(lazyImageRotationAnimation) {
        var image = lazyImageRotationAnimation.animationInterfaceFactoryInterface.getImage();
        ;
        if (this.loadImage(image)) {
            lazyImageRotationAnimation.setRealAnimation();
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    loadNextImage() {
        var image = null;
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        if (this.loadList.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        image = this.loadList.removeAt(0);
        this.loadImage(image);
    }
    //@Throws(Exception.constructor)
    loadImage(image) {
        if (image.isReady()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            if (image.getImage() !=
                null) {
                if (image.setReady()) {
                    this.totalLoaded++;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
            else {
                var key = image.getName();
                ;
                var image2 = this.creatImage(key);
                ;
                if (image2.isReady()) {
                    this.init(image, image2);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
                else {
                    image.setImage(image2.getImage());
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    init(image, image2) {
        image.init(image2.getImage());
    }
    //@Throws(Exception.constructor)
    creatImage(key) {
        var inputStream = resourceUtil.getResourceAsStream(key);
        ;
        var image = Image.createImage(inputStream);
        ;
        image.setName(key);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    get(caller, width, height) {
        var foundIndex = this.getIndexWH(width, height);
        ;
        var image = this.getFromAvailable(foundIndex, width, height);
        ;
        if (image == NullImage.NULL_IMAGE) {
            this.volume += width * height;
            if (this.volume > 32000) {
                this.tsUtil.gc();
                this.volume = 0;
            }
            image = this.createImage(caller, width, height);
            if (this.nextIndex > this.widths.length - 1) {
                if (foundIndex == -1) {
                    foundIndex = this.nextIndex;
                    this.widths[this.nextIndex] = width;
                    this.heights[this.nextIndex] = height;
                    this.nextIndex++;
                }
                this.listOfList[foundIndex].add(image);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    getWithKey(key = {}) {
        var image = this.getImage(key);
        ;
        if (image == NullImage.NULL_IMAGE) {
            var inputStream = null;
            ;
            try {
                image = this.createImageFromInputStream(key, inputStream);
                //: 
            }
            catch (e) {
                this.logUtil.put("Exception: Trying Again After GC", this, this.commonStrings.GET, e);
                this.logUtil.putF(new StringMaker().append("InputStream: ").append(StringUtil.getInstance().toString(inputStream)).toString(), this, this.commonStrings.GET);
                this.tsUtil.gc();
                this.tsUtil.gc();
                this.logUtil.putF(Memory.getInfo(), this, this.commonStrings.GET);
                Thread.sleep(100);
                image = this.createImageFromInputStream(key, inputStream);
            }
            this.hashtable.put(key, image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    getIndex(key = {}) {
        var gdResources = GDResources.getInstance();
        ;
        var resourceStringArray = gdResources.resourceStringArray;
        ;
        var size = resourceStringArray.length;
        ;
        for (var index = 0; index < size; index++) {
            if (resourceStringArray[index] == key) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        this.logUtil.putF(new StringMaker().append("unable to find key: ").append(StringUtil.getInstance().toString(key)).toString(), this, this.commonStrings.RUN);
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream(key = {}, inputStream) {
        var gdLazyResources = GDLazyResources.getInstance();
        ;
        var resourceStringArray = gdLazyResources.requiredResourcesBeforeLoadingArray;
        ;
        var size = resourceStringArray.length;
        ;
        for (var index = 0; index < size; index++) {
            if (key == resourceStringArray[index]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.creatImage(key);
                ;
            }
        }
        this.runTask();
        var index = this.getIndex(key);
        ;
        var width = gdLazyResources.imageResourceWidthArray[index];
        ;
        var height = gdLazyResources.imageResourceHeightArray[index];
        ;
        var image = this.createImageLater(key, width, height);
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        this.loadList.add(image);
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    createImageLater(key, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Image.createImageLater(key, width, height);
        ;
    }
    getAssociated(lazyImageRotationAnimation) {
        var list = new BasicArrayListD();
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        var lazyImageRotationAnimation2 = null;
        ;
        var size = this.loadAfterList.size();
        ;
        for (var index = 0; index < size; index++) {
            lazyImageRotationAnimation2 = this.loadAfterList.get(index);
            if (lazyImageRotationAnimation2.instanceId == lazyImageRotationAnimation.instanceId) {
                list.add(lazyImageRotationAnimation2);
            }
        }
        var size2 = list.size();
        ;
        for (var index = 0; index < size2; index++) {
            this.loadAfterList.remove(list.get(index));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
    add(lazyImageRotationAnimation) {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        this.loadAfterList.add(lazyImageRotationAnimation);
    }
    //@Throws(Exception.constructor)
    insertFirst(lazyImageRotationAnimation) {
        if (this.loadNowList.contains(lazyImageRotationAnimation)) {
        }
        else {
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this.lock) 
            //mutex.withLock
            this.loadNowList.add(lazyImageRotationAnimation);
            this.loadAfterList.remove(lazyImageRotationAnimation);
        }
        this.runTask();
    }
    progressEnded() {
        this.progressEnded = true;
    }
    //@Throws(Exception.constructor)
    runTask() {
        this.processor.process();
    }
    initProgress() {
        if (this.firstTime) {
            this.firstTime = false;
        }
    }
    isLazy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
ImageCache.NULL_IMAGE_CACHE = new ImageCache();
