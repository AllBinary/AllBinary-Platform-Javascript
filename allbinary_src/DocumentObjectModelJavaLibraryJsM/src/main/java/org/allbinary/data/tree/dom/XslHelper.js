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
import { Object } from '../../../../../java/lang/Object.js';
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const OutputStream
import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
//not GWT import const Transformer
import { TransformerFactory } from '../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const URIResolver
import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource
import { XmlDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const Document
//Current folder imports from return types, extended types, and scope (deduplicated)
//import org.allbinary.data.tree.dom.document.DomDocumentHelper;
export class XslHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return XslHelper.instance;
    }
    constructor() {
        super();
    }
    translate(...args) {
        if (args.length === 3)
            return this.translate$overload1(args[0], args[1], args[2]);
        if (args.length === 4)
            return this.translate$overload2(args[0], args[1], args[2], args[3]);
        if (args.length === 2)
            return this.translate$overload3(args[0], args[1]);
        if (args.length === 2)
            return this.translate$overload4(args[0], args[1]);
        if (args.length === 3)
            return this.translate$overload5(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: translate');
    }
    //@Throws(Exception.constructor)
    translate$overload1(xsltStreamSource, xmlStreamSource, streamResult) {
        try {
            let transformerFactory = TransformerFactory.newInstance();
            ;
            let transformer = transformerFactory.newTransformer(xsltStreamSource);
            ;
            transformer.transform(xmlStreamSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return streamResult.getOutputStream();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    translate$overload2(resolver, xsltStreamSource, xmlStreamSource, streamResult) {
        try {
            let tFactory = TransformerFactory.newInstance();
            ;
            tFactory.setURIResolver(resolver);
            let transformer = tFactory.newTransformer(xsltStreamSource);
            ;
            transformer.transform(xmlStreamSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return streamResult.getOutputStream();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    translateTemplate(templates, xmlStreamSource) {
        try {
            let outputStream = new ByteArrayOutputStream();
            ;
            let streamResult = new StreamResult(outputStream);
            ;
            templates.newTransformer().transform(xmlStreamSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return streamResult.getOutputStream().toString();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    translate$overload3(xsltStreamSource, xmlDocument) {
        try {
            let outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(xsltStreamSource, new StreamSource(new StringBufferInputStream(XmlDocumentHelper.toString(xmlDocument))), new StreamResult(outputStream)).toString();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    translate$overload4(xsltStreamSource, xmlStreamSource) {
        try {
            let outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(xsltStreamSource, xmlStreamSource, new StreamResult(outputStream)).toString();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    translate$overload5(resolver, xsltStreamSource, xmlStreamSource) {
        try {
            let outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(resolver, xsltStreamSource, xmlStreamSource, new StreamResult(outputStream)).toString();
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    export(outputFile, xsltFilePath, xmlDocument) {
        try {
            outputFile.createNewFile();
            this.translate(new StreamSource(xsltFilePath), new StreamSource(new StringBufferInputStream(XmlDocumentHelper.toString(xmlDocument))), new StreamResult(outputFile));
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
}
XslHelper.instance = new XslHelper();
