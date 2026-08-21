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
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerGameInput } from './PlayerGameInput.js';
export class GameInputProcessorComposite extends PlayerGameInput {
    constructor(name, gameInputProcessorInterface) {
        super(new BasicArrayListD(), new BasicArrayListD(), -1);
        this.NAME_LABEL = " GameInputProcessorInterface: ";
        //For kotlin this is before the body of the constructor.
        this.name = name;
        this.gameInputProcessorInterface = gameInputProcessorInterface;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    update() {
        try {
            var list = this.getGameKeyEventList();
            ;
            this.gameInputProcessorInterface.onInput(list);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(super.toString()).append(this.NAME_LABEL).append(this.name).toString();
        ;
    }
}
