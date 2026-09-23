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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const NotificationManager
import { PendingIntent } from '../../../android/app/PendingIntent.js';
//not GWT import const PendingIntent
import { Context } from '../../../android/content/Context.js';
//not GWT import const Intent
import { AndroidInfoFactory } from '../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NotificationBuilder } from './NotificationBuilder.js';
//not GWT import - same folder const NotificationBuilder
import { NotificationBuilderAPI23 } from './NotificationBuilderAPI23.js';
//not GWT import - same folder const NotificationBuilderAPI23
import { CommandUriAction } from './CommandUriAction.js';
//not GWT import - same folder const CommandUriAction
export class NotificationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NotificationUtil.SINGLETON;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.notificationManager = ResourceUtil.getInstance().getContext().getSystemService(Context.NOTIFICATION_SERVICE);
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION > 22) {
            this.notificationBuilder = new NotificationBuilderAPI23();
        }
        else {
            this.notificationBuilder = NotificationBuilder.NULL_NOTIFICATION_BUILDER;
        }
    }
    notify(command, resource, message) {
        var context = ResourceUtil.getInstance().getContext();
        ;
        var intent = CommandUriAction.getInstance().getIntent(command);
        ;
        var integer = ResourceUtil.getInstance().getResourceId(resource);
        ;
        var FLAG_IMMUTABLE = 1 << 26;
        ;
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        var pendingIntent = PendingIntent.getActivity(context, 0, intent, SDK_VERSION > 22
            ?
                FLAG_IMMUTABLE
            :
                0);
        !;
        ;
        if (this.notificationBuilder ==
            null) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.putF(commonStrings.EXCEPTION, this, commonStrings.NOT_IMPLEMENTED);
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        this.notificationBuilder.build(context, command, message, integer, pendingIntent);
    }
}
NotificationUtil.SINGLETON = new NotificationUtil();
