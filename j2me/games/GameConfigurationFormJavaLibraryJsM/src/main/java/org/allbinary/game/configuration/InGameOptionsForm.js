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
import { ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
//not GWT import const Choice
import { Command } from '../../../../javax/microedition/lcdui/Command.js';
//not GWT import const CommandListener
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
//not GWT import const GameFeatureFormUtil
import { InGameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js';
//not GWT import const BasicColor
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InGameOptionsForm extends CommandForm {
    constructor(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        var gameFeatureFormUtil = GameFeatureFormUtil.getInstance();
        ;
        gameFeatureFormUtil.addChoiceGroup(this, InGameFeatureChoiceGroups.getExclusiveInstance().get(), ChoiceI.EXCLUSIVE);
        gameFeatureFormUtil.addChoiceGroup(this, InGameFeatureChoiceGroups.getMultipleInstance().get(), ChoiceI.MULTIPLE);
        this.initCommands(commandListener);
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommand(GameCommandsFactory.getInstance().CLOSE_AND_SHOW_GAME_CANVAS);
        this.addCommand(InGameOptionsForm.DEFAULT);
        this.setCommandListener(cmdListener);
    }
}
InGameOptionsForm.DISPLAY = new Command("Options In Game", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
InGameOptionsForm.SAVE = new Command("Save", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
InGameOptionsForm.DEFAULT = new Command("Default", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
