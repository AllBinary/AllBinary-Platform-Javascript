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
import { BasicGameResources } from '../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
//not GWT import const BasicGameResources
import { GameGraphicsResourceUtil } from '../../../../../org/allbinary/game/layer/resources/GameGraphicsResourceUtil.js';
//not GWT import const GameGraphicsResourceUtil
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil
import { GraphicsFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
//not GWT import const GraphicsFeatureFactory
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Unit2DecalGameResources extends BasicGameResources {
    static getInstance() {
        if (Unit2DecalGameResources.instance == NullUtil.getInstance().NULL_OBJECT) {
            Unit2DecalGameResources.instance = new Unit2DecalGameResources();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return Unit2DecalGameResources.instance;
    }
    constructor() {
        super();
        let ROOT = "/unit_decal";
        ;
        let SMALL = "_30_by_30.png";
        ;
        let MEDIUM = SMALL;
        ;
        let SIZE_FOUR = SMALL;
        ;
        let SIZE_FIVE = SMALL;
        ;
        let SIZE_SIX = SMALL;
        ;
        let SIZE = [
            SMALL, MEDIUM, SIZE_FOUR, SIZE_FIVE, SIZE_SIX
        ];
        ;
        super.init(ROOT, SIZE);
    }
    //@Throws(Exception.constructor)
    append(ROOT, sizeString) {
        super.append(ROOT, sizeString);
    }
    //@Throws(Exception.constructor)
    getString() {
        if (AndroidUtil.isAndroid()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return GameGraphicsResourceUtil.getInstance().getStringForFeature(GraphicsFeatureFactory.getInstance().SPRITE_QUARTER_ROTATION_GRAPHICS);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return super.getString();
            ;
        }
    }
}
Unit2DecalGameResources.instance = NullUtil.getInstance().NULL_OBJECT;
