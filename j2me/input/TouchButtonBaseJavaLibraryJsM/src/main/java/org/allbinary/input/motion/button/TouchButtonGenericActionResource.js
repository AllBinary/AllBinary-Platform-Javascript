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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TouchButtonResource } from './TouchButtonResource.js';
export class TouchButtonGenericActionResource extends TouchButtonResource {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TouchButtonGenericActionResource.instance;
    }
    constructor() {
        super("/touch_button_generic_action_64_by_64.png", "/touch_button_generic_action_hint_64_by_64.png");
        //For kotlin this is before the body of the constructor.
    }
}
TouchButtonGenericActionResource.instance = new TouchButtonGenericActionResource();
