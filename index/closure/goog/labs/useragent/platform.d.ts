// Generated Mon May  5 19:30:50 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />

declare module goog.labs.userAgent.platform {

    /**
     * @return {boolean} Whether the platform is Android.
     */
    function isAndroid(): boolean;

    /**
     * @return {boolean} Whether the platform is iPod.
     */
    function isIpod(): boolean;

    /**
     * @return {boolean} Whether the platform is iPhone.
     */
    function isIphone(): boolean;

    /**
     * @return {boolean} Whether the platform is iPad.
     */
    function isIpad(): boolean;

    /**
     * @return {boolean} Whether the platform is iOS.
     */
    function isIos(): boolean;

    /**
     * @return {boolean} Whether the platform is Mac.
     */
    function isMacintosh(): boolean;

    /**
     * @return {boolean} Whether the platform is Linux.
     */
    function isLinux(): boolean;

    /**
     * @return {boolean} Whether the platform is Windows.
     */
    function isWindows(): boolean;

    /**
     * @return {boolean} Whether the platform is ChromeOS.
     */
    function isChromeOS(): boolean;

    /**
     * The version of the platform. We only determine the version for Windows,
     * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
     * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
     * version 0.0.
     *
     * @return {string} The platform version or empty string if version cannot be
     *     determined.
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;
}

