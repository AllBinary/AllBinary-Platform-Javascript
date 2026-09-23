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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScores } from './HighScores.js';
//not GWT import - same folder const HighScores
export class NullHighScoresSingletonFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullHighScoresSingletonFactory.SINGLETON;
    }
}
NullHighScoresSingletonFactory.SINGLETON = new HighScores(CommonStrings.getInstance().LOADING, "High Scores Not Loaded", CommonStrings.getInstance().PERIODS);
