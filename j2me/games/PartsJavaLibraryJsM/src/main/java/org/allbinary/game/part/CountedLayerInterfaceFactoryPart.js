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
import { Exception } from '../../../../java/lang/Exception.js';
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
import { CountedPickedUpLayerInterfaceFactory } from '../../../../org/allbinary/game/layer/pickup/CountedPickedUpLayerInterfaceFactory.js';
//not GWT import const CountedPickedUpLayerInterfaceFactory = globalThis.org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const PartInterface = globalThis.org.allbinary.game.part.PartInterface;
export class CountedLayerInterfaceFactoryPart extends Object {
    constructor(total, countedPickedUpLayerInterfaceFactory) {
        super();
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.animationInterface = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.total = 0;
        this.totalString = NullUtil.getInstance().NULL_CHAR_ARRAY;
        this.xOffset = 0;
        this.countedPickedUpLayerInterfaceFactory = CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY;
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(1000);
        this.init(total, countedPickedUpLayerInterfaceFactory);
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.setXOffset(font.charsWidth(this.totalString, 0, this.primitiveLongUtil.getCurrentTotalDigits()) + (font.getSize() >> 1));
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    init(total, countedPickedUpLayerInterfaceFactory) {
        this.setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory);
        this.total = total;
    }
    //@Throws(Exception.constructor)
    getInstance(hashtable, x, y, z) {
        if (this.total > 0) {
            this.setTotal(this.total - 1);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getCountedPickedUpLayerInterfaceFactory().getNextInstance(hashtable, x, y, z);
            ;
        }
        else {
            throw new Exception("No more left. Could use a listener to automatically remove");
        }
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.total;
    }
    setTotal(total) {
        this.total = total;
        this.totalString = this.primitiveLongUtil.getCharArray(total);
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
    }
    paintThreed(graphics) {
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    setAnimationInterface(animationInterface) {
        this.animationInterface = animationInterface;
    }
    getXOffset() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.xOffset;
    }
    setXOffset(totalStringWidth) {
        this.xOffset = totalStringWidth;
    }
    getTotalString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalString;
    }
    getCountedPickedUpLayerInterfaceFactory() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.countedPickedUpLayerInterfaceFactory;
    }
    setCountedPickedUpLayerInterfaceFactory(countedPickedUpLayerInterfaceFactory) {
        this.countedPickedUpLayerInterfaceFactory = countedPickedUpLayerInterfaceFactory;
    }
}
CountedLayerInterfaceFactoryPart.NULL_COUNTED_LAYER_INTERFACE_FACTORY = new CountedLayerInterfaceFactoryPart(0, CountedPickedUpLayerInterfaceFactory.NULL_COUNTED_PICKUP_LAYER_FACTORY);
