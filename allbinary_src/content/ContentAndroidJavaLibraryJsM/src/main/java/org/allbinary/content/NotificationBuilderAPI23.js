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
//not plain js import { Command } from '../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
//not GWT import const Notification = globalThis.android.app.Notification;
import { Builder } from '../../../android/app/Notification/Builder.js';
//not GWT import const Parcelable = globalThis.android.os.Parcelable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NotificationBuilder } from './NotificationBuilder.js';
//not GWT import const NotificationBuilder = globalThis.org.allbinary.content.NotificationBuilder;
export class NotificationBuilderAPI23 extends NotificationBuilder {
    build(context, command, message, integer, pendingIntent) {
        var notification = new Builder(context).setSmallIcon(integer.intValue()).setTicker(message).setWhen(Date.now()).setContentTitle(command.getLabel()).setContentText(message).setContentIntent(pendingIntent).build();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return notification;
    }
}
