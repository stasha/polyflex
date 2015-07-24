
/**
 * This is place for registering globally accessible stuff.
 * 
 * @param window
 * @param Object
 * @type type
 */
(function (window, Object) {

	"use strict";



	var polyflex = window.polyflex = window.polyflex || {};

	var channels = polyflex.channels = polyflex.channels || {};
	var events = polyflex.events = polyflex.events || {};
	var urls = polyflex.urls = polyflex.urls || {};
	var messages = polyflex.messages = polyflex.messages || {};


	/**
	 * Simply pupulates hash "1:1".
	 * {
	 *	"event-name-1": "event-name-1",
	 *	"event-name-2": "event-name-2"
	 * }
	 * 
	 * @param {type} obj
	 * @param {type} names
	 * @returns {undefined}
	 */
	var populateObject = polyflex.populateObject = function (obj, names, key) {
		if (typeof obj === "object") {
			for (var i in names) {
				if (names.hasOwnProperty(i)) {
					if (!key) {
						obj[names[i]] = names[i];
					} else {
						obj[names[i][key]] = names[i];
					}
				}
			}
		}
	};



	/* Channels */
	var Channel = polyflex.Channel = polyflex.Channel || {};

	Channel.ROUTE_ENTER = "route_enter";
	Channel.ROUTE_EXIT = "route_exit";




	/* Events */
	var Event = polyflex.Event = polyflex.Event || {};

	Event.DOM_ACTIVE = "DOMActivate";
	Event.DOM_ATTR_MODIFIED = "DOMAttrModified";
	Event.DOM_CHARACTER_DATA_MODIFIED = "DOMCharacterDataModified";
	Event.DOM_NODE_INSERTED = "DOMNodeInserted";
	Event.DOM_NODE_INSERTED_INTO_DOCUMENT = "DOMNodeInsertedIntoDocument";
	Event.DOM_NODE_REMOVED = "DOMNodeRemoved";
	Event.DOM_NODE_REMOVED_FROM_DOCUMENT = "DOMNodeRemovedFromDocument";
	Event.DOM_SUBTREE_MODIFIED = "DOMSubtreeModified";
	Event.ABORT = "abort";
	Event.BLUR = "blur";
	Event.CHANGE = "change";
	Event.CLICK = "click";
	Event.DBL_CLICK = "dblclick";
	Event.DRAG = "drag";
	Event.DRAG_END = "dragend";
	Event.DRAG_ENTER = "dragenter";
	Event.DRAG_LEAVE = "dragleave";
	Event.DRAG_OVER = "dragover";
	Event.DRAG_START = "dragstart";
	Event.DROP = "drop";
	Event.ERROR = "error";
	Event.FOCUS = "focus";
	Event.FOCUS_IN = "focusin";
	Event.FOCUS_OUT = "focusout";
	Event.KEY_DOWN = "keydown";
	Event.KEY_PRESS = "keypress";
	Event.KEY_UP = "keyup";
	Event.LOAD = "load";
	Event.MOUSE_DOWN = "mousedown";
	Event.MOUSE_MOVE = "mousemove";
	Event.MOUSE_OUT = "mouseout";
	Event.MOUSE_OVER = "mouseover";
	Event.MOUSE_UP = "mouseup";
	Event.POLYFLEX_GLOBALS_CREATED = "polyflex_globals_created";
	Event.READY = "ready";
	Event.RESET = "reset";
	Event.RESIZE = "resize";
	Event.SCROLL = "scroll";
	Event.SELECT = "select";
	Event.SUBMIT = "submit";
	Event.TOUCH_CANCEL = "touchcancel";
	Event.TOUCH_END = "touchend";
	Event.TOUCH_ENTER = "touchenter";
	Event.TOUCH_LEAVE = "touchleave";
	Event.TOUCH_MOVE = "touchmove";
	Event.TOUCH_START = "touchstart";
	Event.UNLOAD = "unload";




	/* Urls */
	var Url = polyflex.Url = polyflex.Url || {};




	var update = polyflex.update = function () {
		populateObject(channels, Channel);
		populateObject(events, Event);
		populateObject(urls, Url);
	};
	
	
	update();

})(window, Object);

