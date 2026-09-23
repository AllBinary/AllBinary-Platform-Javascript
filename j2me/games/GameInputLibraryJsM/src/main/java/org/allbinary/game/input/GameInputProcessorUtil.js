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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameInputProcessor } from './GameInputProcessor.js';
//not GWT import - same folder const GameInputProcessor
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const InputFactory
export class GameInputProcessorUtil extends Object {
    static init(inputProcessorArray) {
        var noInputProcessor = GameInputProcessor.getInstance();
        ;
        var total = InputFactory.getInstance().MAX;
        ;
        for (var index = 0; index < total; index++) {
            var inputProcessorCanBeNull = inputProcessorArray[index];
            ;
            if (inputProcessorCanBeNull ==
                null) {
                inputProcessorArray[index] = noInputProcessor;
            }
        }
    }
}
