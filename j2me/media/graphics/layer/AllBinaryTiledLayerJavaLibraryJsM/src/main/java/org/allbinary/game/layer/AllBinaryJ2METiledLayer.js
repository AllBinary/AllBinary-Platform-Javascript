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
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { TiledLayer } from '../../../../javax/microedition/lcdui/game/TiledLayer.js';
const TiledLayer = globalThis.javax.microedition.lcdui.game.TiledLayer;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryTiledLayer } from './AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
export class AllBinaryJ2METiledLayer extends AllBinaryTiledLayer {
    constructor(dataId, tiledLayer, mapTwoDArray, debugColor) {
        super(dataId, tiledLayer.getWidth(), tiledLayer.getHeight(), tiledLayer.getCellWidth(), tiledLayer.getCellHeight());
        this.font2 = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, 4);
        //For kotlin this is before the body of the constructor.
        this.tiledLayerP = tiledLayer;
        this.debugColor = debugColor;
        this.setCells(mapTwoDArray);
    }
    paint(graphics) {
        this.tiledLayerP.paint(graphics);
    }
    paintDebug(graphics) {
        var font = graphics.getFont();
        ;
        graphics.setFont(this.font2);
        graphics.setColor(this.debugColor);
        var x = this.tiledLayerP.getX();
        ;
        var y = this.tiledLayerP.getY();
        ;
        var firstColumn = 0;
        ;
        var firstRow = 0;
        ;
        var totalColumns = this.tiledLayerP.getColumns();
        ;
        var totalRows = this.tiledLayerP.getRows();
        ;
        var x0 = x;
        ;
        var tile = 0;
        ;
        var tileHeight = this.tiledLayerP.getCellHeight();
        ;
        var tileWidth = this.tiledLayerP.getCellWidth();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        var stringMaker = new StringMaker();
        ;
        for (var rowIndex = firstRow; rowIndex < totalRows; rowIndex++) {
            x = x0;
            for (var columnIndex = firstColumn; columnIndex < totalColumns; columnIndex++) {
                tile = this.tiledLayerP.getCell(columnIndex, rowIndex);
                if (tile < 0) {
                    tile = this.tiledLayerP.getAnimatedTile(tile);
                }
                if (tile == 0) {
                    continue;
                }
                tile--;
                stringMaker.delete(0, stringMaker.length());
                graphics.drawString(stringMaker.appendint(columnIndex).append(commonSeps.COMMA).appendint(rowIndex).append(commonSeps.COLON).appendint(tile).toString(), x + 5, y + 10, 0);
            }
        }
        graphics.setFont(font);
    }
    moveDXY(dx, dy) {
        this.tiledLayerP.move(dx, dy);
        super.moveDXY(-dx, -dy);
    }
    setPosition(x, y, z) {
        this.tiledLayerP.setPosition(x, y);
        super.setPosition(-x, -y, z);
    }
    getTiledLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP;
    }
    getCellWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getCellWidth();
        ;
    }
    getCellHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getCellHeight();
        ;
    }
    getCell(col, row) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getCell(col, row);
        ;
    }
    getColumns() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getColumns();
        ;
    }
    getRows() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getRows();
        ;
    }
    setCell(col, row, index) {
        this.tiledLayerP.setCell(col, row, index);
    }
    getAnimatedTile(animationTileIndex) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tiledLayerP.getAnimatedTile(animationTileIndex);
        ;
    }
}
