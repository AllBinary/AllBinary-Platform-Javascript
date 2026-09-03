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
//not plain js import { Command } from '../../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoreCommandsBaseFactory } from './HighScoreCommandsBaseFactory.js';
//not GWT import const HighScoreCommandsBaseFactory = globalThis.org.allbinary.game.score.HighScoreCommandsBaseFactory;
import { HighScoreCommands } from './HighScoreCommands.js';
//not GWT import const HighScoreCommands = globalThis.org.allbinary.game.score.HighScoreCommands;
export class HighScoreCommandsFactory extends HighScoreCommandsBaseFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HighScoreCommandsFactory.instance;
    }
    constructor() {
        super([
            HighScoreCommands.getInstance().PERSONAL, HighScoreCommands.getInstance().WORLD
        ]);
        //For kotlin this is before the body of the constructor.
    }
}
HighScoreCommandsFactory.instance = new HighScoreCommandsFactory();
