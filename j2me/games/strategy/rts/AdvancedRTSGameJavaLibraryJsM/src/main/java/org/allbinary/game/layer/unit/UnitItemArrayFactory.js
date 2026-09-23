/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//not GWT import const Image
import { ImageItem } from '../../../../../javax/microedition/lcdui/ImageItem.js';
//not GWT import const ImageItem
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const RTSGameStrings
import { LayerInterfaceFactoryImageItem } from '../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js';
//not GWT import const LayerInterfaceFactoryImageItem
import { RTSLayerTextAnimation } from '../../../../../org/allbinary/game/layer/item/RTSLayerTextAnimation.js';
//not GWT import const ABCustomItem
import { GameFeatureImageCacheFactory } from '../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { CustomItemUtil } from '../../../../../org/allbinary/graphics/form/item/CustomItemUtil.js';
//not GWT import const LayerInterfaceFactoryInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UnitItemArrayFactory extends Object {
    constructor(resources) {
        super();
        this.commonSeps = CommonSeps.getInstance();
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.resources = resources;
    }
    //@Throws(Exception.constructor)
    createFlagItem(flagResources, layerInterfaceFactoryInterface) {
        var name = flagResources.NAME;
        ;
        var index = name.indexOf(this.commonSeps.SPACE);
        ;
        if (index >= 0) {
            name = name.substring(index);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createNamedFlagItem(flagResources, name, layerInterfaceFactoryInterface);
        ;
    }
    //@Throws(Exception.constructor)
    createNamedFlagItem(flagResources, name, layerInterfaceFactoryInterface) {
        var IMAGE_CACHE = GameFeatureImageCacheFactory.getInstance();
        ;
        var image = IMAGE_CACHE.getWithKey(flagResources.RESOURCE_ICON);
        ;
        var item = new LayerInterfaceFactoryImageItem(name, image, ImageItem.LAYOUT_DEFAULT, flagResources.NAME, this.basicColor, [
            new RTSLayerTextAnimation(RTSGameStrings.getInstance().DRAGGABLE, image)
        ], layerInterfaceFactoryInterface);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return item;
    }
    //@Throws(Exception.constructor)
    getItems() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UnitItemArrayFactory.ITEMS;
    }
    getResources() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.resources;
    }
    indexOf(basicGameResources) {
        for (var index = this.resources.length - 1; index >= 0; index--) {
            if (this.resources[index] == basicGameResources) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
}
UnitItemArrayFactory.ITEMS = CustomItemUtil.getInstance().CUSTOM_ITEM_ARRAY;
