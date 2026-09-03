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
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePathFinderGraphVisitor } from './BasePathFinderGraphVisitor.js';
//not GWT import const BasePathFinderGraphVisitor = globalThis.org.allbinary.game.media.graphics.geography.map.racetrack.BasePathFinderGraphVisitor;
//1.4.2
export class PathFinderGraphHackVisitor extends BasePathFinderGraphVisitor {
    constructor(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight) {
        super(geographicMapInterface, edgeMinimum, minPathWeight, maxPathWeight);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    visit(graph = {}, startPathFindingNodeList, endPathFindingNodeList) {
        this.fixStart(graph, startPathFindingNodeList);
        this.fixEnd(graph, endPathFindingNodeList);
        this.fixOverPassEdges(graph);
    }
    //@Throws(Exception.constructor)
    fixStart(graph = {}, startPathFindingNodeList) {
    }
    //@Throws(Exception.constructor)
    fixEnd(graph = {}, endPathFindingNodeList) {
    }
    //@Throws(Exception.constructor)
    fixOverPassEdges(graph = {}) {
    }
    //@Throws(Exception.constructor)
    fixPath(startPathFindingNodeList, endPathFindingNodeList, pathList) {
    }
    //@Throws(Exception.constructor)
    removeOverPassEdges(pathList) {
    }
    isValid(graphPath = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
