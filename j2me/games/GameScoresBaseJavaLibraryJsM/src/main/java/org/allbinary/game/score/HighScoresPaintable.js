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
//not GWT import const Graphics
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const ColorChangeListener
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const AllBinaryEventObject
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullHighScoresSingletonFactory } from './NullHighScoresSingletonFactory.js';
//not GWT import - same folder const HighScore
export class HighScoresPaintable extends Paintable {
    constructor() {
        super();
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.highScores = NullHighScoresSingletonFactory.getInstance();
        this.anchor = Anchor.TOP_LEFT;
        this.charHeight = 0;
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.charHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    onEvent(eventObject) {
        var colorChangeEvent = eventObject;
        ;
        this.basicColor = colorChangeEvent.getBasicColorP();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var width = this.displayInfoSingleton.getLastWidth();
        ;
        var height = this.displayInfoSingleton.getLastHeight();
        ;
        graphics.setColor(this.getBasicColorP().intValue());
        var heading = this.highScores.getHeading();
        ;
        var topScoresWidth = (graphics.getFont().stringWidth(heading) >> 1);
        ;
        var charHeight = this.charHeight;
        ;
        graphics.drawString(heading, (width >> 1) - topScoresWidth, charHeight, this.anchor);
        graphics.drawString(this.highScores.getColumnOneHeading(), 10, charHeight * 3, this.anchor);
        var columnTwoHeading = this.highScores.getColumnTwoHeading();
        ;
        var columnTwoHeadingWidth = graphics.getFont().stringWidth(columnTwoHeading);
        ;
        graphics.drawString(columnTwoHeading, width - 10 - columnTwoHeadingWidth, charHeight * 3, this.anchor);
        var index = 4;
        ;
        var largestSecondColumnWidth = columnTwoHeadingWidth;
        ;
        var list = this.highScores.getList();
        ;
        var size = list.size();
        ;
        var vectorIndex = 0;
        ;
        var highScore;
        ;
        while (vectorIndex < size && charHeight * index < height - (charHeight * 2)) {
            highScore = list.objectArray[vectorIndex];
            var nextScoreWidth = graphics.getFont().stringWidth(highScore.getScoreString());
            ;
            if (nextScoreWidth > largestSecondColumnWidth) {
                largestSecondColumnWidth = nextScoreWidth;
            }
            vectorIndex++;
        }
        vectorIndex = 0;
        while (vectorIndex < size && charHeight * index < height - (charHeight * 2)) {
            highScore = list.objectArray[vectorIndex];
            graphics.drawString(highScore.getName(), 10, charHeight * index, this.anchor);
            graphics.drawString(highScore.getScoreString(), width - 10 - largestSecondColumnWidth, charHeight * index, this.anchor);
            index++;
            vectorIndex++;
        }
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setHighScores(highScores) {
        this.highScores = highScores;
    }
}
