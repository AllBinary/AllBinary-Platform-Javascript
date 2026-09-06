/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SensorAction } from './SensorAction.js';
//not GWT import - same folder const SensorAction = globalThis.org.allbinary.game.layer.SensorAction;
export class SensorActionFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SensorActionFactory.instance;
    }
    constructor() {
        super();
        this.ATTACK = new SensorAction("Attack");
        this.EVADE = new SensorAction("Evade");
    }
}
SensorActionFactory.instance = new SensorActionFactory();
