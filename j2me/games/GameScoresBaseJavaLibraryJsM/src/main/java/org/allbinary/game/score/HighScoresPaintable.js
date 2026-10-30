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
//sameFolderImports - not GWT import - same folder const HighScore
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
        let font = graphics.getFont();
        ;
        this.charHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    onEvent(eventObject) {
        let colorChangeEvent = eventObject;
        ;
        this.basicColor = colorChangeEvent.getBasicColorP();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        let width = this.displayInfoSingleton.getLastWidth();
        ;
        let height = this.displayInfoSingleton.getLastHeight();
        ;
        graphics.setColor(this.getBasicColorP().intValue());
        let heading = this.highScores.getHeading();
        ;
        let topScoresWidth = (graphics.getFont().stringWidth(heading) >> 1);
        ;
        let charHeight = this.charHeight;
        ;
        graphics.drawString(heading, (width >> 1) - topScoresWidth, charHeight, this.anchor);
        graphics.drawString(this.highScores.getColumnOneHeading(), 10, charHeight * 3, this.anchor);
        let columnTwoHeading = this.highScores.getColumnTwoHeading();
        ;
        let columnTwoHeadingWidth = graphics.getFont().stringWidth(columnTwoHeading);
        ;
        graphics.drawString(columnTwoHeading, width - 10 - columnTwoHeadingWidth, charHeight * 3, this.anchor);
        let index = 4;
        ;
        let largestSecondColumnWidth = columnTwoHeadingWidth;
        ;
        let list = this.highScores.getList();
        ;
        let size = list.size();
        ;
        let vectorIndex = 0;
        ;
        let highScore;
        ;
        while (vectorIndex < size && charHeight * index < height - (charHeight * 2)) {
            highScore = list.objectArray[vectorIndex];
            let nextScoreWidth = graphics.getFont().stringWidth(highScore.getScoreString());
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
