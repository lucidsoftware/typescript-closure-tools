// Generated Mon May  5 10:59:29 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/messaging/messagechannel.d.ts" />
/// <reference path="../../../closure/goog/messaging/deferredchannel.d.ts" />
/// <reference path="../../../closure/goog/messaging/portnetwork.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/messaging/abstractchannel.d.ts" />
/// <reference path="../../../closure/goog/messaging/portchannel.d.ts" />

declare module goog.messaging {

    /**
     * The leaf node of a network.
     *
     * @param {!goog.messaging.MessageChannel} operatorPort The channel for
     *     communicating with the operator. The other side of this channel should be
     *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
     *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
     *     in particular, it must be able to send and receive {@link MessagePort}s.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class PortCaller extends goog.Disposable implements goog.messaging.PortNetwork {
        /**
         * The leaf node of a network.
         *
         * @param {!goog.messaging.MessageChannel} operatorPort The channel for
         *     communicating with the operator. The other side of this channel should be
         *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
         *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
         *     in particular, it must be able to send and receive {@link MessagePort}s.
         * @constructor
         * @extends {goog.Disposable}
         * @implements {goog.messaging.PortNetwork}
         * @final
         */
        constructor(operatorPort: goog.messaging.MessageChannel);
    }
}

