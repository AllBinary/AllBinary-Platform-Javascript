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
import { Exception } from '../../../../java/lang/Exception.js';
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
import { GameInitializedEvent } from '../../../../org/allbinary/game/configuration/event/GameInitializedEvent.js';
import { GameInitializedEventHandler } from '../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js';
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
export class GameInitializationUtil extends Object {
    constructor() {
        super(...arguments);
        this.EVENT = new GameInitializedEvent(this);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInitializationUtil.instance;
    }
    //@Throws(Exception.constructor)
    initDemo(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface) {
        var mainFeatureFactory = MainFeatureFactory.getInstance();
        ;
        if (ChangedGameFeatureListener.getInstance().isChangedFeature(mainFeatureFactory.STATIC)) {
            var gameInitializationInterface = gameInitializationInterfaceFactoryInterface.getInstance();
            ;
            var features = Features.getInstance();
            ;
            if (features.isFeature(mainFeatureFactory.LOAD_ALL)) {
                this.initGame(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface);
            }
            else if (features.isFeature(mainFeatureFactory.LOAD_ONDEMAND)) {
                var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
                ;
                gameInitializationInterface.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory.LOAD_EARLY.getLevel());
                this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory.LOAD_EARLY);
            }
            else {
                throw new Exception("No Loading Feature Available");
            }
            GameInitializedEventHandler.getInstance().fireEvent(this.EVENT);
        }
    }
    //@Throws(Exception.constructor)
    initGame(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface) {
        if (ChangedGameFeatureListener.getInstance().isChangedFeature(MainFeatureFactory.getInstance().STATIC)) {
            var gameInitializationInterface = gameInitializationInterfaceFactoryInterface.getInstance();
            ;
            var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
            ;
            gameInitializationInterface.init(abeClientInformation, canvas.getCustomCommandListener(), resourceLoadingLevelFactory.LOAD_ALL.getLevel());
            this.EVENT.setResourceLoadingLevel(resourceLoadingLevelFactory.LOAD_ALL);
            GameInitializedEventHandler.getInstance().fireEvent(this.EVENT);
            ChangedGameFeatureListener.getInstance().remove(MainFeatureFactory.getInstance().STATIC);
        }
    }
}
GameInitializationUtil.instance = new GameInitializationUtil();
