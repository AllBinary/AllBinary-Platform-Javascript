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
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
import { DisplayChangeEvent } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEvent.js';
import { DisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/DisplayChangeEventHandler.js';
import { LastDisplayChangeEventHandler } from '../../../../org/allbinary/graphics/displayable/event/LastDisplayChangeEventHandler.js';
import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
import { SWTJOGLProcessor } from '../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { OperatingSystemFactory } from '../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseScalable } from './BaseScalable.js';
export class DisplayInfoSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DisplayInfoSingleton.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonLabels = CommonLabels.getInstance();
        this.commonSeps = CommonSeps.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.ORIENTATION = "ORIENTATION";
        this.ADJUSTING_FOR_SCALING_IN_PORTRAIT = "Adjusting for Scaling in portrait display ratio: ";
        this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE = "Adjusting for Scaling in landscape display ratio: ";
        this.last = new Array(4);
        this.lastHalf = new Array(4);
        this.full = new Array(4);
        this.top = 0;
        this.left = 0;
        this.xOffset = 0;
        this.yOffset = 0;
        this.scaleLargestTo = 0.0;
        this.WIDTH = 0;
        this.HEIGHT = 1;
        this.CUSTOM_WIDTH = 2;
        this.CUSTOM_HEIGHT = 3;
        this.scalableListener = new BaseScalable();
        this.displayRatio = 0.0;
        this.ratio = 1.0;
        this.SET_LAST_SIZE_METHOD_NAME = "setLastSize";
        this.FULL_WIDTH = " FullWidth: ";
        this.FULL_HEIGHT = " FullHeight: ";
        this.LAST_WIDTH = "LastWidth: ";
        this.LAST_HEIGHT = " LastHeight: ";
        this.PORTRAIT = "Portrait";
        this.LANDSCAPE = "Landscape";
        this.displayChangeEvent = new DisplayChangeEvent(this);
        this.FIRE_METHOD_NAME = "fire";
        this.REASON = "reason: ";
        this.UPDATE_FROM_ORIENTATION_CHANGE = "Updating from Orientation Change ";
        this.list = new BasicArrayListD();
        this.DISPLAY_INFO = "Display Info: ";
        this.FULL = "full";
        this.LAST = "last";
        this.LAST_HALF = "lastHalf";
        var size = this.last.length;
        ;
        for (var index = 0; index < size; index++) {
            this.last[index] = 0;
            this.lastHalf[index] = 0;
            this.full[index] = 0;
        }
        if (AndroidUtil.isAndroid()) {
            this.scaleLargestTo = 640;
        }
        else {
            this.scaleLargestTo = 1080;
        }
    }
    getLastHalf() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHalf;
    }
    getLast() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last;
    }
    getFull() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.full;
    }
    getScaleLargestTo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scaleLargestTo;
    }
    setScaleLargestTo(scaleLargestTo) {
        this.scaleLargestTo = scaleLargestTo;
    }
    setLastSize(aLastWidth, aLastHeight, reason) {
        if (this.full[this.WIDTH] != aLastWidth || this.full[this.HEIGHT] != aLastHeight) {
            this.setLastSizeForce(aLastWidth, aLastHeight, reason);
        }
    }
    setLastSizeForce(aLastWidth, aLastHeight, reason) {
        var stringMaker = new StringMaker();
        ;
        this.logUtil.putF(stringMaker.append(CommonLabels.getInstance().START_LABEL).append(reason).toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
        var aFullWidth = aLastWidth;
        ;
        var aFullHeight = aLastHeight;
        ;
        stringMaker.delete(0, stringMaker.length());
        this.logUtil.putF(stringMaker.append(this.FULL_WIDTH).appendint(aFullWidth).append(this.FULL_HEIGHT).appendint(aFullHeight).append(this.toString()).toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
        var operatingSystemInterface = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
        ;
        if (operatingSystemInterface.isOverScan()) {
            aLastWidth = aLastWidth * operatingSystemInterface.getOverScanXPercent() / 100;
            aLastHeight = aLastHeight * operatingSystemInterface.getOverScanYPercent() / 100;
        }
        if (operatingSystemInterface.isScalable()) {
            if (this.isPortraitWH(aLastWidth, aLastHeight)) {
                if (aLastHeight > this.scaleLargestTo) {
                    this.displayRatio = this.scaleLargestTo / aLastHeight;
                    this.ratio = aLastHeight / this.scaleLargestTo;
                    stringMaker.delete(0, stringMaker.length());
                    this.logUtil.putF(stringMaker.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT).appendfloat(this.displayRatio).toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
                    aLastWidth = Math.round((aLastWidth * this.displayRatio));
                    aLastHeight = Math.round((aLastHeight * this.displayRatio));
                    this.scalableListener.scale(this.ratio);
                }
                else {
                    this.ratio = 1.0;
                    this.scalableListener.scale(this.ratio);
                }
            }
            else {
                if (aLastWidth > this.scaleLargestTo) {
                    this.displayRatio = this.scaleLargestTo / aLastWidth;
                    this.ratio = aLastWidth / this.scaleLargestTo;
                    stringMaker.delete(0, stringMaker.length());
                    this.logUtil.putF(stringMaker.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE).appendfloat(this.displayRatio).toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
                    aLastWidth = Math.round((aLastWidth * this.displayRatio));
                    aLastHeight = Math.round((aLastHeight * this.displayRatio));
                    this.scalableListener.scale(this.ratio);
                }
                else {
                    this.ratio = 1.0;
                    this.scalableListener.scale(this.ratio);
                }
            }
        }
        stringMaker.delete(0, stringMaker.length());
        this.logUtil.putF(stringMaker.append(this.LAST_WIDTH).appendint(aLastWidth).append(this.LAST_HEIGHT).appendint(aLastHeight).toString(), this, this.SET_LAST_SIZE_METHOD_NAME);
        this.xOffset = aFullWidth - aLastWidth;
        this.yOffset = aFullHeight - aLastHeight;
        this.left = this.scalableListener.getLeft(this.xOffset);
        this.top = this.scalableListener.getTop(this.yOffset);
        this.full[this.WIDTH] = aFullWidth;
        this.full[this.HEIGHT] = aFullHeight;
        this.last[this.WIDTH] = aLastWidth;
        this.lastHalf[this.WIDTH] = (this.last[this.WIDTH] >> 1);
        this.last[this.HEIGHT] = aLastHeight;
        this.lastHalf[this.HEIGHT] = (this.last[this.HEIGHT] >> 1);
        SWTJOGLProcessor.getInstance().setCustom(aLastWidth, aLastHeight, this.ratio);
        this.add(this.SET_LAST_SIZE_METHOD_NAME);
    }
    isPortraitWH(lastWidth, lastHeight) {
        if (lastHeight > lastWidth) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isPortrait() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isPortraitWH(this.last[this.WIDTH], this.last[this.HEIGHT]);
        ;
    }
    add(reason) {
        var stringMaker = new StringMaker();
        ;
        this.logUtil.putF(stringMaker.append(this.REASON).append(reason).toString(), this, this.FIRE_METHOD_NAME);
        stringMaker.delete(0, stringMaker.length());
        this.logUtil.putF(this.toStringAppend(stringMaker), this, this.FIRE_METHOD_NAME);
        this.list.add(reason);
    }
    process() {
        try {
            if (this.list.size() > 0) {
                this.processForced();
            }
            this.list.clear();
            //: 
        }
        catch (e) {
            PreLogUtil.putOE(this.commonStrings.EXCEPTION, this, this.FIRE_METHOD_NAME, e);
        }
    }
    processForced() {
        try {
            var swtJOGLProcessor = SWTJOGLProcessor.getInstance();
            ;
            swtJOGLProcessor.clear();
            DisplayChangeEventHandler.getInstance().fireEvent(this.displayChangeEvent);
            LastDisplayChangeEventHandler.getInstance().fireEvent(this.displayChangeEvent);
            swtJOGLProcessor.onSurfaceChanged();
            //: 
        }
        catch (e) {
            PreLogUtil.putOE(this.commonStrings.EXCEPTION, this, this.FIRE_METHOD_NAME, e);
        }
    }
    update(displayable, reason) {
        var aLastWidth = displayable.getWidth();
        ;
        var aLastHeight = displayable.getHeight();
        ;
        var aFullWidth = aLastWidth;
        ;
        var aFullHeight = aLastHeight;
        ;
        var stringMaker = new StringMaker();
        ;
        this.logUtil.putF(stringMaker.append(CommonLabels.getInstance().START_LABEL).append(reason).append(this.LAST_WIDTH).appendint(aLastWidth).append(this.LAST_HEIGHT).appendint(aLastHeight).append(this.commonSeps.SPACE).append(this.toString()).toString(), this, this.commonStrings.UPDATE);
        if (aLastWidth > 0 && aLastHeight > 0) {
            var features = Features.getInstance();
            ;
            var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
            ;
            if (!features.isDefault(openGLFeatureFactory.OPENGL) || this.last[this.WIDTH] != aLastWidth || this.last[this.HEIGHT] != aLastHeight) {
                stringMaker.delete(0, stringMaker.length());
                this.logUtil.putF(stringMaker.append(this.UPDATE_FROM_ORIENTATION_CHANGE).toString(), this, this.commonStrings.UPDATE);
                var operatingSystemInterface = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
                ;
                if (operatingSystemInterface.isOverScan()) {
                    aLastWidth = aLastWidth * operatingSystemInterface.getOverScanXPercent() / 100;
                    aLastHeight = aLastHeight * operatingSystemInterface.getOverScanYPercent() / 100;
                }
                if (operatingSystemInterface.isScalable()) {
                    if (this.isPortraitWH(aLastWidth, aLastHeight)) {
                        if (aLastHeight > this.scaleLargestTo) {
                            this.displayRatio = this.scaleLargestTo / aLastHeight;
                            this.ratio = aLastHeight / this.scaleLargestTo;
                            stringMaker.delete(0, stringMaker.length());
                            this.logUtil.putF(stringMaker.append(this.ADJUSTING_FOR_SCALING_IN_PORTRAIT).appendfloat(this.displayRatio).toString(), this, this.commonStrings.UPDATE);
                            aLastWidth = Math.round((aLastWidth * this.displayRatio));
                            aLastHeight = Math.round((aLastHeight * this.displayRatio));
                            this.scalableListener.scale(this.ratio);
                        }
                        else {
                            this.ratio = 1.0;
                            this.scalableListener.scale(this.ratio);
                        }
                    }
                    else {
                        if (aLastWidth > this.scaleLargestTo) {
                            this.displayRatio = this.scaleLargestTo / aLastWidth;
                            this.ratio = aLastWidth / this.scaleLargestTo;
                            stringMaker.delete(0, stringMaker.length());
                            this.logUtil.putF(stringMaker.append(this.ADJUSTING_FOR_SCALING_IN_LANDSCAPE).appendfloat(this.displayRatio).toString(), this, this.commonStrings.UPDATE);
                            aLastWidth = Math.round((aLastWidth * this.displayRatio));
                            aLastHeight = Math.round((aLastHeight * this.displayRatio));
                            this.scalableListener.scale(this.ratio);
                        }
                        else {
                            this.ratio = 1.0;
                            this.scalableListener.scale(this.ratio);
                        }
                    }
                }
                stringMaker.delete(0, stringMaker.length());
                this.logUtil.putF(stringMaker.append(this.UPDATE_FROM_ORIENTATION_CHANGE).append(this.LAST_WIDTH).appendint(aLastWidth).append(this.LAST_HEIGHT).appendint(aLastHeight).toString(), this, this.commonStrings.UPDATE);
                this.xOffset = aFullWidth - aLastWidth;
                this.yOffset = aFullHeight - aLastHeight;
                this.left = this.scalableListener.getLeft(this.xOffset);
                this.top = this.scalableListener.getTop(this.yOffset);
                this.full[this.WIDTH] = aFullWidth;
                this.full[this.HEIGHT] = aFullHeight;
                this.last[this.WIDTH] = aLastWidth;
                this.lastHalf[this.WIDTH] = (this.last[this.WIDTH] >> 1);
                this.last[this.HEIGHT] = aLastHeight;
                this.lastHalf[this.HEIGHT] = (this.last[this.HEIGHT] >> 1);
                SWTJOGLProcessor.getInstance().setCustom(aLastWidth, aLastHeight, this.ratio);
                this.add(this.commonStrings.UPDATE);
            }
        }
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.toStringAppend(stringBuffer);
        ;
    }
    toStringAppend(stringBuffer) {
        stringBuffer.append(this.DISPLAY_INFO);
        stringBuffer.append(this.FULL);
        stringBuffer.append(this.commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(this.full[this.WIDTH]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.FULL);
        stringBuffer.append(this.commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.full[this.HEIGHT]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.LAST);
        stringBuffer.append(this.commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(this.last[this.WIDTH]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.LAST);
        stringBuffer.append(this.commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.last[this.HEIGHT]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.LAST_HALF);
        stringBuffer.append(this.commonLabels.WIDTH_LABEL);
        stringBuffer.appendint(this.lastHalf[this.WIDTH]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.LAST_HALF);
        stringBuffer.append(this.commonLabels.HEIGHT_LABEL);
        stringBuffer.appendint(this.lastHalf[this.HEIGHT]);
        stringBuffer.append(this.commonSeps.SPACE);
        stringBuffer.append(this.isPortrait()
            ?
                this.PORTRAIT
            :
                this.LANDSCAPE);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getTop() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.top;
    }
    getLeft() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.left;
    }
    getLastWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.WIDTH];
    }
    getLastHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.HEIGHT];
    }
    getLastHalfWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHalf[this.WIDTH];
    }
    getLastHalfHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastHalf[this.HEIGHT];
    }
    getCustomLastWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.CUSTOM_WIDTH];
    }
    getCustomLastHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.CUSTOM_HEIGHT];
    }
    getRawLastWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.WIDTH];
    }
    getRawLastHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.last[this.HEIGHT];
    }
    setCustom(width, height) {
        this.last[this.CUSTOM_WIDTH] = width;
        this.lastHalf[this.CUSTOM_WIDTH] = (this.last[this.CUSTOM_WIDTH] >> 1);
        this.last[this.CUSTOM_HEIGHT] = height;
        this.lastHalf[this.CUSTOM_HEIGHT] = (this.last[this.CUSTOM_HEIGHT] >> 1);
    }
    setScalableListener(scalableListener) {
        this.scalableListener = scalableListener;
    }
    getScalableListener() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scalableListener;
    }
    getRatio() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ratio;
    }
    getDisplayRatio() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.displayRatio;
    }
    setOffset(left, top) {
        this.left = left;
    }
    getxOffset() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.xOffset;
    }
    getyOffset() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.yOffset;
    }
}
DisplayInfoSingleton.SINGLETON = new DisplayInfoSingleton();
