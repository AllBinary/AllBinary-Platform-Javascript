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
//sameFolderImports - not GWT import - same folder const GameInputProcessor
import { InputFactory } from './InputFactory.js';
//sameFolderImports - not GWT import - same folder const InputFactory
export class GameInputProcessorUtil extends Object {
    static init(inputProcessorArray) {
        let noInputProcessor = GameInputProcessor.getInstance();
        ;
        let total = InputFactory.getInstance().MAX;
        ;
        for (let index = 0; index < total; index++) {
            let inputProcessorCanBeNull = inputProcessorArray[index];
            ;
            if (inputProcessorCanBeNull ==
                null) {
                inputProcessorArray[index] = noInputProcessor;
            }
        }
    }
}
