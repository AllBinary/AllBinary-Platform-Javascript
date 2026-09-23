/* Generated Code Do Not Modify */
//not GWT import const GameInfo
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AbeClientInformationInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresBase } from './HighScoresBase.js';
//not GWT import - same folder const HighScoresResultsListener
import { RecordStoreHighScores } from './RecordStoreHighScores.js';
//not GWT import - same folder const RecordStoreHighScores
import { ScoreComparator } from './ScoreComparator.js';
//not GWT import - same folder const ScoreComparator
import { HighScoresHelper2 } from './HighScoresHelper2.js';
//not GWT import - same folder const HighScoresHelperBaseInterface
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
