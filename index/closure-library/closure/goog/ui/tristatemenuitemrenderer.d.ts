/// <reference path="../../../globals.d.ts" />
/// <reference path="./menuitemrenderer.d.ts" />

declare module goog.ui {

    class TriStateMenuItemRenderer extends __TriStateMenuItemRenderer { }
    class __TriStateMenuItemRenderer extends goog.ui.__MenuItemRenderer {
    
        /**
         * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
         * the following structure:
         *    <div class="goog-tristatemenuitem">
         *        <div class="goog-tristatemenuitem-checkbox"></div>
         *        <div>...(content)...</div>
         *    </div>
         * @constructor
         * @extends {goog.ui.MenuItemRenderer}
         * @final
         */
        constructor();
    }
}

declare module goog.ui.TriStateMenuItemRenderer {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}
