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
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameKeyEvent extends AllBinaryEventObject {
    static createEvent(anyType = {}, sourceId, key) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GameKeyEvent(anyType, sourceId, 0, 0, key, false);
    }
    constructor(anyType = {}, sourceId, originalKey, gameActionKey, key, repeated) {
        super(anyType);
        this.repeated = false;
        this.gameActionKey = 0;
        this.originalKey = 0;
        //For kotlin this is before the body of the constructor.
        this.sourceId = sourceId;
        this.setOriginalKey(originalKey);
        this.key = key;
        this.setGameActionKey(gameActionKey);
        this.setRepeatEvents(repeated);
    }
    init(anyType = {}) {
        this.setSource(anyType);
    }
    setRepeatEvents(repeated) {
        this.repeated = repeated;
    }
    hasRepeatEvents() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.repeated;
    }
    getKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.key;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("\nKey: ");
        stringBuffer.appendint(this.getKey());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getOriginalKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.originalKey;
    }
    setOriginalKey(originalKey) {
        this.originalKey = originalKey;
    }
    getGameActionKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameActionKey;
    }
    setGameActionKey(gameActionKey) {
        this.gameActionKey = gameActionKey;
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sourceId;
    }
}
GameKeyEvent.NONE = new GameKeyEvent(NullUtil.getInstance().NULL_OBJECT, -1, -1, -1, -1, false);
