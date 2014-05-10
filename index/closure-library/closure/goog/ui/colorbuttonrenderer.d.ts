/// <reference path="../../../globals.d.ts" />
/// <reference path="./colormenubuttonrenderer.d.ts" />

declare module goog.ui {

    class ColorButtonRenderer extends __ColorButtonRenderer { }
    class __ColorButtonRenderer extends goog.ui.__ColorMenuButtonRenderer {
    
        /**
         * Renderer for {@link goog.ui.ColorButton}s.
         * Uses {@link goog.ui.ColorMenuButton}s but disables the dropdown.
         *
         * @constructor
         * @extends {goog.ui.ColorMenuButtonRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.ColorButtonRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer. Additionally, applies class to the button's caption.
     * @type {string}
     */
    var CSS_CLASS: string;
}
