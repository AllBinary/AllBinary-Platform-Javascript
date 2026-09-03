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
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionFactory } from '../../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;
import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
export class GeographicMapDirectionUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GeographicMapDirectionUtil.instance;
    }
    constructor() {
        super();
        this.MESSAGE = "Cell Position should have been cached!!!";
        this.ERROR = "Error: ";
        this.EQUAL = " == ";
    }
    //@Throws(Exception.constructor)
    getDirectionFromCellPositionToAdjacentCellPosition(fromGeographicMapCellPosition, toGeographicMapCellPosition) {
        var fromColumn = fromGeographicMapCellPosition.getColumn();
        ;
        var fromRow = fromGeographicMapCellPosition.getRow();
        ;
        var goColumn = toGeographicMapCellPosition.getColumn();
        ;
        var goRow = toGeographicMapCellPosition.getRow();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (fromColumn - 1 == goColumn) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.LEFT;
        }
        else if (fromColumn + 1 == goColumn) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.RIGHT;
        }
        else if (fromRow - 1 == goRow) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.UP;
        }
        else if (fromRow + 1 == goRow) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.DOWN;
        }
        else if (fromGeographicMapCellPosition == toGeographicMapCellPosition) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.NO_DIRECTION;
        }
        else if (fromRow == goRow && fromColumn == goColumn) {
            throw new Exception(this.MESSAGE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return directionFactory.NOT_BORDERED_WITH;
    }
    //@Throws(Exception.constructor)
    getEightDirectionFromCellPositionToAdjacentCellPosition(fromGeographicMapCellPosition, toGeographicMapCellPosition) {
        var fromColumn = fromGeographicMapCellPosition.getColumn();
        ;
        var fromRow = fromGeographicMapCellPosition.getRow();
        ;
        var goColumn = toGeographicMapCellPosition.getColumn();
        ;
        var goRow = toGeographicMapCellPosition.getRow();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (fromRow == goRow) {
            if (fromColumn - 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.LEFT;
            }
            else if (fromColumn + 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.RIGHT;
            }
        }
        else if (fromRow - 1 == goRow) {
            if (fromColumn == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP;
            }
            if (fromColumn - 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP_LEFT;
            }
            else if (fromColumn + 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP_RIGHT;
            }
        }
        else if (fromRow + 1 == goRow) {
            if (fromColumn == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN;
            }
            if (fromColumn - 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN_LEFT;
            }
            else if (fromColumn + 1 == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN_RIGHT;
            }
        }
        else if (fromGeographicMapCellPosition == toGeographicMapCellPosition) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.NO_DIRECTION;
        }
        else if (fromRow == goRow && fromColumn == goColumn) {
            throw new Exception(this.MESSAGE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return directionFactory.NOT_BORDERED_WITH;
    }
    //@Throws(Exception.constructor)
    getDirectionFromCellPositionToCellPosition(fromGeographicMapCellPosition, toGeographicMapCellPosition) {
        var fromColumn = fromGeographicMapCellPosition.getColumn();
        ;
        var fromRow = fromGeographicMapCellPosition.getRow();
        ;
        var goColumn = toGeographicMapCellPosition.getColumn();
        ;
        var goRow = toGeographicMapCellPosition.getRow();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (fromColumn > goColumn) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.LEFT;
        }
        else if (fromColumn < goColumn) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.RIGHT;
        }
        else if (fromRow > goRow) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.UP;
        }
        else if (fromRow < goRow) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.DOWN;
        }
        var stringMaker = new StringMaker();
        ;
        var string = stringMaker.append(CellPosition.toStringCellPosition(fromGeographicMapCellPosition)).append(" == ").append(CellPosition.toStringCellPosition(toGeographicMapCellPosition)).toString();
        ;
        stringMaker.delete(0, stringMaker.length());
        throw new Exception(stringMaker.append("Error: ").append(string).toString());
    }
    //@Throws(Exception.constructor)
    getEightDirectionFromCellPositionToCellPosition(fromGeographicMapCellPosition, toGeographicMapCellPosition) {
        var fromColumn = fromGeographicMapCellPosition.getColumn();
        ;
        var fromRow = fromGeographicMapCellPosition.getRow();
        ;
        var goColumn = toGeographicMapCellPosition.getColumn();
        ;
        var goRow = toGeographicMapCellPosition.getRow();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (fromGeographicMapCellPosition == toGeographicMapCellPosition) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return directionFactory.NO_DIRECTION;
        }
        else if (fromRow == goRow) {
            if (fromColumn > goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.LEFT;
            }
            else if (fromColumn < goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.RIGHT;
            }
        }
        else if (fromRow > goRow) {
            if (fromColumn > goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP_LEFT;
            }
            else if (fromColumn < goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP_RIGHT;
            }
            else if (fromColumn == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.UP;
            }
        }
        else if (fromRow < goRow) {
            if (fromColumn > goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN_LEFT;
            }
            else if (fromColumn < goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN_RIGHT;
            }
            else if (fromColumn == goColumn) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return directionFactory.DOWN;
            }
        }
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.ERROR);
        stringBuffer.append(CellPosition.toStringCellPosition(fromGeographicMapCellPosition));
        stringBuffer.append(this.EQUAL);
        stringBuffer.append(CellPosition.toStringCellPosition(toGeographicMapCellPosition));
        throw new Exception(stringBuffer.toString());
    }
}
GeographicMapDirectionUtil.instance = new GeographicMapDirectionUtil();
