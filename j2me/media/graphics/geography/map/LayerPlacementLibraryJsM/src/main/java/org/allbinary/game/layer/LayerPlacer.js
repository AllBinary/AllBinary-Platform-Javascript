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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const GPoint
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const AllBinaryLayer
import { LayerInterfaceFactory } from '../../../../org/allbinary/layer/LayerInterfaceFactory.js';
//not GWT import const LayerInterfaceVisitor
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//sameFolderImports - not GWT import - same folder const LayerPlacementType
import { LayerPlacementTypeFactory } from './LayerPlacementTypeFactory.js';
//sameFolderImports - not GWT import - same folder const LayerPlacementTypeFactory
export class LayerPlacer extends Object {
    constructor(layerInterfaceVisitor, dimension) {
        super();
        this.enumerationUtil = EnumerationUtil.getInstance();
        this.layerInterfaceVisitor = layerInterfaceVisitor;
        this.dimension = dimension;
    }
    //@Throws(Exception.constructor)
    processList(list) {
        let size = list.size();
        ;
        let layerPlacementInterface;
        ;
        for (let index = 0; index < size; index++) {
            layerPlacementInterface = list.objectArray[index];
            this.process(layerPlacementInterface);
        }
    }
    //@Throws(Exception.constructor)
    process(layerPlacementInterface) {
        let relativePoint = this.getPoint(layerPlacementInterface);
        ;
        let layerInterfaceFactory = LayerInterfaceFactory.getInstance();
        ;
        let hashtable = layerPlacementInterface.getInstance();
        ;
        let enumeration = hashtable.keys();
        ;
        let point;
        ;
        let layerHashtable;
        ;
        let x = 0;
        ;
        let y = 0;
        ;
        let z = 0;
        ;
        let layerInterface;
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            point = this.enumerationUtil.nextElement(enumeration);
            layerHashtable = hashtable.get(point);
            x = point.getX() + relativePoint.getX();
            y = point.getY() + relativePoint.getY();
            z = point.getZ() + relativePoint.getZ();
            layerInterface = layerInterfaceFactory.getNexInstance(layerHashtable, x, y, z);
            this.layerInterfaceVisitor.visit(layerInterface);
        }
    }
    //@Throws(Exception.constructor)
    getPoint(layerPlacementInterface) {
        let pointFactory = PointFactory.getInstance();
        ;
        let layerPlacementType = layerPlacementInterface.getLayerType();
        ;
        if (layerPlacementType == LayerPlacementTypeFactory.getInstance().MAP) {
            let width = layerPlacementInterface.getWidth();
            ;
            let height = layerPlacementInterface.getHeight();
            ;
            let x = ((this.dimension.getX() - width) / 2);
            ;
            let y = ((this.dimension.getY() - height) / 2);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return pointFactory.createXY(x, y);
            ;
        }
        else if (layerPlacementType == LayerPlacementTypeFactory.getInstance().UP) {
            let width = layerPlacementInterface.getWidth();
            ;
            let height = layerPlacementInterface.getHeight();
            ;
            let x = ((this.dimension.getX() - width) / 2);
            ;
            let y = -height;
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return pointFactory.createXY(x, y);
            ;
        }
        else {
            throw new Exception("PlacementType Not Recognized");
        }
    }
}
