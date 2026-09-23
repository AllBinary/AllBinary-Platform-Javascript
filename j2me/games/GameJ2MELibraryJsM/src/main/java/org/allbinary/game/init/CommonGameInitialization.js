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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const ResourceInitialization
import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const AbeClientInformationInterface
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseGameInitialization } from './BaseGameInitialization.js';
//not GWT import - same folder const BaseGameInitialization
export class CommonGameInitialization extends BaseGameInitialization {
    constructor(resourceInitializationArray, portion) {
        super(resourceInitializationArray, portion);
        this.commonStrings = CommonStrings.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    init(abeClientInformation, commandListener, level) {
        super.init(abeClientInformation, commandListener, level);
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (!this.isGameInitialized() && level == resourceLoadingLevelFactory.LOAD_ALL.getLevel()) {
            this.setGameInitialized(true);
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            SmallIntegerSingletonFactory.getInstance().init();
            progressCanvas.addNormalPortion(50, "Integers");
            PointFactory.getInstance().init();
            progressCanvas.addNormalPortion(50, "Points");
            AngleFactory.getInstance();
            progressCanvas.addNormalPortion(50, "Angles");
            this.initGame();
            this.resourceInitializationArray[this.GAME_RESOURCES].init();
        }
        super.resourceInitialization(level);
    }
    //@Throws(Exception.constructor)
    initGame() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
}
