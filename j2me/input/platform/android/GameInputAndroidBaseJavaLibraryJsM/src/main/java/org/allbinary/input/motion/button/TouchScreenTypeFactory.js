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
//not GWT import const Activity = globalThis.android.app.Activity;
import { Configuration } from '../../../../../android/content/res/Configuration.js';
//not GWT import const Configuration = globalThis.android.content.res.Configuration;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchScreenFactory } from './TouchScreenFactory.js';
//not GWT import const TouchScreenFactory = globalThis.org.allbinary.input.motion.button.TouchScreenFactory;
import { TouchScreenTypesFactory } from './TouchScreenTypesFactory.js';
//not GWT import const TouchScreenTypesFactory = globalThis.org.allbinary.input.motion.button.TouchScreenTypesFactory;
export class TouchScreenTypeFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchScreenTypeFactory.instance;
    }
    update(activity) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var touchScreenFactory = TouchScreenFactory.getInstance();
        ;
        var touchScreenTypesFactory = TouchScreenTypesFactory.getInstance();
        ;
        var configuration = activity.getResources().getConfiguration();
        ;
        var touchScreen = configuration.touchscreen;
        ;
        if (touchScreen == Configuration.TOUCHSCREEN_FINGER) {
            touchScreenFactory.setTouchScreenType(touchScreenTypesFactory.FINGER);
            if (!touchScreenFactory.isTouch()) {
                PreLogUtil.put("Not Really Exception: This indicates that a touch screen does exist but is not API8 so we will try it", this, commonStrings.PROCESS);
                touchScreenFactory.setTouch(true);
            }
        }
        else if (touchScreen == Configuration.TOUCHSCREEN_STYLUS) {
            touchScreenFactory.setTouchScreenType(touchScreenTypesFactory.STYLUS);
            if (!touchScreenFactory.isTouch()) {
                PreLogUtil.put("Not Really Exception: This indicates that a touch screen does exist but is not API8 so we will try it", this, commonStrings.PROCESS);
                touchScreenFactory.setTouch(true);
            }
        }
        else if (touchScreen == Configuration.TOUCHSCREEN_NOTOUCH) {
            touchScreenFactory.setTouchScreenType(touchScreenTypesFactory.NOTOUCH);
        }
        else if (touchScreen == Configuration.TOUCHSCREEN_UNDEFINED) {
            touchScreenFactory.setTouchScreenType(touchScreenTypesFactory.UNDEFINED);
        }
    }
}
TouchScreenTypeFactory.instance = new TouchScreenTypeFactory();
