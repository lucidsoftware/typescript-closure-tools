/// <reference path="../../../globals.d.ts" />
/// <reference path="./element.d.ts" />
/// <reference path="./abstractgraphics.d.ts" />
/// <reference path="./stroke.d.ts" />
/// <reference path="./fill.d.ts" />

declare module goog.graphics {

    class StrokeAndFillElement extends StrokeAndFillElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class StrokeAndFillElement__Class extends goog.graphics.Element__Class  { 
    
            /**
             * Interface for a graphics element with a stroke and fill.
             * This is the base interface for ellipse, rectangle and other
             * shape interfaces.
             * You should not construct objects from this constructor. The graphics
             * will return an implementation of this interface for you.
             *
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
             *     this element.
             * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill?} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.Element}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             */
            constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * The latest fill applied to this element.
             * @type {goog.graphics.Fill?}
             * @protected
             */
            fill: goog.graphics.Fill;
    
            /**
             * Sets the fill for this element.
             * @param {goog.graphics.Fill?} fill The fill object.
             */
            setFill(fill: goog.graphics.Fill): void;
    
            /**
             * @return {goog.graphics.Fill?} fill The fill object.
             */
            getFill(): goog.graphics.Fill;
    
            /**
             * Sets the stroke for this element.
             * @param {goog.graphics.Stroke?} stroke The stroke object.
             */
            setStroke(stroke: goog.graphics.Stroke): void;
    
            /**
             * @return {goog.graphics.Stroke?} stroke The stroke object.
             */
            getStroke(): goog.graphics.Stroke;
    
            /**
             * Re-strokes the element to react to coordinate size changes.
             */
            reapplyStroke(): void;
    } 
    
}
