// Generated Thu May  1 16:39:33 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/useragent/product_isversion.d.ts" />

declare module goog.style.transform {

    /**
     * Whether CSS3 transform translate() is supported. IE 9 supports 2D transforms
     * and IE 10 supports 3D transforms. IE 8 supports neither.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    var isSupported: any /*missing*/;

    /**
     * Whether CSS3 transform translate3d() is supported. If the current browser
     * supports this transform strategy.
     * @return {boolean} Whether the current environment supports CSS3 transforms.
     */
    var is3dSupported: any /*missing*/;

    /**
     * Returns the x,y translation component of any CSS transforms applied to the
     * element, in pixels.
     *
     * @param {!Element} element The element to get the translation of.
     * @return {!goog.math.Coordinate} The CSS translation of the element in px.
     */
    function getTranslation(element: Element): goog.math.Coordinate;

    /**
     * Translates an element's position using the CSS3 transform property.
     * @param {Element} element The element to translate.
     * @param {number} x The horizontal translation.
     * @param {number} y The vertical translation.
     * @return {boolean} Whether the CSS translation was set.
     */
    function setTranslation(element: Element, x: number, y: number): boolean;
}

