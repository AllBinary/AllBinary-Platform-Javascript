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
import { Command } from '../../../../javax/microedition/lcdui/Command.js';
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
import { InGameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js';
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
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
