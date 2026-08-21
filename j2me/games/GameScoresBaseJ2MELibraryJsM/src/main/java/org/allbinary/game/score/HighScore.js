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
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScore extends Object {
    constructor(id, name, gameInfo, score) {
        super();
        this.id = id;
        this.name = name;
        this.gameInfo = gameInfo;
        this.score = score;
        this.scoreString = (this.score).toString();
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getScore() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.score;
    }
    //@Throws(Exception.constructor)
    getAsBytes() {
        var byteArrayOutputStream = new ByteArrayOutputStream();
        ;
        var outputStream = new DataOutputStream(byteArrayOutputStream);
        ;
        outputStream.writeUTF(this.getName());
        outputStream.writeLong(this.getScore());
        //if statement needs to be on the same line and ternary does not work the same way.
        return byteArrayOutputStream.toByteArray();
        ;
    }
    getGameInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInfo;
    }
    getScoreString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scoreString;
    }
    setName(name) {
        this.name = name;
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(this.name).append(commonSeps.COLON).appendlong(this.score).append(commonSeps.FORWARD_SLASH).append(this.scoreString).toString();
        ;
    }
}
