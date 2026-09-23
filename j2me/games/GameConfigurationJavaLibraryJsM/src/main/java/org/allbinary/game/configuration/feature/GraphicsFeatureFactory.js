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
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GraphicsFeature } from './GraphicsFeature.js';
//not GWT import - same folder const GraphicsFeature
export class GraphicsFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GraphicsFeatureFactory.instance;
    }
    constructor() {
        super();
        this.NONE = new GraphicsFeature(StringUtil.getInstance().NULL_STRING);
        this.TRANSPARENT_IMAGE_CREATION = new GraphicsFeature("Transparent Image Creation");
        this.IMAGE_GRAPHICS = new GraphicsFeature("Image Graphics");
        this.IMAGE_ROTATION_ON_THE_FLY = new GraphicsFeature("Image Rotated On The Fly");
        this.IMAGE_TO_ARRAY_GRAPHICS = new GraphicsFeature("Image To Array Graphics");
        this.SPRITE_QUARTER_ROTATION_GRAPHICS = new GraphicsFeature("Sprite Quarter Rotation Graphics");
        this.SPRITE_FULL_GRAPHICS = new GraphicsFeature("Sprite Full Rotation Graphics");
        this.VECTOR_GRAPHICS = new GraphicsFeature("BasicArrayList Graphics");
        this.VECTOR_TO_IMAGE_GRAPHICS = new GraphicsFeature("BasicArrayList To Image Graphics");
    }
}
GraphicsFeatureFactory.instance = new GraphicsFeatureFactory();
