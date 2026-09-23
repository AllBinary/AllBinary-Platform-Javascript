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
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
//not GWT import const HighScore
import { HighScoreNamePersistanceSingleton } from '../../../../../org/allbinary/game/score/HighScoreNamePersistanceSingleton.js';
//not GWT import const MyCanvas
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoreUtil extends Object {
    constructor(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.firstTime = true;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.highScoresHelper = highScoresHelper;
        this.highScoresArray = this.highScoresHelper.getHighScoresArray();
        this.highScore = highScore;
        this.abeClientInformation = abeClientInformation;
        this.gameInfo = gameInfo;
    }
    setHighScoresArray(highScoresArray) {
        this.highScoresArray = highScoresArray;
        this.firstTime = false;
        this.saveHighScore();
    }
    update(name) {
        HighScoreNamePersistanceSingleton.getInstance().save(this.abeClientInformation, this.gameInfo, name);
        this.highScore.setName(name);
    }
    saveHighScore() {
        this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(StringUtil.getInstance().toString(this.highScore)).toString(), this, "saveHighScore");
        var size = this.highScoresArray.length;
        ;
        if (this.firstTime && size == 0) {
            this.logUtil.putF("Games canvas did not give us any HighScores", this, "saveHighScore");
            this.highScoresFactoryInterface.fetchHighScores(this.gameInfo, this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var highScores;
        ;
        var highScoresAsString;
        ;
        for (var index = 0; index < size; index++) {
            highScores = this.highScoresArray[index];
            highScores.addHighScore(this.highScore);
            highScoresAsString = highScores.toString();
            this.logUtil.putF(new StringMaker().append("Added/Adding Score: ").append(highScoresAsString).toString(), this, "saveHighScore");
        }
        this.highScoresHelper.setHighScoresArray(this.highScoresArray);
    }
    submit(myCanvas) {
        var commandListener = myCanvas.getCustomCommandListener();
        ;
        commandListener.commandAction(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND, myCanvas);
    }
}
HighScoreUtil.SUBMIT_TEXTBOX_COMMAND = new Command("Submit", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
