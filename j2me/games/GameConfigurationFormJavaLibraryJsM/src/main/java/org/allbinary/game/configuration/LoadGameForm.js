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
//not GWT import const Choice
import { ChoiceGroup } from '../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const CommandListener
import { Item } from '../../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { StringItem } from '../../../../javax/microedition/lcdui/StringItem.js';
//not GWT import const StringItem
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { GamePersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js';
//not GWT import const BasicColor
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm
import { MEUtil } from '../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LoadGameForm extends CommandForm {
    constructor(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.meUtil = MEUtil.getInstance();
        this.areChoices = false;
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.update();
        this.initCommands(commandListener);
    }
    initCommands(cmdListener) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        this.removeAllCommands();
        this.addCommand(gameCommandsFactory.LOAD_FILE);
        this.addCommand(gameCommandsFactory.DELETE_FILE);
        this.addCommand(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    update() {
        var list = GamePersistanceSingleton.getInstance().getIds();
        ;
        this.deleteAll();
        if (list.size() > 0) {
            this.add(list, "Select A Saved Game", ChoiceI.EXCLUSIVE);
            this.areChoices = true;
        }
        else {
            this.meUtil.appendItem(this, new StringItem("No Saved Games", StringUtil.getInstance().EMPTY_STRING, Item.PLAIN));
            this.areChoices = false;
        }
        super.update();
    }
    add(list, name, option) {
        var choiceGroup = this.getChoiceGroup(list, name, option);
        ;
        if (list.size() > 0) {
            choiceGroup.setSelectedIndex(0, true);
        }
        this.meUtil.appendItem(this, choiceGroup);
    }
    getChoiceGroup(list, name, option) {
        var METHOD_NAME = "getChoiceGroup";
        ;
        var ADDING_CHOICE = "Adding Choice: ";
        ;
        var choiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance().getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.objectArray[index];
            ;
            this.logUtil.putF(new StringMaker().append(ADDING_CHOICE).append(anyType.toString()).toString(), this, METHOD_NAME);
            choiceGroup.append(anyType.toString(), NullImage.NULL_IMAGE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return choiceGroup;
    }
    getSelectedId() {
        if (this.areChoices) {
            var choiceGroup = this.get(0);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return choiceGroup.getSelectedIndex();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
    }
    getSelectedText() {
        if (this.areChoices) {
            var choiceGroup = this.get(0);
            ;
            var value = Integer.valueOf(choiceGroup.getString(choiceGroup.getSelectedIndex())).intValue();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
    }
}
