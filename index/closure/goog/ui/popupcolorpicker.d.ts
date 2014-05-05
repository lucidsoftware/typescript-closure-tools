// Generated Mon May  5 16:25:37 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
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
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../closure/goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/positioning/clientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../../closure/goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/positioning/viewportposition.d.ts" />
/// <reference path="../../../closure/goog/ui/popup.d.ts" />
/// <reference path="../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../closure/goog/color/names.d.ts" />
/// <reference path="../../../closure/goog/color/color.d.ts" />
/// <reference path="../../../closure/goog/ui/colorpalette.d.ts" />
/// <reference path="../../../closure/goog/ui/colorpicker.d.ts" />

declare module goog.ui {

    /**
     * Popup color picker widget.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.ColorPicker=} opt_colorPicker Optional color picker to use
     *     for this popup.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class PopupColorPicker extends goog.ui.Component {
        /**
         * Popup color picker widget.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {goog.ui.ColorPicker=} opt_colorPicker Optional color picker to use
         *     for this popup.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_colorPicker?: goog.ui.ColorPicker);
    
        /**
         * @return {goog.ui.ColorPicker} The color picker instance.
         */
        getColorPicker(): goog.ui.ColorPicker;
    
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
    
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it -
         * must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it was not set. Null indicates the entire document is
         * the autohide region.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
    
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks - must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
    
        /**
         * Returns the {@link goog.ui.PopupBase} from this picker. Returns null if the
         * popup has not yet been created.
         *
         * NOTE: This should *ONLY* be called from tests. If called before createDom(),
         * this should return null.
         *
         * @return {goog.ui.PopupBase?} The popup or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
    
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
    
        /**
         * Attaches the popup color picker to an element.
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
    
        /**
         * Detatches the popup color picker from an element.
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
    
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {?string} The hex string of the color selected, or null if no
         *     color is selected.
         */
        getSelectedColor(): string;
    
        /**
         * Sets whether the color picker can accept focus.
         * @param {boolean} focusable True iff the color picker can accept focus.
         */
        setFocusable(focusable: boolean): void;
    
        /**
         * Sets whether the color picker can automatically move focus to its key event
         * target when it is set to visible.
         * @param {boolean} allow Whether to allow auto focus.
         */
        setAllowAutoFocus(allow: boolean): void;
    
        /**
         * @return {boolean} Whether the color picker can automatically move focus to
         *     its key event target when it is set to visible.
         */
        getAllowAutoFocus(): boolean;
    
        /**
         * Sets whether the color picker should toggle off if it is already open.
         * @param {boolean} toggle The new toggle mode.
         */
        setToggleMode(toggle: boolean): void;
    
        /**
         * Gets whether the colorpicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
    
        /**
         * Sets whether the picker remembers the last selected color between popups.
         *
         * @param {boolean} remember Whether to remember the selection.
         */
        setRememberSelection(remember: boolean): void;
    
        /**
         * @return {boolean} Whether the picker remembers the last selected color
         *     between popups.
         */
        getRememberSelection(): boolean;
    
        /**
         * Add an array of colors to the colors displayed by the color picker.
         * Does not add duplicated colors.
         * @param {Array.<string>} colors The array of colors to be added.
         */
        addColors(colors: string[]): void;
    
        /**
         * Clear the colors displayed by the color picker.
         */
        clearColors(): void;
    
        /**
         * Set the pinned corner of the popup.
         * @param {goog.positioning.Corner} corner The corner of the popup which is
         *     pinned to the attaching element.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets which corner of the attaching element this popup shows up.
         * @param {goog.positioning.Corner} corner The corner of the attaching element
         *     where to show the popup.
         */
        setPopupCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets whether the popup shows up on hover. By default, appears on click.
         * @param {boolean} showOnHover True if popup should appear on hover.
         */
        setShowOnHover(showOnHover: boolean): void;
    }
}

