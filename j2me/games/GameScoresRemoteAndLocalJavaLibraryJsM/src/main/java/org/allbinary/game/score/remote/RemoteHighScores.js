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
import { Hashtable } from '../../../../../java/util/Hashtable.js';
import { HighScore } from '../../../../../org/allbinary/game/score/HighScore.js';
import { HighScores } from '../../../../../org/allbinary/game/score/HighScores.js';
import { RemoteErrorHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/RemoteErrorHighScoresSingletonFactory.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { EnumerationUtil } from '../../../../../org/allbinary/util/EnumerationUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RemoteHighScoresProcessorFactory } from './RemoteHighScoresProcessorFactory.js';
import { RemoteHighScoresSubmissionProcessorFactory } from './RemoteHighScoresSubmissionProcessorFactory.js';
import { RemoteHighScoresData } from './RemoteHighScoresData.js';
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
            var size = vector.length;
            ;
            for (var index = 0; index < size; index++) {
                var highScoreVector = vector.elementAt(index);
                ;
                var displayName = highScoreVector.elementAt(0);
                ;
                var score = highScoreVector.elementAt(1);
                ;
                var longScore = Long.parseLong(score);
                ;
                var highScore = new HighScore(-1, displayName, null, longScore);
                ;
                this.getList().add(highScore);
            }
        }
        else {
            var NEXT_ELEMENT = "NextElement: ";
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
RemoteHighScores.hashTable = new Hashtable();
