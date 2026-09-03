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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const CollidableInterfaceCompositeInterface = globalThis.org.allbinary.game.collision.CollidableInterfaceCompositeInterface;
import { CollidableNeverCollideBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
export class CollidableCompositeLayer extends AllBinaryGameLayer {
    static getNullInstance() {
        if (CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER == NullUtil.getInstance().NULL_OBJECT) {
            CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER = new CollidableCompositeLayer(StringUtil.getInstance().EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION, CollidableNeverCollideBehaviorFactory.getInstance());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER;
    }
    constructor(name, layerInfo, viewPosition, collidableBaseBehaviorFactory) {
        super(name, layerInfo, viewPosition);
        this.collidableInferface = CollidableNeverCollideBehaviorFactory.getInstance().createBehavior();
        //For kotlin this is before the body of the constructor.
        if (collidableBaseBehaviorFactory != CollidableNeverCollideBehaviorFactory.getInstance()) {
            this.setCollidableInferface(collidableBaseBehaviorFactory.createBehavior());
        }
    }
    getArtificialIntelligenceInterface() {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return ArtificialIntelligence.getInstance();
        ;
    }
    getCollidableInferface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.collidableInferface;
    }
    setCollidableInferface(collidableInferface) {
        this.collidableInferface = collidableInferface;
    }
    implmentsCollidableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    toStringAppend(stringBuffer) {
        var commonSeps = CommonSeps.getInstance();
        ;
        super.toStringAppend(stringBuffer);
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(this.getCollidableInferface().toString());
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        this.toStringAppend(stringBuffer);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER = NullUtil.getInstance().NULL_OBJECT;
