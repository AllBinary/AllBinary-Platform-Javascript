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
import { Exception } from '../../../../../../java/lang/Exception.js';
import { HashMap } from '../../../../../../java/util/HashMap.js';
import { OrderHistoryData } from '../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UserEmailEventNameData extends Object {
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static getInstance(userEmailEventNameString) {
        var userEmailEventNameData = UserEmailEventNameData.userNameEvenNameHashMap.get(userEmailEventNameString);
        ;
        if (userEmailEventNameData ==
            null) {
            throw new Exception();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return userEmailEventNameData;
        }
    }
    constructor(eventHandlerName) {
        super();
        this.eventNameId = 0;
        this.eventHandlerName = eventHandlerName;
        this.initNextId();
        UserEmailEventNameData.userNameEvenNameHashMap.put(this.eventHandlerName, this);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    initNextId() {
        this.eventNameId = UserEmailEventNameData.nextId;
        UserEmailEventNameData.nextId++;
    }
    isEvent(userEmailEventNameString) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UserEmailEventNameData.userNameEvenNameHashMap.containsKey(userEmailEventNameString);
        ;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.eventHandlerName;
    }
}
UserEmailEventNameData.userNameEvenNameHashMap = new HashMap();
UserEmailEventNameData.nextId = 0;
UserEmailEventNameData.INSTALLER = new UserEmailEventNameData("Installer");
UserEmailEventNameData.EXCEPTION = new UserEmailEventNameData("Exception");
UserEmailEventNameData.LOGGEDEXCEPTION = new UserEmailEventNameData("Logged Exception");
UserEmailEventNameData.ERROR = new UserEmailEventNameData("Error");
UserEmailEventNameData.OUTOFMEMORY = new UserEmailEventNameData("Out Of Memory Error");
UserEmailEventNameData.ADMINGENERATINGSTATICPAGES = new UserEmailEventNameData("Admin Generating Static Pages");
UserEmailEventNameData.STOREERROROCCURRED = new UserEmailEventNameData("Store Error Occurred");
UserEmailEventNameData.STOREOUTOFMEMORY = new UserEmailEventNameData("Store Out Of Memory Error");
UserEmailEventNameData.STORECREATED = new UserEmailEventNameData("Store Created");
UserEmailEventNameData.STOREOPENED = new UserEmailEventNameData("Store Opened");
UserEmailEventNameData.STORECLOSED = new UserEmailEventNameData("Store Closed");
UserEmailEventNameData.STOREGENERATINGSTATICPAGES = new UserEmailEventNameData("Store Generating Static Pages");
UserEmailEventNameData.PRODUCTISOUT = new UserEmailEventNameData("Product Is Out");
UserEmailEventNameData.PRODUCTISAVAILABLE = new UserEmailEventNameData("Product Is Available");
UserEmailEventNameData.PRODUCTISOLD = new UserEmailEventNameData("Product Is Old");
UserEmailEventNameData.PRODUCTISONSALE = new UserEmailEventNameData("Product Is On Sale");
UserEmailEventNameData.PRODUCTSALEISOVER = new UserEmailEventNameData("Product Sale Is Over");
UserEmailEventNameData.ORDERPREPROCESSING = new UserEmailEventNameData(OrderHistoryData.PREPROCESSING);
UserEmailEventNameData.ORDERPROCESSING = new UserEmailEventNameData(OrderHistoryData.PROCESSING);
UserEmailEventNameData.ORDERCANCELLED = new UserEmailEventNameData(OrderHistoryData.CANCELLED);
UserEmailEventNameData.ORDERPARTIALLYSHIPPED = new UserEmailEventNameData(OrderHistoryData.PARTIALLYSHIPPED);
UserEmailEventNameData.ORDERSHIPPED = new UserEmailEventNameData(OrderHistoryData.SHIPPED);
UserEmailEventNameData.QUOTEREQUEST = new UserEmailEventNameData("Quote Request");
UserEmailEventNameData.NEWPASSWORD = new UserEmailEventNameData("New Password");
