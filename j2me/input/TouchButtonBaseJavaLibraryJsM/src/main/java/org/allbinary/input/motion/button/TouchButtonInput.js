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
//not GWT import const GameKeyEventSourceInterface
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const InputToGameKeyMapping
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TouchButtonInput extends Input {
    constructor(id, name) {
        super(id, name);
        this.logUtil = LogUtil.getInstance();
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.TOUCH_BUTTON_SOURCE_ID = this.gameKeyEventFactory.TOUCH_BUTTON_SOURCE_ID;
        this.gameKeyEvent = GameKeyEvent.NONE;
        //For kotlin this is before the body of the constructor.
        var inputFactory = InputFactory.getInstance();
        ;
        inputFactory.add(this.getId(), this);
    }
    update(inputToGameKeyMapping) {
        try {
            var gameKey = inputToGameKeyMapping.getInstance(this.getId());
            ;
            this.gameKeyEvent = this.gameKeyEventFactory.getInstanceForInput(this, gameKey);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.UPDATE, e);
        }
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.TOUCH_BUTTON_SOURCE_ID;
    }
    getGameKeyEvent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKeyEvent;
    }
}
