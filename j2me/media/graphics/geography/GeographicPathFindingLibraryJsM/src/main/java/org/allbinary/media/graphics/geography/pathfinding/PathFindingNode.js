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
//not plain js import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { CommonSeps } from '../../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;
//not plain js import { CommonLabels } from '../../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PathFindingNode extends Object {
    constructor(parent = {}, geographicMapCellPosition) {
        super();
        this.parent = NullUtil.getInstance().NULL_OBJECT;
        this.geographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.parent = parent;
        this.setGeographicMapCellPositionP(geographicMapCellPosition);
        if (this.geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            throw new Exception("No GeographicMapCellPosition");
        }
    }
    getParentP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.parent;
    }
    setGeographicMapCellPositionP(geographicMapCellPosition) {
        this.geographicMapCellPosition = geographicMapCellPosition;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.constructor.name.toString());
        stringBuffer.append(CommonLabels.getInstance().COLON_SEP);
        stringBuffer.append(" Path: ");
        stringBuffer.append(this.geographicMapCellPosition.toString());
        var pathFindingNode = this.getParentP();
        ;
        while (pathFindingNode !=
            null) {
            stringBuffer.append(pathFindingNode.geographicMapCellPosition.toString());
            stringBuffer.append(CommonSeps.getInstance().SPACE);
            pathFindingNode = pathFindingNode.getParentP();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
