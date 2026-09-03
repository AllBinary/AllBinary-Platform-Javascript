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
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//not GWT import const TouchButtonLocationHelper = globalThis.org.allbinary.input.motion.button.TouchButtonLocationHelper;
import { CommonButtons } from './CommonButtons.js';
//not GWT import const CommonButtons = globalThis.org.allbinary.input.motion.button.CommonButtons;
import { TouchButton } from './TouchButton.js';
//not GWT import const TouchButton = globalThis.org.allbinary.input.motion.button.TouchButton;
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;
import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';
//not GWT import const TouchButtonBlankResource = globalThis.org.allbinary.input.motion.button.TouchButtonBlankResource;
export class TouchButtonsMappingPaintable extends Paintable {
    constructor(basicColor) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.paintableTable = new Array(0).fill(null).map(() => new Array(0).fill(0));
        this.touchButtonLocationHelper = new TouchButtonLocationHelper();
        this.foregroundColor = basicColor.intValue();
        this.init();
    }
    init() {
        try {
            this.paintableTable = this.createPaintableTable();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "updateRectangle", e);
        }
    }
    //@Throws(Exception.constructor)
    createPaintableTable() {
        var totalColumns = this.touchButtonLocationHelper.getTotalColumns();
        ;
        var totalRows = this.touchButtonLocationHelper.getTotalRows();
        ;
        var paintableTable = new Array(totalColumns).fill(null).map(() => new Array(totalRows).fill(0));
        ;
        var cellPositionFactory = CellPositionFactory.getInstance();
        ;
        var commonButtons = CommonButtons.getInstance();
        ;
        for (var index = totalColumns - 1; index >= 0; index--) {
            for (var rowIndex = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable[index][rowIndex] = TouchButton.createButton(BasicTouchInputFactory.getInstance().NONE, TouchButtonBlankResource.getInstance(), commonButtons.NORMAL_BUTTON, cellPositionFactory.getInstanceColRow(index, rowIndex), this.touchButtonLocationHelper.getColumnsRemainderHalf(), this.touchButtonLocationHelper.getRowsRemainderHalf());
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return paintableTable;
    }
    paint(graphics) {
        var totalColumns = this.touchButtonLocationHelper.getTotalColumns();
        ;
        var totalRows = this.touchButtonLocationHelper.getTotalRows();
        ;
        for (var index = totalColumns - 1; index >= 0; index--) {
            for (var rowIndex = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable[index][rowIndex].paint(graphics);
            }
        }
    }
}
