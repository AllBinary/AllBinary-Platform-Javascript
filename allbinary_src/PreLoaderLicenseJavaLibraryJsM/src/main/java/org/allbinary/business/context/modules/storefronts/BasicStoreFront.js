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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const HashMap
import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData
import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData
import { UserData } from '../../../../../../org/allbinary/business/user/UserData.js';
//not GWT import const UserData
import { Tokenizer } from '../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const BasicStoreFrontInterface
export class BasicStoreFront extends Object {
    constructor() {
        super();
    }
    constructor(storeHashMap) {
        super();
        var storeFrontData = StoreFrontData.getInstance();
        ;
        this.name = storeHashMap.get(storeFrontData.NAME);
        this.userName = storeHashMap.get(UserData.USERNAME);
        this.basketName = storeHashMap.get(storeFrontData.NAME);
        this.homeHostName = storeHashMap.get(storeFrontData.HOMEHOSTNAME);
        this.homeHostNamePath = storeHashMap.get(storeFrontData.HOMEHOSTNAMEPATH);
        this.hostName = storeHashMap.get(storeFrontData.HOSTNAME);
        this.hostNamePath = storeHashMap.get(storeFrontData.HOSTNAMEPATH);
        this.testHomeHostName = storeHashMap.get(storeFrontData.TESTHOMEHOSTNAME);
        this.testHomeHostNamePath = storeHashMap.get(storeFrontData.TESTHOMEHOSTNAMEPATH);
        this.testHostName = storeHashMap.get(storeFrontData.TESTHOSTNAME);
        this.testHostNamePath = storeHashMap.get(storeFrontData.TESTHOSTNAMEPATH);
        this.imagePath = storeHashMap.get(storeFrontData.IMAGEPATH);
        this.staticPath = storeHashMap.get(storeFrontData.STATICPATH);
        this.categoryPath = storeHashMap.get(storeFrontData.CATEGORYPATH);
        this.inventoryControl = storeHashMap.get(storeFrontData.INVENTORYCONTROL);
        this.subStores = storeHashMap.get(storeFrontData.SUBSTORES);
        this.tagLocation = storeHashMap.get(storeFrontData.TAGLOCATION);
        this.packageLocation = storeHashMap.get(storeFrontData.PACKAGELOCATION);
        this.ftp = storeHashMap.get(storeFrontData.FTP);
        this.ftpPath = storeHashMap.get(storeFrontData.FTPPATH);
        this.ftpUserName = storeHashMap.get(storeFrontData.FTPUSERNAME);
        this.ftpPassword = storeHashMap.get(storeFrontData.FTPPASSWORD);
        this.testFtp = storeHashMap.get(storeFrontData.TESTFTP);
        this.testFtpPath = storeHashMap.get(storeFrontData.TESTFTPPATH);
        this.testFtpUserName = storeHashMap.get(storeFrontData.TESTFTPUSERNAME);
        this.testFtpPassword = storeHashMap.get(storeFrontData.TESTFTPPASSWORD);
        this.timeCreated = storeHashMap.get(EntryData.getInstance().TIMECREATED);
        this.lastModified = storeHashMap.get(EntryData.getInstance().LASTMODIFIED);
    }
    getTestHtmlPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return org.allbinary.globals.URLGLOBALS.getTestHtmlPath() + this.getCurrentHostNamePath();
    }
    getCurrentHostName() {
        var location = null;
        ;
        if (org.allbinary.globals.URLGLOBALS.isTestingMode()) {
            location = this.getTestHostName();
        }
        else {
            location = this.getHostName();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return location;
    }
    getCurrentHostNamePath() {
        var location = null;
        ;
        if (org.allbinary.globals.URLGLOBALS.isTestingMode()) {
            location = this.getTestHostNamePath();
        }
        else {
            location = this.getHostNamePath();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return location;
    }
    getCurrentHomeHostName() {
        var location = null;
        ;
        if (org.allbinary.globals.URLGLOBALS.isTestingMode()) {
            location = this.getTestHomeHostName();
        }
        else {
            location = this.getHomeHostName();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return location;
    }
    getCurrentHomeHostNamePath() {
        var location = null;
        ;
        if (org.allbinary.globals.URLGLOBALS.isTestingMode()) {
            location = this.getTestHomeHostNamePath();
        }
        else {
            location = this.getHomeHostNamePath();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return location;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.userName;
    }
    getBasketName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basketName;
    }
    getHomeHostName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.homeHostName;
    }
    getHomeHostNamePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.homeHostNamePath;
    }
    getHostName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hostName;
    }
    getHostNamePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hostNamePath;
    }
    getTestHomeHostName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testHomeHostName;
    }
    getTestHomeHostNamePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testHomeHostNamePath;
    }
    getTestHostName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testHostName;
    }
    getTestHostNamePath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testHostNamePath;
    }
    getStaticPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.staticPath;
    }
    getCategoryPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.categoryPath;
    }
    getInventoryControl() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inventoryControl;
    }
    //@Throws(Exception.constructor)
    getSubStores() {
        try {
            var tokenizer = new Tokenizer(CommonSeps.getInstance().SEMICOLON);
            ;
            var subStoreVector = tokenizer.getTokensFromString(this.subStores, new BasicArrayListD());
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return subStoreVector;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    getTagLocation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tagLocation;
    }
    getPackageLocation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.packageLocation;
    }
    getFtp() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ftp;
    }
    getFtpUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ftpUserName;
    }
    getFtpPassword() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ftpPassword;
    }
    getTestFtp() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testFtp;
    }
    getTestFtpUserName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testFtpUserName;
    }
    getTestFtpPassword() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testFtpPassword;
    }
    getFtpPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ftpPath;
    }
    getTestFtpPath() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.testFtpPath;
    }
    getTimeCreated() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.timeCreated;
    }
    getLastModified() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastModified;
    }
}
