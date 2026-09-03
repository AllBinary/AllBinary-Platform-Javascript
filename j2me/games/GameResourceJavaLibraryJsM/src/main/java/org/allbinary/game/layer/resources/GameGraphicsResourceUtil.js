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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const GraphicsFeature = globalThis.org.allbinary.game.configuration.feature.GraphicsFeature;
import { GraphicsFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
//not GWT import const GraphicsFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GraphicsFeatureFactory;
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameGraphicsResourceUtil extends Object {
    static getInstance() {
        if (GameGraphicsResourceUtil.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameGraphicsResourceUtil.instance = new GameGraphicsResourceUtil();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameGraphicsResourceUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.SPRITE = "_sprite";
        this.QUARTER = "_quarter";
        this.name = StringUtil.getInstance().EMPTY_STRING;
        try {
            this.name = this.getString();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
    //@Throws(Exception.constructor)
    getString() {
        var graphicsFeatureFactory = GraphicsFeatureFactory.getInstance();
        ;
        var graphicsFeature = graphicsFeatureFactory.NONE;
        ;
        var features = Features.getInstance();
        ;
        if (features.isFeature(graphicsFeatureFactory.IMAGE_TO_ARRAY_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory.IMAGE_TO_ARRAY_GRAPHICS;
        }
        else if (features.isFeature(graphicsFeatureFactory.SPRITE_FULL_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory.SPRITE_FULL_GRAPHICS;
        }
        else if (features.isFeature(graphicsFeatureFactory.SPRITE_QUARTER_ROTATION_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory.SPRITE_QUARTER_ROTATION_GRAPHICS;
        }
        else if (features.isFeature(graphicsFeatureFactory.IMAGE_ROTATION_ON_THE_FLY)) {
            graphicsFeature = graphicsFeatureFactory.IMAGE_ROTATION_ON_THE_FLY;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getStringForFeature(graphicsFeature);
        ;
    }
    //@Throws(Exception.constructor)
    getStringForFeature(graphicsFeature) {
        var stringBuffer = new StringMaker();
        ;
        var graphicsFeatureFactory = GraphicsFeatureFactory.getInstance();
        ;
        stringBuffer.delete(0, stringBuffer.length());
        var features = Features.getInstance();
        ;
        if (features.isFeature(graphicsFeatureFactory.VECTOR_GRAPHICS)) {
        }
        else if (features.isFeature(graphicsFeatureFactory.IMAGE_GRAPHICS)) {
            if (graphicsFeature == graphicsFeatureFactory.IMAGE_TO_ARRAY_GRAPHICS || graphicsFeature == graphicsFeatureFactory.IMAGE_ROTATION_ON_THE_FLY) {
            }
            else if (graphicsFeature == graphicsFeatureFactory.SPRITE_FULL_GRAPHICS) {
                stringBuffer.append(this.SPRITE);
            }
            else if (graphicsFeature == graphicsFeatureFactory.SPRITE_QUARTER_ROTATION_GRAPHICS) {
                stringBuffer.append(this.QUARTER);
                stringBuffer.append(this.SPRITE);
            }
            else {
                throw new Exception("None/Unknown Sub Image Resource Type Specified");
            }
        }
        else if (OpenGLFeatureUtil.getInstance().isAnyThreed()) {
            stringBuffer.append(CanvasStrings.getInstance().OBJ_MODEL);
        }
        else {
            throw new Exception("None/Unknown Main Image Resource Type Specified");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
GameGraphicsResourceUtil.instance = NullUtil.getInstance().NULL_OBJECT;
