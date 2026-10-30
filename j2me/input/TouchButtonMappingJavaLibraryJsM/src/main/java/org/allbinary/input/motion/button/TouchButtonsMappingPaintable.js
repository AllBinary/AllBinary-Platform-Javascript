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
//not GWT import const Graphics
import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const BasicColor
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const Paintable
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonLocationHelper } from './TouchButtonLocationHelper.js';
//sameFolderImports - not GWT import - same folder const TouchButtonLocationHelper
import { CommonButtons } from './CommonButtons.js';
//sameFolderImports - not GWT import - same folder const CommonButtons
import { TouchButton } from './TouchButton.js';
//sameFolderImports - not GWT import - same folder const TouchButton
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//sameFolderImports - not GWT import - same folder const BasicTouchInputFactory
import { TouchButtonBlankResource } from './TouchButtonBlankResource.js';
//sameFolderImports - not GWT import - same folder const TouchButtonBlankResource
export class TouchButtonsMappingPaintable extends Paintable {
    constructor(basicColor) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.paintableTable = new Array(0).fill(null).map(() => new Array(0).fill(null));
        this.touchButtonLocationHelper = new TouchButtonLocationHelper();
        this.foregroundColor = basicColor.intValue();
        this.init();
    }
    init() {
        try {
            this.paintableTable = this.createPaintableTable();
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, "updateRectangle", e);
            }
        }
    }
    //@Throws(Exception.constructor)
    createPaintableTable() {
        let totalColumns = this.touchButtonLocationHelper.getTotalColumns();
        ;
        let totalRows = this.touchButtonLocationHelper.getTotalRows();
        ;
        let paintableTable = new Array(totalColumns).fill(null).map(() => new Array(totalRows).fill(null));
        ;
        let cellPositionFactory = CellPositionFactory.getInstance();
        ;
        let commonButtons = CommonButtons.getInstance();
        ;
        for (let index = totalColumns - 1; index >= 0; index--) {
            for (let rowIndex = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable[index][rowIndex] = TouchButton.createButton(BasicTouchInputFactory.getInstance().NONE, TouchButtonBlankResource.getInstance(), commonButtons.NORMAL_BUTTON, cellPositionFactory.getInstanceColRow(index, rowIndex), this.touchButtonLocationHelper.getColumnsRemainderHalf(), this.touchButtonLocationHelper.getRowsRemainderHalf());
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return paintableTable;
    }
    paint(graphics) {
        let totalColumns = this.touchButtonLocationHelper.getTotalColumns();
        ;
        let totalRows = this.touchButtonLocationHelper.getTotalRows();
        ;
        for (let index = totalColumns - 1; index >= 0; index--) {
            for (let rowIndex = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable[index][rowIndex].paint(graphics);
            }
        }
    }
}
