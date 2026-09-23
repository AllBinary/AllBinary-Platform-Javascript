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
import { Object } from '../../../../../../java/lang/Object.js';
import { StringReader } from '../../../../../../java/io/StringReader.js';
//not GWT import const StringReader
import { StringWriter } from '../../../../../../java/io/StringWriter.js';
//not GWT import const Writer
import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
//not GWT import const DocumentBuilderFactory
import { OutputKeys } from '../../../../../../javax/xml/transform/OutputKeys.js';
//not GWT import const Transformer
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory
import { CharacterSetData } from '../../../../../../org/allbinary/logic/java/characters/CharacterSetData.js';
//not GWT import const CharacterSetData
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const Document
import { InputSource } from '../../../../../../org/xml/sax/InputSource.js';
//not GWT import const InputSource
//Current folder imports from return types, extended types, and scope (deduplicated)
export class XmlDocumentHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return XmlDocumentHelper.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.INDENT_NUMBER = "indent-number";
        this.init(4, true);
    }
    init(indent, ignoreDeclaration) {
        try {
            var booleanFactory = BooleanFactory.getInstance();
            ;
            var transformerFactory = TransformerFactory.newInstance();
            ;
            transformerFactory.setAttribute(this.INDENT_NUMBER, indent);
            this.transformer = transformerFactory.newTransformer();
            this.transformer.setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance().UTF_8);
            this.transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, ignoreDeclaration
                ?
                    booleanFactory.YES
                :
                    booleanFactory.NO);
            ;
            this.transformer.setOutputProperty(OutputKeys.INDENT, booleanFactory.YES);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
        }
    }
    //@Throws(Exception.constructor)
    format(xmlString) {
        var src = new InputSource(new StringReader(xmlString));
        ;
        var document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(src);
        ;
        var out = new StringWriter();
        ;
        this.transformer.transform(new DOMSource(document), new StreamResult(out));
        //if statement needs to be on the same line and ternary does not work the same way.
        return out.toString();
        ;
    }
}
XmlDocumentHelper.instance = new XmlDocumentHelper();
