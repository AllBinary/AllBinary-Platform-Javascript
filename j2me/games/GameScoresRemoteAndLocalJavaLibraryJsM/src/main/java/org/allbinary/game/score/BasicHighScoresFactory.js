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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
import { BasicHighScoresGameInfoFactory } from '../../../../org/allbinary/game/BasicHighScoresGameInfoFactory.js';
//not GWT import const GameType = globalThis.org.allbinary.game.GameType;
import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;
import { RemoteHighScores } from '../../../../org/allbinary/game/score/remote/RemoteHighScores.js';
//not GWT import const RemoteHighScores = globalThis.org.allbinary.game.score.remote.RemoteHighScores;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { SecondaryThreadPool } from '../../../../org/allbinary/thread/SecondaryThreadPool.js';
//not GWT import const SecondaryThreadPool = globalThis.org.allbinary.thread.SecondaryThreadPool;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresBase } from './HighScoresBase.js';
//not GWT import const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;
import { RecordStoreHighScores } from './RecordStoreHighScores.js';
//not GWT import const RecordStoreHighScores = globalThis.org.allbinary.game.score.RecordStoreHighScores;
import { ScoreComparator } from './ScoreComparator.js';
//not GWT import const ScoreComparator = globalThis.org.allbinary.game.score.ScoreComparator;
import { LastFetchHighScoresFactory } from './LastFetchHighScoresFactory.js';
//not GWT import const LastFetchHighScoresFactory = globalThis.org.allbinary.game.score.LastFetchHighScoresFactory;
import { HighScoresHelper2 } from './HighScoresHelper2.js';
//not GWT import const HighScoresHelperBaseInterface = globalThis.org.allbinary.game.score.HighScoresHelperBaseInterface;
export class BasicHighScoresFactory extends HighScoresBase {
    static loaded(index2) {
        if (index2 >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    constructor(abeClientInformation, softwareInformation) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.highScoresArray = new Array(2);
        this.TOP = "Top";
        this.SCORES = "Scores";
        this.PERSONAL_HIGH_SCORES = "Personal Top Scores";
        this.WORLD_TOP_SCORES = "World Top Scores";
        this.FETCH = "fetchHighScores";
        this.abeClientInformation = abeClientInformation;
        this.softwareInformation = softwareInformation;
    }
    fetchHighScores(gameInfo, highScoresResultsListener) {
        this.logUtil.putF("Getting Remote/Local HighScores", this, this.FETCH);
        this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true);
    }
    fetchHighScoresPreload(gameInfo, highScoresResultsListener, preload) {
        SecondaryThreadPool.getInstance().runTask(new class extends ARunnable {
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                try {
                    logUtil.putF(BasicHighScoresFactory.prototype.commonStrings.START, this, FETCH);
                    highScoresArray[0] = RecordStoreHighScores.getInstance(abeClientInformation, gameInfo, TOP, PERSONAL_HIGH_SCORES, SCORES, new ScoreComparator(true));
                    var gameType = gameInfo.getGameType();
                    ;
                    var gameTypeFactory = GameTypeFactory.getInstance();
                    ;
                    var gameInfo2 = gameInfo;
                    ;
                    if (gameType == gameTypeFactory.SINGLE_PLAYER || gameType == gameTypeFactory.BOT) {
                        gameInfo2 = BasicHighScoresGameInfoFactory.getInstance().SINGLE_PLAYER_SERVER;
                    }
                    else if (gameType == gameTypeFactory.MULTI_PLAYER) {
                        gameInfo2 = BasicHighScoresGameInfoFactory.getInstance().MULTI_PLAYER_SERVER;
                    }
                    highScoresArray[1] = RemoteHighScores.getInstancePreload(abeClientInformation, softwareInformation, gameInfo2, WORLD_TOP_SCORES, SCORES, BooleanFactory.getInstance().FALSE, preload);
                    logUtil.putF(BasicHighScoresFactory.prototype.commonStrings.END, this, FETCH);
                    LastFetchHighScoresFactory.getInstance().highScoresArray = highScoresArray;
                    highScoresResultsListener.setHighScoresArray(highScoresArray);
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, FETCH, e);
                }
            }
        });
    }
    createHighScoresHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new HighScoresHelper2();
    }
}
