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
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import - same folder const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;
export class DbConnectionInfo extends Object {
    constructor() {
        super();
        this.SCHEMA_SEP = "://";
        this.USER_NAME_KEY = "?user=";
        this.PASSWORD_KEY = "&password=";
    }
    updateUrl() {
        this.updateHost();
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.getHost());
        stringBuffer.append(this.getName());
        stringBuffer.append(this.getUserNameKey());
        stringBuffer.append(this.getUserName());
        stringBuffer.append(this.getPasswordKey());
        stringBuffer.append(this.getPassword());
        this.url = stringBuffer.toString();
    }
    getUrl() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.url;
    }
    getJdbcDriver() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.jdbcDriver;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.userName;
    }
    getPassword() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.password;
    }
    updateHost() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.getSchema());
        stringBuffer.append(this.SCHEMA_SEP);
        stringBuffer.append(this.getServer());
        if (this.getPort() !=
            null
            && this.getPort().length() > 1) {
            stringBuffer.append(CommonSeps.getInstance().COLON);
            stringBuffer.append(this.getPort());
        }
        stringBuffer.append(AbPathData.getInstance().SEPARATOR);
        this.host = stringBuffer.toString();
    }
    getHost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.host;
    }
    getSchema() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.schema;
    }
    getServer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.server;
    }
    getPort() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.port;
    }
    setJdbcDriver(value) {
        this.jdbcDriver = value;
    }
    setName(value) {
        this.name = value;
        this.updateUrl();
    }
    setUserName(value) {
        this.userName = value;
        this.updateUrl();
    }
    setPassword(value) {
        this.password = value;
        this.updateUrl();
    }
    setSchema(value) {
        this.schema = value;
        this.updateUrl();
    }
    setServer(value) {
        this.server = value;
        this.updateUrl();
    }
    setPort(value) {
        this.port = value;
        this.updateUrl();
    }
    getUserNameKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.USER_NAME_KEY;
    }
    getPasswordKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.PASSWORD_KEY;
    }
}
