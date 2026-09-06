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
//not GWT import const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;
import { AnalogLocationInputFactory } from '../../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnalogControllerVisitor } from './AnalogControllerVisitor.js';
//not GWT import - same folder const AnalogLocationInputProcessor = globalThis.org.allbinary.android.input.motion.AnalogLocationInputProcessor;
export class AllAnalogControllerVisitor extends AnalogControllerVisitor {
    process(allbinaryLayerManager, analogLocationInputProcessor) {
        var analogLocationInputList = AnalogLocationInputFactory.getInstance().getList();
        ;
        var analogLocationInput;
        ;
        for (var index = analogLocationInputList.size() - 1; index >= 0; index--) {
            analogLocationInput = analogLocationInputList.get(index);
            analogLocationInputProcessor.process(allbinaryLayerManager, analogLocationInput);
        }
    }
}
