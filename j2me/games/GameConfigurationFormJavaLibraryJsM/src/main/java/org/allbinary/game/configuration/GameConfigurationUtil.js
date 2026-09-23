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
//not GWT import const Item
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//not GWT import - same folder const GameOptionsForm
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
//not GWT import - same folder const GameConfigurationGauge
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
//not GWT import - same folder const GameConfigurationCentral
export class GameConfigurationUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.GAUGE_UPDATE = "Gauge Update: ";
        this.FROM = " from: ";
        this.TO = " to: ";
        this.COMPETITION_VALUE = 1;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameConfigurationUtil.instance;
    }
    //@Throws(Exception.constructor)
    change(gameOptionsForm, gauge) {
        this.update(gauge);
        var gameConfigurationSingleton = GameConfigurationSingleton.getInstance();
        ;
        var gameConfiguration = gameConfigurationSingleton.getInstanceByName(gauge.getLabel());
        ;
        this.updateChallange(gameOptionsForm, gameConfiguration);
    }
    //@Throws(Exception.constructor)
    update(gauge) {
        var gameConfigurationSingleton = GameConfigurationSingleton.getInstance();
        ;
        var gameConfiguration = gameConfigurationSingleton.getInstanceByName(gauge.getLabel());
        ;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var value = smallIntegerSingletonFactory.getAt(gauge.getValue() + gameConfiguration.getMinValue().intValue());
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.GAUGE_UPDATE);
        stringBuffer.append(gameConfiguration.getName());
        stringBuffer.append(this.FROM);
        stringBuffer.appendint(gameConfiguration.getValue().intValue());
        stringBuffer.append(this.TO);
        stringBuffer.appendint(value.intValue());
        this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.UPDATE);
        gameConfiguration.setValue(value);
    }
    //@Throws(Exception.constructor)
    setDefault(gauge) {
        var gameConfigurationSingleton = GameConfigurationSingleton.getInstance();
        ;
        var gameConfiguration = gameConfigurationSingleton.getInstanceByName(gauge.getLabel());
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Gauge Default: ");
        stringBuffer.append(gameConfiguration.getName());
        stringBuffer.append(this.TO);
        stringBuffer.appendint(gameConfiguration.getDefaultValue().intValue());
        this.logUtil.putF(stringBuffer.toString(), this, "setDefault");
        gauge.setValue(gameConfiguration.getDefaultValue().intValue() - gameConfiguration.getMinValue().intValue());
        gameConfiguration.setValue(gameConfiguration.getDefaultValue());
    }
    //@Throws(Exception.constructor)
    updateChallange(gameOptionsForm, gameConfiguration) {
        var gameConfigurationSingleton = GameConfigurationSingleton.getInstance();
        ;
        var gameConfigurationCentral = GameConfigurationCentral.getInstance();
        ;
        if (gameConfiguration == gameConfigurationCentral.CHALLENGE_LEVEL) {
            this.logUtil.putF(this.commonStrings.START, this, "updateChallange");
            gameConfigurationCentral.COLLIDE_DAMAGE.setValue(gameConfiguration.getValue());
            gameConfigurationCentral.ATTACK_CHALLENGE_LEVEL.setValue(gameConfiguration.getValue());
            gameConfigurationCentral.DURABILITY_CHALLENGE_LEVEL.setValue(gameConfiguration.getValue());
            gameConfigurationCentral.SPEED_CHALLENGE_LEVEL.setValue(gameConfiguration.getValue());
            var size = gameOptionsForm.size();
            ;
            for (var index = 0; index < size; index++) {
                var item = gameOptionsForm.get(index);
                ;
                if (item instanceof GameConfigurationGauge) {
                    var gauge = item;
                    ;
                    var name = item.getLabel();
                    ;
                    var nextGameConfiguration = gameConfigurationSingleton.getInstanceByName(name);
                    ;
                    if (nextGameConfiguration == gameConfigurationCentral.COLLIDE_DAMAGE) {
                        gauge.setValue(gameConfigurationCentral.COLLIDE_DAMAGE.getValue().intValue() - gameConfiguration.getMinValue().intValue());
                    }
                    else if (nextGameConfiguration == gameConfigurationCentral.DURABILITY_CHALLENGE_LEVEL) {
                        gauge.setValue(gameConfigurationCentral.DURABILITY_CHALLENGE_LEVEL.getValue().intValue() - gameConfiguration.getMinValue().intValue());
                    }
                    else if (nextGameConfiguration == gameConfigurationCentral.ATTACK_CHALLENGE_LEVEL) {
                        gauge.setValue(gameConfigurationCentral.ATTACK_CHALLENGE_LEVEL.getValue().intValue() - gameConfiguration.getMinValue().intValue());
                    }
                    else if (nextGameConfiguration == gameConfigurationCentral.SPEED_CHALLENGE_LEVEL) {
                        gauge.setValue(gameConfigurationCentral.SPEED_CHALLENGE_LEVEL.getValue().intValue() - gameConfiguration.getMinValue().intValue());
                    }
                }
            }
        }
    }
    updateCompetitionValue() {
        this.logUtil.putF(this.commonStrings.START, this, "updateCompetitionValue");
        var gameConfigurationCentral = GameConfigurationCentral.getInstance();
        ;
        this.COMPETITION_VALUE = gameConfigurationCentral.COLLIDE_DAMAGE.getValue().intValue() + gameConfigurationCentral.ATTACK_CHALLENGE_LEVEL.getValue().intValue() + gameConfigurationCentral.DURABILITY_CHALLENGE_LEVEL.getValue().intValue() + gameConfigurationCentral.SPEED_CHALLENGE_LEVEL.getValue().intValue();
        this.COMPETITION_VALUE = (this.COMPETITION_VALUE >> 2);
    }
    getCompetitionValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.COMPETITION_VALUE;
    }
}
GameConfigurationUtil.instance = new GameConfigurationUtil();
