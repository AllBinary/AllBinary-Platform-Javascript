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
import { NullCanvas } from '../../../../../javax/microedition/lcdui/NullCanvas.js';
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
export class DemoCanvasBasicStartInputProcessor extends BasicMenuInputProcessor {
    constructor(gameKeyEventList, gameCanvas) {
        super(gameKeyEventList, -1, gameCanvas);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processInputList() {
        var list = this.getGameKeyEventList();
        ;
        var size = list.size();
        ;
        var gameKeyEvent;
        ;
        for (var index = 0; index < size; index++) {
            gameKeyEvent = list.objectArray[index];
            this.logUtil.putF(new StringMaker().append("Start GameKey: ").append(StringUtil.getInstance().toString(gameKeyEvent)).toString(), this, GameInputStrings.getInstance().PROCESS_INPUT);
        }
        this.getCanvas().getCustomCommandListener().commandAction(GameCommandsFactory.getInstance().START_COMMAND, NullCanvas.NULL_CANVAS);
        //if statement needs to be on the same line and ternary does not work the same way.
        return size;
    }
}
