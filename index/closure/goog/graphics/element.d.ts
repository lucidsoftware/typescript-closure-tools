// Generated Thu May  1 12:40:07 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/graphics/affinetransform.d.ts" />

declare module goog.graphics {

    /**
     * Base class for a thin wrapper around the DOM element returned from
     * the different draw methods of the graphics.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element  The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics  The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Element extends goog.events.EventTarget {
        /**
         * Base class for a thin wrapper around the DOM element returned from
         * the different draw methods of the graphics.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element  The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics  The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
    
        /**
         * Returns the underlying object.
         * @return {Element} The underlying element.
         */
        getElement(): Element;
    
        /**
         * Returns the graphics.
         * @return {goog.graphics.AbstractGraphics} The graphics that created the
         *     element.
         */
        getGraphics(): goog.graphics.AbstractGraphics;
    
        /**
         * Set the transformation of the element.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} rotate The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         */
        setTransformation(x: number, y: number, rotate: number, centerX: number, centerY: number): void;
    
        /**
         * @return {!goog.graphics.AffineTransform} The transformation applied to
         *     this element.
         */
        getTransform(): goog.graphics.AffineTransform;
    }
}
