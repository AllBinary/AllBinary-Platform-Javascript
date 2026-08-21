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
import { Long } from '../../../../java/lang/Long.js';
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
import { RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScoreComparator extends Object {
    constructor(isHighestBest) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.isHighestBest = isHighestBest;
    }
    getBestScore() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isHighestBest
            ?
                Long.MAX_VALUE
            :
                0;
        ;
    }
    compare(recordOne, recordTwo) {
        var byteArrayInputStreamOne = new ByteArrayInputStream(recordOne);
        ;
        var inputStreamOne = new DataInputStream(byteArrayInputStreamOne);
        ;
        var byteArrayInputStreamTwo = new ByteArrayInputStream(recordTwo);
        ;
        var inputStreamTwo = new DataInputStream(byteArrayInputStreamTwo);
        ;
        var scoreOne = 0;
        ;
        var scoreTwo = 0;
        ;
        try {
            inputStreamOne.readUTF();
            inputStreamTwo.readUTF();
            scoreOne = inputStreamOne.readLong();
            scoreTwo = inputStreamTwo.readLong();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "compare", e);
        }
        //: 
        /* catch(e)
                    {
        
            var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
            
        this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e);
            
        }
        */
        //: 
        /* catch(e)
                    {
        
            var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
            
        this.logUtil!.put(commonStrings!.EXCEPTION, this, "compare", e);
            
        }
        */
        if (this.isHighestBest) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getHighTooLow(scoreOne, scoreTwo);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.getLowTooHigh(scoreOne, scoreTwo);
            ;
        }
    }
    getHighTooLow(scoreOne, scoreTwo) {
        if (scoreOne > scoreTwo) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.PRECEDES;
        }
        else if (scoreOne < scoreTwo) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.FOLLOWS;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.EQUIVALENT;
        }
    }
    getLowTooHigh(scoreOne, scoreTwo) {
        if (scoreOne < scoreTwo) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.PRECEDES;
        }
        else if (scoreOne > scoreTwo) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.FOLLOWS;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return RecordComparatorI.EQUIVALENT;
        }
    }
}
