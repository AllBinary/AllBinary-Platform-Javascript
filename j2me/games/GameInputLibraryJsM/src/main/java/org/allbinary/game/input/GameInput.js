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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInput extends Object {
    constructor(gameKeyEventList, removalGameKeyEventList) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.gameKeyEventList = gameKeyEventList;
        this.removalGameKeyEventList = removalGameKeyEventList;
        this.isRemoveDuplicateKeyPresses = Features.getInstance().isFeature(InputFeatureFactory.getInstance().REMOVE_DUPLICATE_KEY_PRESSES);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    add(gameKeyEvent) {
        if (this.isRemoveDuplicateKeyPresses && this.gameKeyEventList.contains(gameKeyEvent)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        if (gameKeyEvent !=
            null) {
            this.gameKeyEventList.add(gameKeyEvent);
        }
        else {
            this.logUtil.putF("Danger Passed Null GameKeyEvent", this, this.commonStrings.ADD);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addForRemoval(gameKeyEvent) {
        this.removalGameKeyEventList.add(gameKeyEvent);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isForRemoval(gameKeyEvent) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.removalGameKeyEventList.contains(gameKeyEvent);
        ;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    clear() {
        this.gameKeyEventList.clear();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeNonAIInputGameKeyEvents() {
        var list = this.gameKeyEventList;
        ;
        var gameKeyEvent;
        ;
        for (var index = list.size(); --index >= 0;) {
            gameKeyEvent = list.objectArray[index];
            if (gameKeyEvent.getSourceId() != 1) {
                list.removeAt(index);
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    update() {
        var removeList = this.removalGameKeyEventList;
        ;
        var list = this.gameKeyEventList;
        ;
        var size = removeList.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = removeList.objectArray[index];
            ;
            for (var index2 = list.size(); --index2 >= 0;) {
                if (list.objectArray[index2] == anyType) {
                    list.removeAt(index2);
                }
            }
        }
        removeList.clear();
    }
    getRemovalGameKeyEventList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.removalGameKeyEventList;
    }
    getGameKeyEventList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKeyEventList;
    }
}
