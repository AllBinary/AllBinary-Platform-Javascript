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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const BasicAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.BasicAnimationInterfaceFactoryInterface;
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const FeatureResourceAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.resource.FeatureResourceAnimationInterfaceFactoryInterface;
export class BaseResourceAnimationInterfaceFactoryInterfaceFactory extends Object {
    constructor(name, hashtable, rectangleHashtable, rectangleArrayHashtable) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.initialized = false;
        this.hashtable = hashtable;
        this.rectangleHashtable = rectangleHashtable;
        this.rectangleArrayOfArraysHashtable = rectangleArrayHashtable;
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    //@Throws(Exception.constructor)
    init(level) {
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(new StringMaker().append("Available List of Animations: ").append(this.hashtable.toString()).toString(), this, commonStrings.INIT);
        this.setInitialized(true);
    }
    //@Throws(Exception.constructor)
    initImageCache(imageCache, level) {
    }
    //@Throws(Exception.constructor)
    add(resource, animationInterfaceFactoryInterface) {
        if (this.hashtable.containsKey(resource)) {
            throw new Exception(new StringMaker().append("Resource Already Created: ").append(resource).toString());
        }
        this.hashtable.put(resource, animationInterfaceFactoryInterface);
    }
    //@Throws(Exception.constructor)
    getBasicAnimationInterfaceFactoryInstance(resource) {
        var basicAnimationInterfaceFactoryInterfaceCanBeNull = this.hashtable.get(resource);
        ;
        if (basicAnimationInterfaceFactoryInterfaceCanBeNull ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicAnimationInterfaceFactoryInterfaceCanBeNull;
    }
    //@Throws(Exception.constructor)
    getRectangle(resource) {
        var rectangleCanBeNull = this.rectangleHashtable.get(resource);
        ;
        if (rectangleCanBeNull ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RectangleFactory.SINGLETON;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return rectangleCanBeNull;
    }
    //@Throws(Exception.constructor)
    addRectangle(resource, rectangle) {
        this.rectangleHashtable.put(resource, rectangle);
    }
    //@Throws(Exception.constructor)
    getRectangleArrayOfArrays(resource) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangleArrayOfArraysHashtable.get(resource);
    }
    //@Throws(Exception.constructor)
    addRectangleArrayOfArrays(resource, rectangleArrayOfArrays) {
        this.rectangleArrayOfArraysHashtable.put(resource, rectangleArrayOfArrays);
    }
    isFeature() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isLoadingLevel(level) {
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (level == resourceLoadingLevelFactory.LOAD_ALL.getLevel()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(this.constructor.name.toString()).append(CommonSeps.getInstance().SEMICOLON).append(CommonSeps.getInstance().SPACE).append(this.name).toString();
        ;
    }
    getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
    getRectangleHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangleHashtable;
    }
    getRectangleArrayOfArraysHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangleArrayOfArraysHashtable;
    }
    setInitialized(initialized) {
        this.initialized = initialized;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
}
