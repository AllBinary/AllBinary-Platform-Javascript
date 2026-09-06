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
//not GWT import const GameConfiguration = globalThis.org.allbinary.game.configuration.GameConfiguration;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseChangedGameFeatureListener } from './BaseChangedGameFeatureListener.js';
//not GWT import - same folder const BaseChangedGameFeatureListener = globalThis.org.allbinary.game.configuration.event.BaseChangedGameFeatureListener;
export class ChangedGameFeatureListener extends BaseChangedGameFeatureListener {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ChangedGameFeatureListener.gameFeatureListener;
    }
    isChangedGameConfiguration(gameConfiguration) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.contains(gameConfiguration);
        ;
    }
}
ChangedGameFeatureListener.gameFeatureListener = new ChangedGameFeatureListener();
