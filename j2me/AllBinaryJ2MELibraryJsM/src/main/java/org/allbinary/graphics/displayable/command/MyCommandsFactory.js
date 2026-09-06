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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MyCommandsFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MyCommandsFactory.instance;
    }
    constructor() {
        super();
        this.NO_COMMAND = new Command(StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING, -1, -1);
        this.GAUGE_CHANGE = new Command("GAUGE_CHANGE", StringUtil.getInstance().EMPTY_STRING, Command.ITEM, 1);
        this.SET_DISPLAYABLE = new Command("Display", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
        this.PAUSE_COMMAND = new Command("Pause", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 0);
        this.RESUME_COMMAND = new Command("Resume", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 0);
    }
}
MyCommandsFactory.instance = new MyCommandsFactory();
