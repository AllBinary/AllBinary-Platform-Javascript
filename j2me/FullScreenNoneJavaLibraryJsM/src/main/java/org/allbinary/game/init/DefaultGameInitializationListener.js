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
import { Thread } from '../../../../java/lang/Thread.js';
//not GWT import const GameInitializedEvent
import { GameInitializedEventHandler } from '../../../../org/allbinary/game/configuration/event/GameInitializedEventHandler.js';
//not GWT import const GameInitializedListenerInterface
import { FeatureResourceInitializationUtil } from '../../../../org/allbinary/game/resource/FeatureResourceInitializationUtil.js';
//not GWT import const FeatureResourceInitializationUtil
import { SWTJOGLProcessor } from '../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
//not GWT import const SWTJOGLProcessor
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DefaultGameInitializationListener extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.swtJOGLProcessor = SWTJOGLProcessor.getInstance();
        this.firstTime = true;
        var gameInitializedEventHandler = GameInitializedEventHandler.getInstance();
        ;
        gameInitializedEventHandler.removeAllListeners();
        gameInitializedEventHandler.addListenerInterface(this);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onGameInitialized(gameInitializedEvent) {
        var ON_GAME_INITIALIZED = "onGameInitialized";
        ;
        var commonStrings = CommonStrings.getInstance();
        ;
        try {
            this.logUtil.putF(commonStrings.START, this, ON_GAME_INITIALIZED);
            while (!this.swtJOGLProcessor.isHolderCreated()) {
                this.logUtil.putF(commonStrings.UPDATE, this, ON_GAME_INITIALIZED);
                Thread.sleep(20);
            }
            FeatureResourceInitializationUtil.getInstance().init(gameInitializedEvent.getLevel());
            if (this.firstTime) {
                this.firstTime = false;
            }
            else {
                this.swtJOGLProcessor.onSurfaceChanged();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(commonStrings.EXCEPTION, this, ON_GAME_INITIALIZED, e);
        }
    }
}
