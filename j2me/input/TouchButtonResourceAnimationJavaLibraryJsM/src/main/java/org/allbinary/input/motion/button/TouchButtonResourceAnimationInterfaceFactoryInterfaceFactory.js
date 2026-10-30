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
//not GWT import const Image
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationBehaviorFactory
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { OneRowSpriteIndexedAnimationFactory } from '../../../../../org/allbinary/animation/image/sprite/OneRowSpriteIndexedAnimationFactory.js';
//not GWT import const OneRowSpriteIndexedAnimationFactory
import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const BaseResourceAnimationInterfaceFactoryInterfaceFactory
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const ImageCache
import { ImageCacheFactory } from '../../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
import { ImageCompleteUtil } from '../../../../../org/allbinary/media/image/ImageCompleteUtil.js';
//not GWT import const ImageCompleteUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonResource
import { TouchButtonGenericActionResource } from './TouchButtonGenericActionResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonGenericActionResource
import { TouchButtonStartResource } from './TouchButtonStartResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStartResource
import { TouchButtonUpResource } from './TouchButtonUpResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonUpResource
import { TouchButtonDownResource } from './TouchButtonDownResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonDownResource
import { TouchButtonTurnLeftResource } from './TouchButtonTurnLeftResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonTurnLeftResource
import { TouchButtonTurnRightResource } from './TouchButtonTurnRightResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonTurnRightResource
import { TouchButtonStrafeLeftResource } from './TouchButtonStrafeLeftResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStrafeLeftResource
import { TouchButtonStrafeRightResource } from './TouchButtonStrafeRightResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonStrafeRightResource
export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
    static createFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory("TouchButton Animations");
    }
    constructor(name) {
        super(name, StdUtil.getInstance().createHashtable(), StdUtil.getInstance().createHashtable(), StdUtil.getInstance().createHashtable());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init(level) {
        this.initImageCache(ImageCacheFactory.getInstance(), level);
    }
    //@Throws(Exception.constructor)
    initImageCache(imageCache, level) {
        if (this.isInitialized()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        let portion = 140;
        ;
        let loadingString = new StringMaker().append(this.toString()).append(" Loading: ").toString();
        ;
        let index = 0;
        ;
        let progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.addPortion(portion, loadingString, index++);
        let touchButtonBlankResource = TouchButtonBlankResource.getInstance();
        ;
        let touchButtonGenericActionResource = TouchButtonGenericActionResource.getInstance();
        ;
        let touchButtonStartResource = TouchButtonStartResource.getInstance();
        ;
        let touchButtonUpResource = TouchButtonUpResource.getInstance();
        ;
        let touchButtonDownResource = TouchButtonDownResource.getInstance();
        ;
        let touchButtonTurnLeftResource = TouchButtonTurnLeftResource.getInstance();
        ;
        let touchButtonTurnRightResource = TouchButtonTurnRightResource.getInstance();
        ;
        let touchButtonStrafeLeftResource = TouchButtonStrafeLeftResource.getInstance();
        ;
        let touchButtonStrafeRightResource = TouchButtonStrafeRightResource.getInstance();
        ;
        let touchButtonBlankResourceImage = imageCache.getWithKey(touchButtonBlankResource.RESOURCE);
        ;
        let touchButtonGenericActionResourceImage = imageCache.getWithKey(touchButtonGenericActionResource.RESOURCE);
        ;
        let touchButtonStartResourceImage = imageCache.getWithKey(touchButtonStartResource.RESOURCE);
        ;
        let touchButtonUpResourceImage = imageCache.getWithKey(touchButtonUpResource.RESOURCE);
        ;
        let touchButtonDownResourceImage = imageCache.getWithKey(touchButtonDownResource.RESOURCE);
        ;
        let touchButtonTurnLeftResourceImage = imageCache.getWithKey(touchButtonTurnLeftResource.RESOURCE);
        ;
        let touchButtonTurnRightResourceImage = imageCache.getWithKey(touchButtonTurnRightResource.RESOURCE);
        ;
        let touchButtonStrafeLeftResourceImage = imageCache.getWithKey(touchButtonStrafeLeftResource.RESOURCE);
        ;
        let touchButtonStrafeRightResourceImage = imageCache.getWithKey(touchButtonStrafeRightResource.RESOURCE);
        ;
        let nullAnimationFactory = NullAnimationFactory.getFactoryInstance();
        ;
        if (OperatingSystemFactory.getInstance().getOperatingSystemInstance().isOverScan()) {
            imageCache.getWithKey(TouchButtonStartResource.getInstance().HINT);
        }
        progressCanvas.addPortion(portion, loadingString, index++);
        let imageCompleteUtil = ImageCompleteUtil.getInstance();
        ;
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonBlankResourceImage, touchButtonBlankResource.RESOURCE);
        this.add(touchButtonBlankResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonBlankResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonBlankResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonGenericActionResourceImage, touchButtonGenericActionResource.RESOURCE);
        this.add(touchButtonGenericActionResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonGenericActionResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonGenericActionResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonStartResourceImage, touchButtonStartResource.RESOURCE);
        this.add(touchButtonStartResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartResourceImage, AnimationBehaviorFactory.getInstance()));
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonUpResourceImage, touchButtonUpResource.RESOURCE);
        this.add(touchButtonUpResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonUpResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonUpResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonDownResourceImage, touchButtonDownResource.RESOURCE);
        this.add(touchButtonDownResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonDownResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonDownResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonTurnLeftResourceImage, touchButtonTurnLeftResource.RESOURCE);
        this.add(touchButtonTurnLeftResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnLeftResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonTurnLeftResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonTurnRightResourceImage, touchButtonTurnRightResource.RESOURCE);
        this.add(touchButtonTurnRightResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnRightResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonTurnRightResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonStrafeLeftResourceImage, touchButtonStrafeLeftResource.RESOURCE);
        this.add(touchButtonStrafeLeftResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeLeftResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonStrafeLeftResource.HINT, nullAnimationFactory);
        progressCanvas.addPortion(portion, loadingString, index++);
        imageCompleteUtil.waitForImage(touchButtonStrafeRightResourceImage, touchButtonStrafeRightResource.RESOURCE);
        this.add(touchButtonStrafeRightResource.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeRightResourceImage, AnimationBehaviorFactory.getInstance()));
        this.add(touchButtonStrafeRightResource.HINT, nullAnimationFactory);
        if (OperatingSystemFactory.getInstance().getOperatingSystemInstance().isOverScan()) {
            let touchButtonStartHintResource = imageCache.getWithKey(TouchButtonStartResource.getInstance().HINT);
            ;
            this.add(touchButtonStartResource.HINT, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartHintResource, AnimationBehaviorFactory.getInstance()));
        }
        else {
            this.add(touchButtonStartResource.HINT, nullAnimationFactory);
        }
        super.init(level);
    }
    isLoadingLevel(level) {
        let resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (level == resourceLoadingLevelFactory.LOAD_TOUCH.getLevel()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return super.isLoadingLevel(level);
            ;
        }
    }
    isFeature() {
        if (!Features.getInstance().isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
