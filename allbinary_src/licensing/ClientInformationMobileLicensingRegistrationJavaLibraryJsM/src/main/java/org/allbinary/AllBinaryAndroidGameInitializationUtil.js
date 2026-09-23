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
import { Object } from '../../java/lang/Object.js';
import { Integer } from '../../java/lang/Integer.js';
import { LicenseInitInfoUtil } from '../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { PartnerIdentifierFileUtil } from '../../org/allbinary/logic/system/security/licensing/PartnerIdentifierFileUtil.js';
//not GWT import const PartnerIdentifierFileUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidResources } from './AndroidResources.js';
//not GWT import - same folder const AndroidResources
export class AllBinaryAndroidGameInitializationUtil extends Object {
    static init() {
        var resourceUtil = ResourceUtil.getInstance();
        ;
        var androidResources = AndroidResources.getInstance();
        ;
        var licenseInitInfoUtil = LicenseInitInfoUtil.getInstance();
        ;
        resourceUtil.addResource(licenseInitInfoUtil.INITFILENAME, Integer.valueOf(androidResources.raw.licenseinitdata));
        resourceUtil.addResource(PartnerIdentifierFileUtil.getInstance().FILE_NAME, Integer.valueOf(androidResources.raw.partner));
    }
}
