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
import { Integer } from '../../../../../../java/lang/Integer.js';
//not GWT import const Image
import { NullImage } from '../../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const Activity
import { AndroidUtil } from '../../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil
import { GameFeatureImageCacheFactory } from '../../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory
import { PreResourceImageUtil } from '../../../../../../org/allbinary/image/PreResourceImageUtil.js';
//not GWT import const PreResourceImageUtil
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
//not GWT import const Animation
import { NullAnimationFactory } from '../../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { Features } from '../../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { MainFeatureFactory } from '../../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const BasicColor
import { DisplayInfoSingleton } from '../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayChangeEvent
import { DisplayChangeEventHandler } from '../../../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
//not GWT import const DisplayChangeEventListener
import { ImageCacheFactory } from '../../../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
import { ImageScaleUtil } from '../../../../../../org/allbinary/media/image/ImageScaleUtil.js';
//not GWT import const AllBinaryEventObject
import { AnimationBehavior } from '../../../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior
import { ImageAnimation } from '../../../../../../org/allbinary/animation/image/ImageAnimation.js';
//not GWT import const ImageAnimation
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//not plain js import { NullRunnable } 
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import - same folder const ProgressCanvas
import { ShowTitleProgressBarRunnable } from './ShowTitleProgressBarRunnable.js';
//not GWT import - same folder const ShowTitleProgressBarRunnable
import { DismissTitleProgressBarRunnable } from './DismissTitleProgressBarRunnable.js';
//not GWT import - same folder const DismissTitleProgressBarRunnable
import { TitleProgressBarSetProgressRunnable } from './TitleProgressBarSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarSetProgressRunnable
import { TitleProgressBarPortionSetProgressRunnable } from './TitleProgressBarPortionSetProgressRunnable.js';
//not GWT import - same folder const TitleProgressBarPortionSetProgressRunnable
export class AndroidBasicTitleProgressBar extends ProgressCanvas {
    static setBackgroundResource(background) {
        AndroidBasicTitleProgressBar.background = background;
    }
    constructor(title, backgroundBasicColor, foregroundBasicColor) {
        super(title, backgroundBasicColor, foregroundBasicColor);
        this.showTitleProgressBarRunnable = NullRunnable.getInstance();
        this.dismissTitleProgressBarRunnable = NullRunnable.getInstance();
        this.titleProgressDialogPortionSetProgressRunnable = NullRunnable.getInstance();
        this.titleProgressDialogSetProgressRunnable = NullRunnable.getInstance();
        this.midletActivity = AndroidUtil.NULL_ACTIVITY;
        this.portion = 0;
        this.IMAGE = new Array(4);
        this.image = NullImage.NULL_IMAGE;
        this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        //For kotlin this is before the body of the constructor.
        this.init();
        DisplayChangeEventHandler.getInstance().addListenerInterface(this);
        var size = this.IMAGE.length;
        ;
        for (var index = 0; index < size; index++) {
            this.IMAGE[index] = NullImage.NULL_IMAGE;
        }
    }
    init() {
        try {
            if (AndroidBasicTitleProgressBar.background != 0) {
                ResourceUtil.getInstance().addResource(AndroidBasicTitleProgressBar.RESOURCE, new Integer(AndroidBasicTitleProgressBar.background));
                GameFeatureImageCacheFactory.init();
                this.image = ImageCacheFactory.getInstance().getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
    }
    initActivity(activity) {
        try {
            if (this.midletActivity != activity) {
                this.midletActivity = activity;
                this.showTitleProgressBarRunnable = new ShowTitleProgressBarRunnable(this.midletActivity, this);
                this.dismissTitleProgressBarRunnable = new DismissTitleProgressBarRunnable(this.midletActivity, this);
                this.titleProgressDialogSetProgressRunnable = new TitleProgressBarSetProgressRunnable(this.midletActivity, this);
                this.titleProgressDialogPortionSetProgressRunnable = new TitleProgressBarPortionSetProgressRunnable(this.midletActivity, this);
                this.loadProgressImages();
            }
            this.updateCurrent();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
    }
    updateCurrent() {
        try {
            if (!this.isBackground()) {
                this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
            }
            else if (AndroidBasicTitleProgressBar.background != 0) {
                var displayInfo = DisplayInfoSingleton.getInstance();
                ;
                var currentImage;
                ;
                if (displayInfo.isPortrait()) {
                    currentImage = this.getImage(0);
                }
                else {
                    currentImage = this.getImage(2);
                }
                if (currentImage ==
                    null) {
                    this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
                }
                else {
                    this.animation = new ImageAnimation(currentImage, AnimationBehavior.getInstance());
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onDisplayChangeEvent(displayChangeEvent) {
        try {
            this.loadProgressImages();
            this.updateCurrent();
            //: 
        }
        catch (e) {
            this.logUtil.putF(this.commonStrings.EXCEPTION_LABEL + ExceptionUtil.getInstance().getStackTrace(e), this, this.canvasStrings.ON_DISPLAY_CHANGE_EVENT);
            this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        }
    }
    loadProgressImages() {
        try {
            var displayInfo = DisplayInfoSingleton.getInstance();
            ;
            var lastWidth = displayInfo.getLastWidth();
            ;
            var lastHeight = displayInfo.getLastHeight();
            ;
            if (displayInfo.isPortraitWH(lastWidth, lastHeight)) {
                this.setImages(0, lastWidth, lastHeight);
            }
            else {
                this.setImages(2, lastWidth, lastHeight);
            }
            //: 
        }
        catch (e) {
            this.logUtil.putF("IllegalArgumentException " + ExceptionUtil.getInstance().getStackTrace(e), this, "loadProgressImages");
            this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.putF(this.commonStrings!.EXCEPTION_LABEL +ExceptionUtil.getInstance()!.getStackTrace(e), this, "loadProgressImages");
            
        this.animation= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
            
        }
        */
    }
    isInitialized() {
        if (this.midletActivity != AndroidUtil.NULL_ACTIVITY) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    start() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.START_METHOD_NAME);
            super.start();
            this.midletActivity.runOnUiThread(this.showTitleProgressBarRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.START_METHOD_NAME, e);
        }
    }
    end() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.END_METHOD_NAME);
            this.midletActivity.runOnUiThread(this.dismissTitleProgressBarRunnable);
            super.end();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.END_METHOD_NAME, e);
        }
    }
    addEarlyPortion(value, text, index) {
        try {
            this.portion = value;
            super.addEarlyPortion(value, text, index);
            if (this.midletActivity != AndroidUtil.NULL_ACTIVITY) {
                this.midletActivity.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.ADD_PORTION, e);
        }
    }
    addPortion(value, text, index) {
        try {
            this.portion = value;
            super.addPortion(value, text, index);
            this.midletActivity.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.ADD_PORTION, e);
        }
    }
    addNormalPortion(value, text) {
        try {
            this.portion = value;
            super.addNormalPortion(value, text);
            this.midletActivity.runOnUiThread(this.titleProgressDialogPortionSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.ADD_PORTION, e);
        }
    }
    setValue(value) {
        try {
            super.setValue(value);
            this.midletActivity.runOnUiThread(this.titleProgressDialogSetProgressRunnable);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "setValue", e);
        }
    }
    waitUntilDisplayed() {
    }
    //@Throws(Exception.constructor)
    setImages(index, lastWidth, lastHeight) {
        var image = this.image;
        ;
        if (image != NullImage.NULL_IMAGE) {
            if (Features.getInstance().isFeature(MainFeatureFactory.getInstance().FULL_SCREEN)) {
                if (this.IMAGE[index] == NullImage.NULL_IMAGE) {
                    this.IMAGE[index] = ImageScaleUtil.getInstance().createImage2(ImageCacheFactory.getInstance(), image, lastWidth, image.getWidth(), lastHeight - 20, image.getHeight(), false);
                }
            }
            else {
                var nextIndex = index + 1;
                ;
                if (this.IMAGE[nextIndex] == NullImage.NULL_IMAGE) {
                    this.IMAGE[nextIndex] = ImageScaleUtil.getInstance().createImage2(ImageCacheFactory.getInstance(), image, lastWidth, image.getWidth(), lastHeight - 28, image.getHeight(), false);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    initOpenGL(graphics) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.INIT);
        this.image = GameFeatureImageCacheFactory.getInstance().getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
        var preResourceImageUtil = PreResourceImageUtil.getInstance();
        ;
        var size = this.IMAGE.length;
        ;
        for (var index = 0; index < size; index++) {
            if (this.IMAGE[index] != NullImage.NULL_IMAGE) {
                this.IMAGE[index] = preResourceImageUtil.encapsulate(this.IMAGE[index]);
            }
        }
        this.updateCurrent();
    }
    //@Throws(Exception.constructor)
    update(graphics) {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.UPDATE);
        this.initOpenGL(graphics);
        this.image = GameFeatureImageCacheFactory.getInstance().getWithKey(AndroidBasicTitleProgressBar.RESOURCE);
        var preResourceImageUtil = PreResourceImageUtil.getInstance();
        ;
        var size = this.IMAGE.length;
        ;
        for (var index = 0; index < size; index++) {
            if (this.IMAGE[index] != NullImage.NULL_IMAGE) {
                preResourceImageUtil.update(graphics, this.IMAGE[index]);
            }
        }
    }
    //@Throws(Exception.constructor)
    getImage(index) {
        var image = NullImage.NULL_IMAGE;
        ;
        if (Features.getInstance().isFeature(MainFeatureFactory.getInstance().FULL_SCREEN)) {
            image = this.IMAGE[index];
        }
        else {
            image = this.IMAGE[index + 1];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    paint2(graphics) {
        try {
            this.animation.paintXY(graphics, 0, 20);
            super.paint2(graphics);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.PAINT, e);
        }
    }
    setBackground(background) {
        super.setBackground(background);
        this.updateCurrent();
    }
    setPortion(portion) {
        this.portion = portion;
    }
    getPortion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.portion;
    }
}
AndroidBasicTitleProgressBar.RESOURCE = "ProgressImage";
AndroidBasicTitleProgressBar.background = 0;
