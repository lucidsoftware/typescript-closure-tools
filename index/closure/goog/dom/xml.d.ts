// Generated Mon May  5 19:19:05 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

declare module goog.dom.xml {

    /**
     * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
     * @type {number}
     */
    var MAX_XML_SIZE_KB: number;

    /**
     * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
     * @type {number}
     */
    var MAX_ELEMENT_DEPTH: number;

    /**
     * Creates an XML document appropriate for the current JS runtime
     * @param {string=} opt_rootTagName The root tag name.
     * @param {string=} opt_namespaceUri Namespace URI of the document element.
     * @return {Document} The new document.
     */
    function createDocument(opt_rootTagName?: string, opt_namespaceUri?: string): Document;

    /**
     * Creates an XML document from a string
     * @param {string} xml The text.
     * @return {Document} XML document from the text.
     */
    function loadXml(xml: string): Document;

    /**
     * Serializes an XML document or subtree to string.
     * @param {Document|Element} xml The document or the root node of the subtree.
     * @return {string} The serialized XML.
     */
    function serialize(xml: any /*Document|Element*/): string;

    /**
     * Selects a single node using an Xpath expression and a root node
     * @param {Node} node The root node.
     * @param {string} path Xpath selector.
     * @return {Node} The selected node, or null if no matching node.
     */
    function selectSingleNode(node: Node, path: string): Node;

    /**
     * Selects multiple nodes using an Xpath expression and a root node
     * @param {Node} node The root node.
     * @param {string} path Xpath selector.
     * @return {(NodeList,Array.<Node>)} The selected nodes, or empty array if no
     *     matching nodes.
     */
    function selectNodes(node: Node, path: string): void;

    /**
     * Sets multiple attributes on an element. Differs from goog.dom.setProperties
     * in that it exclusively uses the element's setAttributes method. Use this
     * when you need to ensure that the exact property is available as an attribute
     * and can be read later by the native getAttribute method.
     * @param {!Element} element XML or DOM element to set attributes on.
     * @param {!Object.<string, string>} attributes Map of property:value pairs.
     */
    function setAttributes(element: Element, attributes: { [key: string]: string }): void;
}

