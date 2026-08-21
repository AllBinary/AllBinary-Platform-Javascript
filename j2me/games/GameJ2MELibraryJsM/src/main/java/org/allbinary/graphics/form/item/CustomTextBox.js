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
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
import { GameCommandCanvas } from '../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js';
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
import { PlatformKeyFactory } from '../../../../../org/allbinary/game/input/PlatformKeyFactory.js';
import { TextItemVisitor } from '../../../../../org/allbinary/graphics/form/item/validation/TextItemVisitor.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABTextFieldItem } from './ABTextFieldItem.js';
export class CustomTextBox extends GameCommandCanvas {
    constructor(cmdListener, label, text, maxSize, constraints, font, backgroundBasicColor, foregroundBasicColor) {
        super(cmdListener, label, backgroundBasicColor, foregroundBasicColor);
        this.inputFactory = InputFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        var stringUtil = StringUtil.getInstance();
        ;
        var textFieldItem = new ABTextFieldItem(this, new TextItemVisitor(), stringUtil.EMPTY_STRING, stringUtil.EMPTY_STRING, maxSize, 0, stringUtil.EMPTY_STRING, font, backgroundBasicColor, foregroundBasicColor);
        ;
        textFieldItem.setString(text);
        this.textFieldItem = textFieldItem;
        this.setTitle(label);
    }
    submit() {
    }
    onEventRaw(keyCode, deviceId, repeated) {
        this.logUtil.putF(new StringMaker().append(this.commonStrings.START).appendint(keyCode).toString(), this, "onEvent");
        this.keyPressedByDevice(keyCode, deviceId);
    }
    keyPressed(keyCode) {
        this.keyPressedByDevice(keyCode, 0);
    }
    keyReleased(keyCode) {
        this.keyReleasedByDevice(keyCode, 0);
    }
    keyRepeated(keyCode) {
        this.keyRepeatedByDevice(keyCode, 0);
    }
    keyPressedByDevice(keyCode, deviceId) {
        try {
            this.logUtil.putF(new StringMaker().append(CommonSeps.getInstance().SPACE).appendint(keyCode).toString(), this, this.gameInputStrings.KEY_PRESSED);
            var platformKeyFactory = PlatformKeyFactory.getInstance();
            ;
            var input = this.inputFactory.getInstanceById(keyCode);
            ;
            if (platformKeyFactory.isSubmission(input)) {
                this.submit();
            }
            else {
                this.textFieldItem.keyPressed(keyCode);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.KEY_PRESSED, e);
        }
    }
    keyReleasedByDevice(keyCode, deviceId) {
    }
    paint(graphics) {
        graphics.setColor(this.backgroundColor);
        graphics.fillRect(0, 0, this.displayInfo.getLastWidth(), this.displayInfo.getLastHeight());
        graphics.setColor(this.foregroundColor);
        if (!J2MEUtil.isJ2ME()) {
            graphics.drawString(this.getTitle(), 8, 1, 0);
        }
        this.paintXY(graphics, 8, graphics.getFont().getHeight() + 2);
        super.paint(graphics);
    }
    paintXY(graphics, x, y) {
        this.textFieldItem.paintXY(graphics, x, y);
    }
    getTextFieldItem() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.textFieldItem;
    }
}
