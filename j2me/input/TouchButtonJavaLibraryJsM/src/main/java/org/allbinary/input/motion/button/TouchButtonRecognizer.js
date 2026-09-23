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
import { Object } from '../../../../../java/lang/Object.js';
import { DownGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
//not GWT import const GameKeyEvent
import { UpGameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
//not GWT import const Rectangle
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { RectangleCollisionUtil } from '../../../../../org/allbinary/math/RectangleCollisionUtil.js';
//not GWT import const RectangleCollisionUtil
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicTouchInputFactory } from './BasicTouchInputFactory.js';
//not GWT import - same folder const TouchButtonInput
import { CurrentlyPressedTouchButtonSingleton } from './CurrentlyPressedTouchButtonSingleton.js';
//not GWT import - same folder const CurrentlyPressedTouchButtonSingleton
//import { ReleaseHelper } from './ReleaseHelper.js';
//not GWT import - same folder const ReleaseHelper
import { CancelTouchButtonInputFactory } from './CancelTouchButtonInputFactory.js';
//not GWT import - same folder const CancelTouchButtonInputFactory
import { TouchScreenFactory } from './TouchScreenFactory.js';
//not GWT import - same folder const TouchScreenFactory
//import { MultitouchReleaseHelper } from './MultitouchReleaseHelper.js';
//not GWT import - same folder const MultitouchReleaseHelper
import { TouchButtonFactory } from './TouchButtonFactory.js';
//not GWT import - same folder const TouchButton
export class TouchButtonRecognizer extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
        this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
        this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
        this.lastPressedTouchButtonInput = BasicTouchInputFactory.getInstance().NONE;
        this.currentlyPressedTouchButtonSingleton = CurrentlyPressedTouchButtonSingleton.getInstance();
        //CurrentlyPressedTouchButtonSingletonDebug.getInstance();
        //inner= member=true isStatic=
        this.ReleaseHelper = class extends Object {
            constructor(touchButtonRecognizer) {
                super();
                this.touchButtonRecognizer = touchButtonRecognizer;
            }
            //@Throws(Exception.constructor)
            release(touchButtonInput, deviceId) {
                var nextTouchButtonInput;
                ;
                var gameKeyEvent;
                ;
                for (var index = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.size() - 1; index >= 0; index--) {
                    nextTouchButtonInput = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.get(index);
                    gameKeyEvent = nextTouchButtonInput.getGameKeyEvent();
                    this.touchButtonRecognizer.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                    this.touchButtonRecognizer.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
                    this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.removeAt(index);
                }
            }
        };
        //inner= member=true isStatic=
        this.MultitouchReleaseHelper = class extends this.ReleaseHelper {
            constructor(touchButtonRecognizer) {
                super(touchButtonRecognizer);
                //For kotlin this is before the body of the constructor.
            }
            //@Throws(Exception.constructor)
            release(touchButtonInput, deviceId) {
                var cancelTouchButtonInput = CancelTouchButtonInputFactory.getInstance().getCancel(touchButtonInput);
                ;
                var nextTouchButtonInput;
                ;
                var gameKeyEvent;
                ;
                for (var index = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.size() - 1; index >= 0; index--) {
                    nextTouchButtonInput = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.get(index);
                    if (cancelTouchButtonInput == nextTouchButtonInput) {
                        gameKeyEvent = nextTouchButtonInput.getGameKeyEvent();
                        this.touchButtonRecognizer.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                        this.touchButtonRecognizer.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
                        this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.removeAt(index);
                    }
                }
            }
        };
        if (TouchScreenFactory.getInstance().isMultiTouch()) {
            this.releaseHelper = new this.MultitouchReleaseHelper(this);
        }
        else {
            this.releaseHelper = new this.ReleaseHelper(this);
        }
    }
    //@Throws(Exception.constructor)
    processRelease(touchButtonInput, deviceId) {
        this.releaseHelper.release(touchButtonInput, deviceId);
        var gameKeyEvent = touchButtonInput.getGameKeyEvent();
        ;
        this.upGameKeyEventHandler.fireEvent(gameKeyEvent);
        this.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
        this.currentlyPressedTouchButtonSingleton.remove(touchButtonInput);
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    releaseTouchButtonInput(x, y, deviceId) {
        var touchButtonInput = this.lastPressedTouchButtonInput;
        ;
        if (this.currentlyPressedTouchButtonSingleton.contains(touchButtonInput)) {
            this.lastPressedTouchButtonInput = BasicTouchInputFactory.getInstance().NONE;
            this.processRelease(touchButtonInput, deviceId);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            var list = TouchButtonFactory.getInstance().getList();
            ;
            var rectangle;
            ;
            var point;
            ;
            var touchButton;
            ;
            for (var index = list.size() - 1; index >= 0; index--) {
                touchButton = list.objectArray[index];
                rectangle = touchButton.getRectangle();
                point = rectangle.getPoint();
                if (this.rectangleCollisionUtil.isInside(point.getX(), point.getY(), rectangle.getMaxX(), rectangle.getMaxY(), x, y)) {
                    touchButtonInput = touchButton.getTouchButtonInput();
                    this.processRelease(touchButtonInput, deviceId);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    pressTouchButtonInput(x, y, deviceId) {
        var list = TouchButtonFactory.getInstance().getList();
        ;
        var rectangle;
        ;
        var point;
        ;
        var touchButton;
        ;
        var touchButtonInput;
        ;
        var gameKeyEvent;
        ;
        for (var index = list.size() - 1; index >= 0; index--) {
            touchButton = list.objectArray[index];
            rectangle = touchButton.getRectangle();
            point = rectangle.getPoint();
            if (this.rectangleCollisionUtil.isInside(point.getX(), point.getY(), rectangle.getMaxX(), rectangle.getMaxY(), x, y)) {
                touchButtonInput = touchButton.getTouchButtonInput();
                if (!this.currentlyPressedTouchButtonSingleton.contains(touchButtonInput)) {
                    this.releaseHelper.release(touchButtonInput, deviceId);
                    this.lastPressedTouchButtonInput = touchButtonInput;
                    this.currentlyPressedTouchButtonSingleton.add(touchButtonInput);
                    gameKeyEvent = touchButtonInput.getGameKeyEvent();
                    this.downGameKeyEventHandler.fireEvent(gameKeyEvent);
                    this.downGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
