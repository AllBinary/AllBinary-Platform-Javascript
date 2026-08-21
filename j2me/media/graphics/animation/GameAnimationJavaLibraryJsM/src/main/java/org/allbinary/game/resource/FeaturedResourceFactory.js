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
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
import { GraphicsFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ResourceLoadingLevelFactory } from './ResourceLoadingLevelFactory.js';
export class FeaturedResourceFactory extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.list = new BasicArrayListD();
        this.commonStrings = CommonStrings.getInstance();
        this.ANIMATION_FEATURES = "Animation Features: Vector: ";
        this.IMAGE_LABEL = " Image: ";
        this.IMAGE_GRAPHICS_ARRAY = "Image Array: ";
        this.IMAGE_GRAPHICS_ROTATION = "Image Rotate: ";
        this.SPRITE_QUARTER = " Sprite Quarter: ";
        this.SPRITE_FULL = " Sprite Full: ";
        this.IS_LOADING_LEVEL_LABEL = " isLoadingLevel ";
        this.IS_FEATURE = " isFeature: ";
        this.GAME_FEATURE_CONTROLLED = "GameFeatureControlledInterface: ";
    }
    //@Throws(Exception.constructor)
    init(level) {
        var size = this.list.size();
        ;
        for (var index = 0; index < size; index++) {
            var featureInterface = this.list.objectArray[index];
            ;
            var isLoadingLevel = featureInterface.isLoadingLevel(level);
            ;
            var isFeature = featureInterface.isFeature();
            ;
            this.logUtil.putF(new StringMaker().append(this.GAME_FEATURE_CONTROLLED).append(featureInterface.toString()).append(this.IS_LOADING_LEVEL_LABEL).append(ResourceLoadingLevelFactory.getInstance().getLevelString(level)).append(CommonSeps.getInstance().COLON_SEP).appendboolean(isLoadingLevel).append(this.IS_FEATURE).appendboolean(isFeature).toString(), this, this.commonStrings.INIT);
            if (isLoadingLevel && isFeature) {
                featureInterface.init(level);
            }
        }
        var features = Features.getInstance();
        ;
        var graphicsFeatureFactory = GraphicsFeatureFactory.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.ANIMATION_FEATURES);
        stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.VECTOR_GRAPHICS));
        stringBuffer.append(this.IMAGE_LABEL);
        stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.IMAGE_GRAPHICS));
        this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.INIT);
        if (features.isFeature(graphicsFeatureFactory.IMAGE_GRAPHICS)) {
            stringBuffer.delete(0, stringBuffer.length());
            stringBuffer.append(this.IMAGE_GRAPHICS_ARRAY);
            stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.IMAGE_TO_ARRAY_GRAPHICS));
            stringBuffer.append(this.IMAGE_GRAPHICS_ROTATION);
            stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.IMAGE_TO_ARRAY_GRAPHICS));
            stringBuffer.append(this.SPRITE_QUARTER);
            stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.SPRITE_QUARTER_ROTATION_GRAPHICS));
            stringBuffer.append(this.SPRITE_FULL);
            stringBuffer.appendboolean(features.isFeature(graphicsFeatureFactory.SPRITE_FULL_GRAPHICS));
            this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.INIT);
        }
    }
    clear() {
        this.list.clear();
    }
    add(featureInterface) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(StringUtil.getInstance().toString(featureInterface)).toString(), this, this.commonStrings.ADD);
        this.list.add(featureInterface);
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
}
