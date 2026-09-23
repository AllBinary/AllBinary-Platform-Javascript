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
//not GWT import const MotionGestureEvent
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CommandFormInputProcessor } from './CommandFormInputProcessor.js';
//not GWT import - same folder const GameCommandCanvas
export class ImmediateCommandFormInputProcessor extends CommandFormInputProcessor {
    constructor(gameKeyEventList, playerInputId, gameCommandCanvas, form) {
        super(gameKeyEventList, playerInputId, gameCommandCanvas, form);
        this.timeHelper = new TimeDelayHelper(25);
        //For kotlin this is before the body of the constructor.
        this.gameCommandCanvas = gameCommandCanvas;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onPressGameKeyEvent(gameKeyEvent) {
        try {
            super.onPressGameKeyEvent(gameKeyEvent);
            if (this.timeHelper.isTimeTNT()) {
                this.processInputList();
                this.gameCommandCanvas.repaintBehavior.onChangeRepaint(this.getCanvas());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.ON_PRESS_GAME_KEY, e);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownGameKeyEvent(gameKeyEvent) {
        try {
            super.onDownGameKeyEvent(gameKeyEvent);
            if (this.timeHelper.isTimeTNT()) {
                this.processInputList();
                this.gameCommandCanvas.repaintBehavior.onChangeRepaint(this.getCanvas());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.ON_DOWN_GAME_KEY, e);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onUpGameKeyEvent(gameKeyEvent) {
        try {
            super.onUpGameKeyEvent(gameKeyEvent);
            if (this.timeHelper.isTimeTNT()) {
                this.processInputList();
                this.gameCommandCanvas.repaintBehavior.onChangeRepaint(this.getCanvas());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.ON_UP_GAME_KEY, e);
        }
    }
    onMotionGestureEvent(motionGestureEvent) {
        try {
            super.onMotionGestureEvent(motionGestureEvent);
            if (this.timeHelper.isTimeTNT()) {
                this.processInputList();
                this.gameCommandCanvas.repaintBehavior.onChangeRepaint(this.getCanvas());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onMotionGestureEvent", e);
        }
    }
}
