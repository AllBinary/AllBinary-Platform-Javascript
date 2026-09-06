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
import { Exception } from '../../../java/lang/Exception.js';
//not GWT import const FeatureResourceAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.resource.FeatureResourceAnimationInterfaceFactoryInterface;
import { GameConfigurationCentral } from '../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
import { FeaturedResourceFactory } from '../../../org/allbinary/game/resource/FeaturedResourceFactory.js';
//not GWT import const FeaturedResourceFactory = globalThis.org.allbinary.game.resource.FeaturedResourceFactory;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { RectangleFactory } from '../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const BasicAnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.BasicAnimationInterfaceFactoryInterface;
import { NullAnimationFactory } from './NullAnimationFactory.js';
//not GWT import - same folder const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
export class FeaturedAnimationInterfaceFactoryInterfaceFactory extends FeaturedResourceFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FeaturedAnimationInterfaceFactoryInterfaceFactory.INSTANCE;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    getRectangle(resource) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRectangleXY(resource, 0, 0);
        ;
    }
    //@Throws(Exception.constructor)
    getRectangleXY(resource, x, y) {
        var pointFactory = PointFactory.getInstance();
        ;
        var list = this.getList();
        ;
        var scale = GameConfigurationCentral.getInstance().SCALE.getValue().intValue();
        ;
        var size = this.getList().size();
        ;
        for (var index = 0; index < size; index++) {
            var featureInterface = list.objectArray[index];
            ;
            if (featureInterface.isFeature()) {
                var rectangle = featureInterface.getRectangle(resource);
                ;
                if (rectangle != RectangleFactory.SINGLETON) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Rectangle(pointFactory.createXY(x, y), ((rectangle.getWidth() * scale) >> 1), ((rectangle.getHeight() * scale) >> 1));
                }
            }
        }
        throw new Exception(new StringMaker().append("No rectangle available for current feature selection or Resource: ").append(resource).toString());
    }
    //@Throws(Exception.constructor)
    getProcedural(resource) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getBasicAnimationInterfaceFactoryInstance(resource);
    }
    //@Throws(Exception.constructor)
    get(resource) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getBasicAnimationInterfaceFactoryInstance(resource);
    }
    //@Throws(Exception.constructor)
    getBasicAnimationInterfaceFactoryInstance(resource) {
        var list = this.getList();
        ;
        var resourceTypeAvailableList = new BasicArrayListD();
        ;
        var size = this.getList().size();
        ;
        var featureInterface;
        ;
        var animationInterfaceFactoryInterface;
        ;
        for (var index = 0; index < size; index++) {
            featureInterface = list.objectArray[index];
            if (featureInterface.isFeature()) {
                resourceTypeAvailableList.add(featureInterface);
                animationInterfaceFactoryInterface = featureInterface.getBasicAnimationInterfaceFactoryInstance(resource);
                if (animationInterfaceFactoryInterface != NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return animationInterfaceFactoryInterface;
                }
            }
        }
        if (resourceTypeAvailableList.size() > 0) {
            var NO_ANIMATION_AVAILABLE_FROM = "No animation available from: ";
            ;
            var FOR_FACTORIES = " factories: ";
            ;
            var FOR_RESOURCE = " for Resource: ";
            ;
            var HAS_KEY = " has: ";
            ;
            var RESOURCES_LABEL = " resources ";
            ;
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(NO_ANIMATION_AVAILABLE_FROM);
            stringBuffer.appendint(resourceTypeAvailableList.size());
            stringBuffer.append(CommonSeps.getInstance().FORWARD_SLASH);
            stringBuffer.appendint(size);
            stringBuffer.append(FOR_FACTORIES);
            var size2 = resourceTypeAvailableList.size();
            ;
            for (var index = 0; index < size2; index++) {
                stringBuffer.append(resourceTypeAvailableList.get(index).toString());
                stringBuffer.append(CommonSeps.getInstance().COMMA_SEP);
            }
            stringBuffer.append(FOR_RESOURCE);
            stringBuffer.append(resource);
            for (var index = 0; index < size; index++) {
                stringBuffer.append(CommonSeps.getInstance().NEW_LINE);
                featureInterface = list.objectArray[index];
                if (featureInterface.isFeature()) {
                    stringBuffer.append(StringUtil.getInstance().toString(featureInterface));
                    stringBuffer.append(HAS_KEY);
                    stringBuffer.appendint(featureInterface.getHashtable().size());
                    stringBuffer.append(RESOURCES_LABEL);
                }
            }
            throw new Exception(stringBuffer.toString());
        }
        else {
            var stringBuffer = new StringMaker();
            ;
            for (var index = 0; index < size; index++) {
                featureInterface = list.objectArray[index];
                stringBuffer.append(featureInterface.toString());
                stringBuffer.append(CommonSeps.getInstance().SPACE);
            }
            var result = stringBuffer.toString();
            ;
            stringBuffer.delete(0, stringBuffer.length());
            throw new Exception(stringBuffer.append("No feature resource type available for Resource: ").append(resource).append(" Resource Factories Available: ").append(result).toString());
        }
    }
}
FeaturedAnimationInterfaceFactoryInterfaceFactory.INSTANCE = new FeaturedAnimationInterfaceFactoryInterfaceFactory();
