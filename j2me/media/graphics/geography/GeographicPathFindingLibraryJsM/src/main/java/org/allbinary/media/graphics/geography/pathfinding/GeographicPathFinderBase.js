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
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;
export class GeographicPathFinderBase extends Object {
    constructor() {
        super(...arguments);
        this.commonStrings = CommonStrings.getInstance();
    }
    //@Throws(Exception.constructor)
    searchTotalPath(startPathFindingNodeList, endPathFindingNodeList, totalPaths) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    searchTotalPathN(startPathFindingNodeList, endPathFindingNodeList, totalPaths, multipassState) {
        throw new RuntimeException();
    }
}
GeographicPathFinderBase.NULL_GEOGRAPHIC_PATH_FINDER_BASE = new GeographicPathFinderBase();
