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
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
//not GWT import const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const DropLayerInterface = globalThis.org.allbinary.game.layer.drop.DropLayerInterface;
export class DropLayerProcessor extends BasicLayerProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DropLayerProcessor.LAYER_PROCESSOR;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(allBinaryLayerManager) {
        var list = this.getList();
        ;
        var size = list.size();
        ;
        var layerInterface;
        ;
        var dropLayerInterface;
        ;
        for (var index = 0; index < size; index++) {
            layerInterface = list.objectArray[index];
            dropLayerInterface = layerInterface;
            layerInterface = dropLayerInterface.getDroppedLayer();
            allBinaryLayerManager.append(layerInterface);
        }
        list.clear();
    }
}
DropLayerProcessor.LAYER_PROCESSOR = new DropLayerProcessor();
