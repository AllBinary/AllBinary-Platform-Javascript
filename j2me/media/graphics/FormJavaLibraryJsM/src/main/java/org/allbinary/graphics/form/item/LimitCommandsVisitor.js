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
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { ScreenInfo } from '../../../../../org/allbinary/graphics/form/ScreenInfo.js';
//not GWT import const ScreenInfo = globalThis.org.allbinary.graphics.form.ScreenInfo;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LimitCommandsVisitor extends Visitor {
    constructor() {
        super();
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        this.isNotSmallDisplay = (displayInfo.isPortrait() && displayInfo.getLastHeight() > ScreenInfo.getInstance().SMALL_WIDTH) || (!displayInfo.isPortrait() && displayInfo.getLastHeight() > ScreenInfo.getInstance().SMALL_HEIGHT);
    }
    visit(anyType = {}) {
        var command = anyType;
        ;
        var booleanFactory = BooleanFactory.getInstance();
        ;
        if (this.isNotSmallDisplay || command.getPriority() == 1 || command == GameCommandsFactory.getInstance().EXIT_COMMAND || command == GameCommandsFactory.getInstance().EXIT_WITHOUT_PROGRESS_COMMAND) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return booleanFactory.TRUE;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return booleanFactory.FALSE;
        }
    }
}
