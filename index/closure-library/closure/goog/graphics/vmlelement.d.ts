/// <reference path="../../../globals.d.ts" />
/// <reference path="./groupelement.d.ts" />
/// <reference path="./vmlgraphics.d.ts" />
/// <reference path="./ellipseelement.d.ts" />
/// <reference path="./stroke.d.ts" />
/// <reference path="./fill.d.ts" />
/// <reference path="./rectelement.d.ts" />
/// <reference path="./pathelement.d.ts" />
/// <reference path="./textelement.d.ts" />
/// <reference path="./imageelement.d.ts" />

declare module goog.graphics {

    class VmlGroupElement extends __VmlGroupElement { }
    class __VmlGroupElement extends goog.graphics.__GroupElement {
    
        /**
         * Thin wrapper for VML group elements.
         * This is an implementation of the goog.graphics.GroupElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.GroupElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics);
    }

    class VmlEllipseElement extends __VmlEllipseElement { }
    class __VmlEllipseElement extends goog.graphics.__EllipseElement {
    
        /**
         * Thin wrapper for VML ellipse elements.
         * This is an implementation of the goog.graphics.EllipseElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics  The graphics creating
         *     this element.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.EllipseElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class VmlRectElement extends __VmlRectElement { }
    class __VmlRectElement extends goog.graphics.__RectElement {
    
        /**
         * Thin wrapper for VML rectangle elements.
         * This is an implementation of the goog.graphics.RectElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.RectElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class VmlPathElement extends __VmlPathElement { }
    class __VmlPathElement extends goog.graphics.__PathElement {
    
        /**
         * Thin wrapper for VML path elements.
         * This is an implementation of the goog.graphics.PathElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.PathElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class VmlTextElement extends __VmlTextElement { }
    class __VmlTextElement extends goog.graphics.__TextElement {
    
        /**
         * Thin wrapper for VML text elements.
         * This is an implementation of the goog.graphics.TextElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.TextElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class VmlImageElement extends __VmlImageElement { }
    class __VmlImageElement extends goog.graphics.__ImageElement {
    
        /**
         * Thin wrapper for VML image elements.
         * This is an implementation of the goog.graphics.ImageElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.VmlGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.ImageElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.VmlGraphics);
    }

    /**
     * Returns the VML element corresponding to this object.  This method is added
     * to several classes below.  Note that the return value of this method may
     * change frequently in IE8, so it should not be cached externally.
     * @return {Element} The VML element corresponding to this object.
     * @this {goog.graphics.VmlGroupElement|goog.graphics.VmlEllipseElement|
     *     goog.graphics.VmlRectElement|goog.graphics.VmlPathElement|
     *     goog.graphics.VmlTextElement|goog.graphics.VmlImageElement}
     * @private
     */
    function vmlGetElement_(): Element;
}
