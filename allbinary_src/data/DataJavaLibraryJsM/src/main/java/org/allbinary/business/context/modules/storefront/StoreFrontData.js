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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StoreFrontData extends Object {
    constructor() {
        super(...arguments);
        this.CANCEL = "Cancel Store Front";
        this.SELECT = "Select Store Front";
        this.INSTALL = "Install Store Front";
        this.INSTALL_COMPLETE = "Install Store Front Complete";
        this.NAME = "STOREFRONT_NAME";
        this.CURRENTHOSTNAME = "STOREFRONT_CURRENTHOSTNAME";
        this.CURRENTHOSTNAMEPATH = "STOREFRONT_CURRENTHOSTNAMEPATH";
        this.CURRENTHOMEHOSTNAME = "STOREFRONT_CURRENTHOMEHOSTNAME";
        this.CURRENTHOMEHOSTNAMEPATH = "STOREFRONT_CURRENTHOMEHOSTNAMEPATH";
        this.HOMEHOSTNAME = "STOREFRONT_HOMEHOSTNAME";
        this.HOMEHOSTNAMEPATH = "STOREFRONT_HOMEHOSTNAMEPATH";
        this.HOSTNAME = "STOREFRONT_HOSTNAME";
        this.HOSTNAMEPATH = "STOREFRONT_HOSTNAMEPATH";
        this.TESTHOMEHOSTNAME = "STOREFRONT_TESTHOMEHOSTNAME";
        this.TESTHOMEHOSTNAMEPATH = "STOREFRONT_TESTHOMEHOSTNAMEPATH";
        this.TESTHOSTNAME = "STOREFRONT_TESTHOSTNAME";
        this.TESTHOSTNAMEPATH = "STOREFRONT_TESTHOSTNAMEPATH";
        this.IMAGEPATH = "STOREFRONT_IMAGEPATH";
        this.STATICPATH = "STOREFRONT_STATICPATH";
        this.CATEGORYPATH = "STOREFRONT_CATEGORYPATH";
        this.INVENTORYCONTROL = "STOREFRONT_INVENTORYCONTROL";
        this.CONFIGURATION = "STOREFRONT_CONFIGURATION";
        this.SUBSTORES = "STOREFRONT_SUBSTORES";
        this.TAGLOCATION = "STOREFRONT_TAGLOCATION";
        this.PACKAGELOCATION = "STOREFRONT_PACKAGELOCATION";
        this.FTP = "STOREFRONT_FTP";
        this.FTPPATH = "STOREFRONT_FTPPATH";
        this.FTPUSERNAME = "STOREFRONT_FTPUSERNAME";
        this.FTPPASSWORD = "STOREFRONT_FTPPASSWORD";
        this.TESTFTP = "STOREFRONT_TESTFTP";
        this.TESTFTPPATH = "STOREFRONT_TESTFTPPATH";
        this.TESTFTPUSERNAME = "STOREFRONT_TESTFTPUSERNAME";
        this.TESTFTPPASSWORD = "STOREFRONT_TESTFTPPASSWORD";
        this.SELECTSTORENAME = "STOREFRONT_SELECTSTORENAME";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StoreFrontData.instance;
    }
}
StoreFrontData.instance = new StoreFrontData();
