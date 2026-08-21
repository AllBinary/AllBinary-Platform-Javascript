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
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
import { CollidableNeverCollideBehaviorFactory } from '../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { ViewPositionBase } from '../../../../org/allbinary/view/ViewPositionBase.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';
export class CollidableCompositeLayer extends AllBinaryGameLayer {
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
CollidableCompositeLayer.NULL_COLLIDABLE_COMPOSITE_LAYER = new CollidableCompositeLayer(StringUtil.getInstance().EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION, CollidableNeverCollideBehaviorFactory.getInstance());
