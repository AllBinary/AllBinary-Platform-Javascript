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
//not GWT import const ClientInformationFactory
import { LicenseServerInitFileUtil } from '../../../../org/allbinary/logic/system/security/licensing/LicenseServerInitFileUtil.js';
//not GWT import const LicenseServerInitFileUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DemoGameMidlet } from './DemoGameMidlet.js';
//not GWT import - same folder const LicenseCheckRunnableFactory
export class SpecialDemoGameMidlet extends DemoGameMidlet {
    constructor(clientInformationFactory, licenseLoadingType, demoSetupFactory, licenseCheckRunnableFactory) {
        super(clientInformationFactory);
        //For kotlin this is before the body of the constructor.
    }
    initView() {
    }
    preInit() {
        new LicenseServerInitFileUtil().init();
    }
}
