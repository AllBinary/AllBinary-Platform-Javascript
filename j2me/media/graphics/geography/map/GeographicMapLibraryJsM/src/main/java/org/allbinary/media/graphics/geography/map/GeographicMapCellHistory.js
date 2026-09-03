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
import { Object } from '../../../../../../java/lang/Object.js';
//not plain js import { Font } from '../../../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { AnimationBehavior } from '../../../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { TextAnimation } from '../../../../../../org/allbinary/animation/text/TextAnimation.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
//not plain js import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { MyFontProcessor } from '../../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
//not plain js import { BasicDecimal } from '../../../../../../org/allbinary/logic/math/BasicDecimal.js';
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
export class GeographicMapCellHistory extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.booleanFactory = BooleanFactory.getInstance();
        this.MISSED_INFO = "Missed";
        this.animation = new TextAnimation(this.MISSED_INFO, AnimationBehavior.getInstance());
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.totalVisited = 0;
        this.halfWidth = 0;
        this.fontHeight = 0;
        this.RED = BasicColorFactory.getInstance().RED.intValue();
        this.list = new BasicArrayListD();
        this.visitedList = new BasicArrayListD();
        this.init();
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    getTotalVisited() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalVisited;
    }
    getTotalNotVisited() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize() - this.totalVisited;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.size();
        ;
    }
    trackAll(list) {
        var size = list.size();
        ;
        this.list.ensureCapacity(size);
        this.visitedList.ensureCapacity(size);
        var geographicMapCellPosition;
        ;
        for (var index = 0; index < size; index++) {
            geographicMapCellPosition = list.get(index);
            this.track(geographicMapCellPosition);
        }
    }
    track(geographicMapCellPosition) {
        if (!this.list.contains(geographicMapCellPosition)) {
            this.list.add(geographicMapCellPosition);
            this.visitedList.add(this.booleanFactory.FALSE);
        }
    }
    getTracked() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list;
    }
    getVisited() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.visitedList;
    }
    getAfterIfNotLast(geographicMapCellPosition) {
        var localList = this.list;
        ;
        var index = localList.indexOf(geographicMapCellPosition);
        ;
        if (localList.size() > index + 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return localList.get(index + 1);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPosition;
    }
    getFirstUnvisited() {
        var localList = this.list;
        ;
        var localVisitedList = this.visitedList;
        ;
        var size = localVisitedList.size();
        ;
        var value;
        ;
        for (var index = 0; index < size; index++) {
            value = this.visitedList.get(index);
            if (value == this.booleanFactory.FALSE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return localList.get(index);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return localList.get(0);
    }
    getFirstUnvisitedIndex() {
        var localVisitedList = this.visitedList;
        ;
        var size = localVisitedList.size();
        ;
        var value;
        ;
        for (var index = 0; index < size; index++) {
            value = this.visitedList.get(index);
            if (value == this.booleanFactory.FALSE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getInPathButNotTracked(pathList) {
        var inPathButNotTrackedList = new BasicArrayListD();
        ;
        var localList = this.list;
        ;
        var size = pathList.size();
        ;
        var geographicMapCellPosition;
        ;
        for (var index = 0; index < size; index++) {
            geographicMapCellPosition = pathList.get(index);
            if (!localList.contains(geographicMapCellPosition)) {
                inPathButNotTrackedList.add(geographicMapCellPosition);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inPathButNotTrackedList;
    }
    isVisited(geographicMapCellPosition) {
        var index = this.list.indexOf(geographicMapCellPosition);
        ;
        if (index != -1) {
            var value = this.visitedList.get(index);
            ;
            if (value == this.booleanFactory.TRUE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        else {
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    visit(geographicMapCellPosition) {
        var index = this.list.indexOf(geographicMapCellPosition);
        ;
        var value;
        ;
        if (index != -1) {
            value = this.visitedList.get(index);
            var TRUE = this.booleanFactory.TRUE;
            ;
            if (value != TRUE) {
                this.visitedList.set(index, TRUE);
                this.totalVisited++;
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        else {
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    isAllVisited() {
        if (this.totalVisited == this.getSize() - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    isAllVisited2() {
        if (this.totalVisited == this.getSize()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    isPortionVisited(basicDecimal) {
        var size = this.getSize();
        ;
        var numberRequired = (size << basicDecimal.getScaledFactor()) / Math.round(basicDecimal.getUnscaled());
        ;
        var numberNotVisited = this.getSize() - 1 - this.totalVisited;
        ;
        if (size - numberNotVisited > numberRequired) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    reset() {
        var localVisitedList = this.visitedList;
        ;
        var localFalseBoolean = this.booleanFactory.FALSE;
        ;
        var size = localVisitedList.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            localVisitedList.set(index, localFalseBoolean);
        }
        this.totalVisited = 0;
    }
    paintNotVisitedRelativeToPoint(graphics, tiledLayer, point) {
        var x = point.getX() - tiledLayer.getXP();
        ;
        var y = point.getY() - tiledLayer.getYP();
        ;
        if (this.halfWidth == 0) {
            this.halfWidth = (graphics.getFont().stringWidth(this.MISSED_INFO) >> 1);
        }
        var height = 2 * this.fontHeight;
        ;
        this.animation.paintXY(graphics, x + this.halfWidth, y + (height));
    }
    paintNotVisited(graphics, geographicMapInterface) {
        try {
            this.myFontProcessor.process(graphics);
            graphics.setColor(this.RED);
            var localVisitedList = this.visitedList;
            ;
            var size = localVisitedList.size();
            ;
            var geographicMapCellPosition;
            ;
            var isCellVisitedBoolean;
            ;
            for (var index = size; --index >= 0;) {
                geographicMapCellPosition = this.list.get(index);
                isCellVisitedBoolean = localVisitedList.get(index);
                if (!isCellVisitedBoolean.valueOf()) {
                    this.paintNotVisitedRelativeToPoint(graphics, geographicMapInterface.getAllBinaryTiledLayer(), geographicMapCellPosition.getPoint());
                }
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "paintNotVisited", e);
        }
    }
    init() {
        this.list.clear();
        this.visitedList.clear();
        this.totalVisited = 0;
    }
}
GeographicMapCellHistory.NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY = [];
