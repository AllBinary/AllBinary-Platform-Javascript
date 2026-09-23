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
//not GWT import const CommandListener
import { Display } from '../../../javax/microedition/lcdui/Display.js';
//not GWT import const Displayable
import { NullCanvas } from '../../../javax/microedition/lcdui/NullCanvas.js';
//not GWT import const NullCanvas
import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
//not GWT import const MIDletStateChangeException
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { EventStrings } from '../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const Memory
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryMidlet extends MIDlet {
    static getNullInstance() {
        if (AllBinaryMidlet.NULL_ALLBINARY_MIDLET == NullUtil.getInstance().NULL_OBJECT) {
            AllBinaryMidlet.NULL_ALLBINARY_MIDLET = new AllBinaryMidlet();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryMidlet.NULL_ALLBINARY_MIDLET;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.SET_DISPLAY = "setDisplay";
        this.SETTING_ = "Setting: ";
        this._DISPLAY_ = " Display: ";
        this.SETTING_NO_TITLE = "Setting: No Title, Display: ";
        this.hashtable = StdUtil.getInstance().createHashtable();
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
        return StdUtil.getInstance().NULL_TABLE;
    }
    commandAction(command, displayable) {
    }
}
AllBinaryMidlet.NULL_ALLBINARY_MIDLET = NullUtil.getInstance().NULL_OBJECT;
//JSNI Expose so JSNI can access this class *** 
globalThis.org = globalThis.org || {};
globalThis.org.allbinary = globalThis.org.allbinary || {};
globalThis.org.allbinary.midlet = globalThis.org.allbinary.midlet || {};
globalThis.org.allbinary.midlet.AllBinaryMidlet = AllBinaryMidlet;
console.log('Exported AllBinaryMidlet as globalThis');
