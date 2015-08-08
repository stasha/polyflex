
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
	var routes = polyflex.routes = polyflex.routes || {};
	var _routes = polyflex._routes = polyflex._routes || {};
	var routeNames = polyflex.routeNames = polyflex.routeNames || {};
	var messages = polyflex.messages = polyflex.messages || {};

	/**
	 * Prints object values;
	 * 
	 * @param {type} obj
	 * @param {type} spacerName
	 * @returns {undefined}
	 */
	var print = polyflex.print = function (obj, spacerName) {
		console.log("");
		console.log("---- " + spacerName + " ----");
		for (var i in obj) {
			console.log(i + " : " + obj[i]);
		}
	};


	/**
	 * Prings all global objects.
	 * 
	 * @returns {undefined}
	 */
	var printGlobals = polyflex.printGlobals = function () {
		print(channels, "channels");
		print(events, "events");
		print(routes, "routes");
		print(_routes, "_routes");
		print(routeNames, "routeNames");
		print(Route, "Route");
	};


	/**
	 * Simply pupulates hash "1:1".
	 * {
	 *	"event-name-1": "event-name-1",
	 *	"event-name-2": "event-name-2"
	 * }
	 * 
	 * @param {type} obj
	 * @param {type} names
	 * @param {type} key
	 * @param {type} value
	 * @returns {undefined}
	 */
	var populateObject = polyflex.populateObject = function (obj, names, key, value) {
		if (typeof obj === "object") {
			for (var i in names) {
				if (names.hasOwnProperty(i)) {
					if (!key) {
						obj[names[i]] = names[i];
					} else if (key && !value) {
						if(key === "value"){
							obj[names[i]] = i;
						} else {
							obj[names[i][key]] = names[i];
						}
					} else if (key && value) {
						if (key === "name") {
							if(names[i][key]){
								obj[names[i][key]] = names[i][value];
							} else {
								obj[i] = names[i][value];
							}
						} else {
							obj[names[i][key]] = names[i][value];
						}
					}
				}
			}
		}
	};



	/* Channels */
	var Channel = polyflex.Channel = polyflex.Channel || {};

	Channel.ROUTE_ENTER = "route_enter";
	Channel.ROUTE_EXIT = "route_exit";
	Channel.BROWSER_BACK = "browser_back";
	Channel.BROWSER_FORWARD = "browser_forward";




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
	Event.POP_STATE = "popstate";
	Event.READY = "ready";
	Event.RESET = "reset";
	Event.RESIZE = "resize";
	Event.SCROLL = "scroll";
	Event.SCROLL_END = "scrollend";
	Event.SELECT = "select";
	Event.SUBMIT = "submit";
	Event.TOUCH_CANCEL = "touchcancel";
	Event.TOUCH_END = "touchend";
	Event.TOUCH_ENTER = "touchenter";
	Event.TOUCH_LEAVE = "touchleave";
	Event.TOUCH_MOVE = "touchmove";
	Event.TOUCH_START = "touchstart";
	Event.UNLOAD = "unload";
	Event.WEB_COMPONENTS_READY = "WebComponentsReady";




	/* Urls */
	var Route = polyflex.Route = polyflex.Route || {};

	/* Extending existing routes if any, and registering default routes */
	routes = extend(routes, {
		ROUTE_NOT_FOUND: {
			route: "*"
		}
	});



	/**
	 * Updates globals.
	 * 
	 * @returns {undefined}
	 */
	var update = polyflex.update = function () {
		populateObject(channels, Channel);
		populateObject(events, Event);
		populateObject(Route, routes, "name", "route");
		populateObject(routeNames, Route, "value");
		populateObject(_routes, routes, "route", "route");
	};


	update();

})(window, Object);

