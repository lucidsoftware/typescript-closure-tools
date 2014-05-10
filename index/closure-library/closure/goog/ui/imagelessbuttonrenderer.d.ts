/// <reference path="../../../globals.d.ts" />
/// <reference path="./custombuttonrenderer.d.ts" />

declare module goog.ui {

    class ImagelessButtonRenderer extends __ImagelessButtonRenderer { }
    class __ImagelessButtonRenderer extends goog.ui.__CustomButtonRenderer {
    
        /**
         * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @deprecated These contain a lot of unnecessary DOM for modern user agents.
         *     Please use a simpler button renderer like css3buttonrenderer.
         * @constructor
         * @extends {goog.ui.CustomButtonRenderer}
         */
        constructor();
    }
}

declare module goog.ui.ImagelessButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
