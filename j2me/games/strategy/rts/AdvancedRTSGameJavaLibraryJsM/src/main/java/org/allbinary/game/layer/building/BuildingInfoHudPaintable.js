/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { NumberStringHud } from '../../../../../org/allbinary/game/ag/layer/hud/basic/NumberStringHud.js';
//not GWT import const NumberStringHud
import { NumberStringHudFactory } from '../../../../../org/allbinary/game/ag/layer/hud/basic/NumberStringHudFactory.js';
//not GWT import const NumberStringHudFactory
import { SelectionHudPaintable } from '../../../../../org/allbinary/game/layer/SelectionHudPaintable.js';
//not GWT import const SelectionHudPaintable
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BasicHudFactory } from '../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicHudFactory
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const BasicColor
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//sameFolderImports - not GWT import - same folder const BuildingLayer
export class BuildingInfoHudPaintable extends SelectionHudPaintable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BuildingInfoHudPaintable.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.HEALTH = "Health:";
        this.rtsLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        this.currentHealth = 0;
        let numberStringHudFactory = NumberStringHudFactory.getInstance();
        ;
        let productivityHud = numberStringHudFactory.NULL_NUMBER_STRING_HUD;
        ;
        let efficiencyHud = numberStringHudFactory.NULL_NUMBER_STRING_HUD;
        ;
        let healthHud = numberStringHudFactory.NULL_NUMBER_STRING_HUD;
        ;
        let maxHealthHud = numberStringHudFactory.NULL_NUMBER_STRING_HUD;
        ;
        try {
            let index = 0;
            ;
            let basicHudFactory = BasicHudFactory.getInstance();
            ;
            let basicColor = this.getBasicColorP();
            ;
            let textX = this.textX;
            ;
            let y = this.y;
            ;
            let firstIndex = index;
            ;
            //inner=true member= isStatic=
            class ProductivityNumberStringHud extends NumberStringHud {
                constructor() {
                    super("Productivity:", 999, basicHudFactory.ABSOLUTE, basicHudFactory.HORIZONTAL, 0, basicColor);
                    //For kotlin this is before the body of the constructor.
                }
                updateMeasurement(graphics) {
                    let font = graphics.getFont();
                    ;
                    this.updateMaxWidth = textX;
                    this.updateMaxHeight = y + ((firstIndex + 1) * font.getHeight());
                    super.updateMeasurement(graphics);
                }
            }
            //Otherwise - statement - EmptyStmt
            productivityHud = new ProductivityNumberStringHud();
            index++;
            let secondIndex = index;
            ;
            //inner=true member= isStatic=
            class EfficiencyNumberStringHud extends NumberStringHud {
                constructor() {
                    super("Efficiency:", 999, basicHudFactory.ABSOLUTE, basicHudFactory.HORIZONTAL, 0, basicColor);
                    //For kotlin this is before the body of the constructor.
                }
                updateMeasurement(graphics) {
                    super.updateMeasurement(graphics);
                    let font = graphics.getFont();
                    ;
                    this.updateMaxWidth = textX;
                    this.updateMaxHeight = y + ((secondIndex + 1) * font.getHeight());
                }
            }
            //Otherwise - statement - EmptyStmt
            efficiencyHud = new EfficiencyNumberStringHud();
            index++;
            let HEALTH = this.HEALTH;
            ;
            let thirdIndex = index;
            ;
            //inner=true member= isStatic=
            class HealthNumberStringHud extends NumberStringHud {
                constructor() {
                    super(HEALTH, 99999, basicHudFactory.ABSOLUTE, basicHudFactory.HORIZONTAL, 0, basicColor);
                    //For kotlin this is before the body of the constructor.
                }
                updateMeasurement(graphics) {
                    let font = graphics.getFont();
                    ;
                    this.updateMaxWidth = textX;
                    this.updateMaxHeight = y + ((thirdIndex + 1) * font.getHeight());
                    super.updateMeasurement(graphics);
                }
            }
            //Otherwise - statement - EmptyStmt
            let totalLength = HEALTH.length + 1;
            ;
            healthHud = new HealthNumberStringHud();
            let fourthIndex = index;
            ;
            //inner=true member= isStatic=
            class MaxHealthNumberStringHud extends NumberStringHud {
                constructor() {
                    super("/ ", 99999, basicHudFactory.ABSOLUTE, basicHudFactory.HORIZONTAL, 0, basicColor);
                    //For kotlin this is before the body of the constructor.
                }
                updateMeasurement(graphics) {
                    super.updateMeasurement(graphics);
                    let font = graphics.getFont();
                    ;
                    this.updateMaxWidth = textX + (totalLength * font.getHeight());
                    this.updateMaxHeight = y + ((fourthIndex + 1) * font.getHeight());
                }
            }
            //Otherwise - statement - EmptyStmt
            maxHealthHud = new MaxHealthNumberStringHud();
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR, e);
            }
        }
        this.productivityHud = productivityHud;
        this.efficiencyHud = efficiencyHud;
        this.healthHud = healthHud;
        this.maxHealthHud = maxHealthHud;
    }
    updateMeasurement(graphics) {
        let font = graphics.getFont();
        ;
        let totalLength = this.HEALTH.length + MathUtil.getInstance().getTotalDigits(this.currentHealth);
        ;
        this.maxHealthHud.setX(this.textX + MyFontProcessor.defaultStringWidth(font, totalLength));
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    setBasicColorP(basicColor) {
        super.setBasicColorP(basicColor);
        this.productivityHud.setBasicColorP(basicColor);
        this.efficiencyHud.setBasicColorP(basicColor);
        this.healthHud.setBasicColorP(basicColor);
        this.maxHealthHud.setBasicColorP(basicColor);
    }
    paint(graphics) {
        super.paint(graphics);
        this.myFontProcessor.process(graphics);
        this.productivityHud.paint(graphics);
        this.efficiencyHud.paint(graphics);
        this.healthHud.paint(graphics);
        this.maxHealthHud.paint(graphics);
        this.getAnimationInterface().paintXY(graphics, this.imageX, this.y);
    }
    updateSelectionInfo() {
        let buildingLayer = this.rtsLayer;
        ;
        this.setName(buildingLayer.getName());
        this.setAnimationInterface(buildingLayer.getVerticleBuildAnimationInterface());
        this.productivityHud.set(buildingLayer.getProductivity());
        this.efficiencyHud.set(buildingLayer.getEfficiency() / 100);
        this.currentHealth = buildingLayer.getHealthInterface().getHealth();
        this.healthHud.set(this.currentHealth);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.maxHealthHud.set(buildingLayer.getHealthInterface().getMaxHealth());
    }
    setRtsLayer(rtsLayer) {
        this.rtsLayer = rtsLayer;
    }
}
BuildingInfoHudPaintable.instance = new BuildingInfoHudPaintable();
