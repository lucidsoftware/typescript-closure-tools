// Generated Thu May  1 12:37:28 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/container.d.ts" />
/// <reference path="../../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../../goog/ui/cssnames.d.ts" />
/// <reference path="../../../goog/ui/toolbarseparatorrenderer.d.ts" />
/// <reference path="../../../goog/ui/separator.d.ts" />
/// <reference path="../../../goog/ui/toolbarrenderer.d.ts" />
/// <reference path="../../../goog/ui/toolbar.d.ts" />
/// <reference path="../../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../../goog/ui/menuitem.d.ts" />
/// <reference path="../../../goog/ui/option.d.ts" />
/// <reference path="../../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../../goog/ui/menuheader.d.ts" />
/// <reference path="../../../goog/ui/menu.d.ts" />
/// <reference path="../../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../../goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../../goog/ui/buttonside.d.ts" />
/// <reference path="../../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/button.d.ts" />
/// <reference path="../../../goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/menubuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/menubutton.d.ts" />
/// <reference path="../../../goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../goog/ui/select.d.ts" />
/// <reference path="../../../goog/ui/toolbarmenubuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/toolbarselect.d.ts" />
/// <reference path="../../../goog/color/names.d.ts" />
/// <reference path="../../../goog/color/color.d.ts" />
/// <reference path="../../../goog/ui/colormenubuttonrenderer.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../goog/ui/palette.d.ts" />
/// <reference path="../../../goog/ui/colorpalette.d.ts" />
/// <reference path="../../../goog/ui/colormenubutton.d.ts" />
/// <reference path="../../../goog/ui/toolbarcolormenubuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/toolbarcolormenubutton.d.ts" />
/// <reference path="../../../goog/ui/toolbarbuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/toolbarbutton.d.ts" />
/// <reference path="../../../goog/ui/toolbarmenubutton.d.ts" />

declare module goog.ui.editor.ToolbarFactory {

    /**
     * Takes a font spec (e.g. "Arial, Helvetica, sans-serif") and returns the
     * primary font name, normalized to lowercase (e.g. "arial").
     * @param {string} fontSpec Font specification.
     * @return {string} The primary font name, in lowercase.
     */
    function getPrimaryFont(fontSpec: string): string;

    /**
     * Bulk-adds fonts to the given font menu button.  The argument must be an
     * array of font descriptor objects, each of which must have the following
     * attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font menu (e.g. 'Tahoma')
     *   <li>{@code value} - Value for the corresponding 'font-family' CSS style
     *       (e.g. 'Tahoma, Arial, sans-serif')
     * </ul>
     * @param {!goog.ui.Select} button Font menu button.
     * @param {!Array.<{caption: string, value: string}>} fonts Array of
     *     font descriptors.
     */
    function addFonts(button: goog.ui.Select, fonts: { caption: string, value: string }[]): void;

    /**
     * Adds a menu item to the given font menu button.  The first font listed in
     * the {@code value} argument is considered the font ID, so adding two items
     * whose CSS style starts with the same font may lead to unpredictable results.
     * @param {!goog.ui.Select} button Font menu button.
     * @param {string} caption Caption to show for the font menu.
     * @param {string} value Value for the corresponding 'font-family' CSS style.
     */
    function addFont(button: goog.ui.Select, caption: string, value: string): void;

    /**
     * Bulk-adds font sizes to the given font size menu button.  The argument must
     * be an array of font size descriptor objects, each of which must have the
     * following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font size menu (e.g. 'Huge')
     *   <li>{@code value} - Value for the corresponding HTML font size (e.g. 6)
     * </ul>
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {!Array.<{caption: string, value:number}>} sizes Array of font
     *     size descriptors.
     */
    function addFontSizes(button: goog.ui.Select, sizes: { caption: string, value: number }[]): void;

