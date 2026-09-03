/* Generated Code Do Not Modify */
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresBase } from './HighScoresBase.js';
//not GWT import const HighScoresResultsListener = globalThis.org.allbinary.game.score.HighScoresResultsListener;
import { RecordStoreHighScores } from './RecordStoreHighScores.js';
//not GWT import const RecordStoreHighScores = globalThis.org.allbinary.game.score.RecordStoreHighScores;
import { ScoreComparator } from './ScoreComparator.js';
//not GWT import const ScoreComparator = globalThis.org.allbinary.game.score.ScoreComparator;
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
        this.highScoresArray = new Array(1);
        this.TOP = "Top";
        this.SCORES = "Scores";
        this.PERSONAL_HIGH_SCORES = "Personal Top Scores";
        this.FETCH = "fetchHighScores";
        this.abeClientInformation = abeClientInformation;
    }
    fetchHighScores(gameInfo, highScoresResultsListener) {
        this.logUtil.putF("Getting Local HighScores", this, this.FETCH);
        this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true);
    }
    fetchHighScoresPreload(gameInfo, highScoresResultsListener, preload) {
        try {
            this.highScoresArray[0] = RecordStoreHighScores.getInstance(this.abeClientInformation, gameInfo, this.TOP, this.PERSONAL_HIGH_SCORES, this.SCORES, new ScoreComparator(true));
            highScoresResultsListener.setHighScoresArray(this.highScoresArray);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.FETCH, e);
        }
    }
    createHighScoresHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new HighScoresHelper2();
    }
}
