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
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SensorFeature } from './SensorFeature.js';
//not GWT import const SensorFeature = globalThis.org.allbinary.game.configuration.feature.SensorFeature;
export class SensorFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SensorFeatureFactory.instance;
    }
    constructor() {
        super();
        this.NO_ORIENTATION = new SensorFeature("No Orientation");
        this.ORIENTATION_SENSORS = new SensorFeature("Orientation Sensors");
        this.SIMULATED_ORIENTATION_SENSORS = new SensorFeature("Simulated Orientation Sensors");
        this.YAW = new SensorFeature("Yaw");
        this.YAW_MINUS_RIGHT_PLUS_LEFT = new SensorFeature("Yaw -Right +Left");
        this.YAW_MINUS_LEFT_PLUS_RIGHT = new SensorFeature("Yaw -Left +Right ");
        this.PITCH = new SensorFeature("Pitch");
        this.ROLL = new SensorFeature("Roll");
    }
}
SensorFeatureFactory.instance = new SensorFeatureFactory();
