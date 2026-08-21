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
import { GameInfoData } from '../../../../../org/allbinary/game/GameInfoData.js';
import { GameConfigurationCentral } from '../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
import { NoCrypt } from '../../../../../org/allbinary/logic/system/security/crypt/jcehelper/NoCrypt.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
import { RemoteHighScoresData } from './RemoteHighScoresData.js';
import { XmlRpcRemoteHighScoresClient } from './XmlRpcRemoteHighScoresClient.js';
export class RemoteHighScoresSubmissionProcessor extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.noCrypt = new NoCrypt();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    process(remoteHighScores, abeClientInformation, highScore) {
        try {
            this.logUtil.putF("Begin Remote HighScores Submission", this, this.commonStrings.PROCESS);
            var gameInfoData = GameInfoData.getInstance();
            ;
            var hashtable = abeClientInformation.toHashtable();
            ;
            HashtableUtil.getInstance().putAll(highScore.getGameInfo().toHashtable(), hashtable);
            hashtable.put(RemoteHighScoresData.getInstance().CUSTOMER_USER_NAME, "None");
            hashtable.put(RemoteHighScoresData.getInstance().DISPLAY_NAME, highScore.getName());
            hashtable.put(gameInfoData.SOFTWARE_INFORMATION, remoteHighScores.getSoftwareInformation().toString());
            hashtable.put(remoteHighScores.ASCENDING, remoteHighScores.getAscending().toString());
            var displayInfoSingleton = DisplayInfoSingleton.getInstance();
            ;
            hashtable.put(displayInfoSingleton.ORIENTATION, BooleanFactory.getInstance().toStringb(displayInfoSingleton.isPortrait()));
            hashtable.put(RemoteHighScoresData.getInstance().GAME_CONFIGURATION, GameConfigurationCentral.getInstance().toString());
            hashtable.put(RemoteHighScoresData.getInstance().SCORE, (highScore.getScore()).toString());
            if (XmlRpcAbeClient.isOnline) {
                var resultHashtable = new XmlRpcRemoteHighScoresClient(abeClientInformation, "highscoresubmissionservicessl.php", "HighScoreSubmissionService.process").get(hashtable, this.noCrypt);
                ;
                remoteHighScores.update(resultHashtable);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
}
