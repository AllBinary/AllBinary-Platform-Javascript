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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const BaseResourceAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory;
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { MainFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
//not GWT import const LayerPlacementInterfaceBasicArrayListFactoryInterface = globalThis.org.allbinary.game.layer.LayerPlacementInterfaceBasicArrayListFactoryInterface;
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const OnDemandResourcesFactory = globalThis.org.allbinary.game.layer.resources.OnDemandResourcesFactory;
import { OnDemandResources } from './OnDemandResources.js';
//not GWT import const OnDemandResources = globalThis.org.allbinary.game.layer.resources.OnDemandResources;
export class OnDemandLoader extends Object {
    constructor(onDemandResourcesFactory, gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory, resourceAnimationInterfaceFactoryInterfaceFactory) {
        super();
        this.onDemandResourcesFactory = onDemandResourcesFactory;
        this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory = gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory;
        this.resourceAnimationInterfaceFactoryInterfaceFactory = resourceAnimationInterfaceFactoryInterfaceFactory;
    }
    //@Throws(Exception.constructor)
    init(imageCache, level, loadingString) {
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (Features.getInstance().isFeature(MainFeatureFactory.getInstance().LOAD_ALL)) {
            if (this.resourceAnimationInterfaceFactoryInterfaceFactory.isInitialized()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            this.initAll(imageCache, loadingString);
        }
        else if (level != resourceLoadingLevelFactory.LOAD_ALL.getLevel()) {
            var layerPlacementInterfaceBasicArrayListFactoryInterface = this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory.getInstance(level);
            ;
            this.initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface, imageCache, level, loadingString);
        }
    }
    //@Throws(Exception.constructor)
    initAll(imageCache, loadingString) {
        var index = 0;
        ;
        var portion = 120;
        ;
        var onDemandResources;
        ;
        for (var onDemandIndex = this.onDemandResourcesFactory.size(); --onDemandIndex >= 0;) {
            onDemandResources = this.onDemandResourcesFactory.remove(onDemandIndex);
            if (onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES) {
                index = onDemandResources.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index);
            }
        }
    }
    //@Throws(Exception.constructor)
    initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface, imageCache, level, loadingString) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var portion = 120;
        ;
        var index = 0;
        ;
        var onDemandArray = layerPlacementInterfaceBasicArrayListFactoryInterface.getOnDemandResources();
        ;
        PreLogUtil.put(new StringMaker().append(commonStrings.START).appendint(onDemandArray.length).toString(), this, "initLevel");
        var onDemandResources;
        ;
        for (var onDemandIndex = onDemandArray.length; --onDemandIndex >= 0;) {
            onDemandResources = this.onDemandResourcesFactory.remove(onDemandArray[onDemandIndex]);
            if (onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES) {
                index = onDemandResources.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index);
            }
        }
    }
}
