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
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbPath } from './AbPath.js';
import { AbPathData } from './AbPathData.js';
import { PathUtil } from './PathUtil.js';
export class AbFilePath extends AbPath {
    constructor(aPath) {
        super(StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING);
        //For kotlin this is before the body of the constructor.
        var pathData = AbPathData.getInstance();
        ;
        var abPathUtil = PathUtil.getInstance();
        ;
        this.schema = this.getSchema(aPath);
        this.setName(pathData.getNameFromPath(aPath));
        this.setPath(abPathUtil.adjust(this.getPathFromPath(abPathUtil.removeNameFromPath(aPath).toString())));
    }
}
