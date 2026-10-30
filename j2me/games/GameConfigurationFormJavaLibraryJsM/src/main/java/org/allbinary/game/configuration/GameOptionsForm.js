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
import { ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
//not GWT import const Item
import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
//not GWT import const TextField
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory
import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
//not GWT import const GameFeatureChoiceGroups
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
//not GWT import const GameFeatureFormUtil
import { GameFeatureItemCommandListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js';
//not GWT import const GameFeatureItemCommandListener
import { GameFeatureItemStateListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js';
//not GWT import const GameFeatureItemStateListener
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory
import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
//not GWT import const BasicColor
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm
import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
//not GWT import const OrientationData
import { MEUtil } from '../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface
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
//sameFolderImports - not GWT import - same folder const GameConfigurationTextInput
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//sameFolderImports - not GWT import - same folder const GameConfiguration
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationGauge
import { GameConfigurationUtil } from './GameConfigurationUtil.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationUtil
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationCentral
export class GameOptionsForm extends CommandForm {
    constructor(commandListener, title, backgrounBasicColor, foregroundBasicColor) {
        super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.meUtil = MEUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.addConfiguration();
        let gameFeatureFormUtil = GameFeatureFormUtil.getInstance();
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
        let key = OrientationData.getInstance().ORIENTATION_SENSOR_INPUT;
        ;
        let hashtable = GameFeatureChoiceGroups.getExclusiveInstance().get();
        ;
        if (hashtable !=
            null) {
            let listCanBeNull = hashtable.get(key);
            ;
            if (listCanBeNull !=
                null) {
                let list = listCanBeNull;
                ;
                if (list.contains(SensorFeatureFactory.getInstance().SIMULATED_ORIENTATION_SENSORS)) {
                    this.addTextFields();
                }
            }
        }
    }
    addTextFields() {
        let hashtable = GameConfigurationTextInput.getHashtable();
        ;
        let size = hashtable.size();
        ;
        let objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        let gameConfigurationTextInput;
        ;
        let textField;
        ;
        for (let index = 0; index < size; index++) {
            gameConfigurationTextInput = hashtable.get(objectArray[index]);
            textField = new TextField(gameConfigurationTextInput.getLabel(), gameConfigurationTextInput.getText(), 30, TextField.ANY);
            this.meUtil.appendItem(this, textField);
        }
    }
    addConfiguration() {
        let METHOD_NAME = "addConfiguration";
        ;
        let NAME = "Name: ";
        ;
        let list = GameConfigurationSingleton.getInstance().getOptionsBasicArrayList();
        ;
        let GAUGE_CHANGE = MyCommandsFactory.getInstance().GAUGE_CHANGE;
        ;
        let stringMaker = new StringMaker();
        ;
        let size = list.size();
        ;
        let gameConfiguration;
        ;
        let gauge;
        ;
        for (let index = 0; index < size; index++) {
            gameConfiguration = list.objectArray[index];
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.append(NAME).append(gameConfiguration.toString()).toString(), this, METHOD_NAME);
            gauge = new GameConfigurationGauge(gameConfiguration);
            gauge.setDefaultCommand(GAUGE_CHANGE);
            gauge.setItemCommandListener(new GameFeatureItemCommandListener(this));
            this.meUtil.appendItem(this, gauge);
        }
    }
    initCommands(cmdListener) {
        let gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        this.removeAllCommands();
        this.addCommand(gameCommandsFactory.CLOSE_OPTIONS);
        this.addCommand(gameCommandsFactory.DEFAULT_OPTIONS);
        this.setCommandListener(cmdListener);
    }
    //@Throws(Exception.constructor)
    save(abeClientInformation) {
        let size = this.size();
        ;
        let item;
        ;
        for (let index = 0; index < size; index++) {
            item = this.get(index);
            if (item instanceof GameConfigurationGauge) {
                GameConfigurationUtil.getInstance().update(item);
            }
            else if (item instanceof TextField) {
                GameConfigurationTextInput.update(item);
            }
        }
        GameConfigurationUtil.getInstance().updateCompetitionValue();
        let hashtable = StdUtil.getInstance().createHashtable();
        ;
        let SCALE = GameConfigurationCentral.getInstance().SCALE;
        ;
        hashtable.put(SCALE.getName(), SCALE.getValue().toString());
        let keyValuePersistance = GameConfigurationPersistanceSingleton.getInstance();
        ;
        keyValuePersistance.clear();
        keyValuePersistance.loadAll(abeClientInformation);
        let list = keyValuePersistance.getIds();
        ;
        keyValuePersistance.save(abeClientInformation, hashtable);
        let size2 = list.size();
        ;
        let integer;
        ;
        for (let index = 0; index < size2; index++) {
            integer = list.objectArray[index];
            keyValuePersistance.delete(abeClientInformation, integer.intValue());
        }
    }
}
