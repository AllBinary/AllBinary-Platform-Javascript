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
//not GWT import const GameKeyEventListenerInterface = globalThis.org.allbinary.game.input.event.GameKeyEventListenerInterface;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameInput } from './GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;
import { GameInputStrings } from './GameInputStrings.js';
//not GWT import const GameInputStrings = globalThis.org.allbinary.game.input.GameInputStrings;
export class PlayerGameInput extends GameInput {
    constructor(gameKeyEventList, removalGameKeyEventList, playerInputId) {
        super(gameKeyEventList, removalGameKeyEventList);
        this.gameInputStrings = GameInputStrings.getInstance();
        //For kotlin this is before the body of the constructor.
        this.playerInputId = playerInputId;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onPressGameKeyEvent(gameKeyEvent) {
        this.add(gameKeyEvent);
        this.addForRemoval(gameKeyEvent);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownGameKeyEvent(gameKeyEvent) {
        this.add(gameKeyEvent);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownKeyEvent(gameKeyEvent) {
        this.add(gameKeyEvent);
        this.addForRemoval(gameKeyEvent);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownKey(gameKeyEvent) {
        PreLogUtil.put(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(gameKeyEvent.toString()).toString(), this, this.gameInputStrings.ON_DOWN_GAME_KEY);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onUpGameKeyEvent(gameKeyEvent) {
        this.addForRemoval(gameKeyEvent);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onUpKeyEvent(gameKeyEvent) {
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    getPlayerInputId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerInputId;
    }
}
