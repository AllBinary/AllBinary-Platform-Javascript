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
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
import { InputFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { PrimaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/PrimaryPlayerQueueFactory.js';
import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
import { PrimaryThreadPool } from '../../../../../org/allbinary/thread/PrimaryThreadPool.js';
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
import { CommandRunnable } from './CommandRunnable.js';
//In general allow scrolling of the menu and selection the center item
export class CommandFormInputProcessor extends BasicMenuInputProcessor {
    constructor(gameKeyEventList, playerInputId, gameCanvas, form) {
        super(gameKeyEventList, playerInputId, gameCanvas);
        this.MOTION_GESTURE_SOURCE_ID = GameKeyEventFactory.getInstance().MOTION_GESTURE_SOURCE_ID;
        this.CLICK_DELAY = 150;
        this.clickTimeHelper = new TimeDelayHelper(this.CLICK_DELAY);
        this.DOUBLE_CLICK_DELAY = 1200;
        this.doubleClickTimeHelper = new TimeDelayHelper(this.DOUBLE_CLICK_DELAY);
        this.isSingleKeyProcessing = InputFeatureFactory.getInstance().isSingleKeyProcessing();
        this.hasPressed = false;
        this.PROCESS_COMMAND = "processCommand";
        this.NAME_LABEL = " ScrollSelectionForm: ";
        //For kotlin this is before the body of the constructor.
        this.form = form;
    }
    //@Throws(Exception.constructor)
    processInput(key) {
        if (key == Canvas.LEFT || key == Canvas.RIGHT || key == Canvas.UP || key == Canvas.DOWN) {
            PrimaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
            this.form.processInputKey(key);
            //if statement needs to be on the same line and ternary does not work the same way.
            return 1;
        }
        else if (key == Canvas.FIRE) {
            PrimaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.processCommand();
            ;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    processCommand() {
        var commandCurrentSelectionForm = this.form;
        ;
        var command = commandCurrentSelectionForm.getSelectedCommand();
        ;
        this.logUtil.putF(command.toString(), this, this.PROCESS_COMMAND);
        var features = Features.getInstance();
        ;
        var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
        ;
        if (SWTUtil.isSWT && features.isFeature(openGLFeatureFactory.OPENGL) && command != GameCommandsFactory.getInstance().EXIT_COMMAND) {
            new CommandRunnable(this, command).run();
        }
        else {
            PrimaryThreadPool.getInstance().runTask(new CommandRunnable(this, command));
        }
        if (command == GameCommandsFactory.getInstance().QUIT_COMMAND) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return 1;
        }
    }
    //@Throws(Exception.constructor)
    processInputList() {
        try {
            var motionInputsIndex = this.processMotionInputs();
            ;
            var list = this.getGameKeyEventList();
            ;
            var size = list.size();
            ;
            var key = 0;
            ;
            var gameKeyEvent;
            ;
            for (var index = 0; index < size; index++) {
                gameKeyEvent = list.objectArray[index];
                key = gameKeyEvent.getKey();
                if (gameKeyEvent.getSourceId() != this.MOTION_GESTURE_SOURCE_ID) {
                    if (this.processInput(key) == 1) {
                        break;
                    }
                }
            }
            this.clear();
            if (size > 0 || motionInputsIndex >= 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return 1;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return -1;
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.gameInputStrings.PROCESS_INPUT, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
    }
    //@Throws(Exception.constructor)
    processMotionInputs() {
        var lastIndex = this.motionGestureEventList.size() - 1;
        ;
        if (lastIndex >= 0) {
            var motionGestureEvent = this.motionGestureEventList.objectArray[lastIndex];
            ;
            this.processMotionInput(motionGestureEvent);
        }
        this.motionGestureEventList.clear();
        //if statement needs to be on the same line and ternary does not work the same way.
        return lastIndex;
    }
    //@Throws(Exception.constructor)
    processMotionInput(motionGestureEvent) {
        var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
        ;
        var motionGestureInput = motionGestureEvent.getMotionGesture();
        ;
        if (motionGestureInput == touchMotionGestureFactory.RELEASED) {
            var point = motionGestureEvent.getCurrentPoint();
            ;
            if (this.form.isInForm(point)) {
                var index = this.form.getSelectedIndexForPoint(point);
                ;
                if (index != -1) {
                    PrimaryPlayerQueueFactory.getInstance().add(SelectSound.getInstance());
                    if (index == this.form.getSelectedIndex()) {
                        if (this.clickTimeHelper.isTimeTNT()) {
                            this.processCommand();
                        }
                    }
                    else {
                        this.form.setSelectedIndex(index);
                    }
                }
                else {
                }
            }
            if (this.hasPressed) {
                if (!this.doubleClickTimeHelper.isTimeTNT()) {
                    this.logUtil.putF("Double Press", this, this.gameInputStrings.PROCESS_MOTION_INPUT);
                    this.processCommand();
                }
                this.doubleClickTimeHelper.delay = this.DOUBLE_CLICK_DELAY;
                this.doubleClickTimeHelper.setStartTimeTNT();
            }
            this.hasPressed = false;
        }
        else if (motionGestureInput == touchMotionGestureFactory.PRESSED) {
            this.doubleClickTimeHelper.delay = 0;
            this.hasPressed = true;
        }
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(super.toString()).append(this.NAME_LABEL).append(this.form.toString()).toString();
        ;
    }
}
