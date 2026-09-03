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
//not plain js import { Gauge } from '../../../../javax/microedition/lcdui/Gauge.js';
const Gauge = globalThis.javax.microedition.lcdui.Gauge;
//not GWT import const GameConfiguration = globalThis.org.allbinary.game.configuration.GameConfiguration;
export class GameConfigurationGauge extends Gauge {
    constructor(gameConfiguration) {
        super(gameConfiguration.getName(), gameConfiguration.isModifiable().valueOf(), gameConfiguration.getMaxValue().intValue() - gameConfiguration.getMinValue().intValue(), gameConfiguration.getValue().intValue() - gameConfiguration.getMinValue().intValue());
        //For kotlin this is before the body of the constructor.
    }
}
