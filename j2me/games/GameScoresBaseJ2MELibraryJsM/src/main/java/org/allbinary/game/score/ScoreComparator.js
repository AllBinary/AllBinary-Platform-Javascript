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
//not GWT import const ByteArrayInputStream
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
//not GWT import const DataInputStream
import { EOFException } from '../../../../java/io/EOFException.js';
//not GWT import const EOFException
import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException
import { RecordComparatorI } from '../../../../javax/microedition/rms/RecordComparator.js';
//not GWT import const RecordComparator
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScoreComparator extends Object {
    constructor(isHighestBest) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.isHighestBest = isHighestBest;
    }
    getBestScore() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (this.isHighestBest ? Long.MAX_VALUE : 0);
    }
    compare(recordOne, recordTwo) {
        let byteArrayInputStreamOne = new ByteArrayInputStream(recordOne);
        ;
        let inputStreamOne = new DataInputStream(byteArrayInputStreamOne);
        ;
        let byteArrayInputStreamTwo = new ByteArrayInputStream(recordTwo);
        ;
        let inputStreamTwo = new DataInputStream(byteArrayInputStreamTwo);
        ;
        let scoreOne = 0;
        ;
        let scoreTwo = 0;
        ;
        try {
            inputStreamOne.readUTF();
            inputStreamTwo.readUTF();
            scoreOne = inputStreamOne.readLong();
            scoreTwo = inputStreamTwo.readLong();
        }
        catch (caught) {
            if (caught instanceof EOFException) {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, "compare", e);
            }
            else if (caught instanceof IOException) {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, "compare", e);
            }
            else {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, "compare", e);
            }
        }
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
