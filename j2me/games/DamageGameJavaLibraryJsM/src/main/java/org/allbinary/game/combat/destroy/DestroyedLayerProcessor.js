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
//not GWT import const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;
import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
import { BasicLayerProcessor } from '../../../../../org/allbinary/layer/BasicLayerProcessor.js';
//not GWT import const BasicLayerProcessor = globalThis.org.allbinary.layer.BasicLayerProcessor;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
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
        var list = this.getList();
        ;
        var size = list.size();
        ;
        var destroyedEventHandler = DestroyedEventHandler.getInstance();
        ;
        var destroyEventCircularStaticPool = DestroyEventCircularStaticPool.getInstance();
        ;
        var destroyedEvent;
        ;
        var layerInterface;
        ;
        for (var index = 0; index < size; index++) {
            var layerInterfaceCanBeNull = list.objectArray[index];
            ;
            if (layerInterfaceCanBeNull !=
                null) {
                layerInterface = layerInterfaceCanBeNull;
                allBinaryLayerManager.remove(layerInterface);
                destroyedEvent = destroyEventCircularStaticPool.getInstanceForLayer(layerInterface);
                destroyedEventHandler.fireEvent(destroyedEvent);
            }
            else {
                var commonStrings = CommonStrings.getInstance();
                ;
            }
        }
        list.clear();
    }
}
DestroyedLayerProcessor.DESTROYED_LAYER_PROCESSOR = BasicLayerProcessor.NULL_LAYER_PROCESSOR;
