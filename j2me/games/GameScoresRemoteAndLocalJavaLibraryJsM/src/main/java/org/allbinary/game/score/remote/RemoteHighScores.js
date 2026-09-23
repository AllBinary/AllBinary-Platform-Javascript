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
import { Long } from '../../../../../java/lang/Long.js';
//not GWT import const Enumeration
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const GameInfo
import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
//not GWT import const HighScore
import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
//not GWT import const HighScores
import { RemoteErrorHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/RemoteErrorHighScoresSingletonFactory.js';
//not GWT import const RemoteErrorHighScoresSingletonFactory
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RemoteHighScoresProcessorFactory } from './RemoteHighScoresProcessorFactory.js';
//not GWT import - same folder const RemoteHighScoresProcessorFactory
import { RemoteHighScoresSubmissionProcessorFactory } from './RemoteHighScoresSubmissionProcessorFactory.js';
//not GWT import - same folder const RemoteHighScoresSubmissionProcessorFactory
import { RemoteHighScoresData } from './RemoteHighScoresData.js';
//not GWT import - same folder const RemoteHighScoresData
export class RemoteHighScores extends HighScores {
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RemoteHighScores.getInstancePreload(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, true);
        ;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstancePreload(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, preload) {
        var logUtil = LogUtil.getInstance();
        ;
        try {
            var highScores = RemoteHighScores.hashTable.get(gameInfo);
            ;
            if (highScores ==
                null) {
                highScores = new RemoteHighScores(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, preload);
                RemoteHighScores.hashTable.put(gameInfo, highScores);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return highScores;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            logUtil.put(commonStrings.EXCEPTION, RemoteErrorHighScoresSingletonFactory.getInstance(), commonStrings.GET_INSTANCE, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return RemoteErrorHighScoresSingletonFactory.getInstance();
            ;
        }
    }
    constructor(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, ascending, preload) {
        super(gameInfo.toString(), heading, columnTwoHeading);
        this.logUtil = LogUtil.getInstance();
        this.enumerationUtil = EnumerationUtil.getInstance();
        this.ASCENDING = "ASCENDING";
        //For kotlin this is before the body of the constructor.
        this.abeClientInformation = abeClientInformation;
        this.softwareInformation = softwareInformation;
        this.setAscending(ascending);
        if (preload) {
            RemoteHighScoresProcessorFactory.getInstance().process(this, this.abeClientInformation, gameInfo);
        }
    }
    addHighScore(newHighScore) {
        RemoteHighScoresSubmissionProcessorFactory.getInstance().process(this, this.abeClientInformation, newHighScore);
    }
    update(hashtable) {
        this.getList().clear();
        var vector = hashtable.get(RemoteHighScoresData.getInstance().HIGH_SCORES);
        ;
        if (vector !=
            null) {
            var size = vector.size();
            ;
            for (var index = 0; index < size; index++) {
                var highScoreVector = vector.get(index);
                ;
                var displayName = highScoreVector.get(0);
                ;
                var score = highScoreVector.get(1);
                ;
                var longScore = Long.parseLong(score);
                ;
                var highScore = new HighScore(-1, displayName, null, longScore);
                ;
                this.getList().add(highScore);
            }
        }
        else {
            var NEXT_ELEMENT = new StringMaker().append(CommonLabels.getInstance().NEXT).append("Element: ").toString();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            var enumeration = hashtable.elements();
            ;
            var nextElement;
            ;
            while (this.enumerationUtil.hasMoreElements(enumeration)) {
                nextElement = this.enumerationUtil.nextElement(enumeration);
                this.logUtil.putF(NEXT_ELEMENT + nextElement, this, commonStrings.PROCESS);
            }
        }
    }
    setAscending(ascending) {
        this.ascending = ascending;
    }
    getAscending() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ascending;
    }
    getSoftwareInformation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.softwareInformation;
    }
}
RemoteHighScores.hashTable = StdUtil.getInstance().createHashtable();
