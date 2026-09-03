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
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
import { CellPositionFactory } from '../../../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const CellPositionFactory = globalThis.org.allbinary.graphics.CellPositionFactory;
import { AllBinaryLayer } from '../../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DropCellPositionHistory extends Object {
    constructor() {
        super(...arguments);
        this.cellPositionFactory = CellPositionFactory.getInstance();
        this.positionList = new BasicArrayListD();
        this.layerList = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DropCellPositionHistory.SINGLETON;
    }
    add(cellPosition, layerInterface) {
        this.positionList.add(cellPosition);
        this.layerList.add(layerInterface);
    }
    addAll(list, layerInterface) {
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
    removeAll(layerInterface) {
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
    getCellPositionWithDrop(list) {
        var cellPosition;
        ;
        for (var index = list.size() - 1; index >= 0; index--) {
            cellPosition = list.get(index);
            if (this.isCellPositionWithDrop(cellPosition)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return cellPosition;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cellPositionFactory.NONE;
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
DropCellPositionHistory.SINGLETON = new DropCellPositionHistory();
