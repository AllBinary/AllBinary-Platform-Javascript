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
import { GameFeatureEvent } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
import { GameFeatureEventHandler } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
import { GameFeatureFactory } from './GameFeatureFactory.js';
import { InputFeatureFactory } from './InputFeatureFactory.js';
import { SensorFeatureFactory } from './SensorFeatureFactory.js';
import { TouchFeatureFactory } from './TouchFeatureFactory.js';
import { MainFeatureFactory } from './MainFeatureFactory.js';
export class Features extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Features.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.list = new BasicArrayListD();
        this.defaultList = new BasicArrayListD();
        this.init();
    }
    //@Throws(Exception.constructor)
    addDefault(gameFeature) {
        this.add(gameFeature);
        if (!this.defaultList.contains(gameFeature)) {
            this.defaultList.add(gameFeature);
        }
    }
    //@Throws(Exception.constructor)
    add(gameFeature) {
        if (!this.list.contains(gameFeature)) {
            this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(gameFeature.toString()).toString(), this, this.commonStrings.ADD);
            this.list.add(gameFeature);
            GameFeatureEventHandler.getInstance().fireEvent(new GameFeatureEvent(gameFeature, gameFeature.toString()));
        }
    }
    //@Throws(Exception.constructor)
    removeDefault(gameFeature) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(gameFeature.toString()).toString(), this, "removeDefault");
        this.remove(gameFeature);
        this.defaultList.remove(gameFeature);
    }
    //@Throws(Exception.constructor)
    remove(gameFeature) {
        if (this.list.contains(gameFeature)) {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.REMOVE);
            this.list.remove(gameFeature);
            GameFeatureEventHandler.getInstance().fireEvent(new GameFeatureEvent(gameFeature, gameFeature.toString()));
        }
    }
    init() {
        try {
            var gameFeatureFactory = GameFeatureFactory.getInstance();
            ;
            var inputFeatureFactory = InputFeatureFactory.getInstance();
            ;
            var sensorFeatureFactory = SensorFeatureFactory.getInstance();
            ;
            var touchFeatureFactory = TouchFeatureFactory.getInstance();
            ;
            this.addDefault(gameFeatureFactory.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
            this.addDefault(gameFeatureFactory.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
            this.addDefault(gameFeatureFactory.GAME_INPUT_LAYER_PROCESSOR);
            this.addDefault(gameFeatureFactory.TICKABLE_LAYER_PROCESSOR);
            this.addDefault(inputFeatureFactory.MULTI_KEY_PRESS);
            this.addDefault(inputFeatureFactory.REMOVE_DUPLICATE_KEY_PRESSES);
            this.addDefault(gameFeatureFactory.SCREEN_SHAKE);
            this.addDefault(gameFeatureFactory.POST_IMAGE_LOADING_MODIFICATION);
            var operatingSystemInterface = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
            ;
            if (operatingSystemInterface.isOverScan()) {
                this.addDefault(sensorFeatureFactory.NO_ORIENTATION);
                this.addDefault(touchFeatureFactory.HIDE_SCREEN_BUTTONS);
            }
            else {
                this.addDefault(sensorFeatureFactory.ORIENTATION_SENSORS);
                this.addDefault(touchFeatureFactory.AUTO_HIDE_SHOW_SCREEN_BUTTONS);
            }
            this.addDefault(touchFeatureFactory.TOUCH_ENABLED);
            this.addDefault(MainFeatureFactory.getInstance().FULL_SCREEN);
            this.addDefault(MainFeatureFactory.getInstance().LOAD_ONDEMAND);
            //: 
        }
        catch (e) {
            PreLogUtil.putOE(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
    }
    isDefault(gameFeature) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.defaultList.contains(gameFeature);
        ;
    }
    isFeature(gameFeature) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.contains(gameFeature);
        ;
    }
    //@Throws(Exception.constructor)
    toggle(gameFeature) {
        if (this.isFeature(gameFeature)) {
            this.remove(gameFeature);
        }
        else {
            this.add(gameFeature);
        }
    }
}
Features.SINGLETON = new Features();
