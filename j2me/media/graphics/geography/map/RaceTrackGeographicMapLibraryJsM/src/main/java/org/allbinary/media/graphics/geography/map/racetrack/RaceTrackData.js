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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import const Image
import { NullImage } from '../../../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const CellPosition
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackData extends Object {
    constructor(id, cellWidth, cellHeight, miniCellWidth, miniCellHeight, cellTypeIdToGeographicMapCellTypeArray, mapArray) {
        super();
        this.tileSetImage = NullImage.NULL_IMAGE;
        this.miniTileSetImage = NullImage.NULL_IMAGE;
        this.cellWidth = 0;
        this.cellHeight = 0;
        this.miniCellWidth = 0;
        this.miniCellHeight = 0;
        this.mapArray = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
        this.cellTypeIdToGeographicMapCellTypeArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.NO_OVER_PASSES_ARRAY = [];
        this.overPassGeographicMapCellPositionArray = this.NO_OVER_PASSES_ARRAY;
        this.id = id;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.miniCellWidth = miniCellWidth;
        this.miniCellHeight = miniCellHeight;
        this.mapArray = mapArray;
        this.cellTypeIdToGeographicMapCellTypeArray = cellTypeIdToGeographicMapCellTypeArray;
    }
    setMapArray(mapArray) {
        this.mapArray = mapArray;
    }
    getMapArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mapArray;
    }
    setCellTypeIdToGeographicMapCellTypeArray(cellTypeIdToGeographicMapCellTypeArray) {
        this.cellTypeIdToGeographicMapCellTypeArray = cellTypeIdToGeographicMapCellTypeArray;
    }
    getCellTypeIdToGeographicMapCellTypeArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellTypeIdToGeographicMapCellTypeArray;
    }
    setCellWidth(cellWidth) {
        this.cellWidth = cellWidth;
    }
    getCellWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellWidth;
    }
    setCellHeight(cellHeight) {
        this.cellHeight = cellHeight;
    }
    getCellHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellHeight;
    }
    getOverPassGeographicMapCellPositionArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.overPassGeographicMapCellPositionArray;
    }
    setOverPassGeographicMapCellPositionArray(overPassGeographicMapCellPositionArray) {
        this.overPassGeographicMapCellPositionArray = overPassGeographicMapCellPositionArray;
    }
    getTileSetImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tileSetImage;
    }
    setTileSetImage(tileSetImage) {
        this.tileSetImage = tileSetImage;
    }
    getMiniTileSetImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.miniTileSetImage;
    }
    setMiniTileSetImage(miniTileSetImage) {
        this.miniTileSetImage = miniTileSetImage;
    }
    getMiniCellWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.miniCellWidth;
    }
    setMiniCellWidth(miniCellWidth) {
        this.miniCellWidth = miniCellWidth;
    }
    getMiniCellHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.miniCellHeight;
    }
    setMiniCellHeight(miniCellHeight) {
        this.miniCellHeight = miniCellHeight;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
}
