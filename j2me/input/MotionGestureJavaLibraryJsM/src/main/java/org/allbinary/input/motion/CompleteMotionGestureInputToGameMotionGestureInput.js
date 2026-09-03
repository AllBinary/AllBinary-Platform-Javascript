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
import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const MotionGestureConfiguration = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration;
import { MotionGestureConfigurationFactory } from '../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
//not GWT import const MotionGestureConfigurationFactory = globalThis.org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory;
import { DiagonalDownLeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalDownLeftTouchInputToGameKeyEventAction.js';
//not GWT import const DiagonalDownLeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalDownLeftTouchInputToGameKeyEventAction;
import { DiagonalDownRightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalDownRightTouchInputToGameKeyEventAction.js';
//not GWT import const DiagonalDownRightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalDownRightTouchInputToGameKeyEventAction;
import { DiagonalUpLeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalUpLeftTouchInputToGameKeyEventAction.js';
//not GWT import const DiagonalUpLeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalUpLeftTouchInputToGameKeyEventAction;
import { DiagonalUpRightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DiagonalUpRightTouchInputToGameKeyEventAction.js';
//not GWT import const DiagonalUpRightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DiagonalUpRightTouchInputToGameKeyEventAction;
import { DownTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/DownTouchInputToGameKeyEventAction.js';
//not GWT import const DownTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.DownTouchInputToGameKeyEventAction;
import { LeftTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/LeftTouchInputToGameKeyEventAction.js';
//not GWT import const LeftTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.LeftTouchInputToGameKeyEventAction;
import { ReleaseTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/ReleaseTouchInputToGameKeyEventAction.js';
//not GWT import const ReleaseTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.ReleaseTouchInputToGameKeyEventAction;
import { RightTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/RightTouchInputToGameKeyEventAction.js';
//not GWT import const RightTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.RightTouchInputToGameKeyEventAction;
import { UpTouchInputToGameKeyEventAction } from '../../../../org/allbinary/input/motion/touch/action/UpTouchInputToGameKeyEventAction.js';
//not GWT import const UpTouchInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.touch.action.UpTouchInputToGameKeyEventAction;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CompleteMotionGestureInputToGameMotionGestureInput extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CompleteMotionGestureInputToGameMotionGestureInput.instance;
    }
    init() {
        var commonStrings = CommonStrings.getInstance();
        ;
        try {
            PreLogUtil.put("Compound Motion Gestures", this, commonStrings.INIT);
            var motionGestureConfiguration = MotionGestureConfigurationFactory.getInstance();
            ;
            var touchMotionGestureFactory = TouchMotionGestureFactory.getInstance();
            ;
            var list = new BasicArrayListD();
            ;
            list.add(touchMotionGestureFactory.DIAGONAL_DOWN_LEFT);
            motionGestureConfiguration.addMotionGestureAction(list, DiagonalDownLeftTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.DIAGONAL_DOWN_RIGHT);
            motionGestureConfiguration.addMotionGestureAction(list, DiagonalDownRightTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.DIAGONAL_UP_LEFT);
            motionGestureConfiguration.addMotionGestureAction(list, DiagonalUpLeftTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.DIAGONAL_UP_RIGHT);
            motionGestureConfiguration.addMotionGestureAction(list, DiagonalUpRightTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.LEFT);
            motionGestureConfiguration.addMotionGestureAction(list, LeftTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.RIGHT);
            motionGestureConfiguration.addMotionGestureAction(list, RightTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.DOWN);
            motionGestureConfiguration.addMotionGestureAction(list, DownTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.UP);
            motionGestureConfiguration.addMotionGestureAction(list, UpTouchInputToGameKeyEventAction.getInstance());
            list = new BasicArrayListD();
            list.add(touchMotionGestureFactory.RELEASED);
            motionGestureConfiguration.addMotionGestureAction(list, ReleaseTouchInputToGameKeyEventAction.getInstance());
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
        }
    }
}
CompleteMotionGestureInputToGameMotionGestureInput.instance = new CompleteMotionGestureInputToGameMotionGestureInput();
