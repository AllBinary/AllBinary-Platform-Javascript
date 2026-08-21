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
import { Integer } from '../../../../java/lang/Integer.js';
import { ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
import { ChoiceGroup } from '../../../../javax/microedition/lcdui/ChoiceGroup.js';
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { GameDifficultyFactory } from '../../../../org/allbinary/game/configuration/persistance/GameDifficultyFactory.js';
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameDifficultyOptions extends CommandForm {
    constructor(commandListener, title, list, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.list = list;
        this.update();
        this.initCommands(commandListener);
        var gameDifficultyFactory = GameDifficultyFactory.getInstance();
        ;
        this.setSelectedId(gameDifficultyFactory.getLevel());
    }
    open() {
        super.open();
    }
    close() {
        super.close();
        this.save();
    }
    //@Throws(Exception.constructor)
    save() {
        var gameDifficultyFactory = GameDifficultyFactory.getInstance();
        ;
        gameDifficultyFactory.setLevel(this.getSelectedId());
    }
    initCommands(cmdListener) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        this.removeAllCommands();
        this.addCommand(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    update() {
        this.deleteAll();
        this.add(this.list, "Difficulty", ChoiceI.EXCLUSIVE);
        super.update();
    }
    add(list, name, option) {
        var choiceGroup = this.getChoiceGroup(list, name, option);
        ;
        if (list.size() > 0) {
            choiceGroup.setSelectedIndex(0, true);
        }
        this.append(choiceGroup);
    }
    getChoiceGroup(list, name, option) {
        var METHOD_NAME = "addChoiceGroup";
        ;
        var NAME = "Adding Choice: ";
        ;
        var choiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance().getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.objectArray[index];
            ;
            this.logUtil.putF(new StringMaker().append(NAME).append(anyType.toString()).toString(), this, METHOD_NAME);
            choiceGroup.append(anyType.toString(), NullImage.NULL_IMAGE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return choiceGroup;
    }
    setSelectedId(id) {
        var choiceGroup = this.get(0);
        ;
        choiceGroup.setSelectedIndex(id, true);
    }
    getSelectedId() {
        var choiceGroup = this.get(0);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return choiceGroup.getSelectedIndex();
        ;
    }
    getSelectedText() {
        var choiceGroup = this.get(0);
        ;
        var value = Integer.valueOf(choiceGroup.getString(choiceGroup.getSelectedIndex())).intValue();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return value;
    }
}
