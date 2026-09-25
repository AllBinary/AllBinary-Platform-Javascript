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
//not GWT import const Input
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameKeyEvent } from './GameKeyEvent.js';
//not GWT import - same folder const GameKeyEvent
export class GameKeyEventFactory extends Object {
    static getInstance() {
        if (GameKeyEventFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameKeyEventFactory.instance = new GameKeyEventFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameKeyEventFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.TOUCH_BUTTON_SOURCE_ID = 2;
        this.MOTION_GESTURE_SOURCE_ID = 3;
        this.MAX_SOURCES = 4;
        this.ARRAY = new Array(this.MAX_SOURCES).fill(null).map(() => new Array(InputFactory.getInstance().MAX).fill(null));
    }
    init() {
        var nullUtil = NullUtil.getInstance();
        ;
        var size = InputFactory.getInstance().MAX;
        ;
        for (var index = this.MAX_SOURCES; --index >= 0;) {
            for (var index2 = size; --index2 >= 0;) {
                this.ARRAY[index][index2] = GameKeyEvent.createEvent(nullUtil.NULL_OBJECT, index, index2);
            }
        }
    }
    //@Throws(Exception.constructor)
    getInstanceForKey(anyType, key) {
        var gameKeyEvent = this.ARRAY[anyType.getSourceId()][key];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return gameKeyEvent;
    }
    //@Throws(Exception.constructor)
    getInstanceForInput(anyType, input) {
        var gameKeyEvent = this.ARRAY[anyType.getSourceId()][input.getId()];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return gameKeyEvent;
    }
}
GameKeyEventFactory.instance = NullUtil.getInstance().NULL_OBJECT;
