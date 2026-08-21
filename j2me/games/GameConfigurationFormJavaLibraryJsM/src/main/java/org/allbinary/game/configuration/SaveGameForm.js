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
import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SaveGameForm extends CommandForm {
    //@Throws(Exception.constructor)
    static createForm(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        SaveGameForm.FORM = new SaveGameForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        //if statement needs to be on the same line and ternary does not work the same way.
        return SaveGameForm.FORM;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SaveGameForm.FORM;
    }
    constructor(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        var timeString = (Date.now()).toString();
        ;
        this.append(new TextField("Name: ", timeString, 30, TextField.ANY));
        this.initCommands(commandListener);
    }
    initCommands(cmdListener) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        this.removeAllCommands();
        this.addCommand(gameCommandsFactory.SAVE);
        this.addCommand(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS);
        this.setCommandListener(cmdListener);
    }
}
SaveGameForm.FORM = CommandForm.getNullCommandForm();
