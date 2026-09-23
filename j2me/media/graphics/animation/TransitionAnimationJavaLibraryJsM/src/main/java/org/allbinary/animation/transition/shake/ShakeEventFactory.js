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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ShakeEvent } from './ShakeEvent.js';
//not GWT import - same folder const ShakeEvent
export class ShakeEventFactory extends Object {
    constructor() {
        super(...arguments);
        this.MICRO = new ShakeEvent();
        this.SMALL = new ShakeEvent();
        this.MEDIUM = new ShakeEvent();
        this.LARGE = new ShakeEvent();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ShakeEventFactory.instance;
    }
    init() {
    }
}
ShakeEventFactory.instance = new ShakeEventFactory();
