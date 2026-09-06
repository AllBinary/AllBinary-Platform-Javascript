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
//not plain js import { Choice } 
const Choice = globalThis.javax.microedition.lcdui.Choice;
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;
//not plain js import { TextField } 
const TextField = globalThis.javax.microedition.lcdui.TextField;
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;
import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
//not GWT import const GameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.GameFeatureChoiceGroups;
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
//not GWT import const GameFeatureFormUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureFormUtil;
import { GameFeatureItemCommandListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js';
//not GWT import const GameFeatureItemCommandListener = globalThis.org.allbinary.game.configuration.feature.GameFeatureItemCommandListener;
import { GameFeatureItemStateListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js';
//not GWT import const GameFeatureItemStateListener = globalThis.org.allbinary.game.configuration.feature.GameFeatureItemStateListener;
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;
import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;
import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
//not GWT import const OrientationData = globalThis.org.allbinary.input.gyro.OrientationData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameConfigurationTextInput } from './GameConfigurationTextInput.js';
//not GWT import - same folder const GameConfigurationTextInput = globalThis.org.allbinary.game.configuration.GameConfigurationTextInput;
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//not GWT import - same folder const GameConfiguration = globalThis.org.allbinary.game.configuration.GameConfiguration;
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
//not GWT import - same folder const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;
import { GameConfigurationUtil } from './GameConfigurationUtil.js';
//not GWT import - same folder const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
//not GWT import - same folder const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
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
        var size = hashtable.size();
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
        var hashtable = StdUtil.getInstance().createHashtable();
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
