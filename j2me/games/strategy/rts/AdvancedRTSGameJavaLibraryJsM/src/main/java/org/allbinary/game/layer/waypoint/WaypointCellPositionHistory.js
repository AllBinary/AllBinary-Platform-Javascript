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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WaypointCellPositionHistory extends Object {
    constructor() {
        super(...arguments);
        this.positionList = new BasicArrayListD();
        this.layerList = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointCellPositionHistory.SINGLETON;
    }
    add(cellPosition, layerInterface) {
        this.positionList.add(cellPosition);
        this.layerList.add(layerInterface);
    }
    addList(list, layerInterface) {
        for (var index = list.size() - 1; index >= 0; index--) {
            this.add(list.get(index), layerInterface);
        }
    }
    remove(cellPosition) {
        var index = this.positionList.indexOf(cellPosition);
        ;
        if (index >= 0) {
            this.positionList.removeAt(index);
            this.layerList.removeAt(index);
        }
    }
    removeLayer(layerInterface) {
        var index = 0;
        ;
        while (index != -1) {
            index = this.layerList.indexOf(layerInterface);
            if (index >= 0) {
                this.positionList.removeAt(index);
                this.layerList.removeAt(index);
            }
        }
    }
    clear() {
        this.positionList.clear();
        this.layerList.clear();
    }
    isCellPositionWithDrop(cellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.positionList.contains(cellPosition);
        ;
    }
    anyCellPositionWithDrop(list) {
        for (var index = list.size() - 1; index >= 0; index--) {
            if (this.isCellPositionWithDrop(list.get(index))) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getLayerInterface(cellPosition) {
        var index = this.positionList.indexOf(cellPosition);
        ;
        if (index >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.layerList.get(index);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return AllBinaryLayer.NULL_ALLBINARY_LAYER;
        }
    }
}
WaypointCellPositionHistory.SINGLETON = new WaypointCellPositionHistory();
