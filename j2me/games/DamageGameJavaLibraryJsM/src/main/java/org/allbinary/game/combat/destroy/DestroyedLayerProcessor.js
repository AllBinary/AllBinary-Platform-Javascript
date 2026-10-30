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
import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
//not GWT import const DestroyedEvent
import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const AllBinaryLayerManager
import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
//not GWT import const BasicLayerProcessor
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DestroyedLayerProcessor extends BasicLayerProcessor {
    static init() {
        DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR = new DestroyedLayerProcessor();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    process(allBinaryLayerManager) {
        let list = this.getList();
        ;
        let size = list.size();
        ;
        let destroyedEventHandler = DestroyedEventHandler.getInstance();
        ;
        let destroyEventCircularStaticPool = DestroyEventCircularStaticPool.getInstance();
        ;
        let destroyedEvent;
        ;
        let layerInterface;
        ;
        for (let index = 0; index < size; index++) {
            let layerInterfaceCanBeNull = list.objectArray[index];
            ;
            if (layerInterfaceCanBeNull !=
                null) {
                layerInterface = layerInterfaceCanBeNull;
                allBinaryLayerManager.remove(layerInterface);
                destroyedEvent = destroyEventCircularStaticPool.getInstanceForLayer(layerInterface);
                destroyedEventHandler.fireEvent(destroyedEvent);
            }
            else {
                let commonStrings = CommonStrings.getInstance();
                ;
            }
        }
        list.clear();
    }
}
DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR = BasicLayerProcessor.NULL_LAYER_PROCESSOR;
