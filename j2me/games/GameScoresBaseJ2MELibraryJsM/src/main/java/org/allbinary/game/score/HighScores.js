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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const HighScore = globalThis.org.allbinary.game.score.HighScore;
export class HighScores extends Object {
    constructor(name, heading, columnTwoHeading) {
        super();
        this.orderedHighScoresList = new BasicArrayListD();
        this.columnOneHeading = "Name";
        this.name = name;
        this.heading = heading;
        this.columnTwoHeading = columnTwoHeading;
    }
    setList(orderedHighScoresList) {
        this.orderedHighScoresList = orderedHighScoresList;
    }
    getList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.orderedHighScoresList;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getTotal() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getList().size();
        ;
    }
    addHighScore(newHighScore) {
        this.orderedHighScoresList.add(newHighScore);
    }
    getHeading() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.heading;
    }
    getColumnOneHeading() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.columnOneHeading;
    }
    getColumnTwoHeading() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.columnTwoHeading;
    }
    //@Throws(Exception.constructor)
    isBestScore(newHighScore) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("HighScores: ");
        stringBuffer.append(this.heading);
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(CommonLabels.getInstance().TOTAL_LABEL);
        stringBuffer.appendint(this.orderedHighScoresList.size());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
