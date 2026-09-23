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
import { Object } from '../../../java/lang/Object.js';
import { Exception } from '../../../java/lang/Exception.js';
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const AllBinaryLayer
export class LayerProcessor extends Object {
    constructor(layerManager) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.layerManager = layerManager;
    }
    //@Throws(Exception.constructor)
    processAt(allBinaryLayerManager, layerInterface, index) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    isProcessorLayer(layerInterface) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    getLayerManager() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.layerManager;
    }
    //@Throws(Exception.constructor)
    process(allBinaryLayerManager) {
        var layerManager = this.getLayerManager();
        ;
        var size = layerManager.getSize();
        ;
        for (var index = 0; index < size; index++) {
            this.processAt(allBinaryLayerManager, layerManager.getLayerAt(index), index);
        }
    }
}
