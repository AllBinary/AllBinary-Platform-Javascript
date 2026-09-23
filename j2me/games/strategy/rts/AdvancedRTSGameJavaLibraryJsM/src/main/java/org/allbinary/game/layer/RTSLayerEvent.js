/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullPathFindingLayer } from './NullPathFindingLayer.js';
//not GWT import - same folder const PathFindingLayerInterface
export class RTSLayerEvent extends AllBinaryEventObject {
    constructor(rtsLayer) {
        super(rtsLayer);
        this.rtsLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        //For kotlin this is before the body of the constructor.
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("RTSLayerEvent: \n");
        stringBuffer.append("RTSLayer: ");
        stringBuffer.append(this.getRtsLayer().toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getRtsLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayer;
    }
    setRtsLayer(rtsLayer) {
        this.rtsLayer = rtsLayer;
    }
}
