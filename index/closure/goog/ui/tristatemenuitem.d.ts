// Generated Mon May  5 19:24:43 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/tristatemenuitemrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/menuitem.d.ts" />

declare module goog.ui {

    /**
     * Class representing a three state checkbox menu item.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure
     *     to display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {Object=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
     *     state.
     * @constructor
     * @extends {goog.ui.MenuItem}
     * TODO(attila): Figure out how to better integrate this into the
     * goog.ui.Control state management framework.
     * @final
     */
    class TriStateMenuItem {
        /**
         * Class representing a three state checkbox menu item.
         *
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to display as the content of the item (use to add icons or styling to
         *     menus).
         * @param {Object=} opt_model Data/model associated with the menu item.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
         *     document interactions.
         * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
         * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
         *     state.
         * @constructor
         * @extends {goog.ui.MenuItem}
         * TODO(attila): Figure out how to better integrate this into the
         * goog.ui.Control state management framework.
         * @final
         */
        constructor(content: goog.ui.ControlContent, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
    
        /**
         * @return {goog.ui.TriStateMenuItem.State} The menu item's check state.
         */
        getCheckedState(): goog.ui.TriStateMenuItem.State;
    
        /**
         * Sets the checked state.
         * @param {goog.ui.TriStateMenuItem.State} state The checked state.
         */
        setCheckedState(state: goog.ui.TriStateMenuItem.State): void;
    }
}

declare module goog.ui.TriStateMenuItem {

    /**
     * Checked states for component.
     * @enum {number}
     */
    enum State { NOT_CHECKED, PARTIALLY_CHECKED, FULLY_CHECKED } 
}

