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
import { Command } from '../../../../javax/microedition/lcdui/Command.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoreCommands extends Object {
    constructor() {
        super(...arguments);
        this.DISPLAY = new Command("Scores", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.PERSONAL = new Command("Personal", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.WORLD = new Command("World", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HighScoreCommands.instance;
    }
}
HighScoreCommands.instance = new HighScoreCommands();
