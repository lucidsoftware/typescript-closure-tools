// Generated Mon May  5 16:33:18 PDT 2014


declare module osapi {

    /** @type {Function} */
    var callback: Function;
}

declare module goog.osapi {

    /**
     * Dispatch a JSON-RPC batch request to services defined in the osapi namespace
     * @param {Array.<Object>} requests an array of rpc requests.
     */
    function handleGadgetRpcMethod(requests: Object[]): void;

    /**
     * Initializes container side osapi binding.
     */
    function init(): void;
}

