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
import { Integer } from '../../../java/lang/Integer.js';
//not GWT import const Graphics
import { BasicGroupFactory } from '../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const Rectangle
import { RectangleFactory } from '../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory
import { OpenGLFeatureUtil } from '../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const OpenGLFeatureUtil
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const ViewPosition
import { ViewPositionBase } from '../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import const ViewPositionBase
import { ViewPositionEvent } from '../../../org/allbinary/view/event/ViewPositionEvent.js';
//not GWT import const ViewPositionEvent
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Layer } from './Layer.js';
//not GWT import - same folder const LayerInterface
export class AllBinaryLayer extends Layer {
    constructor(name, rectangle, viewPosition) {
        super(rectangle.getWidth(), rectangle.getHeight());
        this.viewPositionEvent = new ViewPositionEvent(this);
        this.halfWidth = 0;
        this.halfHeight = 0;
        this.viewPosition = ViewPositionBase.NULL_VIEW_POSITION;
        //For kotlin this is before the body of the constructor.
        var localName;
        ;
        if (name ==
            null) {
            localName = this.constructor.name.toString();
        }
        else {
            localName = new StringMaker().append(name).append(CommonSeps.getInstance().COLON).append(Integer.toHexString(TsUtil.getInstance().hashCode(this))).toString();
        }
        this.name = localName;
        var point = rectangle.getPoint();
        ;
        this.setPosition(point.getX(), point.getY(), point.getZ());
        this.setHalfWidth((this.getWidth() >> 1));
        this.setHalfHeight((this.getHeight() >> 1));
        this.viewPosition = viewPosition;
        this.viewPosition.setAllbinaryLayer(this);
    }
    //@Throws(Exception.constructor)
    onChangeEvent(layerManagerEvent) {
    }
    paintThreed(graphics) {
    }
    getX2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getXP() + this.getWidth();
    }
    getY2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getYP() + this.getHeight();
    }
    getZ2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.getZP() + this.getDepth()));
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setHalfWidth(halfWidth) {
        this.halfWidth = halfWidth;
    }
    getHalfWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfWidth;
    }
    setHalfHeight(halfHeight) {
        this.halfHeight = halfHeight;
    }
    getHalfHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfHeight;
    }
    getHalfDepth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(this.getDepth()) / 2;
    }
    getViewPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.viewPosition;
    }
    setViewPosition(viewPosition) {
        this.viewPosition = viewPosition;
    }
    getGroupInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGroupFactory.getInstance().NONE_ARRAY;
    }
    implmentsTickableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    implmentsGameInputInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    implmentsArtificialIntelligenceCompositeInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    implmentsCollidableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    implementsThreedInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLFeatureUtil.getInstance().isAnyThreed();
        ;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getMultiPlayerType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    toStringAppend(stringBuffer) {
        var commonSeps = CommonSeps.getInstance();
        ;
        var positionStrings = PositionStrings.getInstance();
        ;
        var commonLabels = CommonLabels.getInstance();
        ;
        stringBuffer.append(this.getName());
        stringBuffer.append(commonSeps.COLON);
        stringBuffer.append(AllBinaryLayer.TYPE);
        stringBuffer.appendint(this.getType());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.X_LABEL);
        stringBuffer.appendint(this.getXP());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Y_LABEL);
        stringBuffer.appendint(this.getYP());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.Z_LABEL);
        stringBuffer.appendint(this.getZP());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(this.getWidth());
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.getHeight());
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
AllBinaryLayer.NULL_ALLBINARY_LAYER = new AllBinaryLayer(StringUtil.getInstance().EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION);
AllBinaryLayer.TYPE = "Type: ";
