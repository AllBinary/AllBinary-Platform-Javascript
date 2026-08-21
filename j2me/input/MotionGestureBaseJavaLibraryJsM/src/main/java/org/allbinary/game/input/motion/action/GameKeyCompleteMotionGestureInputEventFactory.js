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
import { Object } from '../../../../../../java/lang/Object.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
export class GameKeyCompleteMotionGestureInputEventFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.eventList = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameKeyCompleteMotionGestureInputEventFactory.SINGLETON;
    }
    add(gameKeyCompleteMotionGestureInputEvent) {
        this.eventList.add(gameKeyCompleteMotionGestureInputEvent);
    }
    updateAll() {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).appendint(this.eventList.size()).toString(), this, "updateAll");
        for (var index = this.eventList.size() - 1; index >= 0; index--) {
            var gameKeyCompleteMotionGestureInputEvent = this.eventList.objectArray[index];
            ;
            gameKeyCompleteMotionGestureInputEvent.update();
        }
    }
}
GameKeyCompleteMotionGestureInputEventFactory.SINGLETON = new GameKeyCompleteMotionGestureInputEventFactory();
