/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by DEV on 2016/6/20.
	 */

	//引进jquery、bootstrap
	__webpack_require__(1);

	__webpack_require__(3);

	//引进样式文件
	__webpack_require__(16);
	__webpack_require__(25);

	//引进index模块
	__webpack_require__(27);

	//引进sign模块
	__webpack_require__(28);
	__webpack_require__(29);





/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.0.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-06-09T18:02Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	var
		version = "3.0.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( /*jshint -W002 */ value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList.then( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* jshint -W083 */
				anim.done( function() {

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} ) );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)
	__webpack_require__(7)
	__webpack_require__(8)
	__webpack_require__(9)
	__webpack_require__(10)
	__webpack_require__(11)
	__webpack_require__(12)
	__webpack_require__(13)
	__webpack_require__(14)
	__webpack_require__(15)

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: alert.js v3.3.6
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.6'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: button.js v3.3.6
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.6'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state += 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.3.6'

	  Carousel.TRANSITION_DURATION = 600

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  }

	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.6
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.6'

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0

	    $items.eq(index).trigger('focus')
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: modal.js v3.3.6
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.6'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.6
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.3.6'

	  Tooltip.TRANSITION_DURATION = 150

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }

	    return false
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }

	    if (self.isInStateTrue()) return

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null

	        if (prevHoverState == 'out') that.leave(that)
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  += marginTop
	    offset.left += marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element

	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'

	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }

	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	    })
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: popover.js v3.3.6
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.3.6'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.3.6'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0

	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    this.clear()

	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }

	  Tab.VERSION = '3.3.6'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.3.6'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }

	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

	    return false
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')

	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')

	      this.$element.trigger(e)

	      if (e.isDefaultPrevented()) return

	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */.label,sub,sup{vertical-align:baseline}hr,img{border:0}body,figure{margin:0}.btn-group>.btn-group,.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.dropdown-menu{float:left}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.pre-scrollable{max-height:340px}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}b,optgroup,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{color:#000;background:#ff0}sub,sup{position:relative;font-size:75%;line-height:0}sup{top:-.5em}sub{bottom:-.25em}img{vertical-align:middle}svg:not(:root){overflow:hidden}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre,textarea{overflow:auto}code,kbd,pre,samp{font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}.glyphicon,address{font-style:normal}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{blockquote,img,pre,tr{page-break-inside:avoid}*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999}thead{display:table-header-group}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}.dropdown-menu,.modal-content{-webkit-background-clip:padding-box}.btn,.btn-danger.active,.btn-danger:active,.btn-default.active,.btn-default:active,.btn-info.active,.btn-info:active,.btn-primary.active,.btn-primary:active,.btn-warning.active,.btn-warning:active,.btn.active,.btn:active,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover,.form-control,.navbar-toggle,.open>.dropdown-toggle.btn-danger,.open>.dropdown-toggle.btn-default,.open>.dropdown-toggle.btn-info,.open>.dropdown-toggle.btn-primary,.open>.dropdown-toggle.btn-warning{background-image:none}.img-thumbnail,body{background-color:#fff}@font-face{font-family:'Glyphicons Halflings';src:url(" + __webpack_require__(19) + ");src:url(" + __webpack_require__(19) + "?#iefix) format('embedded-opentype'),url(" + __webpack_require__(20) + ") format('woff2'),url(" + __webpack_require__(21) + ") format('woff'),url(" + __webpack_require__(22) + ") format('truetype'),url(" + __webpack_require__(23) + "#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-jpy:before,.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-rub:before,.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}dt,kbd kbd,label{font-weight:700}address,blockquote .small,blockquote footer,blockquote small,dd,dt,pre{line-height:1.42857143}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}pre code,table{background-color:transparent}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}dl,ol,ul{margin-top:0}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child,ol ol,ol ul,ul ol,ul ul{margin-bottom:0}address,dl{margin-bottom:20px}ol,ul{margin-bottom:10px}.list-inline{margin-left:-5px}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}.container{width:750px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;color:#777}legend,pre{display:block;color:#333}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}code,kbd{padding:2px 4px;font-size:90%}caption,th{text-align:left}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\A0   \\2014'}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;-webkit-box-shadow:none;box-shadow:none}pre{padding:9.5px;margin:0 0 10px;font-size:13px;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.container,.container-fluid{margin-right:auto;margin-left:auto}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;border-radius:0}.container,.container-fluid{padding-right:15px;padding-left:15px}.pre-scrollable{overflow-y:scroll}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}caption{padding-top:8px;padding-bottom:8px;color:#777}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered,.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover,.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset,legend{padding:0;border:0}fieldset{min-width:0;margin:0}legend{width:100%;margin-bottom:20px;font-size:21px;line-height:inherit;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}.form-control,output{font-size:14px;line-height:1.42857143;color:#555;display:block}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}output{padding-top:7px}.form-control{width:100%;height:34px;padding:6px 12px;background-color:#fff;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .form-control-feedback,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio label,fieldset[disabled] .radio-inline,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.form-group-sm .form-control,.input-sm{padding:5px 10px;border-radius:3px;font-size:12px}.input-sm{height:30px;line-height:1.5}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;line-height:1.5}.form-group-lg .form-control,.input-lg{border-radius:6px;padding:10px 16px;font-size:18px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;line-height:1.3333333}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;line-height:1.3333333}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.collapsing,.dropdown,.dropup{position:relative}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .form-control-feedback,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .form-control-feedback,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-control-static,.form-inline .form-group{display:inline-block}.form-inline .control-label,.form-inline .form-group{margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.btn-default:hover,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary.active,.btn-primary:active,.btn-primary:hover,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success.active,.btn-success:active,.btn-success:hover,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info.active,.btn-info:active,.btn-info:hover,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.btn-warning:hover,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger.active,.btn-danger:active,.btn-danger:hover,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;-o-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu-right,.dropdown-menu.pull-right{right:0;left:auto}.dropdown-header,.dropdown-menu>li>a{display:block;padding:3px 20px;line-height:1.42857143;white-space:nowrap}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle,.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child,.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child),.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn,.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{clear:both;font-weight:400;color:#333}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-left{right:auto;left:0}.dropdown-header{font-size:12px;color:#777}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.nav-justified>.dropdown .dropdown-menu,.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn .caret,.btn-group>.btn:first-child{margin-left:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn-lg .caret{border-width:5px 5px 0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-radius:4px 4px 0 0}.btn-group-vertical>.btn:last-child:not(:first-child){border-radius:0 0 4px 4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.nav>li,.nav>li>a{display:block;position:relative}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li>a{padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center;margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0;border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-justified>li,.nav-stacked>li{float:none}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar{border-radius:4px}.navbar-header{float:left}.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.carousel-inner,.embed-responsive,.modal,.modal-open,.progress{overflow:hidden}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}.navbar-static-top{z-index:1000;border-width:0 0 1px}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}.navbar-fixed-bottom,.navbar-fixed-top,.navbar-static-top{border-radius:0}.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}.progress-bar-striped,.progress-striped .progress-bar,.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}@media (min-width:768px){.navbar-toggle{display:none}.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);margin:8px -15px}@media (min-width:768px){.navbar-form .form-control-static,.navbar-form .form-group{display:inline-block}.navbar-form .control-label,.navbar-form .form-group{margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}}.breadcrumb>li,.pagination{display:inline-block}.btn .badge,.btn .label{top:-1px;position:relative}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-radius:4px 4px 0 0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\A0\"}.breadcrumb>.active{color:#777}.pagination{padding-left:0;margin:20px 0;border-radius:4px}.pager li,.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.badge,.label{font-weight:700;line-height:1;white-space:nowrap;text-align:center}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;color:#fff;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;color:#fff;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.media-object,.thumbnail{display:block}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.jumbotron,.jumbotron .h1,.jumbotron h1{color:inherit}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;background-color:#eee}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.alert,.thumbnail{margin-bottom:20px}.alert .alert-link,.close{font-weight:700}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.modal,.modal-backdrop{top:0;right:0;bottom:0;left:0}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-striped .progress-bar-info,.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.panel-heading>.dropdown .dropdown-toggle,.panel-title,.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-title,.panel>.list-group,.panel>.panel-collapse>.list-group,.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-title{margin-top:0;font-size:16px}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel-group .panel-heading,.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.list-group+.panel-footer,.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.popover,.tooltip{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.42857143;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;line-break:auto;text-decoration:none}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal{position:fixed;z-index:1050;display:none;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.carousel-control,.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}.tooltip.top-left .tooltip-arrow,.tooltip.top-right .tooltip-arrow{bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-size:12px;text-align:left;text-align:start;filter:alpha(opacity=0);opacity:0}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px}.tooltip.top-right .tooltip-arrow{left:5px}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow,.tooltip.bottom-left .tooltip-arrow,.tooltip.bottom-right .tooltip-arrow{border-width:0 5px 5px;border-bottom-color:#000;top:0}.tooltip.bottom .tooltip-arrow{left:50%;margin-left:-5px}.tooltip.bottom-left .tooltip-arrow{right:5px;margin-top:-5px}.tooltip.bottom-right .tooltip-arrow{left:5px;margin-top:-5px}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-size:14px;text-align:left;text-align:start;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2)}.carousel-caption,.carousel-control{color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.carousel,.carousel-inner{position:relative}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.left>.arrow:after,.popover.right>.arrow:after{bottom:-10px;content:\" \"}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{left:1px;border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;border-right-width:0;border-left-color:#fff}.carousel-inner{width:100%}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;background-color:rgba(0,0,0,0)}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px}.carousel-caption .btn,.text-hide{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.hidden,.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;background-color:transparent;border:0}.affix{position:fixed}@-ms-viewport{width:device-width}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}.visible-xs-block{display:block!important}.visible-xs-inline{display:inline!important}.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}.visible-sm-block{display:block!important}.visible-sm-inline{display:inline!important}.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}.visible-md-block{display:block!important}.visible-md-inline{display:inline!important}.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}.visible-lg-block{display:block!important}.visible-lg-inline{display:inline!important}.visible-lg-inline-block{display:inline-block!important}.hidden-lg{display:none!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}.hidden-print{display:none!important}}\n/*# sourceMappingURL=data:application/json;base64,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LFFBREEsNkJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLDBCQUlBLFFBQUEsUUFEQSxzQkFJQSxRQUFBLFFBREEsdUJBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLHlCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsdUJBSUEsUUFBQSxRQURBLHlCQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSwrQkFJQSxRQUFBLFFBREEsOEJBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsOEJBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSxpQ0FJQSxRQUFBLFFBREEsMEJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSx5QkFJQSxRQUFBLFFBREEsdUJBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSxnQ0FJQSxRQUFBLFFBREEsZ0NBSUEsUUFBQSxRQURBLDJCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSwwQkFJQSxRQUFBLFFBREEsK0JBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsK0JBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSwwQkFJQSxRQUFBLFFBREEsZ0NBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw2QkFJQSxRQUFBLFFBREEsZ0NBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw2QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsK0JBSUEsUUFBQSxRQURBLG1DQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsdUJBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsMkJBSUEsUUFBQSxRQURBLHlCQUlBLFFBQUEsUUFEQSwwQkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSwrQkFJQSxRQUFBLFFBREEsMEJBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSwrQkFJQSxRQUFBLFFBREEsOEJBSUEsUUFBQSxRQURBLGtDQUlBLFFBQUEsUUFEQSxvQ0FJQSxRQUFBLFFBREEsc0JBSUEsUUFBQSxRQURBLDJCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsOEJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSwwQkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLHFDQUlBLFFBQUEsUUFEQSxvQ0FJQSxRQUFBLFFBREEsa0NBSUEsUUFBQSxRQURBLG9DQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLHdCQUlBLFFBQUEsUUFEQSx5QkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLDBCQUlBLFFBQUEsUUFEQSxzQkFJQSxRQUFBLFFBREEsc0JBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSxtQ0FJQSxRQUFBLFFBREEsdUNBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSxvQ0FJQSxRQUFBLFFBREEscUNBSUEsUUFBQSxRQURBLHlDQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLHdCQUlBLFFBQUEsUUFEQSwwQkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLHlCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsdUJBSUEsUUFBQSxRQURBLHdCQUlBLFFBQUEsUUFEQSx5QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsK0JBSUEsUUFBQSxRQURBLGdDQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsOEJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsMEJBSUEsUUFBQSxRQURBLHlCQUlBLFFBQUEsUUFEQSw2QkFJQSxRQUFBLFFBREEsMkJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLDJCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSw4QkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsaUNBSUEsUUFBQSxRQURBLG9DQUlBLFFBQUEsUUFEQSxpQ0FJQSxRQUFBLFFBREEsK0JBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSxpQ0FJQSxRQUFBLFFBREEscUJBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsMkJBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLHVCQUlBLFFBQUEsUUFEQSx5QkFJQSxRQUFBLFFBREEseUJBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLHNCQUlBLFFBQUEsUUFEQSx3QkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSx1QkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSwyQkFJQSxRQUFBLFFBREEsMEJBR0Esc0JBR0Esc0JBRkEsUUFBQSxRQVFBLHNCQUhBLHNCQUlBLFFBQUEsUUFLQSxzQkFIQSx3QkFJQSxRQUFBLFFBRUEsd0JBSUEsUUFBQSxRQURBLDRCQUlBLFFBQUEsUUFEQSxtQ0FJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLG9DQUlBLFFBQUEsUUFEQSxrQ0FJQSxRQUFBLFFBREEsaUNBSUEsUUFBQSxRQURBLCtCQUlBLFFBQUEsUUFEQSxzQkFJQSxRQUFBLFFBREEsd0JBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsNkJBSUEsUUFBQSxRQURBLGtDQUlBLFFBQUEsUUFEQSxtQ0FJQSxRQUFBLFFBREEsc0NBSUEsUUFBQSxRQURBLDBDQUlBLFFBQUEsUUFEQSxvQ0FJQSxRQUFBLFFBREEsd0NBSUEsUUFBQSxRQURBLHFDQUlBLFFBQUEsUUFEQSxpQ0FJQSxRQUFBLFFBREEsZ0NBSUEsUUFBQSxRQURBLGtDQUlBLFFBQUEsUUFEQSwrQkFJQSxRQUFBLFFBREEsMEJBSUEsUUFBQSxRQURBLDhCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsNEJBSUEsUUFBQSxRQURBLDZCQUlBLFFBQUEsUUFEQSw0QkFJQSxRQUFBLFFBREEsMEJBSUEsUUFBQSxRQURBLEVBTUEsT0FEQSxRQURBLG1CQUFrQixXQUNoQixnQkFBQSxXQUZBLFdBQVksV0FRZCxLQUlLLFVBQUEsS0FDSyw0QkFBQSxZQUVWLEtBQ0UsWUFBQSxpQkFBQSxVQUFBLE1BQUEsV0FFQSxVQUFBLEtBSEEsWUFBYSxXQUtmLE1BQUEsS0FBQSxPQURBLE1BRUEsT0FDQSxTQUtBLFlBQUEsUUFDQSxVQUFBLFFBQ0EsWUFBQSxRQUZBLEVBS0UsTUFBQSxRQUNBLGdCQUFBLEtBREYsUUFHQSxRQUVFLE1BQUEsUUFIQSxnQkFBaUIsVUFNbkIsUUFDRSxRQUFBLE9BQUEsS0FDQSxRQUFBLHlCQUFBLEtBQUEsSUFIQSxlQUFnQixLQWdCbEIsNEJBTEEsMEJBSEEsZ0JBRUEsaUJBR0EsZUFJQSxRQUFXLE1BQ1gsVUFBYSxLQUNiLE9BQUEsS0FGQSxhQUtFLGNBQUEsSUFGRixlQUtBLFFBQUEsYUFDRSxVQUFBLEtBSEEsT0FBUSxLQUtWLFFBQUEsSUFDRSxZQUFBLFdBRUEsT0FBQSxJQUFBLE1BQUEsS0FDQSxjQUFBLElBQ0EsbUJBQUEsSUFBQSxJQUFBLFlBQ0EsY0FBQSxJQUFBLElBQUEsWUFDQSxXQUFBLElBQUEsSUFBQSxZQUZGLFlBS08sY0FBQSxJQUZQLEdBS0EsV0FBQSxLQUNFLGNBQUEsS0FFRixXQUFBLElBQUEsTUFBQSxLQUZBLFNBS0UsU0FBQSxTQUNBLE1BQUEsSUFIQSxPQUFRLElBS1YsUUFBQSxFQUNFLE9BQUEsS0FDQSxTQUFBLE9BQ0EsS0FBQSxjQUNBLE9BQUEsRUFGRiwwQkFDQSx5QkFLRSxTQUFBLE9BSEEsTUFBTyxLQUtULE9BQUEsS0FDQSxPQUFBLEVBQ0UsU0FBQSxRQUNBLEtBQUEsS0FGRixjQUtFLE9BQUEsUUFRRixJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFmQSxHQUtBLEdBSEEsR0FDQSxHQUtBLEdBQ0EsR0FPQSxZQUFBLFFBQ0EsWUFBQSxJQUNBLFlBQUEsSUFDQSxNQUFBLFFBb0JBLFdBWkEsVUFhQSxXQVpBLFVBYUEsV0FaQSxVQWFBLFdBWkEsVUFhQSxXQVpBLFVBYUEsV0FaQSxVQUNBLFVBaEJBLFNBaUJBLFVBaEJBLFNBaUJBLFVBaEJBLFNBaUJBLFVBaEJBLFNBaUJBLFVBWkEsU0FhQSxVQVpBLFNBbUJBLFlBQUksSUFDSixZQUFJLEVBQ0osTUFBSSxLQURKLElBRUEsSUFNQSxJQVRBLEdBRUEsR0FNQSxHQUVBLFdBQUEsS0FDQSxjQUFBLEtBU0EsV0FWQSxVQVlBLFdBVkEsVUFZQSxXQU5BLFVBQ0EsVUFOQSxTQVFBLFVBVkEsU0FZQSxVQU5BLFNBUUcsVUFBQSxJQUdILElBRkEsSUFNQSxJQUxBLEdBRkEsR0FNQSxHQUVBLFdBQUEsS0FDQSxjQUFBLEtBU0EsV0FWQSxVQVlBLFdBVkEsVUFZQSxXQU5BLFVBQ0EsVUFOQSxTQVFBLFVBVkEsU0FZQSxVQU5BLFNBUUcsVUFBQSxJQUdILElBREEsR0FFRSxVQUFBLEtBR0YsSUFEQSxHQUVFLFVBQUEsS0FHRixJQURBLEdBRUUsVUFBQSxLQUdGLElBREEsR0FFRSxVQUFBLEtBR0YsSUFEQSxHQUVFLFVBQUEsS0FHRixJQURBLEdBRUUsVUFBQSxLQUVGLEVBQ0EsT0FBQSxFQUFBLEVBQUEsS0FGQSxNQUtBLGNBQUEsS0FDRSxVQUFBLEtBSEEsWUFBYSxJQUtmLFlBQUEsSUF3SkEsR0FvR0EsUUF1aENBLE1BbkZBLFlBQUEsSUEzOUJBLFFBdkNBLGtCQUVBLGtCQUNBLGlCQWhEQSxHQUdBLEdBK0dBLElBZ3RCQSxZQUFlLFdBcjlCZix5QkFLRSxNQUNBLFVBQUEsTUFBRixPQURBLE1BRUUsVUFBVyxJQU9iLE1BREEsS0FFRSxRQUFBLEtBSEEsaUJBQWtCLFFBNEhwQixhQUpBLGVBS0UsYUFBQSxFQXF1SEEsV0FBQSxLQTUxSEYsV0FDRSxXQUFBLEtBRkYsWUFLQSxXQUFBLE1BRkEsYUFLQSxXQUFBLE9BRkEsY0FLQSxXQUFBLFFBRkEsYUFLQSxZQUFBLE9BRkEsZ0JBS0EsZUFBQSxVQUZBLGdCQUtBLGVBQUEsVUFGQSxpQkFLQSxlQUFBLFdBRkEsWUFLQSxNQUFBLEtBRkEsY0FLQSxNQUFBLFFBR0EscUJBTEEscUJBTUUsTUFBQSxRQUVGLGNBQ0MsTUFBQSxRQUdELHFCQUxBLHFCQU1FLE1BQUEsUUFFRixXQUNDLE1BQUEsUUFHRCxrQkFMQSxrQkFNRSxNQUFBLFFBRUYsY0FDQyxNQUFBLFFBR0QscUJBTEEscUJBTUUsTUFBQSxRQUVGLGFBQ0MsTUFBQSxRQUdELG9CQUxBLG9CQU1FLE1BQUEsUUFFRixZQUNDLE1BQUEsS0FDQyxpQkFBQSxRQURGLG1CQUdBLG1CQUVFLGlCQUFBLFFBRUYsWUFDQyxpQkFBVyxRQUdaLG1CQUxBLG1CQU1FLGlCQUFBLFFBRUYsU0FDQyxpQkFBVyxRQUdaLGdCQUxBLGdCQU1FLGlCQUFBLFFBRUYsWUFDQyxpQkFBUSxRQUdULG1CQUxBLG1CQU1FLGlCQUFBLFFBRUYsV0FDQyxpQkFBVyxRQUdaLGtCQUxBLGtCQU1FLGlCQUFBLFFBZ0tGLFNBa3dCQSxNQUNFLGlCQXZGRSxZQTEwQkosYUFDQyxlQUFVLElBQ1QsT0FBQSxLQUFBLEVBQUEsS0FIQSxjQUFlLElBQUksTUFBTSxLQTJCM0IsR0F4QkEsR0FEQSxHQThCRSxXQUFBLEVBd0NGLHlCQUZBLHdCQUNBLHlCQTdEQSxNQUZBLE1BQ0EsTUFFQSxNQThERSxjQUFlLEVBMkNqQixRQXpGQSxHQTBGQSxjQUFVLEtBbEhWLEdBREEsR0FHRSxjQUFlLEtBZ0JqQixhQUVFLFlBQUEsS0FERixnQkFLRSxRQUFBLGFBQ0EsY0FBQSxJQUhBLGFBQWMsSUFhaEIsR0FLQSxZQUFBLEVBRkEseUJBS0Esa0JBQ0UsTUFBQSxLQUhFLE1BQU8sTUFLWCxTQUEwQixPQUN4QixNQUFBLEtBQ0UsV0FBQSxNQUNBLGNBQUEsU0FDQSxZQUFBLE9BRkYsa0JBS0UsWUFBQSxNQThIRixXQUNBLE1BQUEsT0EvSEYsMEJBREEsWUFFRSxPQUFRLEtBQ1IsY0FBZSxJQUFJLE9BQU8sS0FNNUIsWUFDRSxVQUFBLElBQ0EsZUFBQSxVQUVGLFdBQ0UsUUFBQSxLQUFBLEtBQ0EsT0FBQSxFQUFBLEVBQUEsS0FIQSxVQUFXLE9BS2IsWUFBQSxJQUFBLE1BQUEsS0FLQSxrQkFFQSxrQkFDQSxpQkFGRSxRQUFTLE1BS1gsVUFBVyxJQUVYLE1BQUEsS0Fra0NBLE9BcmdDQSxJQSs2QkUsUUFBQSxNQU1BLE1BQUEsS0FsL0JGLHlCQUZBLHlCQUNBLHdCQUVFLFFBQVMsY0FNWCxvQkFDQSxzQkFDRSxjQUFTLEtBSFQsYUFBYyxFQUtoQixXQUFBLE1BQ0EsYUFBVSxJQUFBLE1BQUEsS0FDUixZQUFBLEVBNkJGLEtBR0EsSUFLRSxRQUFBLElBQUEsSUFDQSxVQUFBLElBNHhCRixRQU1BLEdBdEZFLFdBQUEsS0E1dUJGLGtDQVJBLGtDQUVBLGlDQU9BLG9DQVJBLG9DQUVBLG1DQU9BLFFBQUEsR0FNQSxpQ0FKQSxpQ0FGQSxnQ0FPQSxtQ0FKQSxtQ0FGQSxrQ0FPQSxRQUFBLGNBR0EsS0FDQSxJQUNBLElBQ0EsS0FLQSxZQUFBLE1BQUEsT0FBQSxTQUFBLGNBQUEsVUFFQSxLQURFLE1BQU8sUUFLVCxpQkFBQSxRQUNFLGNBQUEsSUFGRixJQUdFLE1BQU8sS0FLVCxpQkFBQSxLQUNFLGNBQUEsSUFDQSxtQkFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLGdCQUNBLFdBQUEsTUFBQSxFQUFBLEtBQUEsRUFBQSxnQkFGRixRQUtFLFFBQUEsRUFDUSxVQUFBLEtBRVYsbUJBQUksS0FDRixXQUFBLEtBRkYsSUFNVSxRQUFBLE1BSFIsT0FBUSxFQUFFLEVBQUUsS0FLZCxVQUFBLEtBR0UsV0FBQSxVQUNBLFVBQUEsV0FDQSxpQkFBQSxRQUNBLE9BQUEsSUFBQSxNQUFBLEtBQ0EsY0FBQSxJQWNGLFdBaUJBLGlCQUdFLGFBQWMsS0FLaEIsWUFBQSxLQXpDQSxTQUtFLFFBQUEsRUFDQSxVQUFBLFFBSEEsTUFBTyxRQUtULFlBQUksU0FFRixjQUFBLEVBTUYsV0FpQkEsaUJBa0JvZ0IsY0FBQSxLQUFZLGFBQUEsS0EzQ2hoQixnQkFNRSxXQUFBLE9BU0YseUJBQ0UsV0FDRSxNQUFPLE9BR1gsMEJBQ0UsV0FDRSxNQUFPLFFBU1gsS0FLRSxhQUFBLE1BQ0EsWUFBQSxNQUNGLFVBS2lZLFdBQStDLFdBQWdELFdBQS9iLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBTnJWLFVBTXNYLFdBQThDLFdBQWdELFdBQTliLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBUDFVLFVBTzJXLFdBQTZDLFdBQWdELFdBQTdiLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBSi9ULFVBSWdXLFdBQTRDLFdBQWdELFdBQTViLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQTRDLFVBQXdMLFNBQUEsU0FBWSxXQUFBLElBQVksY0FBQSxLQUFZLGFBQUEsS0FNamEsV0FBWSxNQUFBLEtBd0QzSCxXQXJEQSxNQUFBLGFBd0RBLFdBckRBLE1BQUEsYUF3REEsVUFyREEsTUFBQSxJQXdEQSxVQXJEQSxNQUFBLGFBd0RBLFVBckRBLE1BQUEsYUF3REEsVUFyREEsTUFBQSxJQXdEQSxVQXJEQSxNQUFBLGFBd0RBLFVBckRBLE1BQUEsYUF3REEsVUFyREEsTUFBQSxJQXdEQSxVQXJEQSxNQUFBLGFBd0RBLFVBckRBLE1BQUEsWUF3REEsZ0JBckRBLE1BQUEsS0F3REEsZ0JBckRBLE1BQUEsYUF3REEsZ0JBckRBLE1BQUEsYUF3REEsZUFyREEsTUFBQSxJQXdEQSxlQXJEQSxNQUFBLGFBd0RBLGVBckRBLE1BQUEsYUF3REEsZUFyREEsTUFBQSxJQXdEQSxlQXJEQSxNQUFBLGFBd0RBLGVBckRBLE1BQUEsYUF3REEsZUFyREEsTUFBQSxJQXdEQSxlQXJEQSxNQUFBLGFBd0RBLGVBckRBLE1BQUEsWUF3REEsZUFyREEsTUFBQSxLQXdEQSxnQkFyREEsS0FBQSxLQXdEQSxnQkFyREEsS0FBQSxhQXdEQSxnQkFyREEsS0FBQSxhQXdEQSxlQXJEQSxLQUFBLElBd0RBLGVBckRBLEtBQUEsYUF3REEsZUFyREEsS0FBQSxhQXdEQSxlQXJEQSxLQUFBLElBd0RBLGVBckRBLEtBQUEsYUF3REEsZUFyREEsS0FBQSxhQXdEQSxlQXJEQSxLQUFBLElBd0RBLGVBckRBLEtBQUEsYUF3REEsZUFyREEsS0FBQSxZQXdEQSxlQXJEQSxLQUFBLEtBd0RBLGtCQXJEQSxZQUFBLEtBd0RBLGtCQXJEQSxZQUFBLGFBd0RBLGtCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLElBd0RBLGlCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLElBd0RBLGlCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLElBd0RBLGlCQXJEQSxZQUFBLGFBd0RBLGlCQXJEQSxZQUFBLFlBd0RBLGlCQXJEQSxZQUFBLEVBd0RBLHlCQXJEQSxVQUl5RCxXQUFXLFdBQVcsV0FIN0UsVUF1REEsVUFyREYsVUFDRSxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQTRDLE1BQUEsS0FBdUIsV0FBWSxNQUFBLEtBbUUzSCxXQWhFQSxNQUFBLGFBbUVBLFdBaEVBLE1BQUEsYUFtRUEsVUFoRUEsTUFBQSxJQW1FQSxVQWhFQSxNQUFBLGFBbUVBLFVBaEVBLE1BQUEsYUFtRUEsVUFoRUEsTUFBQSxJQW1FQSxVQWhFQSxNQUFBLGFBbUVBLFVBaEVBLE1BQUEsYUFtRUEsVUFoRUEsTUFBQSxJQW1FQSxVQWhFQSxNQUFBLGFBbUVBLFVBaEVBLE1BQUEsWUFtRUEsZ0JBaEVBLE1BQUEsS0FtRUEsZ0JBaEVBLE1BQUEsYUFtRUEsZ0JBaEVBLE1BQUEsYUFtRUEsZUFoRUEsTUFBQSxJQW1FQSxlQWhFQSxNQUFBLGFBbUVBLGVBaEVBLE1BQUEsYUFtRUEsZUFoRUEsTUFBQSxJQW1FQSxlQWhFQSxNQUFBLGFBbUVBLGVBaEVBLE1BQUEsYUFtRUEsZUFoRUEsTUFBQSxJQW1FQSxlQWhFQSxNQUFBLGFBbUVBLGVBaEVBLE1BQUEsWUFtRUEsZUFoRUEsTUFBQSxLQW1FQSxnQkFoRUEsS0FBQSxLQW1FQSxnQkFoRUEsS0FBQSxhQW1FQSxnQkFoRUEsS0FBQSxhQW1FQSxlQWhFQSxLQUFBLElBbUVBLGVBaEVBLEtBQUEsYUFtRUEsZUFoRUEsS0FBQSxhQW1FQSxlQWhFQSxLQUFBLElBbUVBLGVBaEVBLEtBQUEsYUFtRUEsZUFoRUEsS0FBQSxhQW1FQSxlQWhFQSxLQUFBLElBbUVBLGVBaEVBLEtBQUEsYUFtRUEsZUFoRUEsS0FBQSxZQW1FQSxlQWhFQSxLQUFBLEtBbUVBLGtCQWhFQSxZQUFBLEtBbUVBLGtCQWhFQSxZQUFBLGFBbUVBLGtCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLElBbUVBLGlCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLElBbUVBLGlCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLElBbUVBLGlCQWhFQSxZQUFBLGFBbUVBLGlCQWhFQSxZQUFBLFlBbUVBLGlCQWhFQSxZQUFBLEdBb0VGLHlCQUNFLFVBN0R1RCxXQUFXLFdBQVcsV0E4RDdFLFVBQ0EsVUFoRUYsVUFDRSxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQTRDLE1BQUEsS0FBdUIsV0FBWSxNQUFBLEtBOEUzSCxXQTNFQSxNQUFBLGFBOEVBLFdBM0VBLE1BQUEsYUE4RUEsVUEzRUEsTUFBQSxJQThFQSxVQTNFQSxNQUFBLGFBOEVBLFVBM0VBLE1BQUEsYUE4RUEsVUEzRUEsTUFBQSxJQThFQSxVQTNFQSxNQUFBLGFBOEVBLFVBM0VBLE1BQUEsYUE4RUEsVUEzRUEsTUFBQSxJQThFQSxVQTNFQSxNQUFBLGFBOEVBLFVBM0VBLE1BQUEsWUE4RUEsZ0JBM0VBLE1BQUEsS0E4RUEsZ0JBM0VBLE1BQUEsYUE4RUEsZ0JBM0VBLE1BQUEsYUE4RUEsZUEzRUEsTUFBQSxJQThFQSxlQTNFQSxNQUFBLGFBOEVBLGVBM0VBLE1BQUEsYUE4RUEsZUEzRUEsTUFBQSxJQThFQSxlQTNFQSxNQUFBLGFBOEVBLGVBM0VBLE1BQUEsYUE4RUEsZUEzRUEsTUFBQSxJQThFQSxlQTNFQSxNQUFBLGFBOEVBLGVBM0VBLE1BQUEsWUE4RUEsZUEzRUEsTUFBQSxLQThFQSxnQkEzRUEsS0FBQSxLQThFQSxnQkEzRUEsS0FBQSxhQThFQSxnQkEzRUEsS0FBQSxhQThFQSxlQTNFQSxLQUFBLElBOEVBLGVBM0VBLEtBQUEsYUE4RUEsZUEzRUEsS0FBQSxhQThFQSxlQTNFQSxLQUFBLElBOEVBLGVBM0VBLEtBQUEsYUE4RUEsZUEzRUEsS0FBQSxhQThFQSxlQTNFQSxLQUFBLElBOEVBLGVBM0VBLEtBQUEsYUE4RUEsZUEzRUEsS0FBQSxZQThFQSxlQTNFQSxLQUFBLEtBOEVBLGtCQTNFQSxZQUFBLEtBOEVBLGtCQTNFQSxZQUFBLGFBOEVBLGtCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLElBOEVBLGlCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLElBOEVBLGlCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLElBOEVBLGlCQTNFQSxZQUFBLGFBOEVBLGlCQTNFQSxZQUFBLFlBOEVBLGlCQTNFQSxZQUFBLEdBK0VGLDBCQUNFLFVBeEV1RCxXQUFXLFdBQVcsV0F5RTdFLFVBQ0EsVUEzRUYsVUFDRSxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQTRDLE1BQUEsS0FBdUIsV0FBWSxNQUFBLEtBeUYzSCxXQXRGQSxNQUFBLGFBeUZBLFdBdEZBLE1BQUEsYUF5RkEsVUF0RkEsTUFBQSxJQXlGQSxVQXRGQSxNQUFBLGFBeUZBLFVBdEZBLE1BQUEsYUF5RkEsVUF0RkEsTUFBQSxJQXlGQSxVQXRGQSxNQUFBLGFBeUZBLFVBdEZBLE1BQUEsYUF5RkEsVUF0RkEsTUFBQSxJQXlGQSxVQXRGQSxNQUFBLGFBeUZBLFVBdEZBLE1BQUEsWUF5RkEsZ0JBdEZBLE1BQUEsS0F5RkEsZ0JBdEZBLE1BQUEsYUF5RkEsZ0JBdEZBLE1BQUEsYUF5RkEsZUF0RkEsTUFBQSxJQXlGQSxlQXRGQSxNQUFBLGFBeUZBLGVBdEZBLE1BQUEsYUF5RkEsZUF0RkEsTUFBQSxJQXlGQSxlQXRGQSxNQUFBLGFBeUZBLGVBdEZBLE1BQUEsYUF5RkEsZUF0RkEsTUFBQSxJQXlGQSxlQXRGQSxNQUFBLGFBeUZBLGVBdEZBLE1BQUEsWUF5RkEsZUF0RkEsTUFBQSxLQXlGQSxnQkF0RkEsS0FBQSxLQXlGQSxnQkF0RkEsS0FBQSxhQXlGQSxnQkF0RkEsS0FBQSxhQXlG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bkZBLFFBQUssb0JBR0wsY0FtRkEsY0FsRkUsUUFBQSxxQkF3RkYsa0JBQ0UsUUFBUyxnQkFJWCxtQkFDRSxRQUFTLGlCQUlYLHlCQUNFLFFBQVMsd0JBNEJiLGdEQXhCRSxZQUNFLFFBQVMsZ0JBbEZiLGlCQUNFLFFBQUEsZ0JBc0ZBLGNBbkZBLFFBQUssb0JBR0wsY0FtRkEsY0FsRkUsUUFBQSxxQkF3RkYsa0JBQ0UsUUFBUyxnQkFJWCxtQkFDRSxRQUFTLGlCQUlYLHlCQUNFLFFBQVMsd0JBNEJiLDBCQXhCRSxZQUNFLFFBQVMsZ0JBbEZiLGlCQUNFLFFBQUEsZ0JBc0ZBLGNBbkZBLFFBQUssb0JBR0wsY0FtRkEsY0FsRkUsUUFBQSxxQkF3RkYsa0JBQ0UsUUFBUyxnQkFJWCxtQkFDRSxRQUFTLGlCQUlYLHlCQUNFLFFBQVMsdUJBbUJYLFdBQ0UsUUFBUyxnQkFqQmIseUJBQ0UsV0FDRSxRQUFTLGdCQUdiLCtDQUNFLFdBQ0UsUUFBUyxnQkFHYixnREFDRSxXQUNFLFFBQVMsZ0JBUWIsZUFDRSxRQXBGRSxlQXNGSixhQW5GQSxlQUNFLFFBQUEsZ0JBRUYsb0JBQ0UsUUFBQSxnQkFzRkEsaUJBbkZBLFFBQUssb0JBR0wsaUJBbUZBLGlCQWxGRSxRQUFBLHNCQXVGSixxQkFDRSxRQXBGRSxlQXNGSixhQW5GQSxxQkFDRSxRQUFBLGlCQXVGRixzQkFDRSxRQXBGRSxlQXNGSixhQW5GQSxzQkFDRSxRQUFBLGtCQXVGRiw0QkFDRSxRQXBGRSxlQTJGSixhQXhGQSw0QkFDRSxRQUFBLHVCQXdGQSxjQUNFLFFBQVMiLCJmaWxlIjoiYm9vdHN0cmFwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQm9vdHN0cmFwIHYzLjMuNiAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE1IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8qISBub3JtYWxpemUuY3NzIHYzLjAuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cbltoaWRkZW5dLFxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbn1cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbmgxIHtcbiAgbWFyZ2luOiAuNjdlbSAwO1xuICBmb250LXNpemU6IDJlbTtcbn1cbm1hcmsge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmMDtcbn1cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuc3VwIHtcbiAgdG9wOiAtLjVlbTtcbn1cbnN1YiB7XG4gIGJvdHRvbTogLS4yNWVtO1xufVxuaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cbmhyIHtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogLjM1ZW0gLjYyNWVtIC43NWVtO1xuICBtYXJnaW46IDAgMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xufVxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG50YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4vKiEgU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvY3NzL21haW4uY3NzICovXG5AbWVkaWEgcHJpbnQge1xuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBhW2hyZWZdOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgfVxuICBhYmJyW3RpdGxlXTphZnRlciB7XG4gICAgY29udGVudDogXCIgKFwiIGF0dHIodGl0bGUpIFwiKVwiO1xuICB9XG4gIGFbaHJlZl49XCIjXCJdOmFmdGVyLFxuICBhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbiAgcHJlLFxuICBibG9ja3F1b3RlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIHRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gIH1cbiAgdHIsXG4gIGltZyB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgcCxcbiAgaDIsXG4gIGgzIHtcbiAgICBvcnBoYW5zOiAzO1xuICAgIHdpZG93czogMztcbiAgfVxuICBoMixcbiAgaDMge1xuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJ0biA+IC5jYXJldCxcbiAgLmRyb3B1cCA+IC5idG4gPiAuY2FyZXQge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgfVxuICAubGFiZWwge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIH1cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRhYmxlIHRkLFxuICAudGFibGUgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAudGFibGUtYm9yZGVyZWQgdGgsXG4gIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xuICB9XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7XG5cbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuZW90Jyk7XG4gIHNyYzogdXJsKCcuLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vZm9udHMvZ2x5cGhpY29ucy1oYWxmbGluZ3MtcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLnN2ZyNnbHlwaGljb25zX2hhbGZsaW5nc3JlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xufVxuLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4uZ2x5cGhpY29uLWFzdGVyaXNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwwMDJhXCI7XG59XG4uZ2x5cGhpY29uLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDAwMmJcIjtcbn1cbi5nbHlwaGljb24tZXVybzpiZWZvcmUsXG4uZ2x5cGhpY29uLWV1cjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjBhY1wiO1xufVxuLmdseXBoaWNvbi1taW51czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjIxMlwiO1xufVxuLmdseXBoaWNvbi1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjYwMVwiO1xufVxuLmdseXBoaWNvbi1lbnZlbG9wZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjcwOVwiO1xufVxuLmdseXBoaWNvbi1wZW5jaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDI3MGZcIjtcbn1cbi5nbHlwaGljb24tZ2xhc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMDFcIjtcbn1cbi5nbHlwaGljb24tbXVzaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMDJcIjtcbn1cbi5nbHlwaGljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDAzXCI7XG59XG4uZ2x5cGhpY29uLWhlYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDA1XCI7XG59XG4uZ2x5cGhpY29uLXN0YXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMDZcIjtcbn1cbi5nbHlwaGljb24tc3Rhci1lbXB0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAwN1wiO1xufVxuLmdseXBoaWNvbi11c2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDA4XCI7XG59XG4uZ2x5cGhpY29uLWZpbG06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMDlcIjtcbn1cbi5nbHlwaGljb24tdGgtbGFyZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMTBcIjtcbn1cbi5nbHlwaGljb24tdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMTFcIjtcbn1cbi5nbHlwaGljb24tdGgtbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAxMlwiO1xufVxuLmdseXBoaWNvbi1vazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAxM1wiO1xufVxuLmdseXBoaWNvbi1yZW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMTRcIjtcbn1cbi5nbHlwaGljb24tem9vbS1pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAxNVwiO1xufVxuLmdseXBoaWNvbi16b29tLW91dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAxNlwiO1xufVxuLmdseXBoaWNvbi1vZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMTdcIjtcbn1cbi5nbHlwaGljb24tc2lnbmFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDE4XCI7XG59XG4uZ2x5cGhpY29uLWNvZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAxOVwiO1xufVxuLmdseXBoaWNvbi10cmFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAyMFwiO1xufVxuLmdseXBoaWNvbi1ob21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDIxXCI7XG59XG4uZ2x5cGhpY29uLWZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMjJcIjtcbn1cbi5nbHlwaGljb24tdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAyM1wiO1xufVxuLmdseXBoaWNvbi1yb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDI0XCI7XG59XG4uZ2x5cGhpY29uLWRvd25sb2FkLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAyNVwiO1xufVxuLmdseXBoaWNvbi1kb3dubG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAyNlwiO1xufVxuLmdseXBoaWNvbi11cGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMjdcIjtcbn1cbi5nbHlwaGljb24taW5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMjhcIjtcbn1cbi5nbHlwaGljb24tcGxheS1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMjlcIjtcbn1cbi5nbHlwaGljb24tcmVwZWF0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDMwXCI7XG59XG4uZ2x5cGhpY29uLXJlZnJlc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMzFcIjtcbn1cbi5nbHlwaGljb24tbGlzdC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMzJcIjtcbn1cbi5nbHlwaGljb24tbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAzM1wiO1xufVxuLmdseXBoaWNvbi1mbGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDM0XCI7XG59XG4uZ2x5cGhpY29uLWhlYWRwaG9uZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMzVcIjtcbn1cbi5nbHlwaGljb24tdm9sdW1lLW9mZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAzNlwiO1xufVxuLmdseXBoaWNvbi12b2x1bWUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTAzN1wiO1xufVxuLmdseXBoaWNvbi12b2x1bWUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwMzhcIjtcbn1cbi5nbHlwaGljb24tcXJjb2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDM5XCI7XG59XG4uZ2x5cGhpY29uLWJhcmNvZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNDBcIjtcbn1cbi5nbHlwaGljb24tdGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDQxXCI7XG59XG4uZ2x5cGhpY29uLXRhZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNDJcIjtcbn1cbi5nbHlwaGljb24tYm9vazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA0M1wiO1xufVxuLmdseXBoaWNvbi1ib29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA0NFwiO1xufVxuLmdseXBoaWNvbi1wcmludDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA0NVwiO1xufVxuLmdseXBoaWNvbi1jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNDZcIjtcbn1cbi5nbHlwaGljb24tZm9udDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA0N1wiO1xufVxuLmdseXBoaWNvbi1ib2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDQ4XCI7XG59XG4uZ2x5cGhpY29uLWl0YWxpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA0OVwiO1xufVxuLmdseXBoaWNvbi10ZXh0LWhlaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA1MFwiO1xufVxuLmdseXBoaWNvbi10ZXh0LXdpZHRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDUxXCI7XG59XG4uZ2x5cGhpY29uLWFsaWduLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNTJcIjtcbn1cbi5nbHlwaGljb24tYWxpZ24tY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDUzXCI7XG59XG4uZ2x5cGhpY29uLWFsaWduLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDU0XCI7XG59XG4uZ2x5cGhpY29uLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNTVcIjtcbn1cbi5nbHlwaGljb24tbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA1NlwiO1xufVxuLmdseXBoaWNvbi1pbmRlbnQtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA1N1wiO1xufVxuLmdseXBoaWNvbi1pbmRlbnQtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNThcIjtcbn1cbi5nbHlwaGljb24tZmFjZXRpbWUtdmlkZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNTlcIjtcbn1cbi5nbHlwaGljb24tcGljdHVyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA2MFwiO1xufVxuLmdseXBoaWNvbi1tYXAtbWFya2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDYyXCI7XG59XG4uZ2x5cGhpY29uLWFkanVzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA2M1wiO1xufVxuLmdseXBoaWNvbi10aW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDY0XCI7XG59XG4uZ2x5cGhpY29uLWVkaXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNjVcIjtcbn1cbi5nbHlwaGljb24tc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNjZcIjtcbn1cbi5nbHlwaGljb24tY2hlY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNjdcIjtcbn1cbi5nbHlwaGljb24tbW92ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA2OFwiO1xufVxuLmdseXBoaWNvbi1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDY5XCI7XG59XG4uZ2x5cGhpY29uLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNzBcIjtcbn1cbi5nbHlwaGljb24tYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNzFcIjtcbn1cbi5nbHlwaGljb24tcGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA3MlwiO1xufVxuLmdseXBoaWNvbi1wYXVzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA3M1wiO1xufVxuLmdseXBoaWNvbi1zdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDc0XCI7XG59XG4uZ2x5cGhpY29uLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNzVcIjtcbn1cbi5nbHlwaGljb24tZmFzdC1mb3J3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDc2XCI7XG59XG4uZ2x5cGhpY29uLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA3N1wiO1xufVxuLmdseXBoaWNvbi1lamVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA3OFwiO1xufVxuLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwNzlcIjtcbn1cbi5nbHlwaGljb24tY2hldnJvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA4MFwiO1xufVxuLmdseXBoaWNvbi1wbHVzLXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwODFcIjtcbn1cbi5nbHlwaGljb24tbWludXMtc2lnbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA4MlwiO1xufVxuLmdseXBoaWNvbi1yZW1vdmUtc2lnbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA4M1wiO1xufVxuLmdseXBoaWNvbi1vay1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDg0XCI7XG59XG4uZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwODVcIjtcbn1cbi5nbHlwaGljb24taW5mby1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDg2XCI7XG59XG4uZ2x5cGhpY29uLXNjcmVlbnNob3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwODdcIjtcbn1cbi5nbHlwaGljb24tcmVtb3ZlLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA4OFwiO1xufVxuLmdseXBoaWNvbi1vay1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwODlcIjtcbn1cbi5nbHlwaGljb24tYmFuLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA5MFwiO1xufVxuLmdseXBoaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDkxXCI7XG59XG4uZ2x5cGhpY29uLWFycm93LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDkyXCI7XG59XG4uZ2x5cGhpY29uLWFycm93LXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDkzXCI7XG59XG4uZ2x5cGhpY29uLWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUwOTRcIjtcbn1cbi5nbHlwaGljb24tc2hhcmUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDk1XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS1mdWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMDk2XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS1zbWFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA5N1wiO1xufVxuLmdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTAxXCI7XG59XG4uZ2x5cGhpY29uLWdpZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMDJcIjtcbn1cbi5nbHlwaGljb24tbGVhZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEwM1wiO1xufVxuLmdseXBoaWNvbi1maXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTA0XCI7XG59XG4uZ2x5cGhpY29uLWV5ZS1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTA1XCI7XG59XG4uZ2x5cGhpY29uLWV5ZS1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEwNlwiO1xufVxuLmdseXBoaWNvbi13YXJuaW5nLXNpZ246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMDdcIjtcbn1cbi5nbHlwaGljb24tcGxhbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMDhcIjtcbn1cbi5nbHlwaGljb24tY2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMDlcIjtcbn1cbi5nbHlwaGljb24tcmFuZG9tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTEwXCI7XG59XG4uZ2x5cGhpY29uLWNvbW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMTFcIjtcbn1cbi5nbHlwaGljb24tbWFnbmV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTEyXCI7XG59XG4uZ2x5cGhpY29uLWNoZXZyb24tdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMTNcIjtcbn1cbi5nbHlwaGljb24tY2hldnJvbi1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTE0XCI7XG59XG4uZ2x5cGhpY29uLXJldHdlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMTVcIjtcbn1cbi5nbHlwaGljb24tc2hvcHBpbmctY2FydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTExNlwiO1xufVxuLmdseXBoaWNvbi1mb2xkZXItY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMTdcIjtcbn1cbi5nbHlwaGljb24tZm9sZGVyLW9wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMThcIjtcbn1cbi5nbHlwaGljb24tcmVzaXplLXZlcnRpY2FsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTE5XCI7XG59XG4uZ2x5cGhpY29uLXJlc2l6ZS1ob3Jpem9udGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTIwXCI7XG59XG4uZ2x5cGhpY29uLWhkZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEyMVwiO1xufVxuLmdseXBoaWNvbi1idWxsaG9ybjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEyMlwiO1xufVxuLmdseXBoaWNvbi1iZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTIzXCI7XG59XG4uZ2x5cGhpY29uLWNlcnRpZmljYXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTI0XCI7XG59XG4uZ2x5cGhpY29uLXRodW1icy11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEyNVwiO1xufVxuLmdseXBoaWNvbi10aHVtYnMtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEyNlwiO1xufVxuLmdseXBoaWNvbi1oYW5kLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTI3XCI7XG59XG4uZ2x5cGhpY29uLWhhbmQtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEyOFwiO1xufVxuLmdseXBoaWNvbi1oYW5kLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTI5XCI7XG59XG4uZ2x5cGhpY29uLWhhbmQtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEzMFwiO1xufVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMzFcIjtcbn1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMzJcIjtcbn1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTMzXCI7XG59XG4uZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTM0XCI7XG59XG4uZ2x5cGhpY29uLWdsb2JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTM1XCI7XG59XG4uZ2x5cGhpY29uLXdyZW5jaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEzNlwiO1xufVxuLmdseXBoaWNvbi10YXNrczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTEzN1wiO1xufVxuLmdseXBoaWNvbi1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxMzhcIjtcbn1cbi5nbHlwaGljb24tYnJpZWZjYXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTM5XCI7XG59XG4uZ2x5cGhpY29uLWZ1bGxzY3JlZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNDBcIjtcbn1cbi5nbHlwaGljb24tZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTQxXCI7XG59XG4uZ2x5cGhpY29uLXBhcGVyY2xpcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE0MlwiO1xufVxuLmdseXBoaWNvbi1oZWFydC1lbXB0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE0M1wiO1xufVxuLmdseXBoaWNvbi1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTQ0XCI7XG59XG4uZ2x5cGhpY29uLXBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTQ1XCI7XG59XG4uZ2x5cGhpY29uLXB1c2hwaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNDZcIjtcbn1cbi5nbHlwaGljb24tdXNkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTQ4XCI7XG59XG4uZ2x5cGhpY29uLWdicDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE0OVwiO1xufVxuLmdseXBoaWNvbi1zb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTUwXCI7XG59XG4uZ2x5cGhpY29uLXNvcnQtYnktYWxwaGFiZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNTFcIjtcbn1cbi5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNTJcIjtcbn1cbi5nbHlwaGljb24tc29ydC1ieS1vcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE1M1wiO1xufVxuLmdseXBoaWNvbi1zb3J0LWJ5LW9yZGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE1NFwiO1xufVxuLmdseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNTVcIjtcbn1cbi5nbHlwaGljb24tc29ydC1ieS1hdHRyaWJ1dGVzLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE1NlwiO1xufVxuLmdseXBoaWNvbi11bmNoZWNrZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNTdcIjtcbn1cbi5nbHlwaGljb24tZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTU4XCI7XG59XG4uZ2x5cGhpY29uLWNvbGxhcHNlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNTlcIjtcbn1cbi5nbHlwaGljb24tY29sbGFwc2UtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNjBcIjtcbn1cbi5nbHlwaGljb24tbG9nLWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTYxXCI7XG59XG4uZ2x5cGhpY29uLWZsYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTYyXCI7XG59XG4uZ2x5cGhpY29uLWxvZy1vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNjNcIjtcbn1cbi5nbHlwaGljb24tbmV3LXdpbmRvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE2NFwiO1xufVxuLmdseXBoaWNvbi1yZWNvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNjVcIjtcbn1cbi5nbHlwaGljb24tc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE2NlwiO1xufVxuLmdseXBoaWNvbi1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTY3XCI7XG59XG4uZ2x5cGhpY29uLXNhdmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTY4XCI7XG59XG4uZ2x5cGhpY29uLWltcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE2OVwiO1xufVxuLmdseXBoaWNvbi1leHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNzBcIjtcbn1cbi5nbHlwaGljb24tc2VuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3MVwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktZGlzazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3MlwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktc2F2ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxNzNcIjtcbn1cbi5nbHlwaGljb24tZmxvcHB5LXJlbW92ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3NFwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3NVwiO1xufVxuLmdseXBoaWNvbi1mbG9wcHktb3BlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3NlwiO1xufVxuLmdseXBoaWNvbi1jcmVkaXQtY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3N1wiO1xufVxuLmdseXBoaWNvbi10cmFuc2ZlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE3OFwiO1xufVxuLmdseXBoaWNvbi1jdXRsZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTc5XCI7XG59XG4uZ2x5cGhpY29uLWhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4MFwiO1xufVxuLmdseXBoaWNvbi1jb21wcmVzc2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTgxXCI7XG59XG4uZ2x5cGhpY29uLWVhcnBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTgyXCI7XG59XG4uZ2x5cGhpY29uLXBob25lLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4M1wiO1xufVxuLmdseXBoaWNvbi10b3dlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4NFwiO1xufVxuLmdseXBoaWNvbi1zdGF0czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4NVwiO1xufVxuLmdseXBoaWNvbi1zZC12aWRlbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4NlwiO1xufVxuLmdseXBoaWNvbi1oZC12aWRlbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE4N1wiO1xufVxuLmdseXBoaWNvbi1zdWJ0aXRsZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxODhcIjtcbn1cbi5nbHlwaGljb24tc291bmQtc3RlcmVvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTg5XCI7XG59XG4uZ2x5cGhpY29uLXNvdW5kLWRvbGJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTkwXCI7XG59XG4uZ2x5cGhpY29uLXNvdW5kLTUtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE5MVwiO1xufVxuLmdseXBoaWNvbi1zb3VuZC02LTE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxOTJcIjtcbn1cbi5nbHlwaGljb24tc291bmQtNy0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTkzXCI7XG59XG4uZ2x5cGhpY29uLWNvcHlyaWdodC1tYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTk0XCI7XG59XG4uZ2x5cGhpY29uLXJlZ2lzdHJhdGlvbi1tYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTk1XCI7XG59XG4uZ2x5cGhpY29uLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMTk3XCI7XG59XG4uZ2x5cGhpY29uLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTE5OFwiO1xufVxuLmdseXBoaWNvbi10cmVlLWNvbmlmZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUxOTlcIjtcbn1cbi5nbHlwaGljb24tdHJlZS1kZWNpZHVvdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMDBcIjtcbn1cbi5nbHlwaGljb24tY2Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMDFcIjtcbn1cbi5nbHlwaGljb24tc2F2ZS1maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjAyXCI7XG59XG4uZ2x5cGhpY29uLW9wZW4tZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIwM1wiO1xufVxuLmdseXBoaWNvbi1sZXZlbC11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIwNFwiO1xufVxuLmdseXBoaWNvbi1jb3B5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjA1XCI7XG59XG4uZ2x5cGhpY29uLXBhc3RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjA2XCI7XG59XG4uZ2x5cGhpY29uLWFsZXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjA5XCI7XG59XG4uZ2x5cGhpY29uLWVxdWFsaXplcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIxMFwiO1xufVxuLmdseXBoaWNvbi1raW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjExXCI7XG59XG4uZ2x5cGhpY29uLXF1ZWVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjEyXCI7XG59XG4uZ2x5cGhpY29uLXBhd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMTNcIjtcbn1cbi5nbHlwaGljb24tYmlzaG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjE0XCI7XG59XG4uZ2x5cGhpY29uLWtuaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIxNVwiO1xufVxuLmdseXBoaWNvbi1iYWJ5LWZvcm11bGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMTZcIjtcbn1cbi5nbHlwaGljb24tdGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjZmYVwiO1xufVxuLmdseXBoaWNvbi1ibGFja2JvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjE4XCI7XG59XG4uZ2x5cGhpY29uLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIxOVwiO1xufVxuLmdseXBoaWNvbi1hcHBsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjhmZlwiO1xufVxuLmdseXBoaWNvbi1lcmFzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIyMVwiO1xufVxuLmdseXBoaWNvbi1ob3VyZ2xhc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIzMWJcIjtcbn1cbi5nbHlwaGljb24tbGFtcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIyM1wiO1xufVxuLmdseXBoaWNvbi1kdXBsaWNhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMjRcIjtcbn1cbi5nbHlwaGljb24tcGlnZ3ktYmFuazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIyNVwiO1xufVxuLmdseXBoaWNvbi1zY2lzc29yczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIyNlwiO1xufVxuLmdseXBoaWNvbi1iaXRjb2luOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjI3XCI7XG59XG4uZ2x5cGhpY29uLWJ0YzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIyN1wiO1xufVxuLmdseXBoaWNvbi14YnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMjdcIjtcbn1cbi5nbHlwaGljb24teWVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwwMGE1XCI7XG59XG4uZ2x5cGhpY29uLWpweTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMDBhNVwiO1xufVxuLmdseXBoaWNvbi1ydWJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjBiZFwiO1xufVxuLmdseXBoaWNvbi1ydWI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIwYmRcIjtcbn1cbi5nbHlwaGljb24tc2NhbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMzBcIjtcbn1cbi5nbHlwaGljb24taWNlLWxvbGx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjMxXCI7XG59XG4uZ2x5cGhpY29uLWljZS1sb2xseS10YXN0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMzJcIjtcbn1cbi5nbHlwaGljb24tZWR1Y2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjMzXCI7XG59XG4uZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjM0XCI7XG59XG4uZ2x5cGhpY29uLW9wdGlvbi12ZXJ0aWNhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIzNVwiO1xufVxuLmdseXBoaWNvbi1tZW51LWhhbWJ1cmdlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTIzNlwiO1xufVxuLmdseXBoaWNvbi1tb2RhbC13aW5kb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyMzdcIjtcbn1cbi5nbHlwaGljb24tb2lsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjM4XCI7XG59XG4uZ2x5cGhpY29uLWdyYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjM5XCI7XG59XG4uZ2x5cGhpY29uLXN1bmdsYXNzZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNDBcIjtcbn1cbi5nbHlwaGljb24tdGV4dC1zaXplOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjQxXCI7XG59XG4uZ2x5cGhpY29uLXRleHQtY29sb3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNDJcIjtcbn1cbi5nbHlwaGljb24tdGV4dC1iYWNrZ3JvdW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjQzXCI7XG59XG4uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi10b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNDRcIjtcbn1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLWJvdHRvbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI0NVwiO1xufVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24taG9yaXpvbnRhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI0NlwiO1xufVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI0N1wiO1xufVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24tdmVydGljYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNDhcIjtcbn1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjQ5XCI7XG59XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjUwXCI7XG59XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNTFcIjtcbn1cbi5nbHlwaGljb24tdHJpYW5nbGUtYm90dG9tOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjUyXCI7XG59XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLXRvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI1M1wiO1xufVxuLmdseXBoaWNvbi1jb25zb2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjU0XCI7XG59XG4uZ2x5cGhpY29uLXN1cGVyc2NyaXB0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlMjU1XCI7XG59XG4uZ2x5cGhpY29uLXN1YnNjcmlwdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI1NlwiO1xufVxuLmdseXBoaWNvbi1tZW51LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNTdcIjtcbn1cbi5nbHlwaGljb24tbWVudS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI1OFwiO1xufVxuLmdseXBoaWNvbi1tZW51LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGUyNTlcIjtcbn1cbi5nbHlwaGljb24tbWVudS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTI2MFwiO1xufVxuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcblxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5hIHtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6ICMyMzUyN2M7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pbWctcmVzcG9uc2l2ZSxcbi50aHVtYm5haWwgPiBpbWcsXG4udGh1bWJuYWlsIGEgPiBpbWcsXG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZyxcbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gYSA+IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5pbWctcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5pbWctdGh1bWJuYWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5ociB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG4uc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiAwO1xufVxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSxcbi5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGNsaXA6IGF1dG87XG59XG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbi5oMSxcbi5oMixcbi5oMyxcbi5oNCxcbi5oNSxcbi5oNiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmgxIHNtYWxsLFxuaDIgc21hbGwsXG5oMyBzbWFsbCxcbmg0IHNtYWxsLFxuaDUgc21hbGwsXG5oNiBzbWFsbCxcbi5oMSBzbWFsbCxcbi5oMiBzbWFsbCxcbi5oMyBzbWFsbCxcbi5oNCBzbWFsbCxcbi5oNSBzbWFsbCxcbi5oNiBzbWFsbCxcbmgxIC5zbWFsbCxcbmgyIC5zbWFsbCxcbmgzIC5zbWFsbCxcbmg0IC5zbWFsbCxcbmg1IC5zbWFsbCxcbmg2IC5zbWFsbCxcbi5oMSAuc21hbGwsXG4uaDIgLnNtYWxsLFxuLmgzIC5zbWFsbCxcbi5oNCAuc21hbGwsXG4uaDUgLnNtYWxsLFxuLmg2IC5zbWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzc3Nztcbn1cbmgxLFxuLmgxLFxuaDIsXG4uaDIsXG5oMyxcbi5oMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oMSBzbWFsbCxcbi5oMSBzbWFsbCxcbmgyIHNtYWxsLFxuLmgyIHNtYWxsLFxuaDMgc21hbGwsXG4uaDMgc21hbGwsXG5oMSAuc21hbGwsXG4uaDEgLnNtYWxsLFxuaDIgLnNtYWxsLFxuLmgyIC5zbWFsbCxcbmgzIC5zbWFsbCxcbi5oMyAuc21hbGwge1xuICBmb250LXNpemU6IDY1JTtcbn1cbmg0LFxuLmg0LFxuaDUsXG4uaDUsXG5oNixcbi5oNiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oNCBzbWFsbCxcbi5oNCBzbWFsbCxcbmg1IHNtYWxsLFxuLmg1IHNtYWxsLFxuaDYgc21hbGwsXG4uaDYgc21hbGwsXG5oNCAuc21hbGwsXG4uaDQgLnNtYWxsLFxuaDUgLnNtYWxsLFxuLmg1IC5zbWFsbCxcbmg2IC5zbWFsbCxcbi5oNiAuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cbmgxLFxuLmgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuaDIsXG4uaDIge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5oMyxcbi5oMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmg0LFxuLmg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaDUsXG4uaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5oNixcbi5oNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnAge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLmxlYWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxlYWQge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxufVxuc21hbGwsXG4uc21hbGwge1xuICBmb250LXNpemU6IDg1JTtcbn1cbm1hcmssXG4ubWFyayB7XG4gIHBhZGRpbmc6IC4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG59XG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi50ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udGV4dC1sb3dlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50ZXh0LWNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5hLnRleHQtcHJpbWFyeTpob3ZlcixcbmEudGV4dC1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMyODYwOTA7XG59XG4udGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMzYzc2M2Q7XG59XG5hLnRleHQtc3VjY2Vzczpob3ZlcixcbmEudGV4dC1zdWNjZXNzOmZvY3VzIHtcbiAgY29sb3I6ICMyYjU0MmM7XG59XG4udGV4dC1pbmZvIHtcbiAgY29sb3I6ICMzMTcwOGY7XG59XG5hLnRleHQtaW5mbzpob3ZlcixcbmEudGV4dC1pbmZvOmZvY3VzIHtcbiAgY29sb3I6ICMyNDUyNjk7XG59XG4udGV4dC13YXJuaW5nIHtcbiAgY29sb3I6ICM4YTZkM2I7XG59XG5hLnRleHQtd2FybmluZzpob3ZlcixcbmEudGV4dC13YXJuaW5nOmZvY3VzIHtcbiAgY29sb3I6ICM2NjUxMmM7XG59XG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2E5NDQ0Mjtcbn1cbmEudGV4dC1kYW5nZXI6aG92ZXIsXG5hLnRleHQtZGFuZ2VyOmZvY3VzIHtcbiAgY29sb3I6ICM4NDM1MzQ7XG59XG4uYmctcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuYS5iZy1wcmltYXJ5OmhvdmVyLFxuYS5iZy1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjA5MDtcbn1cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbn1cbmEuYmctc3VjY2Vzczpob3ZlcixcbmEuYmctc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWUyYjM7XG59XG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG59XG5hLmJnLWluZm86aG92ZXIsXG5hLmJnLWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkOWVlO1xufVxuLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xufVxuYS5iZy13YXJuaW5nOmhvdmVyLFxuYS5iZy13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZWNiNTtcbn1cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xufVxuYS5iZy1kYW5nZXI6aG92ZXIsXG5hLmJnLWRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGI5Yjk7XG59XG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBtYXJnaW46IDQwcHggMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbnVsLFxub2wge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxudWwgdWwsXG5vbCB1bCxcbnVsIG9sLFxub2wgb2wge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubGlzdC1pbmxpbmUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5kdCxcbmRkIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG59XG5kdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGwtaG9yaXpvbnRhbCBkdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuZGwtaG9yaXpvbnRhbCBkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xuICB9XG59XG5hYmJyW3RpdGxlXSxcbmFiYnJbZGF0YS1vcmlnaW5hbC10aXRsZV0ge1xuICBjdXJzb3I6IGhlbHA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzc3Nztcbn1cbi5pbml0aWFsaXNtIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5ibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBmb250LXNpemU6IDE3LjVweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZWVlO1xufVxuYmxvY2txdW90ZSBwOmxhc3QtY2hpbGQsXG5ibG9ja3F1b3RlIHVsOmxhc3QtY2hpbGQsXG5ibG9ja3F1b3RlIG9sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuYmxvY2txdW90ZSBmb290ZXIsXG5ibG9ja3F1b3RlIHNtYWxsLFxuYmxvY2txdW90ZSAuc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBjb2xvcjogIzc3Nztcbn1cbmJsb2NrcXVvdGUgZm9vdGVyOmJlZm9yZSxcbmJsb2NrcXVvdGUgc21hbGw6YmVmb3JlLFxuYmxvY2txdW90ZSAuc21hbGw6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjAxNCBcXDAwQTAnO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBmb290ZXI6YmVmb3JlLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IGZvb3RlcjpiZWZvcmUsXG4uYmxvY2txdW90ZS1yZXZlcnNlIHNtYWxsOmJlZm9yZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCBzbWFsbDpiZWZvcmUsXG4uYmxvY2txdW90ZS1yZXZlcnNlIC5zbWFsbDpiZWZvcmUsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgLnNtYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xufVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBmb290ZXI6YWZ0ZXIsXG5ibG9ja3F1b3RlLnB1bGwtcmlnaHQgZm9vdGVyOmFmdGVyLFxuLmJsb2NrcXVvdGUtcmV2ZXJzZSBzbWFsbDphZnRlcixcbmJsb2NrcXVvdGUucHVsbC1yaWdodCBzbWFsbDphZnRlcixcbi5ibG9ja3F1b3RlLXJldmVyc2UgLnNtYWxsOmFmdGVyLFxuYmxvY2txdW90ZS5wdWxsLXJpZ2h0IC5zbWFsbDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwQTAgXFwyMDE0Jztcbn1cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xufVxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuY29kZSB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogI2M3MjU0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjJmNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxua2JkIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcbn1cbmtiZCBrYmQge1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbnByZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA5LjVweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICMzMzM7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5wcmUgY29kZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucHJlLXNjcm9sbGFibGUge1xuICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTcwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDExNzBweDtcbiAgfVxufVxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uY29sLXhzLTEsIC5jb2wtc20tMSwgLmNvbC1tZC0xLCAuY29sLWxnLTEsIC5jb2wteHMtMiwgLmNvbC1zbS0yLCAuY29sLW1kLTIsIC5jb2wtbGctMiwgLmNvbC14cy0zLCAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC1sZy0zLCAuY29sLXhzLTQsIC5jb2wtc20tNCwgLmNvbC1tZC00LCAuY29sLWxnLTQsIC5jb2wteHMtNSwgLmNvbC1zbS01LCAuY29sLW1kLTUsIC5jb2wtbGctNSwgLmNvbC14cy02LCAuY29sLXNtLTYsIC5jb2wtbWQtNiwgLmNvbC1sZy02LCAuY29sLXhzLTcsIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLWxnLTcsIC5jb2wteHMtOCwgLmNvbC1zbS04LCAuY29sLW1kLTgsIC5jb2wtbGctOCwgLmNvbC14cy05LCAuY29sLXNtLTksIC5jb2wtbWQtOSwgLmNvbC1sZy05LCAuY29sLXhzLTEwLCAuY29sLXNtLTEwLCAuY29sLW1kLTEwLCAuY29sLWxnLTEwLCAuY29sLXhzLTExLCAuY29sLXNtLTExLCAuY29sLW1kLTExLCAuY29sLWxnLTExLCAuY29sLXhzLTEyLCAuY29sLXNtLTEyLCAuY29sLW1kLTEyLCAuY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jb2wteHMtMSwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTksIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIge1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb2wteHMtMTEge1xuICB3aWR0aDogOTEuNjY2NjY2NjclO1xufVxuLmNvbC14cy0xMCB7XG4gIHdpZHRoOiA4My4zMzMzMzMzMyU7XG59XG4uY29sLXhzLTkge1xuICB3aWR0aDogNzUlO1xufVxuLmNvbC14cy04IHtcbiAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtNyB7XG4gIHdpZHRoOiA1OC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLTYge1xuICB3aWR0aDogNTAlO1xufVxuLmNvbC14cy01IHtcbiAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtNCB7XG4gIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG59XG4uY29sLXhzLTMge1xuICB3aWR0aDogMjUlO1xufVxuLmNvbC14cy0yIHtcbiAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtMSB7XG4gIHdpZHRoOiA4LjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtcHVsbC0xMiB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuLmNvbC14cy1wdWxsLTExIHtcbiAgcmlnaHQ6IDkxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtcHVsbC0xMCB7XG4gIHJpZ2h0OiA4My4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1bGwtOSB7XG4gIHJpZ2h0OiA3NSU7XG59XG4uY29sLXhzLXB1bGwtOCB7XG4gIHJpZ2h0OiA2Ni42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1bGwtNyB7XG4gIHJpZ2h0OiA1OC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1bGwtNiB7XG4gIHJpZ2h0OiA1MCU7XG59XG4uY29sLXhzLXB1bGwtNSB7XG4gIHJpZ2h0OiA0MS42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1bGwtNCB7XG4gIHJpZ2h0OiAzMy4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1bGwtMyB7XG4gIHJpZ2h0OiAyNSU7XG59XG4uY29sLXhzLXB1bGwtMiB7XG4gIHJpZ2h0OiAxNi42NjY2NjY2NyU7XG59XG4uY29sLXhzLXB1bGwtMSB7XG4gIHJpZ2h0OiA4LjMzMzMzMzMzJTtcbn1cbi5jb2wteHMtcHVsbC0wIHtcbiAgcmlnaHQ6IGF1dG87XG59XG4uY29sLXhzLXB1c2gtMTIge1xuICBsZWZ0OiAxMDAlO1xufVxuLmNvbC14cy1wdXNoLTExIHtcbiAgbGVmdDogOTEuNjY2NjY2NjclO1xufVxuLmNvbC14cy1wdXNoLTEwIHtcbiAgbGVmdDogODMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdXNoLTkge1xuICBsZWZ0OiA3NSU7XG59XG4uY29sLXhzLXB1c2gtOCB7XG4gIGxlZnQ6IDY2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtcHVzaC03IHtcbiAgbGVmdDogNTguMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdXNoLTYge1xuICBsZWZ0OiA1MCU7XG59XG4uY29sLXhzLXB1c2gtNSB7XG4gIGxlZnQ6IDQxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtcHVzaC00IHtcbiAgbGVmdDogMzMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1wdXNoLTMge1xuICBsZWZ0OiAyNSU7XG59XG4uY29sLXhzLXB1c2gtMiB7XG4gIGxlZnQ6IDE2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtcHVzaC0xIHtcbiAgbGVmdDogOC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLXB1c2gtMCB7XG4gIGxlZnQ6IGF1dG87XG59XG4uY29sLXhzLW9mZnNldC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuLmNvbC14cy1vZmZzZXQtMTEge1xuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xufVxuLmNvbC14cy1vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG4uY29sLXhzLW9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtb2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xufVxuLmNvbC14cy1vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG4uY29sLXhzLW9mZnNldC01IHtcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtb2Zmc2V0LTQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xufVxuLmNvbC14cy1vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uY29sLXhzLW9mZnNldC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcbn1cbi5jb2wteHMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XG59XG4uY29sLXhzLW9mZnNldC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1zbS0xLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmNvbC1zbS0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbC1zbS0xMSB7XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLTEwIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLXNtLTgge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS03IHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLXNtLTUge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS00IHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLXNtLTIge1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS0xIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1wdWxsLTEyIHtcbiAgICByaWdodDogMTAwJTtcbiAgfVxuICAuY29sLXNtLXB1bGwtMTEge1xuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1wdWxsLTEwIHtcbiAgICByaWdodDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVsbC05IHtcbiAgICByaWdodDogNzUlO1xuICB9XG4gIC5jb2wtc20tcHVsbC04IHtcbiAgICByaWdodDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVsbC03IHtcbiAgICByaWdodDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVsbC02IHtcbiAgICByaWdodDogNTAlO1xuICB9XG4gIC5jb2wtc20tcHVsbC01IHtcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVsbC00IHtcbiAgICByaWdodDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVsbC0zIHtcbiAgICByaWdodDogMjUlO1xuICB9XG4gIC5jb2wtc20tcHVsbC0yIHtcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtc20tcHVsbC0xIHtcbiAgICByaWdodDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS1wdWxsLTAge1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb2wtc20tcHVzaC0xMiB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtMTEge1xuICAgIGxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLXB1c2gtMTAge1xuICAgIGxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtOSB7XG4gICAgbGVmdDogNzUlO1xuICB9XG4gIC5jb2wtc20tcHVzaC04IHtcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTcge1xuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtNiB7XG4gICAgbGVmdDogNTAlO1xuICB9XG4gIC5jb2wtc20tcHVzaC01IHtcbiAgICBsZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTQge1xuICAgIGxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLXB1c2gtMyB7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIC5jb2wtc20tcHVzaC0yIHtcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1wdXNoLTEge1xuICAgIGxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tcHVzaC0wIHtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTEyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLXNtLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS1vZmZzZXQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tb2Zmc2V0LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbC1tZC0xLCAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmNvbC1tZC0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbC1tZC0xMSB7XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLTEwIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLW1kLTgge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC03IHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLW1kLTUge1xuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC00IHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLW1kLTIge1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC0xIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1wdWxsLTEyIHtcbiAgICByaWdodDogMTAwJTtcbiAgfVxuICAuY29sLW1kLXB1bGwtMTEge1xuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1wdWxsLTEwIHtcbiAgICByaWdodDogODMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC05IHtcbiAgICByaWdodDogNzUlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC04IHtcbiAgICByaWdodDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVsbC03IHtcbiAgICByaWdodDogNTguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC02IHtcbiAgICByaWdodDogNTAlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC01IHtcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVsbC00IHtcbiAgICByaWdodDogMzMuMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0zIHtcbiAgICByaWdodDogMjUlO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0yIHtcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtcHVsbC0xIHtcbiAgICByaWdodDogOC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC1wdWxsLTAge1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb2wtbWQtcHVzaC0xMiB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtMTEge1xuICAgIGxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLXB1c2gtMTAge1xuICAgIGxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtOSB7XG4gICAgbGVmdDogNzUlO1xuICB9XG4gIC5jb2wtbWQtcHVzaC04IHtcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTcge1xuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtNiB7XG4gICAgbGVmdDogNTAlO1xuICB9XG4gIC5jb2wtbWQtcHVzaC01IHtcbiAgICBsZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTQge1xuICAgIGxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLXB1c2gtMyB7XG4gICAgbGVmdDogMjUlO1xuICB9XG4gIC5jb2wtbWQtcHVzaC0yIHtcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1wdXNoLTEge1xuICAgIGxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtcHVzaC0wIHtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTEyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLW1kLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC1vZmZzZXQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtb2Zmc2V0LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb2wtbGctMSwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5jb2wtbGctMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtbGctMTEge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy0xMCB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLTkge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC1sZy04IHtcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctNyB7XG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC1sZy01IHtcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLTMge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC1sZy0yIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctMSB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctcHVsbC0xMiB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1sZy1wdWxsLTExIHtcbiAgICByaWdodDogOTEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctcHVsbC0xMCB7XG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtOSB7XG4gICAgcmlnaHQ6IDc1JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtOCB7XG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtNyB7XG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtNiB7XG4gICAgcmlnaHQ6IDUwJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtNSB7XG4gICAgcmlnaHQ6IDQxLjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtNCB7XG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMyB7XG4gICAgcmlnaHQ6IDI1JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMiB7XG4gICAgcmlnaHQ6IDE2LjY2NjY2NjY3JTtcbiAgfVxuICAuY29sLWxnLXB1bGwtMSB7XG4gICAgcmlnaHQ6IDguMzMzMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctcHVsbC0wIHtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICAuY29sLWxnLXB1c2gtMTIge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTExIHtcbiAgICBsZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTkge1xuICAgIGxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLWxnLXB1c2gtOCB7XG4gICAgbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctcHVzaC03IHtcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTYge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLWxnLXB1c2gtNSB7XG4gICAgbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctcHVzaC00IHtcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1wdXNoLTMge1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLWxnLXB1c2gtMiB7XG4gICAgbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLXB1c2gtMCB7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuICAuY29sLWxnLW9mZnNldC0xMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTcge1xuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy1vZmZzZXQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xuICB9XG4gIC5jb2wtbGctb2Zmc2V0LTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcbiAgfVxuICAuY29sLWxnLW9mZnNldC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xufVxuLnRhYmxlID4gY2FwdGlvbiArIHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcbi50YWJsZSA+IGNvbGdyb3VwICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuLnRhYmxlID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuLnRhYmxlID4gY2FwdGlvbiArIHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbi50YWJsZSA+IGNvbGdyb3VwICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkLFxuLnRhYmxlID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbi50YWJsZSA+IHRib2R5ICsgdGJvZHkge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbn1cbi50YWJsZSAudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRhYmxlLWNvbmRlbnNlZCA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1jb25kZW5zZWQgPiB0Ym9keSA+IHRyID4gdGgsXG4udGFibGUtY29uZGVuc2VkID4gdGZvb3QgPiB0ciA+IHRoLFxuLnRhYmxlLWNvbmRlbnNlZCA+IHRoZWFkID4gdHIgPiB0ZCxcbi50YWJsZS1jb25kZW5zZWQgPiB0Ym9keSA+IHRyID4gdGQsXG4udGFibGUtY29uZGVuc2VkID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aCxcbi50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZCxcbi50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZCxcbi50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4udGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbnRhYmxlIGNvbFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogdGFibGUtY29sdW1uO1xuICBmbG9hdDogbm9uZTtcbn1cbnRhYmxlIHRkW2NsYXNzKj1cImNvbC1cIl0sXG50YWJsZSB0aFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgZmxvYXQ6IG5vbmU7XG59XG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQuYWN0aXZlLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLmFjdGl2ZSxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0ZC5hY3RpdmUsXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGguYWN0aXZlLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLmFjdGl2ZSxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0aC5hY3RpdmUsXG4udGFibGUgPiB0aGVhZCA+IHRyLmFjdGl2ZSA+IHRkLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5hY3RpdmUgPiB0ZCxcbi50YWJsZSA+IHRmb290ID4gdHIuYWN0aXZlID4gdGQsXG4udGFibGUgPiB0aGVhZCA+IHRyLmFjdGl2ZSA+IHRoLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5hY3RpdmUgPiB0aCxcbi50YWJsZSA+IHRmb290ID4gdHIuYWN0aXZlID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRkLmFjdGl2ZTpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0aC5hY3RpdmU6aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLmFjdGl2ZTpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0cjpob3ZlciA+IC5hY3RpdmUsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLmFjdGl2ZTpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZC5zdWNjZXNzLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLnN1Y2Nlc3MsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGQuc3VjY2Vzcyxcbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC5zdWNjZXNzLFxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLnN1Y2Nlc3MsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGguc3VjY2Vzcyxcbi50YWJsZSA+IHRoZWFkID4gdHIuc3VjY2VzcyA+IHRkLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5zdWNjZXNzID4gdGQsXG4udGFibGUgPiB0Zm9vdCA+IHRyLnN1Y2Nlc3MgPiB0ZCxcbi50YWJsZSA+IHRoZWFkID4gdHIuc3VjY2VzcyA+IHRoLFxuLnRhYmxlID4gdGJvZHkgPiB0ci5zdWNjZXNzID4gdGgsXG4udGFibGUgPiB0Zm9vdCA+IHRyLnN1Y2Nlc3MgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGQuc3VjY2Vzczpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0aC5zdWNjZXNzOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci5zdWNjZXNzOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gLnN1Y2Nlc3MsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLnN1Y2Nlc3M6aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGU5YzY7XG59XG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQuaW5mbyxcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5pbmZvLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLmluZm8sXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGguaW5mbyxcbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0aC5pbmZvLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLmluZm8sXG4udGFibGUgPiB0aGVhZCA+IHRyLmluZm8gPiB0ZCxcbi50YWJsZSA+IHRib2R5ID4gdHIuaW5mbyA+IHRkLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5pbmZvID4gdGQsXG4udGFibGUgPiB0aGVhZCA+IHRyLmluZm8gPiB0aCxcbi50YWJsZSA+IHRib2R5ID4gdHIuaW5mbyA+IHRoLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5pbmZvID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xufVxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRkLmluZm86aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGguaW5mbzpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuaW5mbzpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0cjpob3ZlciA+IC5pbmZvLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ci5pbmZvOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlM2YzO1xufVxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRkLndhcm5pbmcsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQud2FybmluZyxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0ZC53YXJuaW5nLFxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLndhcm5pbmcsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGgud2FybmluZyxcbi50YWJsZSA+IHRmb290ID4gdHIgPiB0aC53YXJuaW5nLFxuLnRhYmxlID4gdGhlYWQgPiB0ci53YXJuaW5nID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyLndhcm5pbmcgPiB0ZCxcbi50YWJsZSA+IHRmb290ID4gdHIud2FybmluZyA+IHRkLFxuLnRhYmxlID4gdGhlYWQgPiB0ci53YXJuaW5nID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyLndhcm5pbmcgPiB0aCxcbi50YWJsZSA+IHRmb290ID4gdHIud2FybmluZyA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbn1cbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIgPiB0ZC53YXJuaW5nOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRoLndhcm5pbmc6aG92ZXIsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyLndhcm5pbmc6aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHI6aG92ZXIgPiAud2FybmluZyxcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIud2FybmluZzpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjJjYztcbn1cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZC5kYW5nZXIsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQuZGFuZ2VyLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRkLmRhbmdlcixcbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aC5kYW5nZXIsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGguZGFuZ2VyLFxuLnRhYmxlID4gdGZvb3QgPiB0ciA+IHRoLmRhbmdlcixcbi50YWJsZSA+IHRoZWFkID4gdHIuZGFuZ2VyID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyLmRhbmdlciA+IHRkLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5kYW5nZXIgPiB0ZCxcbi50YWJsZSA+IHRoZWFkID4gdHIuZGFuZ2VyID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyLmRhbmdlciA+IHRoLFxuLnRhYmxlID4gdGZvb3QgPiB0ci5kYW5nZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG59XG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyID4gdGQuZGFuZ2VyOmhvdmVyLFxuLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0ciA+IHRoLmRhbmdlcjpob3Zlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuZGFuZ2VyOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gLmRhbmdlcixcbi50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIuZGFuZ2VyOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJjY2NjO1xufVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBtaW4taGVpZ2h0OiAuMDElO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRmb290ID4gdHIgPiB0aCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSA+IHRmb290ID4gdHIgPiB0ZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRoLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRoLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bGFzdC1jaGlsZCA+IHRkLFxuICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHI6bGFzdC1jaGlsZCA+IHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG59XG5maWVsZHNldCB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xufVxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxcHggXFw5O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbnNlbGVjdFttdWx0aXBsZV0sXG5zZWxlY3Rbc2l6ZV0ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxub3V0cHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNTU1O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIC42KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIC42KTtcbn1cbi5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbiAgb3BhY2l0eTogMTtcbn1cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9ybS1jb250cm9sOjotbXMtZXhwYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi5mb3JtLWNvbnRyb2xbZGlzYWJsZWRdLFxuLmZvcm0tY29udHJvbFtyZWFkb25seV0sXG5maWVsZHNldFtkaXNhYmxlZF0gLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG9wYWNpdHk6IDE7XG59XG4uZm9ybS1jb250cm9sW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZm9ybS1jb250cm9sIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLmZvcm0tY29udHJvbCxcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl0uZm9ybS1jb250cm9sLFxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0uZm9ybS1jb250cm9sLFxuICBpbnB1dFt0eXBlPVwibW9udGhcIl0uZm9ybS1jb250cm9sIHtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5pbnB1dC1zbSxcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl0uaW5wdXQtc20sXG4gIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXS5pbnB1dC1zbSxcbiAgaW5wdXRbdHlwZT1cIm1vbnRoXCJdLmlucHV0LXNtLFxuICAuaW5wdXQtZ3JvdXAtc20gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIC5pbnB1dC1ncm91cC1zbSBpbnB1dFt0eXBlPVwidGltZVwiXSxcbiAgLmlucHV0LWdyb3VwLXNtIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcbiAgLmlucHV0LWdyb3VwLXNtIGlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0uaW5wdXQtbGcsXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLmlucHV0LWxnLFxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0uaW5wdXQtbGcsXG4gIGlucHV0W3R5cGU9XCJtb250aFwiXS5pbnB1dC1sZyxcbiAgLmlucHV0LWdyb3VwLWxnIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuICAuaW5wdXQtZ3JvdXAtbGcgaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4gIC5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0sXG4gIC5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPVwibW9udGhcIl0ge1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICB9XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJhZGlvIGxhYmVsLFxuLmNoZWNrYm94IGxhYmVsIHtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLnJhZGlvLWlubGluZSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDRweCBcXDk7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cbi5yYWRpbyArIC5yYWRpbyxcbi5jaGVja2JveCArIC5jaGVja2JveCB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYWRpby1pbmxpbmUgKyAucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSArIC5jaGVja2JveC1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXVtkaXNhYmxlZF0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bZGlzYWJsZWRdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLmRpc2FibGVkLFxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLmRpc2FibGVkLFxuZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnJhZGlvLWlubGluZS5kaXNhYmxlZCxcbi5jaGVja2JveC1pbmxpbmUuZGlzYWJsZWQsXG5maWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvLWlubGluZSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuY2hlY2tib3gtaW5saW5lIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5yYWRpby5kaXNhYmxlZCBsYWJlbCxcbi5jaGVja2JveC5kaXNhYmxlZCBsYWJlbCxcbmZpZWxkc2V0W2Rpc2FibGVkXSAucmFkaW8gbGFiZWwsXG5maWVsZHNldFtkaXNhYmxlZF0gLmNoZWNrYm94IGxhYmVsIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgbWluLWhlaWdodDogMzRweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mb3JtLWNvbnRyb2wtc3RhdGljLmlucHV0LWxnLFxuLmZvcm0tY29udHJvbC1zdGF0aWMuaW5wdXQtc20ge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uaW5wdXQtc20ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbnNlbGVjdC5pbnB1dC1zbSB7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG50ZXh0YXJlYS5pbnB1dC1zbSxcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtc20ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uZm9ybS1ncm91cC1zbSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5mb3JtLWdyb3VwLXNtIHRleHRhcmVhLmZvcm0tY29udHJvbCxcbi5mb3JtLWdyb3VwLXNtIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uaW5wdXQtbGcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5zZWxlY3QuaW5wdXQtbGcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxudGV4dGFyZWEuaW5wdXQtbGcsXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWxnIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5mb3JtLWdyb3VwLWxnIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuLmZvcm0tZ3JvdXAtbGcgdGV4dGFyZWEuZm9ybS1jb250cm9sLFxuLmZvcm0tZ3JvdXAtbGcgc2VsZWN0W211bHRpcGxlXS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gIGhlaWdodDogNDZweDtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG59XG4uaGFzLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1yaWdodDogNDIuNXB4O1xufVxuLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmlucHV0LWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5pbnB1dC1ncm91cC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuLmlucHV0LXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5pbnB1dC1ncm91cC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmhhcy1zdWNjZXNzIC5oZWxwLWJsb2NrLFxuLmhhcy1zdWNjZXNzIC5jb250cm9sLWxhYmVsLFxuLmhhcy1zdWNjZXNzIC5yYWRpbyxcbi5oYXMtc3VjY2VzcyAuY2hlY2tib3gsXG4uaGFzLXN1Y2Nlc3MgLnJhZGlvLWlubGluZSxcbi5oYXMtc3VjY2VzcyAuY2hlY2tib3gtaW5saW5lLFxuLmhhcy1zdWNjZXNzLnJhZGlvIGxhYmVsLFxuLmhhcy1zdWNjZXNzLmNoZWNrYm94IGxhYmVsLFxuLmhhcy1zdWNjZXNzLnJhZGlvLWlubGluZSBsYWJlbCxcbi5oYXMtc3VjY2Vzcy5jaGVja2JveC1pbmxpbmUgbGFiZWwge1xuICBjb2xvcjogIzNjNzYzZDtcbn1cbi5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M3NjNkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xufVxuLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMyYjU0MmM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggIzY3YjE2ODtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KSwgMCAwIDZweCAjNjdiMTY4O1xufVxuLmhhcy1zdWNjZXNzIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICBib3JkZXItY29sb3I6ICMzYzc2M2Q7XG59XG4uaGFzLXN1Y2Nlc3MgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjM2M3NjNkO1xufVxuLmhhcy13YXJuaW5nIC5oZWxwLWJsb2NrLFxuLmhhcy13YXJuaW5nIC5jb250cm9sLWxhYmVsLFxuLmhhcy13YXJuaW5nIC5yYWRpbyxcbi5oYXMtd2FybmluZyAuY2hlY2tib3gsXG4uaGFzLXdhcm5pbmcgLnJhZGlvLWlubGluZSxcbi5oYXMtd2FybmluZyAuY2hlY2tib3gtaW5saW5lLFxuLmhhcy13YXJuaW5nLnJhZGlvIGxhYmVsLFxuLmhhcy13YXJuaW5nLmNoZWNrYm94IGxhYmVsLFxuLmhhcy13YXJuaW5nLnJhZGlvLWlubGluZSBsYWJlbCxcbi5oYXMtd2FybmluZy5jaGVja2JveC1pbmxpbmUgbGFiZWwge1xuICBjb2xvcjogIzhhNmQzYjtcbn1cbi5oYXMtd2FybmluZyAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjOGE2ZDNiO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNzUpO1xufVxuLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM2NjUxMmM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggI2MwYTE2YjtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KSwgMCAwIDZweCAjYzBhMTZiO1xufVxuLmhhcy13YXJuaW5nIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICBib3JkZXItY29sb3I6ICM4YTZkM2I7XG59XG4uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xufVxuLmhhcy1lcnJvciAuaGVscC1ibG9jayxcbi5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWwsXG4uaGFzLWVycm9yIC5yYWRpbyxcbi5oYXMtZXJyb3IgLmNoZWNrYm94LFxuLmhhcy1lcnJvciAucmFkaW8taW5saW5lLFxuLmhhcy1lcnJvciAuY2hlY2tib3gtaW5saW5lLFxuLmhhcy1lcnJvci5yYWRpbyBsYWJlbCxcbi5oYXMtZXJyb3IuY2hlY2tib3ggbGFiZWwsXG4uaGFzLWVycm9yLnJhZGlvLWlubGluZSBsYWJlbCxcbi5oYXMtZXJyb3IuY2hlY2tib3gtaW5saW5lIGxhYmVsIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG59XG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM4NDM1MzQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSksIDAgMCA2cHggI2NlODQ4MztcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDc1KSwgMCAwIDZweCAjY2U4NDgzO1xufVxuLmhhcy1lcnJvciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBjb2xvcjogI2E5NDQ0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xufVxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG59XG4uaGFzLWZlZWRiYWNrIGxhYmVsIH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHRvcDogMjVweDtcbn1cbi5oYXMtZmVlZGJhY2sgbGFiZWwuc3Itb25seSB+IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICB0b3A6IDA7XG59XG4uaGVscC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWlubGluZSAuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sXG4gIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWJ0bixcbiAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5jb250cm9sLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5yYWRpbyxcbiAgLmZvcm0taW5saW5lIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5mb3JtLWlubGluZSAucmFkaW8gbGFiZWwsXG4gIC5mb3JtLWlubGluZSAuY2hlY2tib3ggbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgLmZvcm0taW5saW5lIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbi5mb3JtLWhvcml6b250YWwgLnJhZGlvLFxuLmZvcm0taG9yaXpvbnRhbCAuY2hlY2tib3gsXG4uZm9ybS1ob3Jpem9udGFsIC5yYWRpby1pbmxpbmUsXG4uZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmUge1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvcm0taG9yaXpvbnRhbCAucmFkaW8sXG4uZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveCB7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG59XG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb3JtLWhvcml6b250YWwgLmNvbnRyb2wtbGFiZWwge1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuLmZvcm0taG9yaXpvbnRhbCAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICByaWdodDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLWxnIC5jb250cm9sLWxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwLXNtIC5jb250cm9sLWxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5idG46Zm9jdXMsXG4uYnRuOmFjdGl2ZTpmb2N1cyxcbi5idG4uYWN0aXZlOmZvY3VzLFxuLmJ0bi5mb2N1cyxcbi5idG46YWN0aXZlLmZvY3VzLFxuLmJ0bi5hY3RpdmUuZm9jdXMge1xuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbn1cbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzLFxuLmJ0bi5mb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuOmFjdGl2ZSxcbi5idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cbi5idG4uZGlzYWJsZWQsXG4uYnRuW2Rpc2FibGVkXSxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IC42NTtcbn1cbmEuYnRuLmRpc2FibGVkLFxuZmllbGRzZXRbZGlzYWJsZWRdIGEuYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnRuLWRlZmF1bHQge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmJ0bi1kZWZhdWx0OmZvY3VzLFxuLmJ0bi1kZWZhdWx0LmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIGJvcmRlci1jb2xvcjogIzhjOGM4Yztcbn1cbi5idG4tZGVmYXVsdDpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItY29sb3I6ICNhZGFkYWQ7XG59XG4uYnRuLWRlZmF1bHQ6YWN0aXZlLFxuLmJ0bi1kZWZhdWx0LmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdCB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItY29sb3I6ICNhZGFkYWQ7XG59XG4uYnRuLWRlZmF1bHQ6YWN0aXZlOmhvdmVyLFxuLmJ0bi1kZWZhdWx0LmFjdGl2ZTpob3Zlcixcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdDpob3Zlcixcbi5idG4tZGVmYXVsdDphY3RpdmU6Zm9jdXMsXG4uYnRuLWRlZmF1bHQuYWN0aXZlOmZvY3VzLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0OmZvY3VzLFxuLmJ0bi1kZWZhdWx0OmFjdGl2ZS5mb2N1cyxcbi5idG4tZGVmYXVsdC5hY3RpdmUuZm9jdXMsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQuZm9jdXMge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgYm9yZGVyLWNvbG9yOiAjOGM4YzhjO1xufVxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSxcbi5idG4tZGVmYXVsdC5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmhvdmVyLFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlcixcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6aG92ZXIsXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLWRlZmF1bHRbZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDpmb2N1cyxcbi5idG4tZGVmYXVsdC5kaXNhYmxlZC5mb2N1cyxcbi5idG4tZGVmYXVsdFtkaXNhYmxlZF0uZm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmJ0bi1kZWZhdWx0IC5iYWRnZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcbn1cbi5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeS5mb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MDkwO1xuICBib3JkZXItY29sb3I6ICMxMjJiNDA7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjA5MDtcbiAgYm9yZGVyLWNvbG9yOiAjMjA0ZDc0O1xufVxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tcHJpbWFyeS5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NjA5MDtcbiAgYm9yZGVyLWNvbG9yOiAjMjA0ZDc0O1xufVxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpob3Zlcixcbi5idG4tcHJpbWFyeS5hY3RpdmU6aG92ZXIsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6YWN0aXZlOmZvY3VzLFxuLmJ0bi1wcmltYXJ5LmFjdGl2ZTpmb2N1cyxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeTphY3RpdmUuZm9jdXMsXG4uYnRuLXByaW1hcnkuYWN0aXZlLmZvY3VzLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDRkNzQ7XG4gIGJvcmRlci1jb2xvcjogIzEyMmI0MDtcbn1cbi5idG4tcHJpbWFyeTphY3RpdmUsXG4uYnRuLXByaW1hcnkuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5idG4tcHJpbWFyeS5kaXNhYmxlZDpob3Zlcixcbi5idG4tcHJpbWFyeVtkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmZvY3VzLFxuLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnk6Zm9jdXMsXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQuZm9jdXMsXG4uYnRuLXByaW1hcnlbZGlzYWJsZWRdLmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeS5mb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIGJvcmRlci1jb2xvcjogIzJlNmRhNDtcbn1cbi5idG4tcHJpbWFyeSAuYmFkZ2Uge1xuICBjb2xvcjogIzMzN2FiNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4tc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xuICBib3JkZXItY29sb3I6ICM0Y2FlNGM7XG59XG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsXG4uYnRuLXN1Y2Nlc3MuZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcbiAgYm9yZGVyLWNvbG9yOiAjMjU1NjI1O1xufVxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XG4gIGJvcmRlci1jb2xvcjogIzM5ODQzOTtcbn1cbi5idG4tc3VjY2VzczphY3RpdmUsXG4uYnRuLXN1Y2Nlc3MuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDlkNDQ7XG4gIGJvcmRlci1jb2xvcjogIzM5ODQzOTtcbn1cbi5idG4tc3VjY2VzczphY3RpdmU6aG92ZXIsXG4uYnRuLXN1Y2Nlc3MuYWN0aXZlOmhvdmVyLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzOmhvdmVyLFxuLmJ0bi1zdWNjZXNzOmFjdGl2ZTpmb2N1cyxcbi5idG4tc3VjY2Vzcy5hY3RpdmU6Zm9jdXMsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3M6Zm9jdXMsXG4uYnRuLXN1Y2Nlc3M6YWN0aXZlLmZvY3VzLFxuLmJ0bi1zdWNjZXNzLmFjdGl2ZS5mb2N1cyxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzcy5mb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk4NDM5O1xuICBib3JkZXItY29sb3I6ICMyNTU2MjU7XG59XG4uYnRuLXN1Y2Nlc3M6YWN0aXZlLFxuLmJ0bi1zdWNjZXNzLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQ6aG92ZXIsXG4uYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzczpob3Zlcixcbi5idG4tc3VjY2Vzcy5kaXNhYmxlZDpmb2N1cyxcbi5idG4tc3VjY2Vzc1tkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmZvY3VzLFxuLmJ0bi1zdWNjZXNzLmRpc2FibGVkLmZvY3VzLFxuLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXS5mb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3MuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xuICBib3JkZXItY29sb3I6ICM0Y2FlNGM7XG59XG4uYnRuLXN1Y2Nlc3MgLmJhZGdlIHtcbiAgY29sb3I6ICM1Y2I4NWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDZiOGRhO1xufVxuLmJ0bi1pbmZvOmZvY3VzLFxuLmJ0bi1pbmZvLmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMWIwZDU7XG4gIGJvcmRlci1jb2xvcjogIzFiNmQ4NTtcbn1cbi5idG4taW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiMGQ1O1xuICBib3JkZXItY29sb3I6ICMyNjlhYmM7XG59XG4uYnRuLWluZm86YWN0aXZlLFxuLmJ0bi1pbmZvLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiMGQ1O1xuICBib3JkZXItY29sb3I6ICMyNjlhYmM7XG59XG4uYnRuLWluZm86YWN0aXZlOmhvdmVyLFxuLmJ0bi1pbmZvLmFjdGl2ZTpob3Zlcixcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mbzpob3Zlcixcbi5idG4taW5mbzphY3RpdmU6Zm9jdXMsXG4uYnRuLWluZm8uYWN0aXZlOmZvY3VzLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZvOmZvY3VzLFxuLmJ0bi1pbmZvOmFjdGl2ZS5mb2N1cyxcbi5idG4taW5mby5hY3RpdmUuZm9jdXMsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8uZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2OWFiYztcbiAgYm9yZGVyLWNvbG9yOiAjMWI2ZDg1O1xufVxuLmJ0bi1pbmZvOmFjdGl2ZSxcbi5idG4taW5mby5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmJ0bi1pbmZvLmRpc2FibGVkOmhvdmVyLFxuLmJ0bi1pbmZvW2Rpc2FibGVkXTpob3ZlcixcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86aG92ZXIsXG4uYnRuLWluZm8uZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLWluZm9bZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzpmb2N1cyxcbi5idG4taW5mby5kaXNhYmxlZC5mb2N1cyxcbi5idG4taW5mb1tkaXNhYmxlZF0uZm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbiAgYm9yZGVyLWNvbG9yOiAjNDZiOGRhO1xufVxuLmJ0bi1pbmZvIC5iYWRnZSB7XG4gIGNvbG9yOiAjNWJjMGRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi13YXJuaW5nIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gIGJvcmRlci1jb2xvcjogI2VlYTIzNjtcbn1cbi5idG4td2FybmluZzpmb2N1cyxcbi5idG4td2FybmluZy5mb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM5NzFmO1xuICBib3JkZXItY29sb3I6ICM5ODVmMGQ7XG59XG4uYnRuLXdhcm5pbmc6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjOTcxZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDU4NTEyO1xufVxuLmJ0bi13YXJuaW5nOmFjdGl2ZSxcbi5idG4td2FybmluZy5hY3RpdmUsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjOTcxZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDU4NTEyO1xufVxuLmJ0bi13YXJuaW5nOmFjdGl2ZTpob3Zlcixcbi5idG4td2FybmluZy5hY3RpdmU6aG92ZXIsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmc6aG92ZXIsXG4uYnRuLXdhcm5pbmc6YWN0aXZlOmZvY3VzLFxuLmJ0bi13YXJuaW5nLmFjdGl2ZTpmb2N1cyxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZzpmb2N1cyxcbi5idG4td2FybmluZzphY3RpdmUuZm9jdXMsXG4uYnRuLXdhcm5pbmcuYWN0aXZlLmZvY3VzLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5nLmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTg1MTI7XG4gIGJvcmRlci1jb2xvcjogIzk4NWYwZDtcbn1cbi5idG4td2FybmluZzphY3RpdmUsXG4uYnRuLXdhcm5pbmcuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5idG4td2FybmluZy5kaXNhYmxlZDpob3Zlcixcbi5idG4td2FybmluZ1tkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmhvdmVyLFxuLmJ0bi13YXJuaW5nLmRpc2FibGVkOmZvY3VzLFxuLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmc6Zm9jdXMsXG4uYnRuLXdhcm5pbmcuZGlzYWJsZWQuZm9jdXMsXG4uYnRuLXdhcm5pbmdbZGlzYWJsZWRdLmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZy5mb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gIGJvcmRlci1jb2xvcjogI2VlYTIzNjtcbn1cbi5idG4td2FybmluZyAuYmFkZ2Uge1xuICBjb2xvcjogI2YwYWQ0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4tZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG4gIGJvcmRlci1jb2xvcjogI2Q0M2YzYTtcbn1cbi5idG4tZGFuZ2VyOmZvY3VzLFxuLmJ0bi1kYW5nZXIuZm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcbiAgYm9yZGVyLWNvbG9yOiAjNzYxYzE5O1xufVxuLmJ0bi1kYW5nZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcbiAgYm9yZGVyLWNvbG9yOiAjYWMyOTI1O1xufVxuLmJ0bi1kYW5nZXI6YWN0aXZlLFxuLmJ0bi1kYW5nZXIuYWN0aXZlLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcbiAgYm9yZGVyLWNvbG9yOiAjYWMyOTI1O1xufVxuLmJ0bi1kYW5nZXI6YWN0aXZlOmhvdmVyLFxuLmJ0bi1kYW5nZXIuYWN0aXZlOmhvdmVyLFxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYW5nZXI6aG92ZXIsXG4uYnRuLWRhbmdlcjphY3RpdmU6Zm9jdXMsXG4uYnRuLWRhbmdlci5hY3RpdmU6Zm9jdXMsXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlcjpmb2N1cyxcbi5idG4tZGFuZ2VyOmFjdGl2ZS5mb2N1cyxcbi5idG4tZGFuZ2VyLmFjdGl2ZS5mb2N1cyxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyLmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzI5MjU7XG4gIGJvcmRlci1jb2xvcjogIzc2MWMxOTtcbn1cbi5idG4tZGFuZ2VyOmFjdGl2ZSxcbi5idG4tZGFuZ2VyLmFjdGl2ZSxcbi5vcGVuID4gLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5idG4tZGFuZ2VyLmRpc2FibGVkOmhvdmVyLFxuLmJ0bi1kYW5nZXJbZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmhvdmVyLFxuLmJ0bi1kYW5nZXIuZGlzYWJsZWQ6Zm9jdXMsXG4uYnRuLWRhbmdlcltkaXNhYmxlZF06Zm9jdXMsXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXI6Zm9jdXMsXG4uYnRuLWRhbmdlci5kaXNhYmxlZC5mb2N1cyxcbi5idG4tZGFuZ2VyW2Rpc2FibGVkXS5mb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlci5mb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG4gIGJvcmRlci1jb2xvcjogI2Q0M2YzYTtcbn1cbi5idG4tZGFuZ2VyIC5iYWRnZSB7XG4gIGNvbG9yOiAjZDk1MzRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWxpbmssXG4uYnRuLWxpbms6YWN0aXZlLFxuLmJ0bi1saW5rLmFjdGl2ZSxcbi5idG4tbGlua1tkaXNhYmxlZF0sXG5maWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1saW5rLFxuLmJ0bi1saW5rOmhvdmVyLFxuLmJ0bi1saW5rOmZvY3VzLFxuLmJ0bi1saW5rOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnRuLWxpbms6aG92ZXIsXG4uYnRuLWxpbms6Zm9jdXMge1xuICBjb2xvcjogIzIzNTI3YztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi1saW5rW2Rpc2FibGVkXTpob3ZlcixcbmZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbms6aG92ZXIsXG4uYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuLWxnLFxuLmJ0bi1ncm91cC1sZyA+IC5idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmJ0bi1zbSxcbi5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bi14cyxcbi5idG4tZ3JvdXAteHMgPiAuYnRuIHtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ0bi1ibG9jayxcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idG4tYmxvY2ssXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xufVxuLmZhZGUuaW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbGxhcHNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxudHIuY29sbGFwc2UuaW4ge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG50Ym9keS5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcbn1cbi5jb2xsYXBzaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cztcbiAgICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMzVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG59XG4uY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCBcXDk7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmRyb3B1cCxcbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW46IDJweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG59XG4uZHJvcGRvd24tbWVudS5wdWxsLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG4uZHJvcGRvd24tbWVudSAuZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDlweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xufVxuLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICMzMzM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3Zlcixcbi5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIG91dGxpbmU6IDA7XG59XG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGEsXG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzc3Nztcbn1cbi5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYTpob3Zlcixcbi5kcm9wZG93bi1tZW51ID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XG59XG4ub3BlbiA+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ub3BlbiA+IGEge1xuICBvdXRsaW5lOiAwO1xufVxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cbi5kcm9wZG93bi1tZW51LWxlZnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDtcbn1cbi5kcm9wZG93bi1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNzc3O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRyb3Bkb3duLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5MDtcbn1cbi5wdWxsLXJpZ2h0ID4gLmRyb3Bkb3duLW1lbnUge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cbi5kcm9wdXAgLmNhcmV0LFxuLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5jYXJldCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDRweCBkYXNoZWQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBcXDk7XG59XG4uZHJvcHVwIC5kcm9wZG93bi1tZW51LFxuLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG4gIC5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnUtbGVmdCB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi1ncm91cCA+IC5idG46aG92ZXIsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpob3Zlcixcbi5idG4tZ3JvdXAgPiAuYnRuOmZvY3VzLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46Zm9jdXMsXG4uYnRuLWdyb3VwID4gLmJ0bjphY3RpdmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjphY3RpdmUsXG4uYnRuLWdyb3VwID4gLmJ0bi5hY3RpdmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xufVxuLmJ0bi1ncm91cCAuYnRuICsgLmJ0bixcbi5idG4tZ3JvdXAgLmJ0biArIC5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLFxuLmJ0bi1ncm91cCAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLmJ0bi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG4uYnRuLXRvb2xiYXIgLmJ0bixcbi5idG4tdG9vbGJhciAuYnRuLWdyb3VwLFxuLmJ0bi10b29sYmFyIC5pbnB1dC1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi10b29sYmFyID4gLmJ0bixcbi5idG4tdG9vbGJhciA+IC5idG4tZ3JvdXAsXG4uYnRuLXRvb2xiYXIgPiAuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0bjpsYXN0LWNoaWxkLFxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5kcm9wZG93bi10b2dnbGUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwIC5kcm9wZG93bi10b2dnbGU6YWN0aXZlLFxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBvdXRsaW5lOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWxnICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbn1cbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5rIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuIC5jYXJldCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi5kcm9wdXAgLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICBmbG9hdDogbm9uZTtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuICsgLmJ0bixcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuICsgLmJ0bi1ncm91cCxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwICsgLmJ0bixcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwICsgLmJ0bi1ncm91cCB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSA+IC5idG46bGFzdC1jaGlsZCxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cC1qdXN0aWZpZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG4uYnRuLWdyb3VwLWp1c3RpZmllZCA+IC5idG4sXG4uYnRuLWdyb3VwLWp1c3RpZmllZCA+IC5idG4tZ3JvdXAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDElO1xufVxuLmJ0bi1ncm91cC1qdXN0aWZpZWQgPiAuYnRuLWdyb3VwIC5idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tZ3JvdXAtanVzdGlmaWVkID4gLmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudSB7XG4gIGxlZnQ6IGF1dG87XG59XG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdID4gLmJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdID4gLmJ0bi1ncm91cCA+IC5idG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSA+IC5idG4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSA+IC5idG4tZ3JvdXAgPiAuYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuLmlucHV0LWdyb3VwW2NsYXNzKj1cImNvbC1cIl0ge1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMztcbn1cbi5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbnNlbGVjdC5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG5zZWxlY3QuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG5zZWxlY3QuaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogNDZweDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG50ZXh0YXJlYS5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG50ZXh0YXJlYS5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnRleHRhcmVhLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4sXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbnNlbGVjdC5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG5zZWxlY3QuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG5zZWxlY3QuaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG50ZXh0YXJlYS5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG50ZXh0YXJlYS5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbnRleHRhcmVhLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4sXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbnNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG5zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWJ0biA+IC5idG4ge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuLFxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXAtYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4ge1xuICB3aWR0aDogMSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LXNtIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmlucHV0LWdyb3VwLWFkZG9uLmlucHV0LWxnIHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4uaW5wdXQtZ3JvdXAtYWRkb24gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bi1ncm91cCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQgPiAuYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXAgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uaW5wdXQtZ3JvdXAtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLmlucHV0LWdyb3VwLWJ0biA+IC5idG46aG92ZXIsXG4uaW5wdXQtZ3JvdXAtYnRuID4gLmJ0bjpmb2N1cyxcbi5pbnB1dC1ncm91cC1idG4gPiAuYnRuOmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI7XG59XG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xufVxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXAge1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmF2ID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdiA+IGxpID4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5uYXYgPiBsaSA+IGE6aG92ZXIsXG4ubmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLm5hdiA+IGxpLmRpc2FibGVkID4gYSB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLm5hdiA+IGxpLmRpc2FibGVkID4gYTpob3Zlcixcbi5uYXYgPiBsaS5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXYgLm9wZW4gPiBhLFxuLm5hdiAub3BlbiA+IGE6aG92ZXIsXG4ubmF2IC5vcGVuID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1jb2xvcjogIzMzN2FiNztcbn1cbi5uYXYgLm5hdi1kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogOXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG59XG4ubmF2ID4gbGkgPiBhID4gaW1nIHtcbiAgbWF4LXdpZHRoOiBub25lO1xufVxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG4ubmF2LXRhYnMgPiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuLm5hdi10YWJzID4gbGkgPiBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG4ubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNlZWUgI2VlZSAjZGRkO1xufVxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbi5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSB7XG4gIGZsb2F0OiBub25lO1xufVxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gbGkge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDElO1xuICB9XG4gIC5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gbGkgPiBhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IGxpID4gYSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYSxcbi5uYXYtdGFicy5uYXYtanVzdGlmaWVkID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2LXRhYnMubmF2LWp1c3RpZmllZCA+IGxpID4gYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIH1cbiAgLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYSxcbiAgLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpob3ZlcixcbiAgLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLm5hdi1waWxscyA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2LXBpbGxzID4gbGkgPiBhIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm5hdi1waWxscyA+IGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IGEsXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlID4gYTpob3Zlcixcbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG4ubmF2LXN0YWNrZWQgPiBsaSB7XG4gIGZsb2F0OiBub25lO1xufVxuLm5hdi1zdGFja2VkID4gbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubmF2LWp1c3RpZmllZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1qdXN0aWZpZWQgPiBsaSB7XG4gIGZsb2F0OiBub25lO1xufVxuLm5hdi1qdXN0aWZpZWQgPiBsaSA+IGEge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uYXYtanVzdGlmaWVkID4gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXYtanVzdGlmaWVkID4gbGkge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDElO1xuICB9XG4gIC5uYXYtanVzdGlmaWVkID4gbGkgPiBhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4ubmF2LXRhYnMtanVzdGlmaWVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5uYXYtdGFicy1qdXN0aWZpZWQgPiBsaSA+IGEge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5uYXYtdGFicy1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYSxcbi5uYXYtdGFicy1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpob3Zlcixcbi5uYXYtdGFicy1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi10YWJzLWp1c3RpZmllZCA+IGxpID4gYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIH1cbiAgLm5hdi10YWJzLWp1c3RpZmllZCA+IC5hY3RpdmUgPiBhLFxuICAubmF2LXRhYnMtanVzdGlmaWVkID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4gIC5uYXYtdGFicy1qdXN0aWZpZWQgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLnRhYi1jb250ZW50ID4gLnRhYi1wYW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50YWItY29udGVudCA+IC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtdGFicyAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1oZWFkZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG59XG4ubmF2YmFyLWNvbGxhcHNlLmluIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXZiYXItY29sbGFwc2UuaW4ge1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gIH1cbiAgLm5hdmJhci1maXhlZC10b3AgLm5hdmJhci1jb2xsYXBzZSxcbiAgLm5hdmJhci1zdGF0aWMtdG9wIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWNvbGxhcHNlLFxuLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1jb2xsYXBzZSB7XG4gIG1heC1oZWlnaHQ6IDM0MHB4O1xufVxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZml4ZWQtYm90dG9tIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG59XG4uY29udGFpbmVyID4gLm5hdmJhci1oZWFkZXIsXG4uY29udGFpbmVyLWZsdWlkID4gLm5hdmJhci1oZWFkZXIsXG4uY29udGFpbmVyID4gLm5hdmJhci1jb2xsYXBzZSxcbi5jb250YWluZXItZmx1aWQgPiAubmF2YmFyLWNvbGxhcHNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgPiAubmF2YmFyLWhlYWRlcixcbiAgLmNvbnRhaW5lci1mbHVpZCA+IC5uYXZiYXItaGVhZGVyLFxuICAuY29udGFpbmVyID4gLm5hdmJhci1jb2xsYXBzZSxcbiAgLmNvbnRhaW5lci1mbHVpZCA+IC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLm5hdmJhci1zdGF0aWMtdG9wIHtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItc3RhdGljLXRvcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1maXhlZC10b3AsXG4gIC5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4ubmF2YmFyLWZpeGVkLXRvcCB7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xufVxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbn1cbi5uYXZiYXItYnJhbmQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubmF2YmFyLWJyYW5kOmhvdmVyLFxuLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uYXZiYXItYnJhbmQgPiBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyID4gLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kLFxuICAubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cbn1cbi5uYXZiYXItdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDlweCAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cbi5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciArIC5pY29uLWJhciB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm5hdmJhci1uYXYge1xuICBtYXJnaW46IDcuNXB4IC0xNXB4O1xufVxuLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEsXG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyNXB4O1xuICB9XG4gIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlcixcbiAgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5uYXZiYXItbmF2ID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLm5hdmJhci1mb3JtIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5uYXZiYXItZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAubmF2YmFyLWZvcm0gLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbixcbiAgLm5hdmJhci1mb3JtIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRuLFxuICAubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubmF2YmFyLWZvcm0gLmNvbnRyb2wtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAubmF2YmFyLWZvcm0gLnJhZGlvLFxuICAubmF2YmFyLWZvcm0gLmNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm5hdmJhci1mb3JtIC5yYWRpbyBsYWJlbCxcbiAgLm5hdmJhci1mb3JtIC5jaGVja2JveCBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5uYXZiYXItZm9ybSAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAubmF2YmFyLWZvcm0gLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5uYXZiYXItZm9ybSAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHRvcDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXZiYXItZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5uYXZiYXItZm9ybSAuZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1mb3JtIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5uYXZiYXItYnRuIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubmF2YmFyLWJ0bi5idG4tc20ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm5hdmJhci1idG4uYnRuLXhzIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5uYXZiYXItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci10ZXh0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgfVxuICAubmF2YmFyLXJpZ2h0IH4gLm5hdmJhci1yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4ubmF2YmFyLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIGNvbG9yOiAjNWU1ZTVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRleHQge1xuICBjb2xvcjogIzc3Nztcbn1cbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gIGNvbG9yOiAjNzc3O1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuZGlzYWJsZWQgPiBhLFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmRpc2FibGVkID4gYTpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXIsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1jb2xsYXBzZSxcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWZvcm0ge1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGEsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6aG92ZXIsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlcixcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSxcbiAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICB9XG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGEsXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGE6Zm9jdXMge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG59XG4ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rOmhvdmVyLFxuLm5hdmJhci1kZWZhdWx0IC5idG4tbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsXG5maWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1kZWZhdWx0IC5idG4tbGluazpob3Zlcixcbi5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6Zm9jdXMge1xuICBjb2xvcjogI2NjYztcbn1cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIGJvcmRlci1jb2xvcjogIzA4MDgwODtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1icmFuZDpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdGV4dCB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5kaXNhYmxlZCA+IGEsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gLmRpc2FibGVkID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSB7XG4gIGJvcmRlci1jb2xvcjogIzMzMztcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWNvbGxhcHNlLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItZm9ybSB7XG4gIGJvcmRlci1jb2xvcjogIzEwMTAxMDtcbn1cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IC5vcGVuID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5kcm9wZG93bi1oZWFkZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzA4MDgwODtcbiAgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgLmRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg7XG4gIH1cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICBjb2xvcjogIzlkOWQ5ZDtcbiAgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsXG4gIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbiAgfVxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuICAubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuZGlzYWJsZWQgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluayB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5hdmJhci1pbnZlcnNlIC5idG4tbGluayB7XG4gIGNvbG9yOiAjOWQ5ZDlkO1xufVxuLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbms6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbmtbZGlzYWJsZWRdOmhvdmVyLFxuZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbms6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cyxcbmZpZWxkc2V0W2Rpc2FibGVkXSAubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICM0NDQ7XG59XG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYnJlYWRjcnVtYiA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJyZWFkY3J1bWIgPiBsaSArIGxpOmJlZm9yZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogI2NjYztcbiAgY29udGVudDogXCIvXFwwMGEwXCI7XG59XG4uYnJlYWRjcnVtYiA+IC5hY3RpdmUge1xuICBjb2xvcjogIzc3Nztcbn1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucGFnaW5hdGlvbiA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnBhZ2luYXRpb24gPiBsaSA+IGEsXG4ucGFnaW5hdGlvbiA+IGxpID4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjMzM3YWI3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4ucGFnaW5hdGlvbiA+IGxpOmZpcnN0LWNoaWxkID4gYSxcbi5wYWdpbmF0aW9uID4gbGk6Zmlyc3QtY2hpbGQgPiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuLnBhZ2luYXRpb24gPiBsaTpsYXN0LWNoaWxkID4gYSxcbi5wYWdpbmF0aW9uID4gbGk6bGFzdC1jaGlsZCA+IHNwYW4ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuLnBhZ2luYXRpb24gPiBsaSA+IGE6aG92ZXIsXG4ucGFnaW5hdGlvbiA+IGxpID4gc3Bhbjpob3Zlcixcbi5wYWdpbmF0aW9uID4gbGkgPiBhOmZvY3VzLFxuLnBhZ2luYXRpb24gPiBsaSA+IHNwYW46Zm9jdXMge1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogIzIzNTI3YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gYSxcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IHNwYW4sXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuLnBhZ2luYXRpb24gPiAuYWN0aXZlID4gc3Bhbjpob3Zlcixcbi5wYWdpbmF0aW9uID4gLmFjdGl2ZSA+IGE6Zm9jdXMsXG4ucGFnaW5hdGlvbiA+IC5hY3RpdmUgPiBzcGFuOmZvY3VzIHtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgYm9yZGVyLWNvbG9yOiAjMzM3YWI3O1xufVxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBzcGFuLFxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBzcGFuOmhvdmVyLFxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBzcGFuOmZvY3VzLFxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBhLFxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBhOmhvdmVyLFxuLnBhZ2luYXRpb24gPiAuZGlzYWJsZWQgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbn1cbi5wYWdpbmF0aW9uLWxnID4gbGkgPiBhLFxuLnBhZ2luYXRpb24tbGcgPiBsaSA+IHNwYW4ge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbn1cbi5wYWdpbmF0aW9uLWxnID4gbGk6Zmlyc3QtY2hpbGQgPiBhLFxuLnBhZ2luYXRpb24tbGcgPiBsaTpmaXJzdC1jaGlsZCA+IHNwYW4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbn1cbi5wYWdpbmF0aW9uLWxnID4gbGk6bGFzdC1jaGlsZCA+IGEsXG4ucGFnaW5hdGlvbi1sZyA+IGxpOmxhc3QtY2hpbGQgPiBzcGFuIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbn1cbi5wYWdpbmF0aW9uLXNtID4gbGkgPiBhLFxuLnBhZ2luYXRpb24tc20gPiBsaSA+IHNwYW4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLnBhZ2luYXRpb24tc20gPiBsaTpmaXJzdC1jaGlsZCA+IGEsXG4ucGFnaW5hdGlvbi1zbSA+IGxpOmZpcnN0LWNoaWxkID4gc3BhbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhZ2luYXRpb24tc20gPiBsaTpsYXN0LWNoaWxkID4gYSxcbi5wYWdpbmF0aW9uLXNtID4gbGk6bGFzdC1jaGlsZCA+IHNwYW4ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuLnBhZ2VyIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW46IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2VyIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnBhZ2VyIGxpID4gYSxcbi5wYWdlciBsaSA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnBhZ2VyIGxpID4gYTpob3Zlcixcbi5wYWdlciBsaSA+IGE6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4ucGFnZXIgLm5leHQgPiBhLFxuLnBhZ2VyIC5uZXh0ID4gc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wYWdlciAucHJldmlvdXMgPiBhLFxuLnBhZ2VyIC5wcmV2aW91cyA+IHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5wYWdlciAuZGlzYWJsZWQgPiBhLFxuLnBhZ2VyIC5kaXNhYmxlZCA+IGE6aG92ZXIsXG4ucGFnZXIgLmRpc2FibGVkID4gYTpmb2N1cyxcbi5wYWdlciAuZGlzYWJsZWQgPiBzcGFuIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IC4yZW0gLjZlbSAuM2VtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xufVxuYS5sYWJlbDpob3ZlcixcbmEubGFiZWw6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGFiZWw6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJ0biAubGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cbi5sYWJlbC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cbi5sYWJlbC1kZWZhdWx0W2hyZWZdOmhvdmVyLFxuLmxhYmVsLWRlZmF1bHRbaHJlZl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xufVxuLmxhYmVsLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuLmxhYmVsLXByaW1hcnlbaHJlZl06aG92ZXIsXG4ubGFiZWwtcHJpbWFyeVtocmVmXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODYwOTA7XG59XG4ubGFiZWwtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XG59XG4ubGFiZWwtc3VjY2Vzc1tocmVmXTpob3Zlcixcbi5sYWJlbC1zdWNjZXNzW2hyZWZdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0OWQ0NDtcbn1cbi5sYWJlbC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcbn1cbi5sYWJlbC1pbmZvW2hyZWZdOmhvdmVyLFxuLmxhYmVsLWluZm9baHJlZl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzFiMGQ1O1xufVxuLmxhYmVsLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlO1xufVxuLmxhYmVsLXdhcm5pbmdbaHJlZl06aG92ZXIsXG4ubGFiZWwtd2FybmluZ1tocmVmXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzk3MWY7XG59XG4ubGFiZWwtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0Zjtcbn1cbi5sYWJlbC1kYW5nZXJbaHJlZl06aG92ZXIsXG4ubGFiZWwtZGFuZ2VyW2hyZWZdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MzAyYztcbn1cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5iYWRnZTplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuLmJ0bi14cyAuYmFkZ2UsXG4uYnRuLWdyb3VwLXhzID4gLmJ0biAuYmFkZ2Uge1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG59XG5hLmJhZGdlOmhvdmVyLFxuYS5iYWRnZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlID4gLmJhZGdlLFxuLm5hdi1waWxscyA+IC5hY3RpdmUgPiBhID4gLmJhZGdlIHtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubGlzdC1ncm91cC1pdGVtID4gLmJhZGdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmxpc3QtZ3JvdXAtaXRlbSA+IC5iYWRnZSArIC5iYWRnZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm5hdi1waWxscyA+IGxpID4gYSA+IC5iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uanVtYm90cm9uIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi5qdW1ib3Ryb24gaDEsXG4uanVtYm90cm9uIC5oMSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmp1bWJvdHJvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuLmp1bWJvdHJvbiA+IGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q1ZDVkNTtcbn1cbi5jb250YWluZXIgLmp1bWJvdHJvbixcbi5jb250YWluZXItZmx1aWQgLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAuanVtYm90cm9uLFxuICAuY29udGFpbmVyLWZsdWlkIC5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC5qdW1ib3Ryb24gaDEsXG4gIC5qdW1ib3Ryb24gLmgxIHtcbiAgICBmb250LXNpemU6IDYzcHg7XG4gIH1cbn1cbi50aHVtYm5haWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0O1xufVxuLnRodW1ibmFpbCA+IGltZyxcbi50aHVtYm5haWwgYSA+IGltZyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5hLnRodW1ibmFpbDpob3ZlcixcbmEudGh1bWJuYWlsOmZvY3VzLFxuYS50aHVtYm5haWwuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzM3YWI3O1xufVxuLnRodW1ibmFpbCAuY2FwdGlvbiB7XG4gIHBhZGRpbmc6IDlweDtcbiAgY29sb3I6ICMzMzM7XG59XG4uYWxlcnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmFsZXJ0IGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYWxlcnQgLmFsZXJ0LWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGVydCA+IHAsXG4uYWxlcnQgPiB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWxlcnQgPiBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5hbGVydC1kaXNtaXNzYWJsZSxcbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG59XG4uYWxlcnQtZGlzbWlzc2FibGUgLmNsb3NlLFxuLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogLTIxcHg7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzNjNzYzZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xufVxuLmFsZXJ0LXN1Y2Nlc3MgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYzllMmIzO1xufVxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzJiNTQyYztcbn1cbi5hbGVydC1pbmZvIHtcbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gIGJvcmRlci1jb2xvcjogI2JjZThmMTtcbn1cbi5hbGVydC1pbmZvIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E2ZTFlYztcbn1cbi5hbGVydC1pbmZvIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMyNDUyNjk7XG59XG4uYWxlcnQtd2FybmluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICBib3JkZXItY29sb3I6ICNmYWViY2M7XG59XG4uYWxlcnQtd2FybmluZyBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmN2UxYjU7XG59XG4uYWxlcnQtd2FybmluZyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjNjY1MTJjO1xufVxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG59XG4uYWxlcnQtZGFuZ2VyIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U0YjljMDtcbn1cbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzg0MzUzNDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MHB4IDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxufVxuLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cbi5wcm9ncmVzcy1iYXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xuICAgICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC42cyBlYXNlO1xufVxuLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhcixcbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG59XG4ucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXIsXG4ucHJvZ3Jlc3MtYmFyLmFjdGl2ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgLW8tYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG4ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xufVxuLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGU7XG59XG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xufVxuLnByb2dyZXNzLWJhci13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbn1cbi5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXItd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG59XG4ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4ubWVkaWEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1lZGlhOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tZWRpYSxcbi5tZWRpYS1ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgem9vbTogMTtcbn1cbi5tZWRpYS1ib2R5IHtcbiAgd2lkdGg6IDEwMDAwcHg7XG59XG4ubWVkaWEtb2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVkaWEtb2JqZWN0LmltZy10aHVtYm5haWwge1xuICBtYXgtd2lkdGg6IG5vbmU7XG59XG4ubWVkaWEtcmlnaHQsXG4ubWVkaWEgPiAucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tZWRpYS1sZWZ0LFxuLm1lZGlhID4gLnB1bGwtbGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4ubWVkaWEtbGVmdCxcbi5tZWRpYS1yaWdodCxcbi5tZWRpYS1ib2R5IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5tZWRpYS1taWRkbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1lZGlhLWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4ubWVkaWEtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tZWRpYS1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3QtZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbn1cbmEubGlzdC1ncm91cC1pdGVtLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGNvbG9yOiAjNTU1O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBjb2xvcjogIzMzMztcbn1cbmEubGlzdC1ncm91cC1pdGVtOmhvdmVyLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcixcbmEubGlzdC1ncm91cC1pdGVtOmZvY3VzLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbTpmb2N1cyB7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5idXR0b24ubGlzdC1ncm91cC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkLFxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3Zlcixcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6Zm9jdXMge1xuICBjb2xvcjogIzc3NztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCAubGlzdC1ncm91cC1pdGVtLXRleHQsXG4ubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCxcbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMge1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbiAgYm9yZGVyLWNvbG9yOiAjMzM3YWI3O1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gc21hbGwsXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiBzbWFsbCxcbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IHNtYWxsLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsLFxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nID4gLnNtYWxsIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSAubGlzdC1ncm91cC1pdGVtLXRleHQsXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLXRleHQsXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBjb2xvcjogI2M3ZGRlZjtcbn1cbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmhvdmVyLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpmb2N1cyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpmb2N1cyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlOWM2O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmUsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlLFxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmU6aG92ZXIsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmU6Zm9jdXMsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzc2M2Q7XG4gIGJvcmRlci1jb2xvcjogIzNjNzYzZDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0taW5mbyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mbyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmhvdmVyLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0taW5mbzpmb2N1cyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mbzpmb2N1cyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlM2YzO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmUsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlLFxuYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXIsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6Zm9jdXMsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTcwOGY7XG4gIGJvcmRlci1jb2xvcjogIzMxNzA4Zjtcbn1cbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nOmhvdmVyLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpmb2N1cyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpmb2N1cyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmMmNjO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmUsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlLFxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmU6aG92ZXIsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmU6Zm9jdXMsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTZkM2I7XG4gIGJvcmRlci1jb2xvcjogIzhhNmQzYjtcbn1cbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG59XG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyOmhvdmVyLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXI6aG92ZXIsXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXI6Zm9jdXMsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpmb2N1cyB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJjY2NjO1xufVxuYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZSxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZSxcbmEubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmU6aG92ZXIsXG5idXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmU6aG92ZXIsXG5hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlOmZvY3VzLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOTQ0NDI7XG4gIGJvcmRlci1jb2xvcjogI2E5NDQ0Mjtcbn1cbi5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wYW5lbC1oZWFkaW5nIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbC1oZWFkaW5nID4gLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5wYW5lbC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ucGFuZWwtdGl0bGUgPiBhLFxuLnBhbmVsLXRpdGxlID4gc21hbGwsXG4ucGFuZWwtdGl0bGUgPiAuc21hbGwsXG4ucGFuZWwtdGl0bGUgPiBzbWFsbCA+IGEsXG4ucGFuZWwtdGl0bGUgPiAuc21hbGwgPiBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ucGFuZWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLmxpc3QtZ3JvdXAsXG4ucGFuZWwgPiAucGFuZWwtY29sbGFwc2UgPiAubGlzdC1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFuZWwgPiAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLFxuLnBhbmVsID4gLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucGFuZWwgPiAubGlzdC1ncm91cDpmaXJzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnBhbmVsLWNvbGxhcHNlID4gLmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG59XG4ucGFuZWwgPiAucGFuZWwtaGVhZGluZyArIC5wYW5lbC1jb2xsYXBzZSA+IC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5wYW5lbC1oZWFkaW5nICsgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG4ubGlzdC1ncm91cCArIC5wYW5lbC1mb290ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUsXG4ucGFuZWwgPiAucGFuZWwtY29sbGFwc2UgPiAudGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhbmVsID4gLnRhYmxlIGNhcHRpb24sXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSBjYXB0aW9uLFxuLnBhbmVsID4gLnBhbmVsLWNvbGxhcHNlID4gLnRhYmxlIGNhcHRpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGhlYWQ6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6Zmlyc3QtY2hpbGQgPiB0aGVhZDpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpmaXJzdC1jaGlsZCA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkID4gLnRhYmxlOmZpcnN0LWNoaWxkID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbn1cbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGJvZHk6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRmb290Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGU6bGFzdC1jaGlsZCA+IHRib2R5Omxhc3QtY2hpbGQgPiB0cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Ym9keTpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlOmxhc3QtY2hpbGQgPiB0Zm9vdDpsYXN0LWNoaWxkID4gdHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkID4gdGZvb3Q6bGFzdC1jaGlsZCA+IHRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4ucGFuZWwgPiAucGFuZWwtYm9keSArIC50YWJsZSxcbi5wYW5lbCA+IC5wYW5lbC1ib2R5ICsgLnRhYmxlLXJlc3BvbnNpdmUsXG4ucGFuZWwgPiAudGFibGUgKyAucGFuZWwtYm9keSxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlICsgLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cbi5wYW5lbCA+IC50YWJsZSA+IHRib2R5OmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgdGgsXG4ucGFuZWwgPiAudGFibGUgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmZpcnN0LWNoaWxkLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkOmxhc3QtY2hpbGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGQ6bGFzdC1jaGlsZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbi5wYW5lbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCA+IHRkLFxuLnBhbmVsID4gLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGgsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkID4gdGgsXG4ucGFuZWwgPiAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0ZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyOmxhc3QtY2hpbGQgPiB0ZCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGQsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyOmxhc3QtY2hpbGQgPiB0aCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGgsXG4ucGFuZWwgPiAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyOmxhc3QtY2hpbGQgPiB0aCxcbi5wYW5lbCA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0cjpsYXN0LWNoaWxkID4gdGgge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnBhbmVsID4gLnRhYmxlLXJlc3BvbnNpdmUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDA7XG59XG4ucGFuZWwtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnBhbmVsLWdyb3VwIC5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wYW5lbC1ncm91cCAucGFuZWwgKyAucGFuZWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHksXG4ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAubGlzdC1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuLnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXIge1xuICBib3JkZXItdG9wOiAwO1xufVxuLnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXIgKyAucGFuZWwtY29sbGFwc2UgLnBhbmVsLWJvZHkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5wYW5lbC1kZWZhdWx0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyAuYmFkZ2Uge1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbi5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RkZDtcbn1cbi5wYW5lbC1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMzM3YWI3O1xufVxuLnBhbmVsLXByaW1hcnkgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICBib3JkZXItY29sb3I6ICMzMzdhYjc7XG59XG4ucGFuZWwtcHJpbWFyeSA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMzM3YWI3O1xufVxuLnBhbmVsLXByaW1hcnkgPiAucGFuZWwtaGVhZGluZyAuYmFkZ2Uge1xuICBjb2xvcjogIzMzN2FiNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wYW5lbC1wcmltYXJ5ID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzN2FiNztcbn1cbi5wYW5lbC1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xufVxuLnBhbmVsLXN1Y2Nlc3MgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG59XG4ucGFuZWwtc3VjY2VzcyA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZDZlOWM2O1xufVxuLnBhbmVsLXN1Y2Nlc3MgPiAucGFuZWwtaGVhZGluZyAuYmFkZ2Uge1xuICBjb2xvcjogI2RmZjBkODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNzYzZDtcbn1cbi5wYW5lbC1zdWNjZXNzID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q2ZTljNjtcbn1cbi5wYW5lbC1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xufVxuLnBhbmVsLWluZm8gPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjMzE3MDhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xuICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XG59XG4ucGFuZWwtaW5mbyA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYmNlOGYxO1xufVxuLnBhbmVsLWluZm8gPiAucGFuZWwtaGVhZGluZyAuYmFkZ2Uge1xuICBjb2xvcjogI2Q5ZWRmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNzA4Zjtcbn1cbi5wYW5lbC1pbmZvID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JjZThmMTtcbn1cbi5wYW5lbC13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xufVxuLnBhbmVsLXdhcm5pbmcgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjOGE2ZDNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICBib3JkZXItY29sb3I6ICNmYWViY2M7XG59XG4ucGFuZWwtd2FybmluZyA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmFlYmNjO1xufVxuLnBhbmVsLXdhcm5pbmcgPiAucGFuZWwtaGVhZGluZyAuYmFkZ2Uge1xuICBjb2xvcjogI2ZjZjhlMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhNmQzYjtcbn1cbi5wYW5lbC13YXJuaW5nID4gLnBhbmVsLWZvb3RlciArIC5wYW5lbC1jb2xsYXBzZSA+IC5wYW5lbC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZhZWJjYztcbn1cbi5wYW5lbC1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG59XG4ucGFuZWwtZGFuZ2VyID4gLnBhbmVsLWhlYWRpbmcge1xuICBjb2xvcjogI2E5NDQ0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xufVxuLnBhbmVsLWRhbmdlciA+IC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZWJjY2QxO1xufVxuLnBhbmVsLWRhbmdlciA+IC5wYW5lbC1oZWFkaW5nIC5iYWRnZSB7XG4gIGNvbG9yOiAjZjJkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk0NDQyO1xufVxuLnBhbmVsLWRhbmdlciA+IC5wYW5lbC1mb290ZXIgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlYmNjZDE7XG59XG4uZW1iZWQtcmVzcG9uc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5lbWJlZC1yZXNwb25zaXZlIC5lbWJlZC1yZXNwb25zaXZlLWl0ZW0sXG4uZW1iZWQtcmVzcG9uc2l2ZSBpZnJhbWUsXG4uZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZCxcbi5lbWJlZC1yZXNwb25zaXZlIG9iamVjdCxcbi5lbWJlZC1yZXNwb25zaXZlIHZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuLmVtYmVkLXJlc3BvbnNpdmUtMTZieTkge1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xufVxuLmVtYmVkLXJlc3BvbnNpdmUtNGJ5MyB7XG4gIHBhZGRpbmctYm90dG9tOiA3NSU7XG59XG4ud2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4wNSk7XG59XG4ud2VsbCBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgLjE1KTtcbn1cbi53ZWxsLWxnIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLndlbGwtc20ge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xuICBvcGFjaXR5OiAuMjtcbn1cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgb3BhY2l0eTogLjU7XG59XG5idXR0b24uY2xvc2Uge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi5tb2RhbC1vcGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG91dGxpbmU6IDA7XG59XG4ubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogICAgICAtby10cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246ICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbn1cbi5tb2RhbC5pbiAubW9kYWwtZGlhbG9nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn1cbi5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG59XG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDlweCByZ2JhKDAsIDAsIDAsIC41KTtcbn1cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLm1vZGFsLWJhY2tkcm9wLmZhZGUge1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG9wYWNpdHk6IDA7XG59XG4ubW9kYWwtYmFja2Ryb3AuaW4ge1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICBvcGFjaXR5OiAuNTtcbn1cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG59XG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG4ubW9kYWwtZm9vdGVyIC5idG4gKyAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1ncm91cCAuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLm1vZGFsLWZvb3RlciAuYnRuLWJsb2NrICsgLmJ0bi1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuICB9XG4gIC5tb2RhbC1zbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm1vZGFsLWxnIHtcbiAgICB3aWR0aDogOTAwcHg7XG4gIH1cbn1cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDcwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgbGluZS1icmVhazogYXV0bztcbn1cbi50b29sdGlwLmluIHtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcbiAgb3BhY2l0eTogLjk7XG59XG4udG9vbHRpcC50b3Age1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbi50b29sdGlwLnJpZ2h0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4udG9vbHRpcC5ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLnRvb2x0aXAubGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cbi50b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4udG9vbHRpcC50b3AgLnRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAudG9wLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICByaWdodDogNXB4O1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAudG9wLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAucmlnaHQgLnRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XG59XG4udG9vbHRpcC5sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xufVxuLnRvb2x0aXAuYm90dG9tIC50b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLmJvdHRvbS1sZWZ0IC50b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICByaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cbi50b29sdGlwLmJvdHRvbS1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cbi5wb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNjA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMjc2cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMik7XG5cbiAgbGluZS1icmVhazogYXV0bztcbn1cbi5wb3BvdmVyLnRvcCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLnBvcG92ZXIucmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wb3BvdmVyLmJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucG9wb3Zlci5sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLnBvcG92ZXItdGl0bGUge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cbi5wb3BvdmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiA5cHggMTRweDtcbn1cbi5wb3BvdmVyID4gLmFycm93LFxuLnBvcG92ZXIgPiAuYXJyb3c6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLnBvcG92ZXIgPiAuYXJyb3cge1xuICBib3JkZXItd2lkdGg6IDExcHg7XG59XG4ucG9wb3ZlciA+IC5hcnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbn1cbi5wb3BvdmVyLnRvcCA+IC5hcnJvdyB7XG4gIGJvdHRvbTogLTExcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjOTk5O1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4ucG9wb3Zlci50b3AgPiAuYXJyb3c6YWZ0ZXIge1xuICBib3R0b206IDFweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi5wb3BvdmVyLnJpZ2h0ID4gLmFycm93IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0xMXB4O1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG4ucG9wb3Zlci5yaWdodCA+IC5hcnJvdzphZnRlciB7XG4gIGJvdHRvbTogLTEwcHg7XG4gIGxlZnQ6IDFweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG4ucG9wb3Zlci5ib3R0b20gPiAuYXJyb3cge1xuICB0b3A6IC0xMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk5OTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuLnBvcG92ZXIuYm90dG9tID4gLmFycm93OmFmdGVyIHtcbiAgdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG4ucG9wb3Zlci5sZWZ0ID4gLmFycm93IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAtMTFweDtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM5OTk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XG59XG4ucG9wb3Zlci5sZWZ0ID4gLmFycm93OmFmdGVyIHtcbiAgcmlnaHQ6IDFweDtcbiAgYm90dG9tOiAtMTBweDtcbiAgY29udGVudDogXCIgXCI7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7XG59XG4uY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2Fyb3VzZWwtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcm91c2VsLWlubmVyID4gLml0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XG4gICAgICAgLW8tdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0IGxlZnQ7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSA+IGltZyxcbi5jYXJvdXNlbC1pbm5lciA+IC5pdGVtID4gYSA+IGltZyB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQG1lZGlhIGFsbCBhbmQgKHRyYW5zZm9ybS0zZCksICgtd2Via2l0LXRyYW5zZm9ybS0zZCkge1xuICAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAtby10cmFuc2l0aW9uOiAgICAgIC1vLXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIHRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLm5leHQsXG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmFjdGl2ZS5yaWdodCB7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLnByZXYsXG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmFjdGl2ZS5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxuICAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5uZXh0LmxlZnQsXG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLnByZXYucmlnaHQsXG4gIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlLFxuLmNhcm91c2VsLWlubmVyID4gLm5leHQsXG4uY2Fyb3VzZWwtaW5uZXIgPiAucHJldiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcm91c2VsLWlubmVyID4gLmFjdGl2ZSB7XG4gIGxlZnQ6IDA7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAubmV4dCxcbi5jYXJvdXNlbC1pbm5lciA+IC5wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcm91c2VsLWlubmVyID4gLm5leHQge1xuICBsZWZ0OiAxMDAlO1xufVxuLmNhcm91c2VsLWlubmVyID4gLnByZXYge1xuICBsZWZ0OiAtMTAwJTtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5uZXh0LmxlZnQsXG4uY2Fyb3VzZWwtaW5uZXIgPiAucHJldi5yaWdodCB7XG4gIGxlZnQ6IDA7XG59XG4uY2Fyb3VzZWwtaW5uZXIgPiAuYWN0aXZlLmxlZnQge1xuICBsZWZ0OiAtMTAwJTtcbn1cbi5jYXJvdXNlbC1pbm5lciA+IC5hY3RpdmUucmlnaHQge1xuICBsZWZ0OiAxMDAlO1xufVxuLmNhcm91c2VsLWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTUlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gIG9wYWNpdHk6IC41O1xufVxuLmNhcm91c2VsLWNvbnRyb2wubGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwgMCwgMCwgLjUpIDAlLCByZ2JhKDAsIDAsIDAsIC4wMDAxKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAwLCAwLCAuNSkgMCUsIHJnYmEoMCwgMCwgMCwgLjAwMDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDAsIDAsIDAsIC41KSksIHRvKHJnYmEoMCwgMCwgMCwgLjAwMDEpKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIC41KSAwJSwgcmdiYSgwLCAwLCAwLCAuMDAwMSkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyM4MDAwMDAwMCcsIGVuZENvbG9yc3RyPScjMDAwMDAwMDAnLCBHcmFkaWVudFR5cGU9MSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwgMCwgMCwgLjAwMDEpIDAlLCByZ2JhKDAsIDAsIDAsIC41KSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAwLCAwLCAuMDAwMSkgMCUsIHJnYmEoMCwgMCwgMCwgLjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShyZ2JhKDAsIDAsIDAsIC4wMDAxKSksIHRvKHJnYmEoMCwgMCwgMCwgLjUpKSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIC4wMDAxKSAwJSwgcmdiYSgwLCAwLCAwLCAuNSkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyPScjODAwMDAwMDAnLCBHcmFkaWVudFR5cGU9MSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbi5jYXJvdXNlbC1jb250cm9sOmhvdmVyLFxuLmNhcm91c2VsLWNvbnRyb2w6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9OTApO1xuICBvdXRsaW5lOiAwO1xuICBvcGFjaXR5OiAuOTtcbn1cbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0LFxuLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiA1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldixcbi5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0IHtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0LFxuLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0IHtcbiAgcmlnaHQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXY6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjAzOSc7XG59XG4uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDIwM2EnO1xufVxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAxNTtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogLTMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMXB4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgXFw5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC42KTtcbn1cbi5jYXJvdXNlbC1jYXB0aW9uIC5idG4ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0LFxuICAuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXG4gIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYsXG4gIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4gIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLXByZXYge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgfVxuICAuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXG4gIC5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQge1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHJpZ2h0OiAyMCU7XG4gICAgbGVmdDogMjAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbn1cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIsXG4uZGwtaG9yaXpvbnRhbCBkZDpiZWZvcmUsXG4uZGwtaG9yaXpvbnRhbCBkZDphZnRlcixcbi5jb250YWluZXI6YmVmb3JlLFxuLmNvbnRhaW5lcjphZnRlcixcbi5jb250YWluZXItZmx1aWQ6YmVmb3JlLFxuLmNvbnRhaW5lci1mbHVpZDphZnRlcixcbi5yb3c6YmVmb3JlLFxuLnJvdzphZnRlcixcbi5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YmVmb3JlLFxuLmZvcm0taG9yaXpvbnRhbCAuZm9ybS1ncm91cDphZnRlcixcbi5idG4tdG9vbGJhcjpiZWZvcmUsXG4uYnRuLXRvb2xiYXI6YWZ0ZXIsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpiZWZvcmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDphZnRlcixcbi5uYXY6YmVmb3JlLFxuLm5hdjphZnRlcixcbi5uYXZiYXI6YmVmb3JlLFxuLm5hdmJhcjphZnRlcixcbi5uYXZiYXItaGVhZGVyOmJlZm9yZSxcbi5uYXZiYXItaGVhZGVyOmFmdGVyLFxuLm5hdmJhci1jb2xsYXBzZTpiZWZvcmUsXG4ubmF2YmFyLWNvbGxhcHNlOmFmdGVyLFxuLnBhZ2VyOmJlZm9yZSxcbi5wYWdlcjphZnRlcixcbi5wYW5lbC1ib2R5OmJlZm9yZSxcbi5wYW5lbC1ib2R5OmFmdGVyLFxuLm1vZGFsLWhlYWRlcjpiZWZvcmUsXG4ubW9kYWwtaGVhZGVyOmFmdGVyLFxuLm1vZGFsLWZvb3RlcjpiZWZvcmUsXG4ubW9kYWwtZm9vdGVyOmFmdGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuLmNsZWFyZml4OmFmdGVyLFxuLmRsLWhvcml6b250YWwgZGQ6YWZ0ZXIsXG4uY29udGFpbmVyOmFmdGVyLFxuLmNvbnRhaW5lci1mbHVpZDphZnRlcixcbi5yb3c6YWZ0ZXIsXG4uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyLFxuLmJ0bi10b29sYmFyOmFmdGVyLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6YWZ0ZXIsXG4ubmF2OmFmdGVyLFxuLm5hdmJhcjphZnRlcixcbi5uYXZiYXItaGVhZGVyOmFmdGVyLFxuLm5hdmJhci1jb2xsYXBzZTphZnRlcixcbi5wYWdlcjphZnRlcixcbi5wYW5lbC1ib2R5OmFmdGVyLFxuLm1vZGFsLWhlYWRlcjphZnRlcixcbi5tb2RhbC1mb290ZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5jZW50ZXItYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ucHVsbC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi50ZXh0LWhpZGUge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uYWZmaXgge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5ALW1zLXZpZXdwb3J0IHtcbiAgd2lkdGg6IGRldmljZS13aWR0aDtcbn1cbi52aXNpYmxlLXhzLFxuLnZpc2libGUtc20sXG4udmlzaWJsZS1tZCxcbi52aXNpYmxlLWxnIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnZpc2libGUteHMtYmxvY2ssXG4udmlzaWJsZS14cy1pbmxpbmUsXG4udmlzaWJsZS14cy1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1zbS1ibG9jayxcbi52aXNpYmxlLXNtLWlubGluZSxcbi52aXNpYmxlLXNtLWlubGluZS1ibG9jayxcbi52aXNpYmxlLW1kLWJsb2NrLFxuLnZpc2libGUtbWQtaW5saW5lLFxuLnZpc2libGUtbWQtaW5saW5lLWJsb2NrLFxuLnZpc2libGUtbGctYmxvY2ssXG4udmlzaWJsZS1sZy1pbmxpbmUsXG4udmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnZpc2libGUteHMge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUudmlzaWJsZS14cyB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICB0ci52aXNpYmxlLXhzIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICB0aC52aXNpYmxlLXhzLFxuICB0ZC52aXNpYmxlLXhzIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudmlzaWJsZS14cy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52aXNpYmxlLXhzLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudmlzaWJsZS14cy1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAudmlzaWJsZS1zbSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZS52aXNpYmxlLXNtIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIHRyLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIHRoLnZpc2libGUtc20sXG4gIHRkLnZpc2libGUtc20ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnZpc2libGUtc20tYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC52aXNpYmxlLXNtLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC52aXNpYmxlLXNtLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAudmlzaWJsZS1tZCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZS52aXNpYmxlLW1kIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIHRyLnZpc2libGUtbWQge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIHRoLnZpc2libGUtbWQsXG4gIHRkLnZpc2libGUtbWQge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC52aXNpYmxlLW1kLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLnZpc2libGUtbWQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC52aXNpYmxlLW1kLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnZpc2libGUtbGcge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUudmlzaWJsZS1sZyB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICB0ci52aXNpYmxlLWxnIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbiAgfVxuICB0aC52aXNpYmxlLWxnLFxuICB0ZC52aXNpYmxlLWxnIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnZpc2libGUtbGctYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnZpc2libGUtbGctaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhpZGRlbi14cyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGlkZGVuLXNtIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuaGlkZGVuLW1kIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhpZGRlbi1sZyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC52aXNpYmxlLXByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnZpc2libGUtcHJpbnQge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgdHIudmlzaWJsZS1wcmludCB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGgudmlzaWJsZS1wcmludCxcbiAgdGQudmlzaWJsZS1wcmludCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC52aXNpYmxlLXByaW50LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICAudmlzaWJsZS1wcmludC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgcHJpbnQge1xuICAudmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAuaGlkZGVuLXByaW50IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJvb3RzdHJhcC5jc3MubWFwICovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0= */\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "glyphicons-halflings-regular.eot";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "glyphicons-halflings-regular.woff2";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "glyphicons-halflings-regular.woff";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "glyphicons-halflings-regular.ttf";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "glyphicons-halflings-regular.svg";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "a,abbr,acronym,address,applet,article,aside,audio,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.sign-body .sign-body-bg{width:100%;height:100%;position:fixed;z-index:-10}.sign-body .sign-body-bg img{width:100%;height:100%;border:0}.sign-container{width:300px;height:300px;position:fixed;top:150px}.sign-container .sign-inner-container{border-radius:10px;color:#fff;font-size:14px}.sign-container .sign-inner-container h1{width:100%;height:50px;text-align:center;font-size:36px}.sign-container .sign-inner-container .sign-data .sign-data-own{margin-top:20px}.sign-container .sign-inner-container .sign-data button{background-color:#0293FE;color:#fff;border-color:#0293FE}.sign-container .sign-inner-container .sign-data .sign-forget-password,.sign-container .sign-inner-container .sign-data .sign-register{width:50%;text-align:center;cursor:pointer}.sign-container .sign-inner-container .sign-data .sign-forget-password a,.sign-container .sign-inner-container .sign-data .sign-register a{color:#fff!important}.sign-container .sign-inner-container .sign-data .sign-forget-password:hover,.sign-container .sign-inner-container .sign-data .sign-register:hover{color:#00b3ee}.sign-container .sign-inner-container .sign-data .sign-link{margin-top:10px}.sign-container .sign-inner-container .sign-data .sign-link p{float:left;width:50%;text-align:center}.sign-container .sign-inner-container .sign-data .sign-link .clear_float{clear:both}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW13b3JrL2ZyYW13b3JrLmxlc3MiLCJzdHlsZS5jc3MiLCJzaWduL3NpZ24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHb0IsRUFBSSxLQUFHLFFBQVksUUFEdkMsT0FNc0MsUUFBTyxNQUcxQixNQVJ5QixJQUFoQyxXQ0FaLEtETUEsT0FGa0MsUUFEUixPQUYxQixLQUFNLEtBRWdDLEdBRnZCLElBS1gsUUFMb0IsSUNBeEIsSURFOEIsR0FBSyxHQUZOLEdBS3JCLE1BRkEsU0FFZ0IsV0FBUCxPQUFlLE9BRnBCLEtBTEssR0FBTSxHQUFRLEdBQVEsR0FDdkMsR0FBSSxHQU1xQyxPQ1B6QyxLRElxQixFQUpULE9BRXVCLElBQU0sSUFDekMsSUFFZ0IsTUFBSSxPQUFoQixHQUlTLEtBRGIsS0FBUSxJQVJGLE9BSW1DLEdBSXJCLE9BUFosRUFBUSxJQUVYLEVBS3VCLEtBTG5CLEVBQUssS0FLc0IsUUFMakIsTUNBbkIsS0RBd0IsT0FBRyxPQUFHLElBTTlCLFFBTm9DLElBRVosTUFBZ0IsTUFDVCxHQUEvQixNQUF3QixHQUFoQixNQUdILEtBSFUsR0FGZixHQUFnQixFQUNoQixHQURRLElBS29CLE1BQVMsT0FBQSxFQUFNLFFBQUEsRUFBTSxPQUFBLEVBQy9DLEtBQUEsUUFDQSxlQUFBLFNDNEVGLFFBQ0EsTUFDQSxRQUNBLFdEdkVBLE9BQVMsT0FBTyxPQUFTLEtBQVksSUFBUSxRQUFRLFFBQUEsTUFBYyxHQUFLLEdBQ3RFLFdBQUEsS0FFRixXQUFJLEVBQ0YsT0FBQSxLQUVVLGlCQUFaLGtCQ3FGQSxRQURBLFNEakZBLFFBQVUsR0FBUyxRQUFVLEtBQWtCLE1BQzdDLGdCQUFBLFNBQ0EsZUFBQSxFQUVGLHlCQUNFLE1BQUEsS0FDQSxPQUFBLEtDdUZBLFNBQVUsTUN6SFosUUFDRSxJRDJIRiw2QkN4SEksTUFBQSxLQUNBLE9BQUEsS0QwSEYsT0FBUSxFQUVWLGdCQ3pITSxNQUFBLE1BQ0EsT0FBQSxNRDJISixTQUFVLE1DdkhaLElBQUEsTUQwSEEsc0NDdkhFLGNBQUEsS0FDQSxNQUFBLEtEeUhBLFVBQVcsS0FFYix5Q0N4SEksTUFBQSxLQUNBLE9BQUEsS0QwSEYsV0FBWSxPQ2xJZCxVQUFBLEtEcUlBLGdFQ3pITSxXQUFBLEtENEhOLHdEQ3hJQSxpQkFLRSxRQVlNLE1BQUEsS0QwSE4sYUFBYyxRQUVoQix1RUFDQSxnRUN2SFEsTUFBQSxJRHlITixXQUFZLE9DaEpkLE9BQUEsUURtSkEseUVBQ0Esa0VDeEhRLE1BQUEsZUE1QlIsNkVEMEpBLHNFQzFKQSxNQUFBLFFENkpBLDREQzdKQSxXQUFBLEtEZ0tBLDhEQ2hLQSxNQUFBLEtBd0NRLE1BQUEsSUQySE4sV0FBWSxPQUVkLHlFQzFIVSxNQUFBIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8v5byV5YWl5Y+Y6YePXHJcbkBpbXBvcnQgXCJ2YXJpYWJsZVwiO1xyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSxcclxuYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsXHJcbmRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLFxyXG5zdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLFxyXG5sZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0cixcclxudGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgbWVudSxcclxubmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiAtLS0tLS0tIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgLS0tLS0tLSAqL1xyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxub2wsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuIixudWxsLCIvL+W8leWFpeWPmOmHj1xyXG5AaW1wb3J0IFwidmFyaWFibGVcIjtcclxuLnNpZ24tYm9keXtcclxuICAuc2lnbi1ib2R5LWJne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDotMTA7XHJcbiAgICBpbWd7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICBib3JkZXI6MDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNpZ24tY29udGFpbmVye1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MTUwcHg7XHJcbiAgLnNpZ24taW5uZXItY29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XHJcbiAgICBoMXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IEBmb250LXNpemUtbGFyZ2UqMjtcclxuICAgIH1cclxuICAgIC5zaWduLWRhdGF7XHJcbiAgICAgIC5zaWduLWRhdGEtb3due1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXR7fVxyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyOTNGRTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMjkzRkU7XHJcbiAgICAgIH1cclxuICAgICAgLnNpZ24tZm9yZ2V0LXBhc3N3b3JkLC5zaWduLXJlZ2lzdGVye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNpZ24tZm9yZ2V0LXBhc3N3b3JkOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjMDBiM2VlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaWduLXJlZ2lzdGVyOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjMDBiM2VlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaWduLWxpbmt7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXJfZmxvYXR7XHJcbiAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0= */\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by DEV on 2016/6/21.
	 */
	var Jquery = $ = __webpack_require__(1);
	$("#find").click(function(){
	    var information = {
	        name:$("#name").val(),
	        password:$("#password").val(),
	        mobile:$("#mobile").val()
	    };

	    $.ajax({
	        type:"post",
	        url:"api/findOne",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            alert("成功发送信息!");
	            $("#subMessage").append(JSON.stringify(data));
	        },
	        error: function (data) {
	            alert("发送信息失败!");
	            $("#subMessage").append(JSON.stringify(data));
	        }
	    });

	});
	$("#add").click(function(){
	    var information = {
	        name:$("#name").val(),
	        password:$("#password").val(),
	        mobile:$("#mobile").val()
	    };

	    $.ajax({
	        type:"post",
	        url:"api/add",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            alert("成功发送信息!");
	            $("#subMessage").append(JSON.stringify(data));
	        },
	        error: function (data) {
	            alert("发送信息失败!");
	            $("#subMessage").append(JSON.stringify(data));
	        }
	    });

	});
	$("#delete").click(function(){
	    var information = {
	        name:$("#name").val(),
	        password:$("#password").val(),
	        mobile:$("#mobile").val()
	    };

	    $.ajax({
	        type:"post",
	        url:"api/delete",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            alert("成功发送信息!");
	            $("#subMessage").append(JSON.stringify(data));
	        },
	        error: function (data) {
	            alert("发送信息失败!");
	            $("#subMessage").append(JSON.stringify(data));
	        }
	    });

	});
	$("#update").click(function(){
	    var information = {
	        name:$("#name").val(),
	        password:$("#password").val(),
	        mobile:$("#mobile").val()
	    };

	    $.ajax({
	        type:"post",
	        url:"api/findOne",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            alert("成功发送信息!");
	            $("#subMessage").append(JSON.stringify(data));
	        },
	        error: function (data) {
	            alert("发送信息失败!");
	            $("#subMessage").append(JSON.stringify(data));
	        }
	    });

	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by DEV on 2016/6/21.
	 */
	/**
	 * Created by DEV on 2016/6/21.
	 */

	var Jquery = $ = __webpack_require__(1);

	$("html").on('click',"#sign_submit",function(){
	    var register_password =  $("#sign_password").val();
	    var card =  $("#sign_card").val();
	    var information = {
	        card:card,
	        password:register_password
	    };
	    //空判断
	    for(key in information){
	        if(!information[key]){
	            alert(key+"不能为空!");
	            return;
	        }
	    }
	    $.ajax({
	        type:"post",
	        url:"api/sign",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            if(data.status){
	                alert("登陆成功!");
	                window.location.href  = "/";
	            }else {
	                alert(data.result.errorInfo);
	            }

	        },
	        error: function (data) {
	            alert("登陆失败!");
	        }
	    });

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by DEV on 2016/6/21.
	 */

	var Jquery = $ = __webpack_require__(1);

	$("html").on('click',"#register_submit",function(){
	    var register_password =  $("#register_password").val();
	    var register_password_again =  $("#register_password_again").val();
	    var name =  $("#register_name").val();
	    var mobile =  $("#register_mobile").val();
	    var card =  $("#register_card").val();
	    if(!(register_password == register_password_again)){alert("两次密码输入不一致!");return;}
	    var information = {
	        name:name,
	        password:register_password_again,
	        mobile:mobile,
	        card:card
	    };
	    //空判断
	    for(key in information){
	        if(!information[key]){
	            alert(key+"不能为空!");
	            return;
	        }
	    }
	    $.ajax({
	        type:"post",
	        url:"api/register",
	        dataType:"json",
	        cache:false,
	        data:information,
	        success:function(data){
	            if(data.status){
	                alert("成功注册!");
	                location.href = "sign.html";
	            }else {
	                alert(data.result.errorInfo);
	            }

	        },
	        error: function (data) {
	            alert("注册失败!");
	        }
	    });

	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
/******/ ]);