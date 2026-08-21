/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2019 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { Object } from '../../../java/lang/Object.js';
import { Context } from '../../../android/content/Context.js';
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidServicesUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.resourceUtil = ResourceUtil.getInstance();
        this.SERVICE_LIMIT_MAX = 1000;
        this.IS_SERVICE_RUNNING = "isServiceRunning";
        this.SERVICE_NOT_FOUND_RUNNING = "Service not found Running: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidServicesUtil.instance;
    }
    isServiceRunning(name) {
        var activityManager = this.resourceUtil.getContext().getSystemService(Context.ACTIVITY_SERVICE);
        ;
        var runningServicesList = activityManager.getRunningServices(this.SERVICE_LIMIT_MAX);
        ;
        var runningServiceInfo;
        ;
        var serviceComponent;
        ;
        var serviceName;
        ;
        var size = runningServicesList.length;
        ;
        for (var index = 0; index < size; index++) {
            runningServiceInfo = runningServicesList.get(index);
            serviceComponent = runningServiceInfo.service;
            serviceName = serviceComponent.toString();
            if (serviceName.indexOf(name) >= 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        this.logUtil.putF(this.SERVICE_NOT_FOUND_RUNNING + name, this, this.IS_SERVICE_RUNNING);
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
AndroidServicesUtil.instance = new AndroidServicesUtil();
