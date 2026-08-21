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
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameInput } from './GameInput.js';
import { GameInputStrings } from './GameInputStrings.js';
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