    /**
     * Adds a menu item to the given font size menu button.  The {@code value}
     * argument must be a legacy HTML font size in the 0-7 range.
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {string} caption Caption to show in the font size menu.
     * @param {number} value Value for the corresponding HTML font size.
     */
    function addFontSize(button: goog.ui.Select, caption: string, value: number): void;

    /**
     * Converts a legacy font size specification into an equivalent pixel size.
     * For example, {@code &lt;font size="6"&gt;} is {@code font-size: 32px;}, etc.
     * @param {number} fontSize Legacy font size spec in the 0-7 range.
     * @return {number} Equivalent pixel size.
     */
    function getPxFromLegacySize(fontSize: number): number;

    /**
     * Converts a pixel font size specification into an equivalent legacy size.
     * For example, {@code font-size: 32px;} is {@code &lt;font size="6"&gt;}, etc.
     * If the given pixel size doesn't exactly match one of the legacy sizes, -1 is
     * returned.
     * @param {number} px Pixel font size.
     * @return {number} Equivalent legacy size spec in the 0-7 range, or -1 if none
     *     exists.
     */
    function getLegacySizeFromPx(px: number): number;

    /**
     * Bulk-adds format options to the given "Format block" menu button.  The
     * argument must be an array of format option descriptor objects, each of
     * which must have the following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the menu (e.g. 'Minor heading')
     *   <li>{@code command} - Corresponding {@link goog.dom.TagName} (e.g.
     *       'H4')
     * </ul>
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {!Array.<{caption: string, command: goog.dom.TagName}>} formats Array
     *     of format option descriptors.
     */
    function addFormatOptions(button: goog.ui.Select, formats: { caption: string, command: goog.dom.TagName }[]): void;

    /**
     * Adds a menu item to the given "Format block" menu button.
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {string} caption Caption to show in the menu.
     * @param {goog.dom.TagName} tag Corresponding block format tag.
     */
    function addFormatOption(button: goog.ui.Select, caption: string, tag: goog.dom.TagName): void;

    /**
     * Creates a {@link goog.ui.Toolbar} containing the specified set of
     * toolbar buttons, and renders it into the given parent element.  Each
     * item in the {@code items} array must a {@link goog.ui.Control}.
     * @param {!Array.<goog.ui.Control>} items Toolbar items; each must
     *     be a {@link goog.ui.Control}.
     * @param {!Element} elem Toolbar parent element.
     * @param {boolean=} opt_isRightToLeft Whether the editor chrome is
     *     right-to-left; defaults to the directionality of the toolbar parent
     *     element.
     * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
     *     element.
     */
    function makeToolbar(items: goog.ui.Control[], elem: Element, opt_isRightToLeft?: boolean): goog.ui.Toolbar;

    /**
     * Creates a toolbar button with the given ID, tooltip, and caption.  Applies
     * any custom CSS class names to the button's caption element.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toolbar button.
     */
    function makeButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a toggle button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element. The button
     * returned has checkbox-like toggle semantics.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toggle button.
     */
    function makeToggleButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a menu button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.MenuButton#setMenu} to attach a {@link goog.ui.Menu} to the
     * button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.MenuButton} A menu button.
     */
    function makeMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.MenuButton;

    /**
     * Creates a select button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's root element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.Select#setMenu} to attach a {@link goog.ui.Menu} containing
     * {@link goog.ui.Option}s to the select button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption; used as the
     *     default caption when nothing is selected.
     * @param {string=} opt_classNames CSS class name(s) to apply to the button's
     *     root element.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Select} A select button.
     */
    function makeSelectButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Select;

    /**
     * Creates a color menu button with the given ID, tooltip, and caption.
     * Applies any custom CSS class names to the button's caption element.  The
     * button is created with a default color menu containing standard color
     * palettes.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in toolbar buttons, but can be anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarColorMenuButtonRenderer}
     *     if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.ColorMenuButton} A color menu button.
     */
    function makeColorMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorMenuButton;
}
