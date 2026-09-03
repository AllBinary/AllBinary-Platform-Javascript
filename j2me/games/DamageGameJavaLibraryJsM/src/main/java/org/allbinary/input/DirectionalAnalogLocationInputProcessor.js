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
import { AnalogLocationInputProcessor } from '../../../org/allbinary/android/input/motion/AnalogLocationInputProcessor.js';
//not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;
import { GameKeyFactory } from '../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const AnalogLocationInput = globalThis.org.allbinary.game.input.analog.AnalogLocationInput;
import { GameKeyEvent } from '../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;
import { GameKeyEventFactory } from '../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DirectionalAnalogLocationInputProcessor extends AnalogLocationInputProcessor {
    constructor(inputProcessorArray) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameKeyFactory = GameKeyFactory.getInstance();
        this.leftGameKeyEvent = GameKeyEvent.NONE;
        this.rightGameKeyEvent = GameKeyEvent.NONE;
        this.upGameKeyEvent = GameKeyEvent.NONE;
        this.downGameKeyEvent = GameKeyEvent.NONE;
        this.leftTriggerGameKeyEvent = GameKeyEvent.NONE;
        this.rightTriggerGameKeyEvent = GameKeyEvent.NONE;
        this.inputProcessorArray = inputProcessorArray;
        try {
            this.leftGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.LEFT);
            this.rightGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.RIGHT);
            this.upGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.UP);
            this.downGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.DOWN);
            this.leftTriggerGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.KEY_NUM0);
            this.rightTriggerGameKeyEvent = GameKeyEventFactory.getInstance().getInstanceForInput(this, this.gameKeyFactory.KEY_NUM5);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
        }
    }
    process(allbinaryLayerManager, analogLocationInput) {
        try {
            var customGPoint;
            ;
            customGPoint = analogLocationInput.getCustomGPoint();
            var x = customGPoint.getX();
            ;
            var y = customGPoint.getY();
            ;
            var leftTrigger = analogLocationInput.getLeftTrigger();
            ;
            var rightTrigger = analogLocationInput.getRightTrigger();
            ;
            if (x < 0) {
                this.inputProcessorArray[this.leftGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.leftGameKeyEvent, x);
            }
            else if (x > 0) {
                this.inputProcessorArray[this.rightGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.rightGameKeyEvent, x);
            }
            if (y < 0) {
                this.inputProcessorArray[this.downGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.downGameKeyEvent, y);
            }
            else if (y > 0) {
                this.inputProcessorArray[this.upGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.upGameKeyEvent, y);
            }
            if (leftTrigger > 0) {
                this.inputProcessorArray[this.leftTriggerGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.leftTriggerGameKeyEvent, leftTrigger);
            }
            if (rightTrigger > 0) {
                this.inputProcessorArray[this.rightTriggerGameKeyEvent.getKey()].processAnalog(allbinaryLayerManager, this.rightTriggerGameKeyEvent, rightTrigger);
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put("Unable to process analog input", this, commonStrings.PROCESS, e);
        }
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
