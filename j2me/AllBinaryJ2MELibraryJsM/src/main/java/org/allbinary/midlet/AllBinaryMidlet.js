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
import { Hashtable } from '../../../java/util/Hashtable.js';
import { Display } from '../../../javax/microedition/lcdui/Display.js';
import { NullCanvas } from '../../../javax/microedition/lcdui/NullCanvas.js';
import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { ForcedLogUtil } from '../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { Memory } from '../../../org/allbinary/system/Memory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
// MIDlet methods not overridden are final
export class AllBinaryMidlet extends MIDlet {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.SET_DISPLAY = "setDisplay";
        this.SETTING_ = "Setting: ";
        this._DISPLAY_ = " Display: ";
        this.SETTING_NO_TITLE = "Setting: No Title, Display: ";
        this.hashtable = new Hashtable();
        this.midletDestroyed = false;
        this.logUtil.putF(this.commonStrings.CONSTRUCTOR, this, "AllBinaryMidlet::AllBinaryMidlet");
    }
    setDisplay(newDisplay) {
        var title = StringUtil.getInstance().EMPTY_STRING;
        ;
        if (newDisplay != NullCanvas.NULL_CANVAS) {
            title = newDisplay.getTitle();
            if (title !=
                null) {
                this.logUtil.putF(new StringMaker().append(this.SETTING_).append(title).append(this._DISPLAY_).append(StringUtil.getInstance().toString(newDisplay)).toString(), this, this.SET_DISPLAY);
            }
            else {
                this.logUtil.putF(new StringMaker().append(this.SETTING_NO_TITLE).append(StringUtil.getInstance().toString(newDisplay)).toString(), this, this.SET_DISPLAY);
            }
        }
        var display = this.getDisplay();
        ;
        display.setCurrent(newDisplay);
    }
    getDisplay() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Display.getDisplay(this);
        ;
    }
    getCurrentDisplayable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Display.getDisplay(this).getCurrent();
        ;
    }
    setDestroyed(destroyed) {
        this.midletDestroyed = destroyed;
    }
    isDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.midletDestroyed;
    }
    //@Throws(MIDletStateChangeException.constructor)
    startApp() {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    pauseApp() {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    destroyAppInRunnable(unconditional, isProgress) {
    }
    destroyApp(unconditional) {
        var METHOD_NAME = "AllBinaryMidlet::destroyApp";
        ;
        try {
            this.logUtil.putF(this.commonStrings.START, this, METHOD_NAME);
            PreLogUtil.put(Memory.getInfo(), this, METHOD_NAME);
            this.setDestroyed(true);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, METHOD_NAME, e);
        }
    }
    //@Throws(Exception.constructor)
    setStartStateHashtable(hashtable) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(StringUtil.getInstance().toString(hashtable)).toString(), this, "setStartStateHashtable");
        this.hashtable = hashtable;
    }
    //@Throws(Exception.constructor)
    getStartStateHashtable() {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(StringUtil.getInstance().toString(this.hashtable)).toString(), this, "getStartStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
    //@Throws(Exception.constructor)
    getCurrentStateHashtable() {
        this.logUtil.putF(this.commonStrings.START, this, "getStateHashtable");
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_TABLE;
    }
    commandAction(command, displayable) {
    }
}
AllBinaryMidlet.NULL_ALLBINARY_MIDLET = new AllBinaryMidlet();
