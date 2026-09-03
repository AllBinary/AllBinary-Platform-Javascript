/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const PaintableInterface = globalThis.org.allbinary.graphics.paint.PaintableInterface;
import { Layer } from '../../../../org/allbinary/layer/Layer.js';
//not GWT import const NamedInterface = globalThis.org.allbinary.layer.NamedInterface;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryTiledLayer extends Layer {
    constructor(dataId, width, height, cellWidth, cellHeight) {
        super(0, 0);
        //For kotlin this is before the body of the constructor.
        this.dataId = dataId;
        this.setLayerWidth(width);
        this.setLayerHeight(height);
        super.setPosition(0, 0, 0);
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.halfWidth = (this.getWidth() >> 1);
        this.halfHeight = (this.getHeight() >> 1);
        this.halfCellWidth = (cellWidth >> 1);
        this.halfCellHeight = (cellHeight >> 1);
    }
    setCells(mapTwoDArray) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Start: r: ");
        stringBuffer.appendint(mapTwoDArray.length);
        stringBuffer.append(" c: ");
        stringBuffer.appendint(mapTwoDArray[0].length);
        stringBuffer.append(" rows: ");
        stringBuffer.appendint(this.getRows());
        stringBuffer.append(" columns: ");
        stringBuffer.appendint(this.getColumns());
        this.logUtil.putF(stringBuffer.toString(), this, "setCells");
        var rows = this.getRows();
        ;
        var columns = this.getColumns();
        ;
        for (var col = 0; col < columns; col++) {
            for (var row = 0; row < rows; row++) {
                this.setCell(col, row, mapTwoDArray[row][col]);
            }
        }
    }
    updateCells(mapTwoDArray, fromTileId, toTileId) {
        var rows = this.getRows();
        ;
        var columns = this.getColumns();
        ;
        for (var col = 0; col < columns; col++) {
            for (var row = 0; row < rows; row++) {
                if (fromTileId == mapTwoDArray[row][col]) {
                    mapTwoDArray[row][col] = toTileId;
                    this.setCell(col, row, mapTwoDArray[row][col]);
                }
            }
        }
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    paint(graphics) {
    }
    paintThreed(graphics) {
    }
    getX2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x + this.getWidth();
    }
    getY2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y + this.getHeight();
    }
    getZ2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.z + this.getDepth()));
    }
    getCellWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellWidth;
    }
    getCellHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellHeight;
    }
    getCell(col, row) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getColumns() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getRows() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    setCell(col, row, tileIndex) {
    }
    getHalfWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfWidth;
    }
    getHalfHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfHeight;
    }
    getDataId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dataId;
    }
    getHalfCellWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfCellWidth;
    }
    getHalfCellHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.halfCellHeight;
    }
    isOnTileLayer(column, row) {
        if (this.getColumns() > column && this.getRows() > row && row >= 0 && column >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getAnimatedTile(animationTileIndex) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return animationTileIndex;
    }
}
