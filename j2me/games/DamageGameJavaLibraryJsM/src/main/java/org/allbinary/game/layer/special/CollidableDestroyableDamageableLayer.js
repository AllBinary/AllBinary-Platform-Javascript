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
import { Exception } from '../../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not GWT import const Graphics
import { CollidableNeverCollideBehaviorFactory } from '../../../../../org/allbinary/game/collision/CollidableNeverCollideBehaviorFactory.js';
//not GWT import const DestroyedEvent
import { BasicGroupFactory } from '../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const GameKeyEvent
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { CollidableCompositeLayer } from '../../../../../org/allbinary/game/layer/CollidableCompositeLayer.js';
//not GWT import const PickedUpLayerInterfaceFactoryInterface
import { PickupBehavior } from '../../../../../org/allbinary/game/layer/pickup/PickupBehavior.js';
//not GWT import const PartInterface
import { PartInterfaceUtil } from '../../../../../org/allbinary/game/part/PartInterfaceUtil.js';
//not GWT import const Rectangle
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
//not GWT import - same folder const SpecialGameInputInterface
export class CollidableDestroyableDamageableLayer extends CollidableCompositeLayer {
    static getNullInstance() {
        if (CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER == NullUtil.getInstance().NULL_OBJECT) {
            CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = new CollidableDestroyableDamageableLayer(BasicGroupFactory.getInstance().NONE_ARRAY, StringUtil.getInstance().EMPTY_STRING, RectangleFactory.SINGLETON, ViewPositionBase.NULL_VIEW_POSITION);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    }
    constructor(groupInterface, name, layerInfo, viewPosition) {
        super(name, layerInfo, viewPosition, CollidableNeverCollideBehaviorFactory.getInstance());
        this.readyForExplosion = false;
        this.initX = 0;
        this.initY = 0;
        this.initZ = 0;
        this.partInterfaceArrayP = PartInterfaceUtil.getZeroArray();
        this.allBinaryGameLayerManagerP = AllBinaryGameLayerManager.getNullInstance();
        this.isDraggable = false;
        this.isDragged = false;
        this.isDropped = false;
        //For kotlin this is before the body of the constructor.
        this.initWidth = layerInfo.getWidth();
        this.initHeight = layerInfo.getHeight();
        this.groupInterface = groupInterface;
        this.pickupBehavior = PickupBehavior.getNullInstance();
    }
    //@Throws(Exception.constructor)
    initPosition() {
        this.setPosition(this.initX, this.initY, this.initZ);
    }
    //@Throws(Exception.constructor)
    initPositionXYZ(x, y, z) {
        this.initX = x;
        this.initY = y;
        this.initZ = z;
    }
    paint(graphics) {
        super.paint(graphics);
    }
    //@Throws(Exception.constructor)
    damage(damage, damageType) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    getDamage(damageType) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    isDestroyed() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    getGroupInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.groupInterface;
    }
    setGroupInterface(teamInterface) {
        this.groupInterface = teamInterface;
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        this.allBinaryGameLayerManagerP = allBinaryGameLayerManager;
        if (this.allBinaryGameLayerManagerP ==
            null) {
            throw new RuntimeException();
        }
    }
    isReadyForExplosion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.readyForExplosion;
    }
    setReadyForExplosion(isReadyForExplosion) {
        this.readyForExplosion = isReadyForExplosion;
    }
    getInitWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initWidth;
    }
    getInitHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initHeight;
    }
    getInitX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initX;
    }
    getInitY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initY;
    }
    //@Throws(Exception.constructor)
    up() {
    }
    //@Throws(Exception.constructor)
    down() {
    }
    //@Throws(Exception.constructor)
    right() {
    }
    //@Throws(Exception.constructor)
    left() {
    }
    //@Throws(Exception.constructor)
    strafeLeft() {
    }
    //@Throws(Exception.constructor)
    strafeRight() {
    }
    //@Throws(Exception.constructor)
    fire(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    special1(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    special2(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    special3(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    special4(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    special5(layerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    upAnalog(yAnalogValue) {
    }
    //@Throws(Exception.constructor)
    downAnalog(yAnalogValue) {
    }
    //@Throws(Exception.constructor)
    rightAnalog(xAnalogValue) {
    }
    //@Throws(Exception.constructor)
    leftAnalog(xAnalogValue) {
    }
    //@Throws(Exception.constructor)
    rightTrigger(layerManager, gameKeyEvent, xAnalogValue) {
    }
    //@Throws(Exception.constructor)
    leftTrigger(layerManager, gameKeyEvent, xAnalogValue) {
    }
    onDestroyed(destroyedEvent) {
    }
    getPickupBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.pickupBehavior;
    }
    setPickupBehavior(pickupBehavior) {
        this.pickupBehavior = pickupBehavior;
    }
    //@Throws(Exception.constructor)
    addPart(pickedUpLayerInterfaceFactoryInterface) {
    }
    setPartInterfaceArray(partInterfaceArray) {
        this.partInterfaceArrayP = partInterfaceArray;
    }
    getPartInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.partInterfaceArrayP;
    }
    toStringAppend(stringBuffer) {
        var commonSeps = CommonSeps.getInstance();
        ;
        var positionStrings = PositionStrings.getInstance();
        ;
        super.toStringAppend(stringBuffer);
        stringBuffer.append(commonSeps.NEW_LINE);
        var groupInterfaceArray = this.getGroupInterface();
        ;
        var size = groupInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            stringBuffer.append(groupInterfaceArray[index].toString());
            stringBuffer.append(commonSeps.COMMA);
        }
        var pickupBehavior = this.getPickupBehavior();
        ;
        if (pickupBehavior !=
            null) {
            stringBuffer.append(commonSeps.NEW_LINE);
            stringBuffer.append(pickupBehavior.toString());
        }
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(CollidableDestroyableDamageableLayer.READYFOREXPLOSION);
        stringBuffer.appendboolean(this.readyForExplosion);
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(this.commonStrings.INIT);
        stringBuffer.append(commonSeps.SPACE);
        stringBuffer.append(positionStrings.X_LABEL);
        stringBuffer.appendint(this.initX);
        stringBuffer.append(positionStrings.Y_LABEL);
        stringBuffer.appendint(this.initX);
        stringBuffer.append(positionStrings.Z_LABEL);
        stringBuffer.appendint(this.initZ);
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
CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER = NullUtil.getInstance().NULL_OBJECT;
CollidableDestroyableDamageableLayer.READYFOREXPLOSION = "ReadyForExplosion: ";
