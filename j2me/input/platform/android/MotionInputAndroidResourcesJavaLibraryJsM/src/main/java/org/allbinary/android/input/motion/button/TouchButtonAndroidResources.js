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
import { Integer } from '../../../../../../java/lang/Integer.js';
import { AndroidResources } from '../../../../../../org/allbinary/AndroidResources.js';
//not GWT import const AndroidResources
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { Init } from '../../../../../../org/allbinary/init/Init.js';
//not GWT import const Init
import { CommonButtons } from '../../../../../../org/allbinary/input/motion/button/CommonButtons.js';
//not GWT import const CommonButtons
import { TouchButtonBlankResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonBlankResource.js';
//not GWT import const TouchButtonBlankResource
import { TouchButtonDownResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonDownResource.js';
//not GWT import const TouchButtonDownResource
import { TouchButtonGenericActionResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonGenericActionResource.js';
//not GWT import const TouchButtonResource
import { TouchButtonStartResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStartResource.js';
//not GWT import const TouchButtonStartResource
import { TouchButtonStrafeLeftResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStrafeLeftResource.js';
//not GWT import const TouchButtonStrafeLeftResource
import { TouchButtonStrafeRightResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonStrafeRightResource.js';
//not GWT import const TouchButtonStrafeRightResource
import { TouchButtonTurnLeftResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonTurnLeftResource.js';
//not GWT import const TouchButtonTurnLeftResource
import { TouchButtonTurnRightResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonTurnRightResource.js';
//not GWT import const TouchButtonTurnRightResource
import { TouchButtonUpResource } from '../../../../../../org/allbinary/input/motion/button/TouchButtonUpResource.js';
//not GWT import const TouchButtonUpResource
import { OperatingSystemFactory } from '../../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TouchButtonAndroidResources extends Init {
    init() {
        var resourceUtil = ResourceUtil.getInstance();
        ;
        var androidResources = AndroidResources.getInstance();
        ;
        var RESOURCE_STRING_ARRAY = [
            TouchButtonBlankResource.getInstance(), TouchButtonGenericActionResource.getInstance(), TouchButtonStartResource.getInstance(), TouchButtonUpResource.getInstance(), TouchButtonDownResource.getInstance(), TouchButtonTurnLeftResource.getInstance(), TouchButtonTurnRightResource.getInstance(), TouchButtonStrafeLeftResource.getInstance(), TouchButtonStrafeRightResource.getInstance()
        ];
        ;
        var RESOURCE_ARRAY = new Array(RESOURCE_STRING_ARRAY.length);
        ;
        if (CommonButtons.getInstance().STANDARD_BUTTON_SIZE == 128) {
            RESOURCE_ARRAY[0] = androidResources.raw.touch_button_128_by_128;
            RESOURCE_ARRAY[1] = androidResources.raw.touch_button_generic_action_128_by_128;
            RESOURCE_ARRAY[2] = androidResources.raw.touch_button_start_128_by_128;
            RESOURCE_ARRAY[3] = androidResources.raw.touch_button_up_arrow_128_by_128;
            RESOURCE_ARRAY[4] = androidResources.raw.touch_button_down_arrow_128_by_128;
            RESOURCE_ARRAY[5] = androidResources.raw.touch_button_turn_left_arrow_128_by_128;
            RESOURCE_ARRAY[6] = androidResources.raw.touch_button_turn_right_arrow_128_by_128;
            RESOURCE_ARRAY[7] = androidResources.raw.touch_button_strafe_left_arrow_128_by_128;
            RESOURCE_ARRAY[8] = androidResources.raw.touch_button_strafe_right_arrow_128_by_128;
            if (OperatingSystemFactory.getInstance().getOperatingSystemInstance().isOverScan()) {
                resourceUtil.addResource(RESOURCE_STRING_ARRAY[2].HINT, Integer.valueOf(androidResources.raw.ouya_o));
            }
        }
        else {
            RESOURCE_ARRAY[0] = androidResources.raw.touch_button_64_by_64;
            RESOURCE_ARRAY[1] = androidResources.raw.touch_button_generic_action_64_by_64;
            RESOURCE_ARRAY[2] = androidResources.raw.touch_button_start_64_by_64;
            RESOURCE_ARRAY[3] = androidResources.raw.touch_button_up_arrow_64_by_64;
            RESOURCE_ARRAY[4] = androidResources.raw.touch_button_down_arrow_64_by_64;
            RESOURCE_ARRAY[5] = androidResources.raw.touch_button_turn_left_arrow_64_by_64;
            RESOURCE_ARRAY[6] = androidResources.raw.touch_button_turn_right_arrow_64_by_64;
            RESOURCE_ARRAY[7] = androidResources.raw.touch_button_strafe_left_arrow_64_by_64;
            RESOURCE_ARRAY[8] = androidResources.raw.touch_button_strafe_right_arrow_64_by_64;
        }
        for (var index = 0; index < RESOURCE_ARRAY.length; index++) {
            resourceUtil.addResource(RESOURCE_STRING_ARRAY[index].RESOURCE, Integer.valueOf(RESOURCE_ARRAY[index]));
        }
    }
}
