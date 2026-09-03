/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
import { LayerCoveringCellPositionsUtil } from '../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
import { CellPositionsUtil } from '../../../../org/allbinary/media/graphics/geography/map/CellPositionsUtil.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//not plain js import { BasicArrayListS } from '../../../../org/allbinary/util/BasicArrayListS.js';
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not plain js import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellPositionAreaBase } from './GeographicMapCellPositionAreaBase.js';
//not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;
export class GeographicMapCellPositionArea extends GeographicMapCellPositionAreaBase {
    constructor(layerInterface) {
        super();
        this.cellPositionsUtil = CellPositionsUtil.getInstance();
        this.layerCoveringCellPositionsUtil = LayerCoveringCellPositionsUtil.getInstance();
        this.reusableOccupyingGeographicMapCellPositionList = new BasicArrayListS(4);
        this.reusableSurroundingGeographicMapCellPositionList = new BasicArrayListS(12);
        this.surroundingCircularIndexUtil = CircularIndexUtil.createInstance(0);
        this.LIST = BasicArrayListUtil.getInstance().getImmutableInstance();
        this.occupyingGeographicMapCellPositionList = this.LIST;
        this.surroundingGeographicMapCellPositionList = this.LIST;
        this.layerInterface = layerInterface;
    }
    //@Throws(Exception.constructor)
    update(geographicMapInterface) {
        this.occupyingGeographicMapCellPositionList = this.layerCoveringCellPositionsUtil.getAllXY(geographicMapInterface, this.layerInterface, this.layerInterface.getXP(), this.layerInterface.getYP(), this.reusableOccupyingGeographicMapCellPositionList);
        this.surroundingGeographicMapCellPositionList = this.cellPositionsUtil.getAllSurrounding(geographicMapInterface, this.occupyingGeographicMapCellPositionList, this.reusableSurroundingGeographicMapCellPositionList);
        this.surroundingCircularIndexUtil.setSize(this.surroundingGeographicMapCellPositionList.size());
    }
    getOccupyingGeographicMapCellPositionList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.occupyingGeographicMapCellPositionList;
    }
    getSurroundingGeographicMapCellPositionList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.surroundingGeographicMapCellPositionList;
    }
    getNextSurroundingGeographicMapCellPosition() {
        var geographicMapCellPosition = this.surroundingGeographicMapCellPositionList.get(this.surroundingCircularIndexUtil.getIndex());
        ;
        this.surroundingCircularIndexUtil.next();
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPosition;
    }
}
