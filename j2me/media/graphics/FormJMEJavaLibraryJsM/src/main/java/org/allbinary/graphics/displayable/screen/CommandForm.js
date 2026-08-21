/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Stack } from '../../../../../java/util/Stack.js';
import { Form } from '../../../../../javax/microedition/lcdui/Form.js';
import { NullCommandListener } from '../../../../../javax/microedition/lcdui/NullCommandListener.js';
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScreenRepaintProcessorFactory } from './ScreenRepaintProcessorFactory.js';
export class CommandForm extends Form {
    static getNullCommandForm() {
        if (CommandForm.NULL_COMMAND_FORM == NullUtil.getInstance().NULL_OBJECT) {
            CommandForm.NULL_COMMAND_FORM = new CommandForm(NullCommandListener.NULL_COMMAND_LISTENER, StringUtil.getInstance().EMPTY_STRING, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommandForm.NULL_COMMAND_FORM;
    }
    constructor(commandListener, formTitle, backgrounBasicColor, foregroundBasicColor) {
        super(formTitle);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.repaintProcessor = ScreenRepaintProcessorFactory.getInstance().create(this);
        //For kotlin this is before the body of the constructor.
        this.commandStack = new Stack();
        try {
            this.repaintProcessor.process();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
        }
    }
    initCommands(cmdListener) {
    }
    open() {
        this.logUtil.putF(this.commonStrings.START, this, "open");
    }
    close() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CLOSE);
    }
    //@Throws(Exception.constructor)
    update() {
        this.repaintProcessor.process();
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    addCommand(command) {
        this.commandStack.push(command);
        super.addCommand(command);
    }
    removeAllCommands() {
        var size = this.commandStack.length;
        ;
        for (var index = 0; index < size; index++) {
            super.removeCommand(this.commandStack.pop());
        }
    }
}
CommandForm.NULL_COMMAND_FORM = NullUtil.getInstance().NULL_OBJECT;
