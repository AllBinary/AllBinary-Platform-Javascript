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
//not GWT import const Canvas
import { GameInputStrings } from '../../../../../org/allbinary/game/input/GameInputStrings.js';
//not GWT import const MotionGestureInput
import { TouchMotionGestureFactory } from '../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const MotionGestureEvent
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { RectangleCollisionUtil } from '../../../../../org/allbinary/math/RectangleCollisionUtil.js';
//not GWT import const RectangleCollisionUtil
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicMenuInputProcessor } from './BasicMenuInputProcessor.js';
//not GWT import - same folder const AllBinaryGameCanvas
export class PopupMenuInputProcessor extends BasicMenuInputProcessor {
    constructor(gameKeyEventList, playerInputId, gameCanvas, rectangle) {
        super(gameKeyEventList, playerInputId, gameCanvas);
        this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
        this.CLICK_DELAY = 120;
        this.clickTimeHelper = new TimeDelayHelper(this.CLICK_DELAY);
        //For kotlin this is before the body of the constructor.
        this.rectangle = rectangle;
    }
    init(rectangle) {
        this.rectangle = rectangle;
    }
    //@Throws(Exception.constructor)
    processInput(key) {
        if (key == Canvas.KEY_STAR) {
            var gameCanvas = this.getCanvas();
            ;
            gameCanvas.toggleMenu();
            //if statement needs to be on the same line and ternary does not work the same way.
            return 1;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
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
                if (gameKeyEvent !=
                    null) {
                    key = gameKeyEvent.getKey();
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
            this.logUtil.put(this.commonStrings.EXCEPTION, this, GameInputStrings.getInstance().PROCESS_INPUT, e);
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
        if (motionGestureEvent ==
            null) {
            this.logUtil.putF("Exception: Bug", this, this.gameInputStrings.PROCESS_MOTION_INPUT);
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
        ;
        var motionGestureInput = motionGestureEvent.getMotionGesture();
        ;
        if (motionGestureInput == touchMotionGestureFactory.RELEASED) {
            var point = motionGestureEvent.getCurrentPoint();
            ;
            var rectPoint = this.rectangle.getPoint();
            ;
            if (this.rectangleCollisionUtil.isInside(rectPoint.getX(), rectPoint.getY(), this.rectangle.getMaxX() + 20, this.rectangle.getMaxY(), point.getX(), point.getY())) {
                if (this.clickTimeHelper.isTimeTNT()) {
                    var gameCanvas = this.getCanvas();
                    ;
                    gameCanvas.toggleMenu();
                }
            }
        }
    }
}
