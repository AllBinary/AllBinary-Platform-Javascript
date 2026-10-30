/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const TiledMap
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TileMapPlacementVisitor } from './TileMapPlacementVisitor.js';
//sameFolderImports - not GWT import - same folder const TileMapPlacementVisitor
export class PropsTileMapPlacementVisitor extends TileMapPlacementVisitor {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.randomFactory = MyRandomFactory.getInstance();
    }
    visit(lastMap, mapData) {
        let layerIndex = 0;
        ;
        let tileLayer = lastMap.getLayer(layerIndex);
        ;
        let mapArray = tileLayer.getMapArray();
        ;
        let size = mapData.length;
        ;
        let size2 = mapData[0].length;
        ;
        for (let index = 0; index < size; index++) {
            for (let index2 = 0; index2 < size2; index2++) {
                if (mapArray[index][index2] == 14) {
                }
                else {
                    this.visit2(mapArray, mapData, index, index2);
                }
                if (index % 7 == 0) {
                    if (mapArray[index][index2] == 19) {
                        let randomInt = this.randomFactory.getAbsoluteNextIntAllowZero(3);
                        ;
                        if (randomInt == 0) {
                            mapData[index][index2] = 1;
                        }
                        else if (randomInt == 1) {
                            mapData[index][index2] = 81;
                        }
                        else if (randomInt == 2) {
                            mapData[index][index2] = 97;
                        }
                    }
                    else if (mapArray[index][index2] == 17) {
                        let randomInt = this.randomFactory.getAbsoluteNextIntAllowZero(3);
                        ;
                        if (randomInt == 0) {
                            mapData[index][index2] = 17;
                        }
                        else if (randomInt == 1) {
                            mapData[index][index2] = 81;
                        }
                        else if (randomInt == 2) {
                            mapData[index][index2] = 97;
                        }
                    }
                }
                if (index2 % 7 == 0) {
                    if (mapArray[index][index2] == 34) {
                        let randomInt = this.randomFactory.getAbsoluteNextIntAllowZero(4);
                        ;
                        if (randomInt == 0) {
                            mapData[index][index2] = 33;
                        }
                        else if (randomInt == 1) {
                            mapData[index][index2] = 65;
                        }
                        else if (randomInt == 2) {
                            mapData[index][index2] = 81;
                        }
                        else if (randomInt == 3) {
                            mapData[index][index2] = 97;
                        }
                    }
                }
            }
        }
    }
    visit2(mapArray, mapData, index, index2) {
        let commonStrings = CommonStrings.getInstance();
        ;
        let countX = 0;
        ;
        let countY = 0;
        ;
        let index3 = index - 1;
        ;
        for (let index4 = index2 - 1; index4 > 0; index4--) {
            index3--;
            if (index3 < 0 || index4 < 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            if (mapArray[index3][index4] != 14 || mapData[index3][index4] != 0) {
                if (countX > 10 && countY > 10) {
                    for (let index5 = index3 + 1; index5 < index - 1; index5++) {
                        for (let index6 = index4 + 1; index6 < index2 - 1; index6++) {
                            if (mapArray[index5][index6] != 14 || mapData[index5][index6] != 0) {
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return;
                            }
                        }
                    }
                    let x = index - (globalThis.Math.trunc(countX / 2));
                    ;
                    let y = index2 - (globalThis.Math.trunc(countY / 2));
                    ;
                    if (x >= 0 && y >= 0 && x < mapData.length && y < mapData[0].length) {
                    }
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            countY++;
            countX++;
        }
    }
}
