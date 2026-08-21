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
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
import { GameFeatureItemCommandListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js';
import { GameFeatureItemStateListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js';
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameConfigurationTextInput } from './GameConfigurationTextInput.js';
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
import { GameConfigurationUtil } from './GameConfigurationUtil.js';
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
export class GameOptionsForm extends CommandForm {
    constructor(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.addConfiguration();
        var gameFeatureFormUtil = GameFeatureFormUtil.getInstance();
        ;
        gameFeatureFormUtil.addChoiceGroup(this, GameFeatureChoiceGroups.getExclusiveInstance().get(), ChoiceI.EXCLUSIVE);
        gameFeatureFormUtil.addChoiceGroup(this, GameFeatureChoiceGroups.getMultipleInstance().get(), ChoiceI.MULTIPLE);
        this.initCommands(commandListener);
        this.setItemStateListener(new GameFeatureItemStateListener(this));
        this.addTextFieldsIfSimulated();
    }
    //@Throws(Exception.constructor)
    closeClientInformation(abeClientInformation) {
        super.close();
        this.save(abeClientInformation);
    }
    addTextFieldsIfSimulated() {
        var key = OrientationData.getInstance().ORIENTATION_SENSOR_INPUT;
        ;
        var hashtable = GameFeatureChoiceGroups.getExclusiveInstance().get();
        ;
        if (hashtable !=
            null) {
            var listCanBeNull = hashtable.get(key);
            ;
            if (listCanBeNull !=
                null) {
                var list = listCanBeNull;
                ;
                if (list.contains(SensorFeatureFactory.getInstance().SIMULATED_ORIENTATION_SENSORS)) {
                    this.addTextFields();
                }
            }
        }
    }
    addTextFields() {
        var hashtable = GameConfigurationTextInput.getHashtable();
        ;
        var size = hashtable.length;
        ;
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        var gameConfigurationTextInput;
        ;
        var textField;
        ;
        for (var index = 0; index < size; index++) {
            gameConfigurationTextInput = hashtable.get(objectArray[index]);
            textField = new TextField(gameConfigurationTextInput.getLabel(), gameConfigurationTextInput.getText(), 30, TextField.ANY);
            this.append(textField);
        }
    }
    addConfiguration() {
        var METHOD_NAME = "addConfiguration";
        ;
        var NAME = "Name: ";
        ;
        var list = GameConfigurationSingleton.getInstance().getOptionsBasicArrayList();
        ;
        var GAUGE_CHANGE = MyCommandsFactory.getInstance().GAUGE_CHANGE;
        ;
        var stringMaker = new StringMaker();
        ;
        var size = list.size();
        ;
        var gameConfiguration;
        ;
        var gauge;
        ;
        for (var index = 0; index < size; index++) {
            gameConfiguration = list.objectArray[index];
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.append(NAME).append(gameConfiguration.toString()).toString(), this, METHOD_NAME);
            gauge = new GameConfigurationGauge(gameConfiguration);
            gauge.setDefaultCommand(GAUGE_CHANGE);
            gauge.setItemCommandListener(new GameFeatureItemCommandListener(this));
            this.append(gauge);
        }
    }
    initCommands(cmdListener) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        this.removeAllCommands();
        this.addCommand(gameCommandsFactory.CLOSE_OPTIONS);
        this.addCommand(gameCommandsFactory.DEFAULT_OPTIONS);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation) {
        var size = this.size();
        ;
        var item;
        ;
        for (var index = 0; index < size; index++) {
            item = this.get(index);
            if (item instanceof GameConfigurationGauge) {
                GameConfigurationUtil.getInstance().update(item);
            }
            else if (item instanceof TextField) {
                GameConfigurationTextInput.update(item);
            }
        }
        GameConfigurationUtil.getInstance().updateCompetitionValue();
        var hashtable = new Hashtable();
        ;
        var SCALE = GameConfigurationCentral.getInstance().SCALE;
        ;
        hashtable.put(SCALE.getName(), SCALE.getValue().toString());
        var keyValuePersistance = GameConfigurationPersistanceSingleton.getInstance();
        ;
        keyValuePersistance.clear();
        keyValuePersistance.loadAll(abeClientInformation);
        var list = keyValuePersistance.getIds();
        ;
        keyValuePersistance.save(abeClientInformation, hashtable);
        var size2 = list.size();
        ;
        var integer;
        ;
        for (var index = 0; index < size2; index++) {
            integer = list.objectArray[index];
            keyValuePersistance.delete(abeClientInformation, integer.intValue());
        }
    }
}
