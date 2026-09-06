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
//not GWT import - same folder const GameInitializationInterfaceFactoryInterface = globalThis.org.allbinary.game.init.GameInitializationInterfaceFactoryInterface;
import { BaseGameInitialization } from './BaseGameInitialization.js';
//not GWT import - same folder const GameInitializationInterface = globalThis.org.allbinary.game.init.GameInitializationInterface;
export class BasicBuildGameInitializerFactory extends Object {
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BaseGameInitialization.NULL_BASE_GAME_INITIALIZATION;
    }
}
BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY = new BasicBuildGameInitializerFactory();
