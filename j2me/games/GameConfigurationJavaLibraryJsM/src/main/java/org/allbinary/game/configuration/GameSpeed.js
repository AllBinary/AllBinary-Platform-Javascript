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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
//not GWT import - same folder const GameConfiguration
export class GameSpeed extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameSpeed.instance;
    }
    getSpeed() {
        var speedGameConfiguration = GameConfigurationCentral.getInstance().SPEED;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return (speedGameConfiguration.getMaxValue().intValue() - speedGameConfiguration.getValue().intValue() + 1);
    }
    getDelay() {
        var speedGameConfiguration = GameConfigurationCentral.getInstance().SPEED;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return 19 * (speedGameConfiguration.getMaxValue().intValue() - speedGameConfiguration.getValue().intValue());
    }
}
GameSpeed.instance = new GameSpeed();
