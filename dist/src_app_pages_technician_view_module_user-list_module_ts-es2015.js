(self["webpackChunksmartlab"] = self["webpackChunksmartlab"] || []).push([["src_app_pages_technician_view_module_user-list_module_ts"],{

/***/ 55429:
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          console.log(dt.zone);
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ 1393:
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/check-overflow.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ checkOverflow; }
/* harmony export */ });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ 45559);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);




function checkOverflow(m) {
    var overflow,
        a = m._a;

    if (a && (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).overflow === -2) {
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH] > 11
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE] > (0,_units_month__WEBPACK_IMPORTED_MODULE_0__.daysInMonth)(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.YEAR], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MONTH])
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] < 0 ||
                  a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] > 24 ||
                  (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR] === 24 &&
                      (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] !== 0))
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.HOUR
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MINUTE
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.SECOND
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND] > 999
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__.MILLISECOND
                : -1;

        if (
            (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowDayOfYear &&
            (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__.YEAR || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE)
        ) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.DATE;
        }
        if ((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.WEEK;
        }
        if ((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY;
        }

        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).overflow = overflow;
    }

    return m;
}


/***/ }),

/***/ 12818:
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/date-from-array.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDate": function() { return /* binding */ createDate; },
/* harmony export */   "createUTCDate": function() { return /* binding */ createUTCDate; }
/* harmony export */ });
function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}


/***/ }),

/***/ 34290:
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-anything.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareConfig": function() { return /* binding */ prepareConfig; },
/* harmony export */   "createLocalOrUTC": function() { return /* binding */ createLocalOrUTC; }
/* harmony export */ });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ 34310);
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-object */ 89342);
/* harmony import */ var _utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object-empty */ 49061);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-undefined */ 71331);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-number */ 1005);
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-date */ 18658);
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/map */ 50532);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valid */ 55697);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/constructor */ 48237);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ 23319);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-overflow */ 1393);
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-string-and-array */ 74180);
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./from-string-and-format */ 29486);
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./from-string */ 43494);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./from-array */ 35167);
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-object */ 66264);




















function createFromConfig(config) {
    var res = new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__.Moment((0,_check_overflow__WEBPACK_IMPORTED_MODULE_11__.default)(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || (0,_locale_locales__WEBPACK_IMPORTED_MODULE_9__.getLocale)(config._l);

    if (input === null || (format === undefined && input === '')) {
        return (0,_valid__WEBPACK_IMPORTED_MODULE_7__.createInvalid)({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if ((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_8__.isMoment)(input)) {
        return new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__.Moment((0,_check_overflow__WEBPACK_IMPORTED_MODULE_11__.default)(input));
    } else if ((0,_utils_is_date__WEBPACK_IMPORTED_MODULE_5__.default)(input)) {
        config._d = input;
    } else if ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
        (0,_from_string_and_array__WEBPACK_IMPORTED_MODULE_12__.configFromStringAndArray)(config);
    } else if (format) {
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_13__.configFromStringAndFormat)(config);
    } else {
        configFromInput(config);
    }

    if (!(0,_valid__WEBPACK_IMPORTED_MODULE_7__.isValid)(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if ((0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__.default)(input)) {
        config._d = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_10__.hooks.now());
    } else if ((0,_utils_is_date__WEBPACK_IMPORTED_MODULE_5__.default)(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_14__.configFromString)(config);
    } else if ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(input)) {
        config._a = (0,_utils_map__WEBPACK_IMPORTED_MODULE_6__.default)(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        (0,_from_array__WEBPACK_IMPORTED_MODULE_15__.configFromArray)(config);
    } else if ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_1__.default)(input)) {
        (0,_from_object__WEBPACK_IMPORTED_MODULE_16__.configFromObject)(config);
    } else if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_10__.hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
        strict = format;
        format = undefined;
    }

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if (
        ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_1__.default)(input) && (0,_utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__.default)(input)) ||
        ((0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(input) && input.length === 0)
    ) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}


/***/ }),

/***/ 35167:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-array.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromArray": function() { return /* binding */ configFromArray; }
/* harmony export */ });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ 12818);
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/year */ 41607);
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/week-calendar-utils */ 65299);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/constants */ 45559);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local */ 24991);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/defaults */ 40303);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing-flags */ 86297);









function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.now());
    if (config._useUTC) {
        return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(),
        ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.DATE] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR]);

        if (
            config._dayOfYear > (0,_units_year__WEBPACK_IMPORTED_MODULE_2__.daysInYear)(yearToUse) ||
            config._dayOfYear === 0
        ) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowDayOfYear = true;
        }

        date = (0,_date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate)(yearToUse, 0, config._dayOfYear);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MONTH] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MINUTE] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.SECOND] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.MILLISECOND] === 0
    ) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] = 0;
    }

    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate : _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createDate).apply(
        null,
        input
    );
    expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.HOUR] = 24;
    }

    // check for mismatching day of week
    if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
    ) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(
            w.GG,
            config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR],
            (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weekOfYear)((0,_local__WEBPACK_IMPORTED_MODULE_5__.createLocal)(), 1, 4).year
        );
        week = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.W, 1);
        weekday = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        curWeek = (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weekOfYear)((0,_local__WEBPACK_IMPORTED_MODULE_5__.createLocal)(), dow, doy);

        weekYear = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR], curWeek.year);

        // Default to current week.
        week = (0,_utils_defaults__WEBPACK_IMPORTED_MODULE_6__.default)(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to beginning of week
            weekday = dow;
        }
    }
    if (week < 1 || week > (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.weeksInYear)(weekYear, dow, doy)) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_7__.default)(config)._overflowWeekday = true;
    } else {
        temp = (0,_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__.YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}


/***/ }),

/***/ 66264:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-object.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromObject": function() { return /* binding */ configFromObject; }
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ 35167);
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/map */ 50532);




function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = (0,_utils_map__WEBPACK_IMPORTED_MODULE_2__.default)(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    (0,_from_array__WEBPACK_IMPORTED_MODULE_1__.configFromArray)(config);
}


/***/ }),

/***/ 74180:
/*!*********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-array.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromStringAndArray": function() { return /* binding */ configFromStringAndArray; }
/* harmony export */ });
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/constructor */ 48237);
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-string-and-format */ 29486);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ 86297);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ 55697);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extend */ 43751);






// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false;

    if (config._f.length === 0) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_0__.copyConfig)({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_1__.configFromStringAndFormat)(tempConfig);

        if ((0,_valid__WEBPACK_IMPORTED_MODULE_3__.isValid)(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).charsLeftOver;

        //or tokens
        currentScore += (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).unusedTokens.length * 10;

        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    (0,_utils_extend__WEBPACK_IMPORTED_MODULE_4__.default)(config, bestMoment || tempConfig);
}


/***/ }),

/***/ 29486:
/*!**********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-format.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromStringAndFormat": function() { return /* binding */ configFromStringAndFormat; }
/* harmony export */ });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ 43494);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ 35167);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-overflow */ 1393);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ 45559);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ 86297);










// constant that refers to the ISO standard
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.ISO_8601) {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_0__.configFromISO)(config);
        return;
    }
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.RFC_2822) {
        (0,_from_string__WEBPACK_IMPORTED_MODULE_0__.configFromRFC2822)(config);
        return;
    }
    config._a = [];
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era;

    tokens =
        (0,_format_format__WEBPACK_IMPORTED_MODULE_4__.expandFormat)(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_4__.formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match((0,_parse_regex__WEBPACK_IMPORTED_MODULE_2__.getParseRegexForToken)(token, config)) ||
            [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedInput.push(skipped);
            }
            string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_4__.formatTokenFunctions[token]) {
            if (parsedInput) {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).empty = false;
            } else {
                (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedTokens.push(token);
            }
            (0,_parse_token__WEBPACK_IMPORTED_MODULE_3__.addTimeToArrayFromToken)(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).charsLeftOver =
        stringLength - totalParsedInputLength;
    if (string.length > 0) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] <= 12 &&
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] > 0
    ) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).bigHour = undefined;
    }

    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).parsedDateParts = config._a.slice(0);
    (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = meridiemFixWrap(
        config._locale,
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR],
        config._meridiem
    );

    // handle era
    era = (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_8__.default)(config).era;
    if (era !== null) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR] = config._locale.erasConvertYear(era, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__.YEAR]);
    }

    (0,_from_array__WEBPACK_IMPORTED_MODULE_1__.configFromArray)(config);
    (0,_check_overflow__WEBPACK_IMPORTED_MODULE_5__.default)(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}


/***/ }),

/***/ 43494:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configFromISO": function() { return /* binding */ configFromISO; },
/* harmony export */   "configFromRFC2822": function() { return /* binding */ configFromRFC2822; },
/* harmony export */   "configFromString": function() { return /* binding */ configFromString; }
/* harmony export */ });
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string-and-format */ 29486);
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ 12818);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 78760);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing-flags */ 86297);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/day-of-week */ 16753);








// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, false],
        ['YYYY', /\d{4}/, false],
    ],
    // iso time formats and regexes
    isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

// date from iso format
function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        (0,_from_string_and_format__WEBPACK_IMPORTED_MODULE_0__.configFromStringAndFormat)(config);
    } else {
        config._isValid = false;
    }
}

function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr
) {
    var result = [
        untruncateYear(yearStr),
        _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__.defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2]
            ).getDay();
        if (weekdayProvided !== weekdayActual) {
            (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
    if (match) {
        parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        (0,_parsing_flags__WEBPACK_IMPORTED_MODULE_4__.default)(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    if (config._strict) {
        config._isValid = false;
    } else {
        // Final attempt, use Input Fallback
        _utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.createFromInputFallback(config);
    }
}

_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.createFromInputFallback = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);


/***/ }),

/***/ 24991:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/local.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocal": function() { return /* binding */ createLocal; }
/* harmony export */ });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ 34290);


function createLocal(input, format, locale, strict) {
    return (0,_from_anything__WEBPACK_IMPORTED_MODULE_0__.createLocalOrUTC)(input, format, locale, strict, false);
}


/***/ }),

/***/ 86297:
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/parsing-flags.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getParsingFlags; }
/* harmony export */ });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}


/***/ }),

/***/ 91254:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/create/utc.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUTC": function() { return /* binding */ createUTC; }
/* harmony export */ });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ 34290);


function createUTC(input, format, locale, strict) {
    return (0,_from_anything__WEBPACK_IMPORTED_MODULE_0__.createLocalOrUTC)(input, format, locale, strict, true).utc();
}


/***/ }),

/***/ 55697:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/valid.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": function() { return /* binding */ isValid; },
/* harmony export */   "createInvalid": function() { return /* binding */ createInvalid; }
/* harmony export */ });
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ 43751);
/* harmony import */ var _utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utc */ 91254);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);
/* harmony import */ var _utils_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/some */ 89270);





function isValid(m) {
    if (m._isValid == null) {
        var flags = (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m),
            parsedParts = _utils_some__WEBPACK_IMPORTED_MODULE_3__.default.call(flags.parsedDateParts, function (i) {
                return i != null;
            }),
            isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = (0,_utc__WEBPACK_IMPORTED_MODULE_1__.createUTC)(NaN);
    if (flags != null) {
        (0,_utils_extend__WEBPACK_IMPORTED_MODULE_0__.default)((0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m), flags);
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(m).userInvalidated = true;
    }

    return m;
}


/***/ }),

/***/ 19889:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/abs.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": function() { return /* binding */ abs; }
/* harmony export */ });
var mathAbs = Math.abs;

function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
}


/***/ }),

/***/ 19620:
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/add-subtract.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "subtract": function() { return /* binding */ subtract; }
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 21506);


function addSubtract(duration, input, value, direction) {
    var other = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add(input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract(input, value) {
    return addSubtract(this, input, value, -1);
}


/***/ }),

/***/ 65194:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/as.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "as": function() { return /* binding */ as; },
/* harmony export */   "valueOf": function() { return /* binding */ valueOf; },
/* harmony export */   "asMilliseconds": function() { return /* binding */ asMilliseconds; },
/* harmony export */   "asSeconds": function() { return /* binding */ asSeconds; },
/* harmony export */   "asMinutes": function() { return /* binding */ asMinutes; },
/* harmony export */   "asHours": function() { return /* binding */ asHours; },
/* harmony export */   "asDays": function() { return /* binding */ asDays; },
/* harmony export */   "asWeeks": function() { return /* binding */ asWeeks; },
/* harmony export */   "asMonths": function() { return /* binding */ asMonths; },
/* harmony export */   "asQuarters": function() { return /* binding */ asQuarters; },
/* harmony export */   "asYears": function() { return /* binding */ asYears; }
/* harmony export */ });
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ 80058);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 28079);




function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days,
        months,
        milliseconds = this._milliseconds;

    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + (0,_bubble__WEBPACK_IMPORTED_MODULE_0__.daysToMonths)(days);
        switch (units) {
            case 'month':
                return months;
            case 'quarter':
                return months / 3;
            case 'year':
                return months / 12;
        }
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round((0,_bubble__WEBPACK_IMPORTED_MODULE_0__.monthsToDays)(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(this._months / 12) * 31536e6
    );
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');




/***/ }),

/***/ 80058:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/bubble.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubble": function() { return /* binding */ bubble; },
/* harmony export */   "daysToMonths": function() { return /* binding */ daysToMonths; },
/* harmony export */   "monthsToDays": function() { return /* binding */ monthsToDays; }
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 39363);
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ 62266);



function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += (0,_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__.default)(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(seconds / 60);
    data.minutes = minutes % 60;

    hours = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(minutes / 60);
    data.hours = hours % 24;

    days += (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(hours / 24);

    // convert days to months
    monthsFromDays = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(daysToMonths(days));
    months += monthsFromDays;
    days -= (0,_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__.default)(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}


/***/ }),

/***/ 96540:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/clone.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": function() { return /* binding */ clone; }
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 21506);


function clone() {
    return (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(this);
}


/***/ }),

/***/ 88625:
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/constructor.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Duration": function() { return /* binding */ Duration; },
/* harmony export */   "isDuration": function() { return /* binding */ isDuration; }
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ 23319);
/* harmony import */ var _valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid.js */ 44654);




function Duration(duration) {
    var normalizedInput = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = (0,_valid_js__WEBPACK_IMPORTED_MODULE_2__.default)(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = (0,_locale_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)();

    this._bubble();
}

function isDuration(obj) {
    return obj instanceof Duration;
}


/***/ }),

/***/ 21506:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/create.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDuration": function() { return /* binding */ createDuration; }
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 88625);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ 1005);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/abs-round */ 1410);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/constants */ 45559);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/offset */ 45708);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid */ 44654);










// ASP.NET json date format regex
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months,
        };
    } else if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_1__.default)(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
            duration[key] = +input;
        } else {
            duration.milliseconds = +input;
        }
    } else if ((match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.DATE]) * sign,
            h: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.HOUR]) * sign,
            m: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.MINUTE]) * sign,
            s: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.SECOND]) * sign,
            ms: (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)((0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_3__.default)(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__.MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
    } else if ((match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign),
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
    ) {
        diffRes = momentsDifference(
            (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(duration.from),
            (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(duration.to)
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration(duration);

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input) && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__.default)(input, '_locale')) {
        ret._locale = input._locale;
    }

    if ((0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isDuration)(input) && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__.default)(input, '_isValid')) {
        ret._isValid = input._isValid;
    }

    return ret;
}

createDuration.fn = _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration.prototype;
createDuration.invalid = _valid__WEBPACK_IMPORTED_MODULE_8__.createInvalid;

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = (0,_units_offset__WEBPACK_IMPORTED_MODULE_6__.cloneWithOffset)(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}


/***/ }),

/***/ 46477:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/duration.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDuration": function() { return /* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_1__.createDuration; },
/* harmony export */   "isDuration": function() { return /* reexport safe */ _constructor__WEBPACK_IMPORTED_MODULE_2__.isDuration; },
/* harmony export */   "getSetRelativeTimeRounding": function() { return /* reexport safe */ _humanize__WEBPACK_IMPORTED_MODULE_3__.getSetRelativeTimeRounding; },
/* harmony export */   "getSetRelativeTimeThreshold": function() { return /* reexport safe */ _humanize__WEBPACK_IMPORTED_MODULE_3__.getSetRelativeTimeThreshold; }
/* harmony export */ });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 86347);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ 21506);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ 88625);
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanize */ 12142);
// Side effect imports









/***/ }),

/***/ 31273:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/get.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "milliseconds": function() { return /* binding */ milliseconds; },
/* harmony export */   "seconds": function() { return /* binding */ seconds; },
/* harmony export */   "minutes": function() { return /* binding */ minutes; },
/* harmony export */   "hours": function() { return /* binding */ hours; },
/* harmony export */   "days": function() { return /* binding */ days; },
/* harmony export */   "months": function() { return /* binding */ months; },
/* harmony export */   "years": function() { return /* binding */ years; },
/* harmony export */   "weeks": function() { return /* binding */ weeks; }
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-floor */ 39363);



function get(units) {
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');



function weeks() {
    return (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__.default)(this.days() / 7);
}


/***/ }),

/***/ 12142:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/humanize.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetRelativeTimeRounding": function() { return /* binding */ getSetRelativeTimeRounding; },
/* harmony export */   "getSetRelativeTimeThreshold": function() { return /* binding */ getSetRelativeTimeThreshold; },
/* harmony export */   "humanize": function() { return /* binding */ humanize; }
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 21506);


var round = Math.round,
    thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month/week
        w: null, // weeks to month
        M: 11, // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = (0,_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        weeks = round(duration.as('w')),
        years = round(duration.as('y')),
        a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
        a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var withSuffix = false,
        th = thresholds,
        locale,
        output;

    if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
        }
    }

    locale = this.localeData();
    output = relativeTime(this, !withSuffix, th, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}


/***/ }),

/***/ 15923:
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/iso-string.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toISOString": function() { return /* binding */ toISOString; }
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 39363);

var abs = Math.abs;

function sign(x) {
    return (x > 0) - (x < 0) || +x;
}

function toISOString() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs(this._milliseconds) / 1000,
        days = abs(this._days),
        months = abs(this._months),
        minutes,
        hours,
        years,
        s,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(seconds / 60);
    hours = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
        totalSign +
        'P' +
        (years ? ymSign + years + 'Y' : '') +
        (months ? ymSign + months + 'M' : '') +
        (days ? daysSign + days + 'D' : '') +
        (hours || minutes || seconds ? 'T' : '') +
        (hours ? hmsSign + hours + 'H' : '') +
        (minutes ? hmsSign + minutes + 'M' : '') +
        (seconds ? hmsSign + s + 'S' : '')
    );
}


/***/ }),

/***/ 86347:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/prototype.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 88625);
/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abs */ 19889);
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subtract */ 19620);
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as */ 65194);
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble */ 80058);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ 96540);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ 31273);
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanize */ 12142);
/* harmony import */ var _iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iso-string */ 15923);
/* harmony import */ var _moment_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moment/locale */ 84141);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valid */ 44654);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecate */ 78760);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Duration.prototype;












proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_10__.isValid;
proto.abs = _abs__WEBPACK_IMPORTED_MODULE_1__.abs;
proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_2__.add;
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_2__.subtract;
proto.as = _as__WEBPACK_IMPORTED_MODULE_3__.as;
proto.asMilliseconds = _as__WEBPACK_IMPORTED_MODULE_3__.asMilliseconds;
proto.asSeconds = _as__WEBPACK_IMPORTED_MODULE_3__.asSeconds;
proto.asMinutes = _as__WEBPACK_IMPORTED_MODULE_3__.asMinutes;
proto.asHours = _as__WEBPACK_IMPORTED_MODULE_3__.asHours;
proto.asDays = _as__WEBPACK_IMPORTED_MODULE_3__.asDays;
proto.asWeeks = _as__WEBPACK_IMPORTED_MODULE_3__.asWeeks;
proto.asMonths = _as__WEBPACK_IMPORTED_MODULE_3__.asMonths;
proto.asQuarters = _as__WEBPACK_IMPORTED_MODULE_3__.asQuarters;
proto.asYears = _as__WEBPACK_IMPORTED_MODULE_3__.asYears;
proto.valueOf = _as__WEBPACK_IMPORTED_MODULE_3__.valueOf;
proto._bubble = _bubble__WEBPACK_IMPORTED_MODULE_4__.bubble;
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_5__.clone;
proto.get = _get__WEBPACK_IMPORTED_MODULE_6__.get;
proto.milliseconds = _get__WEBPACK_IMPORTED_MODULE_6__.milliseconds;
proto.seconds = _get__WEBPACK_IMPORTED_MODULE_6__.seconds;
proto.minutes = _get__WEBPACK_IMPORTED_MODULE_6__.minutes;
proto.hours = _get__WEBPACK_IMPORTED_MODULE_6__.hours;
proto.days = _get__WEBPACK_IMPORTED_MODULE_6__.days;
proto.weeks = _get__WEBPACK_IMPORTED_MODULE_6__.weeks;
proto.months = _get__WEBPACK_IMPORTED_MODULE_6__.months;
proto.years = _get__WEBPACK_IMPORTED_MODULE_6__.years;
proto.humanize = _humanize__WEBPACK_IMPORTED_MODULE_7__.humanize;
proto.toISOString = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.toString = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.toJSON = _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString;
proto.locale = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.locale;
proto.localeData = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.localeData;

// Deprecations


proto.toIsoString = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_11__.deprecate)(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    _iso_string__WEBPACK_IMPORTED_MODULE_8__.toISOString
);
proto.lang = _moment_locale__WEBPACK_IMPORTED_MODULE_9__.lang;


/***/ }),

/***/ 44654:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/valid.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isDurationValid; },
/* harmony export */   "isValid": function() { return /* binding */ isValid; },
/* harmony export */   "createInvalid": function() { return /* binding */ createInvalid; }
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index-of */ 55845);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ 21506);





var ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
];

function isDurationValid(m) {
    var key,
        unitHasDecimal = false,
        i;
    for (key in m) {
        if (
            (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(m, key) &&
            !(
                _utils_index_of__WEBPACK_IMPORTED_MODULE_2__.default.call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
            )
        ) {
            return false;
        }
    }

    for (i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_1__.default)(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return (0,_create__WEBPACK_IMPORTED_MODULE_3__.createDuration)(NaN);
}


/***/ }),

/***/ 67758:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/format/format.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formattingTokens": function() { return /* binding */ formattingTokens; },
/* harmony export */   "formatTokenFunctions": function() { return /* binding */ formatTokenFunctions; },
/* harmony export */   "addFormatToken": function() { return /* binding */ addFormatToken; },
/* harmony export */   "formatMoment": function() { return /* binding */ formatMoment; },
/* harmony export */   "expandFormat": function() { return /* binding */ expandFormat; }
/* harmony export */ });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ 33762);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ 79808);



var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};



// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(
                func.apply(this, arguments),
                token
            );
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '',
            i;
        for (i = 0; i < length; i++) {
            output += (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_1__.default)(array[i])
                ? array[i].call(mom, format)
                : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}


/***/ }),

/***/ 59527:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/base-config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseConfig": function() { return /* binding */ baseConfig; }
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ 58533);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats */ 22730);
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid */ 3234);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ 3326);
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative */ 31074);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/week */ 7279);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/day-of-week */ 16753);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/hour */ 15671);






// months


// week


// weekdays


// meridiem


var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_0__.defaultCalendar,
    longDateFormat: _formats__WEBPACK_IMPORTED_MODULE_1__.defaultLongDateFormat,
    invalidDate: _invalid__WEBPACK_IMPORTED_MODULE_2__.defaultInvalidDate,
    ordinal: _ordinal__WEBPACK_IMPORTED_MODULE_3__.defaultOrdinal,
    dayOfMonthOrdinalParse: _ordinal__WEBPACK_IMPORTED_MODULE_3__.defaultDayOfMonthOrdinalParse,
    relativeTime: _relative__WEBPACK_IMPORTED_MODULE_4__.defaultRelativeTime,

    months: _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonths,
    monthsShort: _units_month__WEBPACK_IMPORTED_MODULE_5__.defaultLocaleMonthsShort,

    week: _units_week__WEBPACK_IMPORTED_MODULE_6__.defaultLocaleWeek,

    weekdays: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdays,
    weekdaysMin: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdaysMin,
    weekdaysShort: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__.defaultLocaleWeekdaysShort,

    meridiemParse: _units_hour__WEBPACK_IMPORTED_MODULE_8__.defaultLocaleMeridiemParse,
};


/***/ }),

/***/ 58533:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/calendar.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCalendar": function() { return /* binding */ defaultCalendar; },
/* harmony export */   "calendar": function() { return /* binding */ calendar; }
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 79808);
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};



function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(output) ? output.call(mom, now) : output;
}


/***/ }),

/***/ 36450:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/constructor.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Locale": function() { return /* binding */ Locale; }
/* harmony export */ });
function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}


/***/ }),

/***/ 1037:
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/en.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 10966);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 23319);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 28079);




(0,_locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale)('en', {
    eras: [
        {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
        },
        {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
        },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                    ? 'st'
                    : b === 2
                    ? 'nd'
                    : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
    },
});


/***/ }),

/***/ 22730:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/formats.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLongDateFormat": function() { return /* binding */ defaultLongDateFormat; },
/* harmony export */   "longDateFormat": function() { return /* binding */ longDateFormat; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);


var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
};

function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper
        .match(_format_format__WEBPACK_IMPORTED_MODULE_0__.formattingTokens)
        .map(function (tok) {
            if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
            ) {
                return tok.slice(1);
            }
            return tok;
        })
        .join('');

    return this._longDateFormat[key];
}


/***/ }),

/***/ 3234:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/invalid.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultInvalidDate": function() { return /* binding */ defaultInvalidDate; },
/* harmony export */   "invalidDate": function() { return /* binding */ invalidDate; }
/* harmony export */ });
var defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}


/***/ }),

/***/ 63362:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/lists.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listMonths": function() { return /* binding */ listMonths; },
/* harmony export */   "listMonthsShort": function() { return /* binding */ listMonthsShort; },
/* harmony export */   "listWeekdays": function() { return /* binding */ listWeekdays; },
/* harmony export */   "listWeekdaysShort": function() { return /* binding */ listWeekdaysShort; },
/* harmony export */   "listWeekdaysMin": function() { return /* binding */ listWeekdaysMin; }
/* harmony export */ });
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-number */ 1005);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 23319);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/utc */ 91254);




function get(format, index, field, setter) {
    var locale = (0,_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)(),
        utc = (0,_create_utc__WEBPACK_IMPORTED_MODULE_2__.createUTC)().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_0__.default)(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = (0,_locales__WEBPACK_IMPORTED_MODULE_1__.getLocale)(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}


/***/ }),

/***/ 20259:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locale.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetGlobalLocale": function() { return /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale; },
/* harmony export */   "defineLocale": function() { return /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.defineLocale; },
/* harmony export */   "updateLocale": function() { return /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.updateLocale; },
/* harmony export */   "getLocale": function() { return /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.getLocale; },
/* harmony export */   "listLocales": function() { return /* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_1__.listLocales; },
/* harmony export */   "listMonths": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listMonths; },
/* harmony export */   "listMonthsShort": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listMonthsShort; },
/* harmony export */   "listWeekdays": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdays; },
/* harmony export */   "listWeekdaysShort": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdaysShort; },
/* harmony export */   "listWeekdaysMin": function() { return /* reexport safe */ _lists__WEBPACK_IMPORTED_MODULE_2__.listWeekdaysMin; }
/* harmony export */ });
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 10966);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 23319);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ 63362);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 78760);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en */ 1037);
// Side effect imports











_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.lang = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'moment.lang is deprecated. Use moment.locale instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__.getSetGlobalLocale
);
_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.langData = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecate)(
    'moment.langData is deprecated. Use moment.localeData instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__.getLocale
);




/***/ }),

/***/ 23319:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locales.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetGlobalLocale": function() { return /* binding */ getSetGlobalLocale; },
/* harmony export */   "defineLocale": function() { return /* binding */ defineLocale; },
/* harmony export */   "updateLocale": function() { return /* binding */ updateLocale; },
/* harmony export */   "getLocale": function() { return /* binding */ getLocale; },
/* harmony export */   "listLocales": function() { return /* binding */ listLocales; }
/* harmony export */ });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ 34310);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ 71331);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deprecate */ 78760);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set */ 27802);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor */ 36450);
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keys */ 38879);
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-config */ 59527);
/* module decorator */ module = __webpack_require__.hmd(module);









// internal storage for locale config files
var locales = {},
    localeFamilies = {},
    globalLocale;

function commonPrefix(arr1, arr2) {
    var i,
        minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return i;
        }
    }
    return minl;
}

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
            ) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null,
        aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
        locales[name] === undefined &&
        "object" !== 'undefined' &&
        module &&
        module.exports
    ) {
        try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if ((0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(values)) {
            data = getLocale(key);
        } else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                    'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale(name, config) {
    if (config !== null) {
        var locale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__.baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_2__.deprecateSimple)(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            );
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                    });
                    return null;
                }
            }
        }
        locales[name] = new _constructor__WEBPACK_IMPORTED_MODULE_4__.Locale((0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__.baseConfig;

        if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set((0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(locales[name]._config, config));
        } else {
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = (0,_set__WEBPACK_IMPORTED_MODULE_3__.mergeConfigs)(parentConfig, config);
            if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
            }
            locale = new _constructor__WEBPACK_IMPORTED_MODULE_4__.Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
        }

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                    getSetGlobalLocale(name);
                }
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!(0,_utils_is_array__WEBPACK_IMPORTED_MODULE_0__.default)(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return (0,_utils_keys__WEBPACK_IMPORTED_MODULE_5__.default)(locales);
}


/***/ }),

/***/ 3326:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/ordinal.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultOrdinal": function() { return /* binding */ defaultOrdinal; },
/* harmony export */   "defaultDayOfMonthOrdinalParse": function() { return /* binding */ defaultDayOfMonthOrdinalParse; },
/* harmony export */   "ordinal": function() { return /* binding */ ordinal; }
/* harmony export */ });
var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;



function ordinal(number) {
    return this._ordinal.replace('%d', number);
}


/***/ }),

/***/ 22216:
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/pre-post-format.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preParsePostFormat": function() { return /* binding */ preParsePostFormat; }
/* harmony export */ });
function preParsePostFormat(string) {
    return string;
}


/***/ }),

/***/ 10966:
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/prototype.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 36450);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ 58533);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats */ 22730);
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid */ 3234);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ 3326);
/* harmony import */ var _pre_post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-post-format */ 22216);
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relative */ 31074);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ 27802);
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/era */ 23197);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/week */ 7279);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ 16753);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/hour */ 15671);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Locale.prototype;









proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_1__.calendar;
proto.longDateFormat = _formats__WEBPACK_IMPORTED_MODULE_2__.longDateFormat;
proto.invalidDate = _invalid__WEBPACK_IMPORTED_MODULE_3__.invalidDate;
proto.ordinal = _ordinal__WEBPACK_IMPORTED_MODULE_4__.ordinal;
proto.preparse = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__.preParsePostFormat;
proto.postformat = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__.preParsePostFormat;
proto.relativeTime = _relative__WEBPACK_IMPORTED_MODULE_6__.relativeTime;
proto.pastFuture = _relative__WEBPACK_IMPORTED_MODULE_6__.pastFuture;
proto.set = _set__WEBPACK_IMPORTED_MODULE_7__.set;

// Eras

proto.eras = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeEras;
proto.erasParse = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeErasParse;
proto.erasConvertYear = _units_era__WEBPACK_IMPORTED_MODULE_8__.localeErasConvertYear;
proto.erasAbbrRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasAbbrRegex;
proto.erasNameRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasNameRegex;
proto.erasNarrowRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__.erasNarrowRegex;

// Month


proto.months = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonths;
proto.monthsShort = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonthsShort;
proto.monthsParse = _units_month__WEBPACK_IMPORTED_MODULE_9__.localeMonthsParse;
proto.monthsRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__.monthsRegex;
proto.monthsShortRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__.monthsShortRegex;

// Week

proto.week = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeWeek;
proto.firstDayOfYear = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeFirstDayOfYear;
proto.firstDayOfWeek = _units_week__WEBPACK_IMPORTED_MODULE_10__.localeFirstDayOfWeek;

// Day of Week


proto.weekdays = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdays;
proto.weekdaysMin = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysMin;
proto.weekdaysShort = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysShort;
proto.weekdaysParse = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.localeWeekdaysParse;

proto.weekdaysRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysRegex;
proto.weekdaysShortRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysShortRegex;
proto.weekdaysMinRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__.weekdaysMinRegex;

// Hours


proto.isPM = _units_hour__WEBPACK_IMPORTED_MODULE_12__.localeIsPM;
proto.meridiem = _units_hour__WEBPACK_IMPORTED_MODULE_12__.localeMeridiem;


/***/ }),

/***/ 31074:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/relative.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRelativeTime": function() { return /* binding */ defaultRelativeTime; },
/* harmony export */   "relativeTime": function() { return /* binding */ relativeTime; },
/* harmony export */   "pastFuture": function() { return /* binding */ pastFuture; }
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 79808);
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
};



function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(format) ? format(output) : format.replace(/%s/i, output);
}


/***/ }),

/***/ 27802:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/set.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "mergeConfigs": function() { return /* binding */ mergeConfigs; }
/* harmony export */ });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 79808);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ 43751);
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object */ 89342);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);





function set(config) {
    var prop, i;
    for (i in config) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(config, i)) {
            prop = config[i];
            if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_0__.default)(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
    );
}

function mergeConfigs(parentConfig, childConfig) {
    var res = (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(childConfig, prop)) {
            if ((0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(parentConfig[prop]) && (0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(childConfig[prop])) {
                res[prop] = {};
                (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)(res[prop], parentConfig[prop]);
                (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (
            (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(parentConfig, prop) &&
            !(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__.default)(childConfig, prop) &&
            (0,_utils_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(parentConfig[prop])
        ) {
            // make sure changes to properties don't modify parent config
            res[prop] = (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, res[prop]);
        }
    }
    return res;
}


/***/ }),

/***/ 8488:
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/add-subtract.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSubtract": function() { return /* binding */ addSubtract; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "subtract": function() { return /* binding */ subtract; }
/* harmony export */ });
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set */ 40749);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration/create */ 21506);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 78760);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abs-round */ 1410);







// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__.deprecateSimple)(
                name,
                'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            );
            tmp = val;
            val = period;
            period = tmp;
        }

        dur = (0,_duration_create__WEBPACK_IMPORTED_MODULE_2__.createDuration)(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = (0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__.default)(duration._days),
        months = (0,_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__.default)(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        (0,_units_month__WEBPACK_IMPORTED_MODULE_1__.setMonth)(mom, (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(mom, 'Month') + months * isAdding);
    }
    if (days) {
        (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.set)(mom, 'Date', (0,_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks.updateOffset(mom, days || months);
    }
}

var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');


/***/ }),

/***/ 58329:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/calendar.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCalendarFormat": function() { return /* binding */ getCalendarFormat; },
/* harmony export */   "calendar": function() { return /* binding */ calendar; }
/* harmony export */ });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ 45708);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ 79808);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-moment-input */ 38615);
/* harmony import */ var _utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-calendar-spec */ 66741);







function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6
        ? 'sameElse'
        : diff < -1
        ? 'lastWeek'
        : diff < 0
        ? 'lastDay'
        : diff < 1
        ? 'sameDay'
        : diff < 2
        ? 'nextDay'
        : diff < 7
        ? 'nextWeek'
        : 'sameElse';
}

function calendar(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
        if ((0,_utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__.isMomentInput)(arguments[0])) {
            time = arguments[0];
            formats = undefined;
        } else if ((0,_utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__.default)(arguments[0])) {
            formats = arguments[0];
            time = undefined;
        }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(),
        sod = (0,_units_offset__WEBPACK_IMPORTED_MODULE_1__.cloneWithOffset)(now, this).startOf('day'),
        format = _utils_hooks__WEBPACK_IMPORTED_MODULE_3__.hooks.calendarFormat(this, sod) || 'sameElse',
        output =
            formats &&
            ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_2__.default)(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

    return this.format(
        output || this.localeData().calendar(format, this, (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(now))
    );
}


/***/ }),

/***/ 37114:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/clone.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clone": function() { return /* binding */ clone; }
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 48237);


function clone() {
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__.Moment(this);
}


/***/ }),

/***/ 65947:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/compare.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAfter": function() { return /* binding */ isAfter; },
/* harmony export */   "isBefore": function() { return /* binding */ isBefore; },
/* harmony export */   "isBetween": function() { return /* binding */ isBetween; },
/* harmony export */   "isSame": function() { return /* binding */ isSame; },
/* harmony export */   "isSameOrAfter": function() { return /* binding */ isSameOrAfter; },
/* harmony export */   "isSameOrBefore": function() { return /* binding */ isSameOrBefore; }
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 48237);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ 24991);




function isAfter(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    var localFrom = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(from) ? from : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(from),
        localTo = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(to) ? to : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
    }
    inclusivity = inclusivity || '()';
    return (
        (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
    );
}

function isSame(input, units) {
    var localInput = (0,_constructor__WEBPACK_IMPORTED_MODULE_0__.isMoment)(input) ? input : (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_1__.normalizeUnits)(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
        );
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}


/***/ }),

/***/ 48237:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/constructor.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyConfig": function() { return /* binding */ copyConfig; },
/* harmony export */   "Moment": function() { return /* binding */ Moment; },
/* harmony export */   "isMoment": function() { return /* binding */ isMoment; }
/* harmony export */ });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ 71331);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);




// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = (_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.momentProperties = []),
    updateInProgress = false;

function copyConfig(to, from) {
    var i, prop, val;

    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._i)) {
        to._i = from._i;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._f)) {
        to._f = from._f;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._l)) {
        to._l = from._l;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._strict)) {
        to._strict = from._strict;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._offset)) {
        to._offset = from._offset;
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._pf)) {
        to._pf = (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(from);
    }
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__.default)(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
}


/***/ }),

/***/ 98215:
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/creation-data.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creationData": function() { return /* binding */ creationData; }
/* harmony export */ });
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
    };
}


/***/ }),

/***/ 44860:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/diff.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diff": function() { return /* binding */ diff; }
/* harmony export */ });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 39363);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ 45708);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/aliases */ 67406);




function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = (0,_units_offset__WEBPACK_IMPORTED_MODULE_1__.cloneWithOffset)(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_2__.normalizeUnits)(units);

    switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1e3;
            break; // 1000
        case 'minute':
            output = (this - that) / 6e4;
            break; // 1000 * 60
        case 'hour':
            output = (this - that) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = this - that;
    }

    return asFloat ? output : (0,_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(output);
}

function monthDiff(a, b) {
    if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}


/***/ }),

/***/ 31814:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/format.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": function() { return /* binding */ toString; },
/* harmony export */   "toISOString": function() { return /* binding */ toISOString; },
/* harmony export */   "inspect": function() { return /* binding */ inspect; },
/* harmony export */   "format": function() { return /* binding */ format; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ 79808);




_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true,
        m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(
            m,
            utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }
    if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_2__.default)(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(m, 'Z'));
        }
    }
    return (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
    );
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
        zone = '',
        prefix,
        year,
        datetime,
        suffix;
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc()
            ? _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormatUtc
            : _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.defaultFormat;
    }
    var output = (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.formatMoment)(this, inputString);
    return this.localeData().postformat(output);
}


/***/ }),

/***/ 40722:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/from.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": function() { return /* binding */ from; },
/* harmony export */   "fromNow": function() { return /* binding */ fromNow; }
/* harmony export */ });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ 21506);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ 48237);




function from(time, withoutSuffix) {
    if (
        this.isValid() &&
        (((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_2__.isMoment)(time) && time.isValid()) || (0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(time).isValid())
    ) {
        return (0,_duration_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from((0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(), withoutSuffix);
}


/***/ }),

/***/ 40749:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/get-set.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGetSet": function() { return /* binding */ makeGetSet; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "stringGet": function() { return /* binding */ stringGet; },
/* harmony export */   "stringSet": function() { return /* binding */ stringSet; }
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _units_priorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/priorities */ 55944);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-function */ 79808);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-leap-year */ 99205);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 28079);








function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _utils_hooks__WEBPACK_IMPORTED_MODULE_2__.hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (
            unit === 'FullYear' &&
            (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__.isLeapYear)(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
        ) {
            value = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(value);
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                (0,_units_month__WEBPACK_IMPORTED_MODULE_4__.daysInMonth)(value, mom.month())
            );
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_3__.default)(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if (typeof units === 'object') {
        units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeObjectUnits)(units);
        var prioritized = (0,_units_priorities__WEBPACK_IMPORTED_MODULE_1__.getPrioritizedUnits)(units),
            i;
        for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
        if ((0,_utils_is_function__WEBPACK_IMPORTED_MODULE_3__.default)(this[units])) {
            return this[units](value);
        }
    }
    return this;
}


/***/ }),

/***/ 84141:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/locale.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": function() { return /* binding */ locale; },
/* harmony export */   "lang": function() { return /* binding */ lang; },
/* harmony export */   "localeData": function() { return /* binding */ localeData; }
/* harmony export */ });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ 23319);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deprecate */ 78760);



// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = (0,_locale_locales__WEBPACK_IMPORTED_MODULE_0__.getLocale)(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_1__.deprecate)(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData() {
    return this._locale;
}


/***/ }),

/***/ 75686:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/min-max.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prototypeMin": function() { return /* binding */ prototypeMin; },
/* harmony export */   "prototypeMax": function() { return /* binding */ prototypeMax; },
/* harmony export */   "min": function() { return /* binding */ min; },
/* harmony export */   "max": function() { return /* binding */ max; }
/* harmony export */ });
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deprecate */ 78760);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-array */ 34310);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/valid */ 55697);





var prototypeMin = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return (0,_create_valid__WEBPACK_IMPORTED_MODULE_3__.createInvalid)();
            }
        }
    ),
    prototypeMax = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return (0,_create_valid__WEBPACK_IMPORTED_MODULE_3__.createInvalid)();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_1__.default)(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return (0,_create_local__WEBPACK_IMPORTED_MODULE_2__.createLocal)();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}


/***/ }),

/***/ 34620:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/moment.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": function() { return /* reexport safe */ _now__WEBPACK_IMPORTED_MODULE_5__.now; },
/* harmony export */   "min": function() { return /* reexport safe */ _min_max__WEBPACK_IMPORTED_MODULE_4__.min; },
/* harmony export */   "max": function() { return /* reexport safe */ _min_max__WEBPACK_IMPORTED_MODULE_4__.max; },
/* harmony export */   "isMoment": function() { return /* reexport safe */ _constructor__WEBPACK_IMPORTED_MODULE_3__.isMoment; },
/* harmony export */   "createUTC": function() { return /* reexport safe */ _create_utc__WEBPACK_IMPORTED_MODULE_1__.createUTC; },
/* harmony export */   "createUnix": function() { return /* binding */ createUnix; },
/* harmony export */   "createLocal": function() { return /* reexport safe */ _create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal; },
/* harmony export */   "createInZone": function() { return /* binding */ createInZone; },
/* harmony export */   "createInvalid": function() { return /* reexport safe */ _create_valid__WEBPACK_IMPORTED_MODULE_2__.createInvalid; },
/* harmony export */   "momentPrototype": function() { return /* reexport safe */ _prototype__WEBPACK_IMPORTED_MODULE_6__.default; }
/* harmony export */ });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/utc */ 91254);
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/valid */ 55697);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor */ 48237);
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-max */ 75686);
/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./now */ 87504);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ 81087);








function createUnix(input) {
    return (0,_create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal)(input * 1000);
}

function createInZone() {
    return _create_local__WEBPACK_IMPORTED_MODULE_0__.createLocal.apply(null, arguments).parseZone();
}




/***/ }),

/***/ 87504:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/now.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "now": function() { return /* binding */ now; }
/* harmony export */ });
var now = function () {
    return Date.now ? Date.now() : +new Date();
};


/***/ }),

/***/ 81087:
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/prototype.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 48237);
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subtract */ 8488);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ 58329);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ 37114);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare */ 65947);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diff */ 44860);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format */ 31814);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from */ 40722);
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to */ 86029);
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-set */ 40749);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ 84141);
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./min-max */ 75686);
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-end-of */ 84705);
/* harmony import */ var _to_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-type */ 37743);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./valid */ 28138);
/* harmony import */ var _creation_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./creation-data */ 98215);
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/era */ 23197);
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/year */ 41607);
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../units/week-year */ 87184);
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../units/quarter */ 22699);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../units/month */ 22648);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../units/week */ 7279);
/* harmony import */ var _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../units/day-of-month */ 99705);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../units/day-of-week */ 16753);
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../units/day-of-year */ 58824);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../units/hour */ 15671);
/* harmony import */ var _units_minute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../units/minute */ 38917);
/* harmony import */ var _units_second__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/second */ 95567);
/* harmony import */ var _units_millisecond__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../units/millisecond */ 77815);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../units/offset */ 45708);
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../units/timezone */ 51642);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/deprecate */ 78760);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__.Moment.prototype;

















proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_1__.add;
proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_2__.calendar;
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_3__.clone;
proto.diff = _diff__WEBPACK_IMPORTED_MODULE_5__.diff;
proto.endOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__.endOf;
proto.format = _format__WEBPACK_IMPORTED_MODULE_6__.format;
proto.from = _from__WEBPACK_IMPORTED_MODULE_7__.from;
proto.fromNow = _from__WEBPACK_IMPORTED_MODULE_7__.fromNow;
proto.to = _to__WEBPACK_IMPORTED_MODULE_8__.to;
proto.toNow = _to__WEBPACK_IMPORTED_MODULE_8__.toNow;
proto.get = _get_set__WEBPACK_IMPORTED_MODULE_9__.stringGet;
proto.invalidAt = _valid__WEBPACK_IMPORTED_MODULE_14__.invalidAt;
proto.isAfter = _compare__WEBPACK_IMPORTED_MODULE_4__.isAfter;
proto.isBefore = _compare__WEBPACK_IMPORTED_MODULE_4__.isBefore;
proto.isBetween = _compare__WEBPACK_IMPORTED_MODULE_4__.isBetween;
proto.isSame = _compare__WEBPACK_IMPORTED_MODULE_4__.isSame;
proto.isSameOrAfter = _compare__WEBPACK_IMPORTED_MODULE_4__.isSameOrAfter;
proto.isSameOrBefore = _compare__WEBPACK_IMPORTED_MODULE_4__.isSameOrBefore;
proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_14__.isValid;
proto.lang = _locale__WEBPACK_IMPORTED_MODULE_10__.lang;
proto.locale = _locale__WEBPACK_IMPORTED_MODULE_10__.locale;
proto.localeData = _locale__WEBPACK_IMPORTED_MODULE_10__.localeData;
proto.max = _min_max__WEBPACK_IMPORTED_MODULE_11__.prototypeMax;
proto.min = _min_max__WEBPACK_IMPORTED_MODULE_11__.prototypeMin;
proto.parsingFlags = _valid__WEBPACK_IMPORTED_MODULE_14__.parsingFlags;
proto.set = _get_set__WEBPACK_IMPORTED_MODULE_9__.stringSet;
proto.startOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__.startOf;
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_1__.subtract;
proto.toArray = _to_type__WEBPACK_IMPORTED_MODULE_13__.toArray;
proto.toObject = _to_type__WEBPACK_IMPORTED_MODULE_13__.toObject;
proto.toDate = _to_type__WEBPACK_IMPORTED_MODULE_13__.toDate;
proto.toISOString = _format__WEBPACK_IMPORTED_MODULE_6__.toISOString;
proto.inspect = _format__WEBPACK_IMPORTED_MODULE_6__.inspect;
if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
    };
}
proto.toJSON = _to_type__WEBPACK_IMPORTED_MODULE_13__.toJSON;
proto.toString = _format__WEBPACK_IMPORTED_MODULE_6__.toString;
proto.unix = _to_type__WEBPACK_IMPORTED_MODULE_13__.unix;
proto.valueOf = _to_type__WEBPACK_IMPORTED_MODULE_13__.valueOf;
proto.creationData = _creation_data__WEBPACK_IMPORTED_MODULE_15__.creationData;

// Era

proto.eraName = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraName;
proto.eraNarrow = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraNarrow;
proto.eraAbbr = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraAbbr;
proto.eraYear = _units_era__WEBPACK_IMPORTED_MODULE_16__.getEraYear;

// Year

proto.year = _units_year__WEBPACK_IMPORTED_MODULE_17__.getSetYear;
proto.isLeapYear = _units_year__WEBPACK_IMPORTED_MODULE_17__.getIsLeapYear;

// Week Year

proto.weekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getSetWeekYear;
proto.isoWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getSetISOWeekYear;

// Quarter

proto.quarter = proto.quarters = _units_quarter__WEBPACK_IMPORTED_MODULE_19__.getSetQuarter;

// Month

proto.month = _units_month__WEBPACK_IMPORTED_MODULE_20__.getSetMonth;
proto.daysInMonth = _units_month__WEBPACK_IMPORTED_MODULE_20__.getDaysInMonth;

// Week

proto.week = proto.weeks = _units_week__WEBPACK_IMPORTED_MODULE_21__.getSetWeek;
proto.isoWeek = proto.isoWeeks = _units_week__WEBPACK_IMPORTED_MODULE_21__.getSetISOWeek;
proto.weeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getWeeksInYear;
proto.weeksInWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getWeeksInWeekYear;
proto.isoWeeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__.getISOWeeksInISOWeekYear;

// Day



proto.date = _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__.getSetDayOfMonth;
proto.day = proto.days = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetDayOfWeek;
proto.weekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetLocaleDayOfWeek;
proto.isoWeekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__.getSetISODayOfWeek;
proto.dayOfYear = _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__.getSetDayOfYear;

// Hour

proto.hour = proto.hours = _units_hour__WEBPACK_IMPORTED_MODULE_25__.getSetHour;

// Minute

proto.minute = proto.minutes = _units_minute__WEBPACK_IMPORTED_MODULE_26__.getSetMinute;

// Second

proto.second = proto.seconds = _units_second__WEBPACK_IMPORTED_MODULE_27__.getSetSecond;

// Millisecond

proto.millisecond = proto.milliseconds = _units_millisecond__WEBPACK_IMPORTED_MODULE_28__.getSetMillisecond;

// Offset

proto.utcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.getSetOffset;
proto.utc = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToUTC;
proto.local = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToLocal;
proto.parseZone = _units_offset__WEBPACK_IMPORTED_MODULE_29__.setOffsetToParsedOffset;
proto.hasAlignedHourOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.hasAlignedHourOffset;
proto.isDST = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isDaylightSavingTime;
proto.isLocal = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isLocal;
proto.isUtcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtcOffset;
proto.isUtc = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtc;
proto.isUTC = _units_offset__WEBPACK_IMPORTED_MODULE_29__.isUtc;

// Timezone

proto.zoneAbbr = _units_timezone__WEBPACK_IMPORTED_MODULE_30__.getZoneAbbr;
proto.zoneName = _units_timezone__WEBPACK_IMPORTED_MODULE_30__.getZoneName;

// Deprecations

proto.dates = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'dates accessor is deprecated. Use date instead.',
    _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__.getSetDayOfMonth
);
proto.months = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'months accessor is deprecated. Use month instead',
    _units_month__WEBPACK_IMPORTED_MODULE_20__.getSetMonth
);
proto.years = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'years accessor is deprecated. Use year instead',
    _units_year__WEBPACK_IMPORTED_MODULE_17__.getSetYear
);
proto.zone = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__.getSetZone
);
proto.isDSTShifted = (0,_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__.deprecate)(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__.isDaylightSavingTimeShifted
);

/* harmony default export */ __webpack_exports__["default"] = (proto);


/***/ }),

/***/ 84705:
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/start-end-of.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startOf": function() { return /* binding */ startOf; },
/* harmony export */   "endOf": function() { return /* binding */ endOf; }
/* harmony export */ });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 67406);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ 77920);



var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

function startOf(units) {
    var time, startOfDate;
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.updateOffset(this, true);
    return this;
}

function endOf(units) {
    var time, startOfDate;
    units = (0,_units_aliases__WEBPACK_IMPORTED_MODULE_0__.normalizeUnits)(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.updateOffset(this, true);
    return this;
}


/***/ }),

/***/ 37743:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to-type.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueOf": function() { return /* binding */ valueOf; },
/* harmony export */   "unix": function() { return /* binding */ unix; },
/* harmony export */   "toDate": function() { return /* binding */ toDate; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "toObject": function() { return /* binding */ toObject; },
/* harmony export */   "toJSON": function() { return /* binding */ toJSON; }
/* harmony export */ });
function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
    return Math.floor(this.valueOf() / 1000);
}

function toDate() {
    return new Date(this.valueOf());
}

function toArray() {
    var m = this;
    return [
        m.year(),
        m.month(),
        m.date(),
        m.hour(),
        m.minute(),
        m.second(),
        m.millisecond(),
    ];
}

function toObject() {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds(),
    };
}

function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}


/***/ }),

/***/ 86029:
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "to": function() { return /* binding */ to; },
/* harmony export */   "toNow": function() { return /* binding */ toNow; }
/* harmony export */ });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ 21506);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ 48237);




function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        (((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_2__.isMoment)(time) && time.isValid()) || (0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(time).isValid())
    ) {
        return (0,_duration_create__WEBPACK_IMPORTED_MODULE_0__.createDuration)({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to((0,_create_local__WEBPACK_IMPORTED_MODULE_1__.createLocal)(), withoutSuffix);
}


/***/ }),

/***/ 28138:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/valid.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": function() { return /* binding */ isValid; },
/* harmony export */   "parsingFlags": function() { return /* binding */ parsingFlags; },
/* harmony export */   "invalidAt": function() { return /* binding */ invalidAt; }
/* harmony export */ });
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/valid */ 55697);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ 43751);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);




function isValid() {
    return (0,_create_valid__WEBPACK_IMPORTED_MODULE_0__.isValid)(this);
}

function parsingFlags() {
    return (0,_utils_extend__WEBPACK_IMPORTED_MODULE_1__.default)({}, (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(this));
}

function invalidAt() {
    return (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__.default)(this).overflow;
}


/***/ }),

/***/ 9974:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/regex.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match1": function() { return /* binding */ match1; },
/* harmony export */   "match2": function() { return /* binding */ match2; },
/* harmony export */   "match3": function() { return /* binding */ match3; },
/* harmony export */   "match4": function() { return /* binding */ match4; },
/* harmony export */   "match6": function() { return /* binding */ match6; },
/* harmony export */   "match1to2": function() { return /* binding */ match1to2; },
/* harmony export */   "match3to4": function() { return /* binding */ match3to4; },
/* harmony export */   "match5to6": function() { return /* binding */ match5to6; },
/* harmony export */   "match1to3": function() { return /* binding */ match1to3; },
/* harmony export */   "match1to4": function() { return /* binding */ match1to4; },
/* harmony export */   "match1to6": function() { return /* binding */ match1to6; },
/* harmony export */   "matchUnsigned": function() { return /* binding */ matchUnsigned; },
/* harmony export */   "matchSigned": function() { return /* binding */ matchSigned; },
/* harmony export */   "matchOffset": function() { return /* binding */ matchOffset; },
/* harmony export */   "matchShortOffset": function() { return /* binding */ matchShortOffset; },
/* harmony export */   "matchTimestamp": function() { return /* binding */ matchTimestamp; },
/* harmony export */   "matchWord": function() { return /* binding */ matchWord; },
/* harmony export */   "addRegexToken": function() { return /* binding */ addRegexToken; },
/* harmony export */   "getParseRegexForToken": function() { return /* binding */ getParseRegexForToken; },
/* harmony export */   "regexEscape": function() { return /* binding */ regexEscape; }
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ 79808);
var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;






regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = (0,_utils_is_function__WEBPACK_IMPORTED_MODULE_1__.default)(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

function getParseRegexForToken(token, config) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                matched,
                p1,
                p2,
                p3,
                p4
            ) {
                return p1 || p2 || p3 || p4;
            })
    );
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}


/***/ }),

/***/ 17451:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/token.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addParseToken": function() { return /* binding */ addParseToken; },
/* harmony export */   "addWeekParseToken": function() { return /* binding */ addWeekParseToken; },
/* harmony export */   "addTimeToArrayFromToken": function() { return /* binding */ addTimeToArrayFromToken; }
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ 1005);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 28079);




var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if ((0,_utils_is_number__WEBPACK_IMPORTED_MODULE_1__.default)(callback)) {
        func = function (input, array) {
            array[callback] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_2__.default)(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && (0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}


/***/ }),

/***/ 67406:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/aliases.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnitAlias": function() { return /* binding */ addUnitAlias; },
/* harmony export */   "normalizeUnits": function() { return /* binding */ normalizeUnits; },
/* harmony export */   "normalizeObjectUnits": function() { return /* binding */ normalizeObjectUnits; }
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);


var aliases = {};

function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}


/***/ }),

/***/ 45559:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/constants.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YEAR": function() { return /* binding */ YEAR; },
/* harmony export */   "MONTH": function() { return /* binding */ MONTH; },
/* harmony export */   "DATE": function() { return /* binding */ DATE; },
/* harmony export */   "HOUR": function() { return /* binding */ HOUR; },
/* harmony export */   "MINUTE": function() { return /* binding */ MINUTE; },
/* harmony export */   "SECOND": function() { return /* binding */ SECOND; },
/* harmony export */   "MILLISECOND": function() { return /* binding */ MILLISECOND; },
/* harmony export */   "WEEK": function() { return /* binding */ WEEK; },
/* harmony export */   "WEEKDAY": function() { return /* binding */ WEEKDAY; }
/* harmony export */ });
var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;


/***/ }),

/***/ 99705:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-month.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetDayOfMonth": function() { return /* binding */ getSetDayOfMonth; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 28079);









// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('D', ['DD', 2], 'Do', 'date');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('date', 'D');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('date', 9);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('D', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_6__.DATE);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Do', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.DATE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Date', true);


/***/ }),

/***/ 16753:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-week.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLocaleWeekdays": function() { return /* binding */ defaultLocaleWeekdays; },
/* harmony export */   "defaultLocaleWeekdaysShort": function() { return /* binding */ defaultLocaleWeekdaysShort; },
/* harmony export */   "defaultLocaleWeekdaysMin": function() { return /* binding */ defaultLocaleWeekdaysMin; },
/* harmony export */   "localeWeekdays": function() { return /* binding */ localeWeekdays; },
/* harmony export */   "localeWeekdaysShort": function() { return /* binding */ localeWeekdaysShort; },
/* harmony export */   "localeWeekdaysMin": function() { return /* binding */ localeWeekdaysMin; },
/* harmony export */   "localeWeekdaysParse": function() { return /* binding */ localeWeekdaysParse; },
/* harmony export */   "getSetDayOfWeek": function() { return /* binding */ getSetDayOfWeek; },
/* harmony export */   "getSetLocaleDayOfWeek": function() { return /* binding */ getSetLocaleDayOfWeek; },
/* harmony export */   "getSetISODayOfWeek": function() { return /* binding */ getSetISODayOfWeek; },
/* harmony export */   "weekdaysRegex": function() { return /* binding */ weekdaysRegex; },
/* harmony export */   "weekdaysShortRegex": function() { return /* binding */ weekdaysShortRegex; },
/* harmony export */   "weekdaysMinRegex": function() { return /* binding */ weekdaysMinRegex; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-array */ 34310);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/index-of */ 55845);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ 91254);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);












// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('d', 0, 'do', 'day');

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('e', 0, 0, 'weekday');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('E', 0, 0, 'isoWeekday');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('day', 'd');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('weekday', 'e');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeekday', 'E');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('day', 11);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('weekday', 11);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeekday', 11);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('d', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('e', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('E', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__.default)(config).invalidWeekday = input;
    }
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES
function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord,
    defaultWeekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord,
    defaultWeekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchWord;



function localeWeekdays(m, format) {
    var weekdays = (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_6__.default)(this._weekdays)
        ? this._weekdays
        : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
          ];
    return m === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m
        ? weekdays[m.day()]
        : weekdays;
}

function localeWeekdaysShort(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
}

function localeWeekdaysMin(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ''
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
        }
        if (!this._weekdaysParse[i]) {
            regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex;
    }
}

function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex;
    }
}

function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__.default)(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)([2000, 1]).day(i);
        minp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdaysMin(mom, ''));
        shortp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdaysShort(mom, ''));
        longp = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.regexEscape)(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
    this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ 58824:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-year.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetDayOfYear": function() { return /* binding */ getSetDayOfYear; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 28079);







// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('dayOfYear', 'DDD');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('dayOfYear', 4);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to3);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match3);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addParseToken)(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear(input) {
    var dayOfYear =
        Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}


/***/ }),

/***/ 23197:
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/units/era.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeEras": function() { return /* binding */ localeEras; },
/* harmony export */   "localeErasParse": function() { return /* binding */ localeErasParse; },
/* harmony export */   "localeErasConvertYear": function() { return /* binding */ localeErasConvertYear; },
/* harmony export */   "getEraName": function() { return /* binding */ getEraName; },
/* harmony export */   "getEraNarrow": function() { return /* binding */ getEraNarrow; },
/* harmony export */   "getEraAbbr": function() { return /* binding */ getEraAbbr; },
/* harmony export */   "getEraYear": function() { return /* binding */ getEraYear; },
/* harmony export */   "erasNameRegex": function() { return /* binding */ erasNameRegex; },
/* harmony export */   "erasAbbrRegex": function() { return /* binding */ erasAbbrRegex; },
/* harmony export */   "erasNarrowRegex": function() { return /* binding */ erasNarrowRegex; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locales */ 23319);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);









(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('N', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NN', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNN', 0, 0, 'eraAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNNN', 0, 0, 'eraName');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('NNNNN', 0, 0, 'eraNarrow');

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['y', 1], 'yo', 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yy', 2], 0, 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yyy', 3], 0, 'eraYear');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('y', ['yyyy', 4], 0, 'eraYear');

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('N', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NN', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNN', matchEraAbbr);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNNN', matchEraName);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('NNNNN', matchEraNarrow);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
    input,
    array,
    config,
    token
) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__.default)(config).era = era;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__.default)(config).invalidEra = input;
    }
});

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('y', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yyyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('yo', matchEraYearOrdinal);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['y', 'yy', 'yyy', 'yyyy'], _constants__WEBPACK_IMPORTED_MODULE_3__.YEAR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__.YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__.YEAR] = parseInt(input, 10);
    }
});

function localeEras(m, format) {
    var i,
        l,
        date,
        eras = this._eras || (0,_locale_locales__WEBPACK_IMPORTED_MODULE_5__.getLocale)('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
            case 'string':
                // truncate time
                date = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
        }

        switch (typeof eras[i].until) {
            case 'undefined':
                eras[i].until = +Infinity;
                break;
            case 'string':
                // truncate time
                date = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
        }
    }
    return eras;
}

function localeErasParse(eraName, format, strict) {
    var i,
        l,
        eras = this.eras(),
        name,
        abbr,
        narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
            switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNN':
                    if (name === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNNN':
                    if (narrow === eraName) {
                        return eras[i];
                    }
                    break;
            }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
        }
    }
}

function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
        return (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(era.since).year();
    } else {
        return (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(era.since).year() + (year - era.offset) * dir;
    }
}

function getEraName() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
        }
    }

    return '';
}

function getEraNarrow() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
        }
    }

    return '';
}

function getEraAbbr() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
        }
    }

    return '';
}

function getEraYear() {
    var i,
        l,
        dir,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1;

        // truncate time
        val = this.startOf('day').valueOf();

        if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
        ) {
            return (
                (this.year() - (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.hooks)(eras[i].since).year()) * dir +
                eras[i].offset
            );
        }
    }

    return this.year();
}

function erasNameRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasNameRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
}

function erasAbbrRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
}

function erasNarrowRegex(isStrict) {
    if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__.default)(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
}

function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
}

function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
}

function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
}

function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchUnsigned;
}

function computeErasParse() {
    var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i,
        l,
        eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].name));
        abbrPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].abbr));
        narrowPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].narrow));

        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].name));
        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].abbr));
        mixedPieces.push((0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.regexEscape)(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
        '^(' + narrowPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ 15671:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/hour.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeIsPM": function() { return /* binding */ localeIsPM; },
/* harmony export */   "defaultLocaleMeridiemParse": function() { return /* binding */ defaultLocaleMeridiemParse; },
/* harmony export */   "getSetHour": function() { return /* binding */ getSetHour; },
/* harmony export */   "localeMeridiem": function() { return /* binding */ localeMeridiem; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/zero-fill */ 33762);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);











// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('H', ['HH', 2], 0, 'hour');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('h', ['hh', 2], 0, hFormat);
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('k', ['kk', 2], 0, kFormat);

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('hmmss', 0, 0, function () {
    return (
        '' +
        hFormat.apply(this) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.seconds(), 2)
    );
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Hmm', 0, 0, function () {
    return '' + this.hours() + (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Hmmss', 0, 0, function () {
    return (
        '' +
        this.hours() +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.minutes(), 2) +
        (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__.default)(this.seconds(), 2)
    );
});

function meridiem(token, lowercase) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(token, 0, 0, function () {
        return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
        );
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('hour', 'h');

// PRIORITY
(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('a', matchMeridiem);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('A', matchMeridiem);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('H', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('h', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('k', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3to4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match5to6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3to4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match5to6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_6__.HOUR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['k', 'kk'], function (input, array, config) {
    var kInput = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = kInput === 24 ? 0 : kInput;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input);
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos));
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.SECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos2));
    (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__.default)(config).bigHour = true;
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos));
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.HOUR] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.SECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Hours', true);

function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


/***/ }),

/***/ 77815:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/millisecond.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetMillisecond": function() { return /* binding */ getSetMillisecond; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 28079);









// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSS', 3], 0, 'millisecond');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('millisecond', 'ms');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('millisecond', 16);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('S', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to3, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match3);

var token, getSetMillisecond;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    (0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)(token, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.matchUnsigned);
}

function parseMs(input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__.MILLISECOND] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_7__.default)(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    (0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(token, parseMs);
}

getSetMillisecond = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Milliseconds', false);




/***/ }),

/***/ 38917:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/minute.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetMinute": function() { return /* binding */ getSetMinute; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 45559);








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('m', ['mm', 2], 0, 'minute');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('minute', 'm');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('minute', 14);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('m', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_6__.MINUTE);

// MOMENTS

var getSetMinute = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Minutes', false);


/***/ }),

/***/ 22648:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/month.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInMonth": function() { return /* binding */ daysInMonth; },
/* harmony export */   "defaultLocaleMonths": function() { return /* binding */ defaultLocaleMonths; },
/* harmony export */   "defaultLocaleMonthsShort": function() { return /* binding */ defaultLocaleMonthsShort; },
/* harmony export */   "localeMonths": function() { return /* binding */ localeMonths; },
/* harmony export */   "localeMonthsShort": function() { return /* binding */ localeMonthsShort; },
/* harmony export */   "localeMonthsParse": function() { return /* binding */ localeMonthsParse; },
/* harmony export */   "setMonth": function() { return /* binding */ setMonth; },
/* harmony export */   "getSetMonth": function() { return /* binding */ getSetMonth; },
/* harmony export */   "getDaysInMonth": function() { return /* binding */ getDaysInMonth; },
/* harmony export */   "monthsShortRegex": function() { return /* binding */ monthsShortRegex; },
/* harmony export */   "monthsRegex": function() { return /* binding */ monthsRegex; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-array */ 34310);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-number */ 1005);
/* harmony import */ var _utils_mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mod */ 91157);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/index-of */ 55845);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create/utc */ 91254);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../create/parsing-flags */ 86297);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/is-leap-year */ 99205);


















function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = (0,_utils_mod__WEBPACK_IMPORTED_MODULE_12__.default)(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
        ? (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__.isLeapYear)(year)
            ? 29
            : 28
        : 31 - ((modMonth % 7) % 2);
}

// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_2__.addFormatToken)('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_3__.addUnitAlias)('month', 'M');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_4__.addUnitPriority)('month', 8);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('M', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_5__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['M', 'MM'], function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.MONTH] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) - 1;
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_8__.MONTH] = month;
    } else {
        (0,_create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__.default)(config).invalidMonth = input;
    }
});

// LOCALES

var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
        '_'
    ),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchWord,
    defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchWord;



function localeMonths(m, format) {
    if (!m) {
        return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._months)
            ? this._months
            : this._months['standalone'];
    }
    return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._months)
        ? this._months[m.month()]
        : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
          ][m.month()];
}

function localeMonthsShort(m, format) {
    if (!m) {
        return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone'];
    }
    return (0,_utils_is_array__WEBPACK_IMPORTED_MODULE_10__.default)(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__.default.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i'
            );
            this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i'
            );
        }
        if (!strict && !this._monthsParse[i]) {
            regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!(0,_utils_is_number__WEBPACK_IMPORTED_MODULE_11__.default)(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth(value) {
    if (value != null) {
        setMonth(this, value);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.updateOffset(this, true);
        return this;
    } else {
        return (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.get)(this, 'Month');
    }
}

function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
}

function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
    }
}

function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!(0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex;
    }
}

function computeMonthsParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = (0,_create_utc__WEBPACK_IMPORTED_MODULE_14__.createUTC)([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(shortPieces[i]);
        longPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = (0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.regexEscape)(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
}


/***/ }),

/***/ 45708:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/offset.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneWithOffset": function() { return /* binding */ cloneWithOffset; },
/* harmony export */   "getSetOffset": function() { return /* binding */ getSetOffset; },
/* harmony export */   "getSetZone": function() { return /* binding */ getSetZone; },
/* harmony export */   "setOffsetToUTC": function() { return /* binding */ setOffsetToUTC; },
/* harmony export */   "setOffsetToLocal": function() { return /* binding */ setOffsetToLocal; },
/* harmony export */   "setOffsetToParsedOffset": function() { return /* binding */ setOffsetToParsedOffset; },
/* harmony export */   "hasAlignedHourOffset": function() { return /* binding */ hasAlignedHourOffset; },
/* harmony export */   "isDaylightSavingTime": function() { return /* binding */ isDaylightSavingTime; },
/* harmony export */   "isDaylightSavingTimeShifted": function() { return /* binding */ isDaylightSavingTimeShifted; },
/* harmony export */   "isLocal": function() { return /* binding */ isLocal; },
/* harmony export */   "isUtcOffset": function() { return /* binding */ isUtcOffset; },
/* harmony export */   "isUtc": function() { return /* binding */ isUtc; }
/* harmony export */ });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ 33762);
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../duration/create */ 21506);
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/add-subtract */ 8488);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moment/constructor */ 48237);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ 24991);
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/from-anything */ 34290);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ 91254);
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-date */ 18658);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-undefined */ 71331);
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/compare-arrays */ 40180);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks */ 77920);
















// FORMATTING

function offset(token, separator) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_4__.addFormatToken)(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return (
            sign +
            (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(~~(offset / 60), 2) +
            separator +
            (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__.default)(~~offset % 60, 2)
        );
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_5__.addRegexToken)('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_6__.addParseToken)(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
        chunk,
        parts,
        minutes;

    if (matches === null) {
        return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_11__.default)(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff =
            ((0,_moment_constructor__WEBPACK_IMPORTED_MODULE_3__.isMoment)(input) || (0,_utils_is_date__WEBPACK_IMPORTED_MODULE_10__.default)(input)
                ? input.valueOf()
                : (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset(res, false);
        return res;
    } else {
        return (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).local();
    }
}

function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
_utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                (0,_moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__.addSubtract)(
                    this,
                    (0,_duration_create__WEBPACK_IMPORTED_MODULE_1__.createDuration)(input - offset, 'm'),
                    1,
                    false
                );
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                _utils_hooks__WEBPACK_IMPORTED_MODULE_14__.hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone(input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset() {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__.matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        } else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted() {
    if (!(0,_utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__.default)(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {},
        other;

    (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_3__.copyConfig)(c, this);
    c = (0,_create_from_anything__WEBPACK_IMPORTED_MODULE_8__.prepareConfig)(c);

    if (c._a) {
        other = c._isUTC ? (0,_create_utc__WEBPACK_IMPORTED_MODULE_9__.createUTC)(c._a) : (0,_create_local__WEBPACK_IMPORTED_MODULE_7__.createLocal)(c._a);
        this._isDSTShifted =
            this.isValid() && (0,_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__.default)(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal() {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
}

function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}


/***/ }),

/***/ 55944:
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/priorities.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUnitPriority": function() { return /* binding */ addUnitPriority; },
/* harmony export */   "getPrioritizedUnits": function() { return /* binding */ getPrioritizedUnits; }
/* harmony export */ });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 58306);


var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [],
        u;
    for (u in unitsObj) {
        if ((0,_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
        }
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}


/***/ }),

/***/ 22699:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/quarter.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetQuarter": function() { return /* binding */ getSetQuarter; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 28079);








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('Q', 0, 'Qo', 'quarter');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('quarter', 'Q');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('quarter', 7);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addParseToken)('Q', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__.MONTH] = ((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
}


/***/ }),

/***/ 95567:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/second.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetSecond": function() { return /* binding */ getSetSecond; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 45559);








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('s', ['ss', 2], 0, 'second');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('second', 's');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('second', 15);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('s', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_6__.SECOND);

// MOMENTS

var getSetSecond = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('Seconds', false);


/***/ }),

/***/ 62173:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timestamp.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/to-int */ 28079);





// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('X', 0, 0, 'unix');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('x', 0, 0, 'valueOf');

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('x', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_1__.addRegexToken)('X', _parse_regex__WEBPACK_IMPORTED_MODULE_1__.matchTimestamp);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_2__.addParseToken)('x', function (input, array, config) {
    config._d = new Date((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_3__.default)(input));
});


/***/ }),

/***/ 51642:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timezone.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getZoneAbbr": function() { return /* binding */ getZoneAbbr; },
/* harmony export */   "getZoneName": function() { return /* binding */ getZoneName; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);


// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('z', 0, 0, 'zoneAbbr');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}


/***/ }),

/***/ 82411:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/units.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeUnits": function() { return /* reexport safe */ _aliases__WEBPACK_IMPORTED_MODULE_15__.normalizeUnits; }
/* harmony export */ });
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-of-month */ 99705);
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-of-week */ 16753);
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ 58824);
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour */ 15671);
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond */ 77815);
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minute */ 38917);
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month */ 22648);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offset */ 45708);
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quarter */ 22699);
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second */ 95567);
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ 62173);
/* harmony import */ var _timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timezone */ 51642);
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./week-year */ 87184);
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week */ 7279);
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year */ 41607);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aliases */ 67406);
// Side effect imports





















/***/ }),

/***/ 65299:
/*!******************************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-calendar-utils.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dayOfYearFromWeeks": function() { return /* binding */ dayOfYearFromWeeks; },
/* harmony export */   "weekOfYear": function() { return /* binding */ weekOfYear; },
/* harmony export */   "weeksInYear": function() { return /* binding */ weeksInYear; }
/* harmony export */ });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ 41607);
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/date-from-array */ 12818);



// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + (0,_create_date_from_array__WEBPACK_IMPORTED_MODULE_1__.createUTCDate)(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(resYear) + dayOfYear;
    } else if (dayOfYear > (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - (0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear,
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear,
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return ((0,_year__WEBPACK_IMPORTED_MODULE_0__.daysInYear)(year) - weekOffset + weekOffsetNext) / 7;
}


/***/ }),

/***/ 87184:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-year.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSetWeekYear": function() { return /* binding */ getSetWeekYear; },
/* harmony export */   "getSetISOWeekYear": function() { return /* binding */ getSetISOWeekYear; },
/* harmony export */   "getISOWeeksInYear": function() { return /* binding */ getISOWeeksInYear; },
/* harmony export */   "getISOWeeksInISOWeekYear": function() { return /* binding */ getISOWeeksInISOWeekYear; },
/* harmony export */   "getWeeksInYear": function() { return /* binding */ getWeeksInYear; },
/* harmony export */   "getWeeksInWeekYear": function() { return /* binding */ getWeeksInWeekYear; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-calendar-utils */ 65299);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ 12818);










// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
    (0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('weekYear', 'gg');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeekYear', 'GG');

// PRIORITY

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('weekYear', 1);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeekYear', 1);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 2)] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_6__.default)(input);
});

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['gg', 'GG'], function (input, week, config, token) {
    week[token] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
    );
}

function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
    );
}

function getISOWeeksInYear() {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.year(), 1, 4);
}

function getISOWeeksInISOWeekYear() {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.isoWeekYear(), 1, 4);
}

function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.year(), weekInfo.dow, weekInfo.doy);
}

function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(this.weekYear(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weekOfYear)(this, dow, doy).year;
    } else {
        weeksTarget = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.weeksInYear)(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy),
        date = (0,_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__.createUTCDate)(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}


/***/ }),

/***/ 7279:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localeWeek": function() { return /* binding */ localeWeek; },
/* harmony export */   "defaultLocaleWeek": function() { return /* binding */ defaultLocaleWeek; },
/* harmony export */   "localeFirstDayOfWeek": function() { return /* binding */ localeFirstDayOfWeek; },
/* harmony export */   "localeFirstDayOfYear": function() { return /* binding */ localeFirstDayOfYear; },
/* harmony export */   "getSetWeek": function() { return /* binding */ getSetWeek; },
/* harmony export */   "getSetISOWeek": function() { return /* binding */ getSetISOWeek; }
/* harmony export */ });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-calendar-utils */ 65299);








// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('w', ['ww', 2], 'wo', 'week');
(0,_format_format__WEBPACK_IMPORTED_MODULE_0__.addFormatToken)('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('week', 'w');
(0,_aliases__WEBPACK_IMPORTED_MODULE_1__.addUnitAlias)('isoWeek', 'W');

// PRIORITIES

(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('week', 5);
(0,_priorities__WEBPACK_IMPORTED_MODULE_2__.addUnitPriority)('isoWeek', 5);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('w', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('W', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_3__.addRegexToken)('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_3__.match2);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_4__.addWeekParseToken)(['w', 'ww', 'W', 'WW'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 1)] = (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_5__.default)(input);
});

// HELPERS

// LOCALES

function localeWeek(mom) {
    return (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.weekOfYear)(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

function localeFirstDayOfWeek() {
    return this._week.dow;
}

function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
    var week = (0,_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.weekOfYear)(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}


/***/ }),

/***/ 41607:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/year.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInYear": function() { return /* binding */ daysInYear; },
/* harmony export */   "isLeapYear": function() { return /* reexport safe */ _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear; },
/* harmony export */   "getSetYear": function() { return /* binding */ getSetYear; },
/* harmony export */   "getIsLeapYear": function() { return /* binding */ getIsLeapYear; }
/* harmony export */ });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 40749);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 67758);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 67406);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 55944);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 9974);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 17451);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-leap-year */ 99205);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 77920);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ 45559);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ 28079);
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/zero-fill */ 33762);












// FORMATTING

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__.default)(y, 4) : '+' + y;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYY', 4], 0, 'year');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYYY', 5], 0, 'year');
(0,_format_format__WEBPACK_IMPORTED_MODULE_1__.addFormatToken)(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

(0,_aliases__WEBPACK_IMPORTED_MODULE_2__.addUnitAlias)('year', 'y');

// PRIORITIES

(0,_priorities__WEBPACK_IMPORTED_MODULE_3__.addUnitPriority)('year', 1);

// PARSING

(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.matchSigned);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to2, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match2);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to4, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match4);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match6);
(0,_parse_regex__WEBPACK_IMPORTED_MODULE_4__.addRegexToken)('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match1to6, _parse_regex__WEBPACK_IMPORTED_MODULE_4__.match6);

(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_8__.YEAR);
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('YYYY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] =
        input.length === 2 ? _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input) : (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('YY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear(input);
});
(0,_parse_token__WEBPACK_IMPORTED_MODULE_5__.addParseToken)('Y', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__.YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear)(year) ? 366 : 365;
}



// HOOKS

_utils_hooks__WEBPACK_IMPORTED_MODULE_7__.hooks.parseTwoDigitYear = function (input) {
    return (0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) + ((0,_utils_to_int__WEBPACK_IMPORTED_MODULE_9__.default)(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = (0,_moment_get_set__WEBPACK_IMPORTED_MODULE_0__.makeGetSet)('FullYear', true);

function getIsLeapYear() {
    return (0,_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__.isLeapYear)(this.year());
}


/***/ }),

/***/ 62266:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-ceil.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ absCeil; }
/* harmony export */ });
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}


/***/ }),

/***/ 39363:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-floor.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ absFloor; }
/* harmony export */ });
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}


/***/ }),

/***/ 1410:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-round.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ absRound; }
/* harmony export */ });
function absRound(number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}


/***/ }),

/***/ 40180:
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/compare-arrays.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ compareArrays; }
/* harmony export */ });
/* harmony import */ var _to_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-int */ 28079);


// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && (0,_to_int__WEBPACK_IMPORTED_MODULE_0__.default)(array1[i]) !== (0,_to_int__WEBPACK_IMPORTED_MODULE_0__.default)(array2[i]))
        ) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}


/***/ }),

/***/ 40303:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/defaults.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defaults; }
/* harmony export */ });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}


/***/ }),

/***/ 78760:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/deprecate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecate": function() { return /* binding */ deprecate; },
/* harmony export */   "deprecateSimple": function() { return /* binding */ deprecateSimple; }
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ 43751);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ 77920);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-own-prop */ 58306);




function warn(msg) {
    if (
        _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
    ) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return (0,_extend__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
        if (_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler != null) {
            _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [],
                arg,
                i,
                key;
            for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0]) {
                        if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_2__.default)(arguments[0], key)) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(
                msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
            );
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler != null) {
        _hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.suppressDeprecationWarnings = false;
_hooks__WEBPACK_IMPORTED_MODULE_1__.hooks.deprecationHandler = null;


/***/ }),

/***/ 43751:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/extend.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ extend; }
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 58306);


function extend(a, b) {
    for (var i in b) {
        if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, i)) {
            a[i] = b[i];
        }
    }

    if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, 'toString')) {
        a.toString = b.toString;
    }

    if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}


/***/ }),

/***/ 58306:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/has-own-prop.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasOwnProp; }
/* harmony export */ });
function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}


/***/ }),

/***/ 77920:
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/hooks.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hooks": function() { return /* binding */ hooks; },
/* harmony export */   "setHookCallback": function() { return /* binding */ setHookCallback; }
/* harmony export */ });


var hookCallback;

function hooks() {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
    hookCallback = callback;
}


/***/ }),

/***/ 55845:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/index-of.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ indexOf; }
/* harmony export */ });
var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}




/***/ }),

/***/ 34310:
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-array.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isArray; }
/* harmony export */ });
function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}


/***/ }),

/***/ 66741:
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-calendar-spec.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isCalendarSpec; }
/* harmony export */ });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ 49061);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ 58306);
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ 89342);




function isCalendarSpec(input) {
    var objectTest = (0,_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(input) && !(0,_is_object_empty__WEBPACK_IMPORTED_MODULE_0__.default)(input),
        propertyTest = false,
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || (0,_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(input, property);
    }

    return objectTest && propertyTest;
}


/***/ }),

/***/ 18658:
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-date.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isDate; }
/* harmony export */ });
function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}


/***/ }),

/***/ 79808:
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-function.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isFunction; }
/* harmony export */ });
function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}


/***/ }),

/***/ 99205:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-leap-year.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLeapYear": function() { return /* binding */ isLeapYear; }
/* harmony export */ });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


/***/ }),

/***/ 38615:
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-moment-input.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMomentInput": function() { return /* binding */ isMomentInput; },
/* harmony export */   "isMomentInputObject": function() { return /* binding */ isMomentInputObject; }
/* harmony export */ });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ 49061);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ 58306);
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ 89342);
/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-date */ 18658);
/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-number */ 1005);
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-string */ 82144);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moment/constructor */ 48237);
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-array */ 34310);









// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input) {
    return (
        (0,_moment_constructor__WEBPACK_IMPORTED_MODULE_6__.isMoment)(input) ||
        (0,_is_date__WEBPACK_IMPORTED_MODULE_3__.default)(input) ||
        (0,_is_string__WEBPACK_IMPORTED_MODULE_5__.default)(input) ||
        (0,_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === undefined
    );
}

function isMomentInputObject(input) {
    var objectTest = (0,_is_object__WEBPACK_IMPORTED_MODULE_2__.default)(input) && !(0,_is_object_empty__WEBPACK_IMPORTED_MODULE_0__.default)(input),
        propertyTest = false,
        properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || (0,_has_own_prop__WEBPACK_IMPORTED_MODULE_1__.default)(input, property);
    }

    return objectTest && propertyTest;
}

function isNumberOrStringArray(input) {
    var arrayTest = (0,_is_array__WEBPACK_IMPORTED_MODULE_7__.default)(input),
        dataTypeTest = false;
    if (arrayTest) {
        dataTypeTest =
            input.filter(function (item) {
                return !(0,_is_number__WEBPACK_IMPORTED_MODULE_4__.default)(item) && (0,_is_string__WEBPACK_IMPORTED_MODULE_5__.default)(input);
            }).length === 0;
    }
    return arrayTest && dataTypeTest;
}


/***/ }),

/***/ 1005:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-number.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isNumber; }
/* harmony export */ });
function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}


/***/ }),

/***/ 49061:
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object-empty.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isObjectEmpty; }
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 58306);


function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var k;
        for (k in obj) {
            if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(obj, k)) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ 89342:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isObject; }
/* harmony export */ });
function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}


/***/ }),

/***/ 82144:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-string.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isString; }
/* harmony export */ });
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}


/***/ }),

/***/ 71331:
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-undefined.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isUndefined; }
/* harmony export */ });
function isUndefined(input) {
    return input === void 0;
}


/***/ }),

/***/ 38879:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/keys.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keys; }
/* harmony export */ });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 58306);


var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i,
            res = [];
        for (i in obj) {
            if ((0,_has_own_prop__WEBPACK_IMPORTED_MODULE_0__.default)(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}




/***/ }),

/***/ 50532:
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/map.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ map; }
/* harmony export */ });
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}


/***/ }),

/***/ 91157:
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/mod.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mod; }
/* harmony export */ });
function mod(n, x) {
    return ((n % x) + x) % x;
}


/***/ }),

/***/ 89270:
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/some.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ some; }
/* harmony export */ });
var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}




/***/ }),

/***/ 28079:
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/to-int.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toInt; }
/* harmony export */ });
/* harmony import */ var _abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs-floor */ 39363);


function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = (0,_abs_floor__WEBPACK_IMPORTED_MODULE_0__.default)(coercedNumber);
    }

    return value;
}


/***/ }),

/***/ 33762:
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/zero-fill.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ zeroFill; }
/* harmony export */ });
function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
    );
}


/***/ }),

/***/ 55384:
/*!*******************************************!*\
  !*** ./node_modules/moment/src/moment.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/hooks */ 77920);
/* harmony import */ var _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/moment/moment */ 34620);
/* harmony import */ var _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/moment/calendar */ 58329);
/* harmony import */ var _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/locale/locale */ 20259);
/* harmony import */ var _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/duration/duration */ 46477);
/* harmony import */ var _lib_units_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/units/units */ 82411);
/* harmony import */ var _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/is-date */ 18658);
//! moment.js
//! version : 2.25.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com



_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.version = '2.25.1';













(0,_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.setHookCallback)(_lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createLocal);

_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.fn = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.momentPrototype;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.min = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.min;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.max = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.max;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.now = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.now;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.utc = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createUTC;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.unix = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createUnix;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.months = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listMonths;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isDate = _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__.default;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.locale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.getSetGlobalLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.invalid = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createInvalid;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.duration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.createDuration;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isMoment = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.isMoment;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdays = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdays;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.parseZone = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.createInZone;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.localeData = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.getLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.isDuration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.isDuration;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.monthsShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listMonthsShort;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdaysMin = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdaysMin;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.defineLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.defineLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.updateLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.updateLocale;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.locales = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listLocales;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.weekdaysShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__.listWeekdaysShort;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.normalizeUnits = _lib_units_units__WEBPACK_IMPORTED_MODULE_5__.normalizeUnits;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.relativeTimeRounding = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.getSetRelativeTimeRounding;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.relativeTimeThreshold = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__.getSetRelativeTimeThreshold;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.calendarFormat = _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__.getCalendarFormat;
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.prototype = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__.momentPrototype;

// currently HTML5 input type only supports 24-hour formats
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

/* harmony default export */ __webpack_exports__["default"] = (_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__.hooks);


/***/ }),

/***/ 8936:
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxMaterialTimepicker12HoursFaceComponent": function() { return /* binding */ NgxMaterialTimepicker12HoursFaceComponent; },
/* harmony export */   "NgxMaterialTimepicker24HoursFaceComponent": function() { return /* binding */ NgxMaterialTimepicker24HoursFaceComponent; },
/* harmony export */   "NgxMaterialTimepickerComponent": function() { return /* binding */ NgxMaterialTimepickerComponent; },
/* harmony export */   "NgxMaterialTimepickerDialComponent": function() { return /* binding */ NgxMaterialTimepickerDialComponent; },
/* harmony export */   "NgxMaterialTimepickerDialControlComponent": function() { return /* binding */ NgxMaterialTimepickerDialControlComponent; },
/* harmony export */   "NgxMaterialTimepickerFaceComponent": function() { return /* binding */ NgxMaterialTimepickerFaceComponent; },
/* harmony export */   "NgxMaterialTimepickerMinutesFaceComponent": function() { return /* binding */ NgxMaterialTimepickerMinutesFaceComponent; },
/* harmony export */   "NgxMaterialTimepickerModule": function() { return /* binding */ NgxMaterialTimepickerModule; },
/* harmony export */   "NgxMaterialTimepickerThemeDirective": function() { return /* binding */ NgxMaterialTimepickerThemeDirective; },
/* harmony export */   "NgxMaterialTimepickerToggleIconDirective": function() { return /* binding */ NgxMaterialTimepickerToggleIconDirective; },
/* harmony export */   "NgxTimepickerFieldComponent": function() { return /* binding */ NgxTimepickerFieldComponent; },
/* harmony export */   "TimepickerDirective": function() { return /* binding */ TimepickerDirective; },
/* harmony export */   "ɵa": function() { return /* binding */ NgxMaterialTimepickerEventService; },
/* harmony export */   "ɵb": function() { return /* binding */ DomService; },
/* harmony export */   "ɵc": function() { return /* binding */ NgxMaterialTimepickerToggleComponent; },
/* harmony export */   "ɵd": function() { return /* binding */ NgxMaterialTimepickerService; },
/* harmony export */   "ɵe": function() { return /* binding */ TIME_LOCALE; },
/* harmony export */   "ɵf": function() { return /* binding */ NgxMaterialTimepickerHoursFace; },
/* harmony export */   "ɵg": function() { return /* binding */ TimeParserPipe; },
/* harmony export */   "ɵh": function() { return /* binding */ NgxMaterialTimepickerButtonComponent; },
/* harmony export */   "ɵi": function() { return /* binding */ NgxMaterialTimepickerPeriodComponent; },
/* harmony export */   "ɵj": function() { return /* binding */ TimeFormatterPipe; },
/* harmony export */   "ɵk": function() { return /* binding */ OverlayDirective; },
/* harmony export */   "ɵl": function() { return /* binding */ AutofocusDirective; },
/* harmony export */   "ɵm": function() { return /* binding */ MinutesFormatterPipe; },
/* harmony export */   "ɵn": function() { return /* binding */ NgxTimepickerTimeControlComponent; },
/* harmony export */   "ɵo": function() { return /* binding */ NgxTimepickerPeriodSelectorComponent; },
/* harmony export */   "ɵp": function() { return /* binding */ TimeLocalizerPipe; },
/* harmony export */   "ɵq": function() { return /* binding */ ActiveHourPipe; },
/* harmony export */   "ɵr": function() { return /* binding */ ActiveMinutePipe; },
/* harmony export */   "ɵs": function() { return /* binding */ AnimationState; },
/* harmony export */   "ɵt": function() { return /* binding */ NgxMaterialTimepickerContainerComponent; },
/* harmony export */   "ɵu": function() { return /* binding */ NgxMaterialTimepickerContentComponent; },
/* harmony export */   "ɵv": function() { return /* binding */ AppendToInputDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 90005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 55429);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);













function NgxMaterialTimepickerContainerComponent_div_11_ngx_material_timepicker_24_hours_face_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-24-hours-face", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hourChange", function NgxMaterialTimepickerContainerComponent_div_11_ngx_material_timepicker_24_hours_face_1_Template_ngx_material_timepicker_24_hours_face_hourChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onHourChange($event); })("hourSelected", function NgxMaterialTimepickerContainerComponent_div_11_ngx_material_timepicker_24_hours_face_1_Template_ngx_material_timepicker_24_hours_face_hourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.onHourSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r8.selectedHour))("minTime", ctx_r8.minTime)("maxTime", ctx_r8.maxTime)("format", ctx_r8.format);
} }
function NgxMaterialTimepickerContainerComponent_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-12-hours-face", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hourChange", function NgxMaterialTimepickerContainerComponent_div_11_ng_template_2_Template_ngx_material_timepicker_12_hours_face_hourChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onHourChange($event); })("hourSelected", function NgxMaterialTimepickerContainerComponent_div_11_ng_template_2_Template_ngx_material_timepicker_12_hours_face_hourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.onHourSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, ctx_r10.selectedHour))("period", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx_r10.selectedPeriod))("minTime", ctx_r10.minTime)("maxTime", ctx_r10.maxTime);
} }
function NgxMaterialTimepickerContainerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerContainerComponent_div_11_ngx_material_timepicker_24_hours_face_1_Template, 2, 6, "ngx-material-timepicker-24-hours-face", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMaterialTimepickerContainerComponent_div_11_ng_template_2_Template, 3, 8, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.format === 24)("ngIfElse", _r9);
} }
function NgxMaterialTimepickerContainerComponent_ngx_material_timepicker_minutes_face_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-minutes-face", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("minuteChange", function NgxMaterialTimepickerContainerComponent_ngx_material_timepicker_minutes_face_12_Template_ngx_material_timepicker_minutes_face_minuteChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onMinuteChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedMinute", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 7, ctx_r1.selectedMinute))("selectedHour", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 9, ctx_r1.selectedHour)) == null ? null : tmp_1_0.time)("minTime", ctx_r1.minTime)("maxTime", ctx_r1.maxTime)("format", ctx_r1.format)("period", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 11, ctx_r1.selectedPeriod))("minutesGap", ctx_r1.minutesGap);
} }
function NgxMaterialTimepickerContainerComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgxMaterialTimepickerContainerComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgxMaterialTimepickerContainerComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgxMaterialTimepickerContainerComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "timepicker-backdrop-overlay--transparent": a0 }; };
function NgxMaterialTimepickerToggleComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = [[["", "ngxMaterialTimepickerToggleIcon", ""]]];
const _c2 = ["[ngxMaterialTimepickerToggleIcon]"];
const _c3 = ["clockFace"];
const _c4 = ["clockHand"];
const _c5 = function (a0) { return { "transform": a0 }; };
const _c6 = function (a0, a1) { return { "active": a0, "disabled": a1 }; };
function NgxMaterialTimepickerFaceComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "activeHour");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c5, "rotateZ(" + time_r7.angle + "deg) translateX(-50%)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c5, "rotateZ(-" + time_r7.angle + "deg)"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 4, time_r7.time, ctx_r5.selectedTime.time, ctx_r5.isClockFaceDisabled), time_r7.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, time_r7.time, ctx_r5.timeUnit.HOUR), " ");
} }
function NgxMaterialTimepickerFaceComponent_div_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "activeHour");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r8.innerClockFaceSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c5, "rotateZ(" + time_r9.angle + "deg) translateX(-50%)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, "rotateZ(-" + time_r9.angle + "deg)"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 6, time_r9.time, ctx_r8.selectedTime == null ? null : ctx_r8.selectedTime.time, ctx_r8.isClockFaceDisabled), time_r9.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 10, time_r9.time, ctx_r8.timeUnit.HOUR), "");
} }
function NgxMaterialTimepickerFaceComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerFaceComponent_div_2_div_3_div_1_Template, 5, 20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", "calc(50% - " + ctx_r6.innerClockFaceSize + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 4, ctx_r6.faceTime, 12, 24))("ngForTrackBy", ctx_r6.trackByTime);
} }
function NgxMaterialTimepickerFaceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerFaceComponent_div_2_div_1_Template, 5, 18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxMaterialTimepickerFaceComponent_div_2_div_3_Template, 3, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 3, ctx_r1.faceTime, 0, 12))("ngForTrackBy", ctx_r1.trackByTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.faceTime.length > 12);
} }
function NgxMaterialTimepickerFaceComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "activeMinute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "minutesFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c5, "rotateZ(" + time_r11.angle + "deg) translateX(-50%)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c5, "rotateZ(-" + time_r11.angle + "deg)"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](19, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](2, 4, time_r11.time, ctx_r10.selectedTime == null ? null : ctx_r10.selectedTime.time, ctx_r10.minutesGap, ctx_r10.isClockFaceDisabled), time_r11.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 12, time_r11.time, ctx_r10.minutesGap), ctx_r10.timeUnit.MINUTE), "");
} }
function NgxMaterialTimepickerFaceComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerFaceComponent_ng_template_5_div_1_Template, 6, 22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.faceTime)("ngForTrackBy", ctx_r4.trackByTime);
} }
const _c7 = function (a0) { return { "clock-face__clock-hand_minute": a0 }; };
const _c8 = ["*"];
function NgxMaterialTimepickerDialComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgxMaterialTimepickerDialComponent_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " * use arrows (");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u21C5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ") to change the time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c9 = function (a0) { return { "timepicker-dial__hint-container--hidden": a0 }; };
function NgxMaterialTimepickerDialComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerDialComponent_div_8_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMaterialTimepickerDialComponent_div_8_ng_template_2_Template, 5, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c9, !ctx_r0.isHintVisible));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.editableHintTmpl ? ctx_r0.editableHintTmpl : _r2);
} }
const _c10 = function (a0) { return { "timepicker-dial__period--hidden": a0 }; };
const _c11 = function (a0) { return { "timepicker-dial__item_active": a0 }; };
function NgxMaterialTimepickerDialControlComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgxMaterialTimepickerDialControlComponent_input_0_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.time = $event; })("input", function NgxMaterialTimepickerDialControlComponent_input_0_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateTime(); })("focus", function NgxMaterialTimepickerDialControlComponent_input_0_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.saveTimeAndChangeTimeUnit($event, ctx_r6.timeUnit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c11, ctx_r0.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 4, ctx_r0.time, ctx_r0.timeUnit))("disabled", ctx_r0.disabled)("timepickerAutofocus", ctx_r0.isActive);
} }
function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onModelChange($event); })("input", function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.updateTime(); })("focus", function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.saveTimeAndChangeTimeUnit($event, ctx_r10.timeUnit); })("keydown", function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onKeydown($event); })("keypress", function NgxMaterialTimepickerDialControlComponent_ng_template_1_Template_input_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.changeTimeByKeyboard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "timeParser");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c11, ctx_r2.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 8, ctx_r2.time, ctx_r2.timeUnit), ctx_r2.timeUnit, true))("disabled", ctx_r2.disabled)("timepickerAutofocus", ctx_r2.isActive);
} }
function NgxMaterialTimepickerPeriodComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@scaleInOut.done", function NgxMaterialTimepickerPeriodComponent_div_5_Template_div_animation_scaleInOut_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.animationDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current time would be invalid in this period.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleInOut", undefined);
} }
function NgxTimepickerFieldComponent_ngx_timepicker_period_selector_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-timepicker-period-selector", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("periodSelected", function NgxTimepickerFieldComponent_ngx_timepicker_period_selector_7_Template_ngx_timepicker_period_selector_periodSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.changePeriod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedPeriod", ctx_r0.period)("disabled", ctx_r0.disabled || ctx_r0.isChangePeriodDisabled);
} }
function NgxTimepickerFieldComponent_ngx_material_timepicker_toggle_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c12 = function (a0) { return { "ngx-timepicker__toggle--left": a0 }; };
function NgxTimepickerFieldComponent_ngx_material_timepicker_toggle_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxTimepickerFieldComponent_ngx_material_timepicker_toggle_8_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c12, ctx_r1.buttonAlign === "left"))("for", _r2)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.toggleIcon || _r3);
} }
function NgxTimepickerFieldComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c13 = function (a0) { return { "ngx-timepicker--disabled": a0 }; };
const _c14 = function (a0) { return { "ngx-timepicker-control--active": a0 }; };
const _c15 = function (a0) { return { "period-selector__button--active": a0 }; };
function NgxTimepickerPeriodSelectorComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerPeriodSelectorComponent_ul_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.select(ctx_r2.period.AM); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerPeriodSelectorComponent_ul_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.select(ctx_r4.period.PM); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleInOut", undefined)("timepickerAutofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c15, ctx_r0.localizedPeriod === ctx_r0.meridiems[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.meridiems[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c15, ctx_r0.localizedPeriod === ctx_r0.meridiems[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.meridiems[1]);
} }
function NgxTimepickerPeriodSelectorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerPeriodSelectorComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.backdropClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c16 = function (a0) { return { "period-control__button--disabled": a0 }; };
function NgxMaterialTimepickerContentComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgxMaterialTimepickerContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerContentComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxAppendToInput", ctx_r0.inputElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NgxMaterialTimepickerContentComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgxMaterialTimepickerContentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxMaterialTimepickerContentComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NgxMaterialTimepickerContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
let NgxMaterialTimepickerEventService = class NgxMaterialTimepickerEventService {
    constructor() {
        this.backdropClickSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.keydownEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get backdropClick() {
        return this.backdropClickSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({ bufferSize: 1, refCount: true }));
    }
    get keydownEvent() {
        return this.keydownEventSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({ bufferSize: 1, refCount: true }));
    }
    dispatchEvent(event) {
        switch (event.type) {
            case 'click':
                this.backdropClickSubject.next(event);
                break;
            case 'keydown':
                this.keydownEventSubject.next(event);
                break;
            default:
                throw new Error('no such event type');
        }
    }
};
NgxMaterialTimepickerEventService.ɵfac = function NgxMaterialTimepickerEventService_Factory(t) { return new (t || NgxMaterialTimepickerEventService)(); };
NgxMaterialTimepickerEventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgxMaterialTimepickerEventService, factory: function (t) { return NgxMaterialTimepickerEventService.ɵfac(t); }, providedIn: 'root' });
NgxMaterialTimepickerEventService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerEventService_Factory() { return new NgxMaterialTimepickerEventService(); }, token: NgxMaterialTimepickerEventService, providedIn: "root" });

let DomService = class DomService {
    constructor(cfr, appRef, injector, document) {
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
        this.document = document;
    }
    appendTimepickerToBody(timepicker, config) {
        this.componentRef = this.cfr.resolveComponentFactory(timepicker).create(this.injector);
        Object.keys(config).forEach(key => this.componentRef.instance[key] = config[key]);
        this.appRef.attachView(this.componentRef.hostView);
        const domElement = this.componentRef.hostView
            .rootNodes[0];
        this.document.body.appendChild(domElement);
    }
    destroyTimepicker() {
        this.componentRef.destroy();
        this.appRef.detachView(this.componentRef.hostView);
    }
};
DomService.ɵfac = function DomService_Factory(t) { return new (t || DomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8)); };
DomService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomService, factory: function (t) { return DomService.ɵfac(t); }, providedIn: 'root' });
DomService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] }
];
DomService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomService_Factory() { return new DomService((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.INJECTOR), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8)); }, token: DomService, providedIn: "root" });
DomService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(3, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT))
], DomService);

var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["HOUR"] = 0] = "HOUR";
    TimeUnit[TimeUnit["MINUTE"] = 1] = "MINUTE";
})(TimeUnit || (TimeUnit = {}));

var TimePeriod;
(function (TimePeriod) {
    TimePeriod["AM"] = "AM";
    TimePeriod["PM"] = "PM";
})(TimePeriod || (TimePeriod = {}));

var TimeFormat;
(function (TimeFormat) {
    TimeFormat["TWELVE"] = "hh:mm a";
    TimeFormat["TWELVE_SHORT"] = "h:m a";
    TimeFormat["TWENTY_FOUR"] = "HH:mm";
    TimeFormat["TWENTY_FOUR_SHORT"] = "H:m";
})(TimeFormat || (TimeFormat = {}));

function isSameOrAfter(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour >= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }
}
function isSameOrBefore(time, compareWith, unit = 'minutes') {
    if (unit === 'hours') {
        return time.hour <= compareWith.hour;
    }
    if (unit === 'minutes') {
        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }
}
function isBetween(time, before, after, unit = 'minutes') {
    if (unit === 'hours') {
        return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
    }
    if (unit === 'minutes') {
        return isSameOrBefore(time, after) && isSameOrAfter(time, before);
    }
}
function isDigit(e) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
        // Allow: Ctrl/cmd+A
        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+C
        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: Ctrl/cmd+X
        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
        // Allow: home, end, left, right, up, down
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return true;
    }
    return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
}

// @dynamic
class TimeAdapter {
    static parseTime(time, opts) {
        const { numberingSystem, locale } = TimeAdapter.getLocaleOptionsByTime(time, opts);
        const isPeriodExist = time.split(' ').length === 2;
        const timeMask = isPeriodExist ? TimeFormat.TWELVE_SHORT : TimeFormat.TWENTY_FOUR_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(time, timeMask, { numberingSystem, locale });
    }
    static formatTime(time, opts) {
        if (!time) {
            return 'Invalid Time';
        }
        const { format } = opts;
        const parsedTime = TimeAdapter.parseTime(time, opts).setLocale(TimeAdapter.DEFAULT_LOCALE);
        if (format !== 24) {
            return parsedTime.toLocaleString(Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.TIME_SIMPLE, { hour12: format !== 24, numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM })).replace(/\u200E/g, '');
        }
        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, '');
    }
    static toLocaleTimeString(time, opts = {}) {
        const { format = TimeAdapter.DEFAULT_FORMAT, locale = TimeAdapter.DEFAULT_LOCALE } = opts;
        const hourCycle = format === 24 ? 'h23' : 'h12';
        const timeFormat = Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.TIME_SIMPLE, { hourCycle });
        const timeMask = (format === 24) ? TimeFormat.TWENTY_FOUR_SHORT : TimeFormat.TWELVE_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
    }
    static isTimeAvailable(time, min, max, granularity, minutesGap, format) {
        if (!time) {
            return;
        }
        const convertedTime = this.parseTime(time, { format });
        const minutes = convertedTime.minute;
        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        const isAfter = (min && !max)
            && isSameOrAfter(convertedTime, min, granularity);
        const isBefore = (max && !min)
            && isSameOrBefore(convertedTime, max, granularity);
        const between = (min && max)
            && isBetween(convertedTime, min, max, granularity);
        const isAvailable = !min && !max;
        return isAfter || isBefore || between || isAvailable;
    }
    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        const hour = period === TimePeriod.AM ? currentHour : currentHour + 12;
        if (period === TimePeriod.AM && hour === 12) {
            return 0;
        }
        else if (period === TimePeriod.PM && hour === 24) {
            return 12;
        }
        return hour;
    }
    static fromDateTimeToString(time, format) {
        const timeFormat = format === 24 ? TimeFormat.TWENTY_FOUR : TimeFormat.TWELVE;
        return time.reconfigure({
            numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM,
            locale: TimeAdapter.DEFAULT_LOCALE
        }).toFormat(timeFormat);
    }
    static getLocaleOptionsByTime(time, opts) {
        const { numberingSystem, locale } = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().setLocale(opts.locale).resolvedLocaleOpts();
        const localeConfig = { numberingSystem: numberingSystem, locale };
        const defaultConfig = { numberingSystem: TimeAdapter.DEFAULT_NUMBERING_SYSTEM, locale: TimeAdapter.DEFAULT_LOCALE };
        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    }
}
TimeAdapter.DEFAULT_FORMAT = 12;
TimeAdapter.DEFAULT_LOCALE = 'en-US';
TimeAdapter.DEFAULT_NUMBERING_SYSTEM = 'latn';

const DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
const DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
let NgxMaterialTimepickerService = class NgxMaterialTimepickerService {
    constructor() {
        this.hourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(DEFAULT_HOUR);
        this.minuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(DEFAULT_MINUTE);
        this.periodSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(TimePeriod.AM);
    }
    set hour(hour) {
        this.hourSubject.next(hour);
    }
    get selectedHour() {
        return this.hourSubject.asObservable();
    }
    set minute(minute) {
        this.minuteSubject.next(minute);
    }
    get selectedMinute() {
        return this.minuteSubject.asObservable();
    }
    set period(period) {
        const isPeriodValid = (period === TimePeriod.AM) || (period === TimePeriod.PM);
        if (isPeriodValid) {
            this.periodSubject.next(period);
        }
    }
    get selectedPeriod() {
        return this.periodSubject.asObservable();
    }
    setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (TimeAdapter.isTimeAvailable(time, min, max, 'minutes', minutesGap)) {
                this.setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    getFullTime(format) {
        const selectedHour = this.hourSubject.getValue().time;
        const selectedMinute = this.minuteSubject.getValue().time;
        const hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
        const minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
        const period = format === 12 ? this.periodSubject.getValue() : '';
        const time = `${hour}:${minute} ${period}`.trim();
        return TimeAdapter.formatTime(time, { format });
    }
    setDefaultTime(time, format) {
        const defaultTime = TimeAdapter.parseTime(time, { format }).toJSDate();
        if (luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromJSDate(defaultTime).isValid) {
            const period = time.substr(time.length - 2).toUpperCase();
            const hour = defaultTime.getHours();
            this.hour = Object.assign({}, DEFAULT_HOUR, { time: formatHourByPeriod(hour, period) });
            this.minute = Object.assign({}, DEFAULT_MINUTE, { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this.resetTime();
        }
    }
    resetTime() {
        this.hour = Object.assign({}, DEFAULT_HOUR);
        this.minute = Object.assign({}, DEFAULT_MINUTE);
        this.period = TimePeriod.AM;
    }
};
NgxMaterialTimepickerService.ɵfac = function NgxMaterialTimepickerService_Factory(t) { return new (t || NgxMaterialTimepickerService)(); };
NgxMaterialTimepickerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgxMaterialTimepickerService, factory: function (t) { return NgxMaterialTimepickerService.ɵfac(t); }, providedIn: 'root' });
NgxMaterialTimepickerService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxMaterialTimepickerService_Factory() { return new NgxMaterialTimepickerService(); }, token: NgxMaterialTimepickerService, providedIn: "root" });
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case TimePeriod.AM:
            return hour === 0 ? 12 : hour;
        case TimePeriod.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}

const TIME_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('TimeLocale', {
    providedIn: 'root',
    factory: () => TimeAdapter.DEFAULT_LOCALE
});

var AnimationState;
(function (AnimationState) {
    AnimationState["ENTER"] = "enter";
    AnimationState["LEAVE"] = "leave";
})(AnimationState || (AnimationState = {}));
let NgxMaterialTimepickerContainerComponent = class NgxMaterialTimepickerContainerComponent {
    constructor(timepickerService, eventService, locale) {
        this.timepickerService = timepickerService;
        this.eventService = eventService;
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.activeTimeUnit = TimeUnit.HOUR;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    set defaultTime(time) {
        this._defaultTime = time;
        this.setDefaultTime(time);
    }
    get defaultTime() {
        return this._defaultTime;
    }
    onKeydown(e) {
        this.eventService.dispatchEvent(e);
        e.stopPropagation();
    }
    ngOnInit() {
        this.animationState = !this.disableAnimation && AnimationState.ENTER;
        this.defineTime();
        this.selectedHour = this.timepickerService.selectedHour
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({ bufferSize: 1, refCount: true }));
        this.selectedMinute = this.timepickerService.selectedMinute
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({ bufferSize: 1, refCount: true }));
        this.selectedPeriod = this.timepickerService.selectedPeriod
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({ bufferSize: 1, refCount: true }));
        this.timepickerBaseRef.timeUpdated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe))
            .subscribe(this.setDefaultTime.bind(this));
    }
    onHourChange(hour) {
        this.timepickerService.hour = hour;
        this.onTimeChange();
    }
    onHourSelected(hour) {
        if (!this.hoursOnly) {
            this.changeTimeUnit(TimeUnit.MINUTE);
        }
        this.timepickerBaseRef.hourSelected.next(hour);
    }
    onMinuteChange(minute) {
        this.timepickerService.minute = minute;
        this.onTimeChange();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.onTimeChange();
    }
    changeTimeUnit(unit) {
        this.activeTimeUnit = unit;
    }
    setTime() {
        this.timepickerBaseRef.timeSet.next(this.timepickerService.getFullTime(this.format));
        this.close();
    }
    close() {
        if (this.disableAnimation) {
            this.timepickerBaseRef.close();
            return;
        }
        this.animationState = AnimationState.LEAVE;
    }
    animationDone(event) {
        if (event.phaseName === 'done' && event.toState === AnimationState.LEAVE) {
            this.timepickerBaseRef.close();
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    setDefaultTime(time) {
        this.timepickerService.setDefaultTimeIfAvailable(time, this.minTime, this.maxTime, this.format, this.minutesGap);
    }
    defineTime() {
        const minTime = this.minTime;
        if (minTime && (!this.time && !this.defaultTime)) {
            const time = TimeAdapter.fromDateTimeToString(minTime, this.format);
            this.setDefaultTime(time);
        }
    }
    onTimeChange() {
        const time = TimeAdapter.toLocaleTimeString(this.timepickerService.getFullTime(this.format), {
            locale: this.locale,
            format: this.format
        });
        this.timepickerBaseRef.timeChanged.emit(time);
    }
};
NgxMaterialTimepickerContainerComponent.ɵfac = function NgxMaterialTimepickerContainerComponent_Factory(t) { return new (t || NgxMaterialTimepickerContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaterialTimepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaterialTimepickerEventService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE)); };
NgxMaterialTimepickerContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerContainerComponent, selectors: [["ngx-material-timepicker-container"]], hostBindings: function NgxMaterialTimepickerContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function NgxMaterialTimepickerContainerComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { defaultTime: "defaultTime" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NgxMaterialTimepickerService])], decls: 22, vars: 31, consts: [[1, "timepicker-backdrop-overlay", 3, "overlay", "ngClass"], [1, "timepicker-overlay"], [3, "appendToInput", "inputElement", "ngxMaterialTimepickerTheme"], [1, "timepicker", 3, "ngClass"], [1, "timepicker__header"], [3, "format", "hour", "minute", "period", "activeTimeUnit", "minTime", "maxTime", "isEditable", "editableHintTmpl", "minutesGap", "hoursOnly", "periodChanged", "timeUnitChanged", "hourChanged", "minuteChanged"], [1, "timepicker__main-content"], [1, "timepicker__body", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange", 4, "ngSwitchCase"], [1, "timepicker__actions"], [3, "click"], [4, "ngTemplateOutlet"], ["cancelBtnDefault", ""], ["confirmBtnDefault", ""], [3, "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected", 4, "ngIf", "ngIfElse"], ["ampmHours", ""], [3, "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected"], [3, "selectedHour", "period", "minTime", "maxTime", "hourChange", "hourSelected"], [3, "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange"]], template: function NgxMaterialTimepickerContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ngx-material-timepicker-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@timepicker.done", function NgxMaterialTimepickerContainerComponent_Template_div_animation_timepicker_done_3_listener($event) { return ctx.animationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-material-timepicker-dial", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("periodChanged", function NgxMaterialTimepickerContainerComponent_Template_ngx_material_timepicker_dial_periodChanged_5_listener($event) { return ctx.changePeriod($event); })("timeUnitChanged", function NgxMaterialTimepickerContainerComponent_Template_ngx_material_timepicker_dial_timeUnitChanged_5_listener($event) { return ctx.changeTimeUnit($event); })("hourChanged", function NgxMaterialTimepickerContainerComponent_Template_ngx_material_timepicker_dial_hourChanged_5_listener($event) { return ctx.onHourChange($event); })("minuteChanged", function NgxMaterialTimepickerContainerComponent_Template_ngx_material_timepicker_dial_minuteChanged_5_listener($event) { return ctx.onMinuteChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NgxMaterialTimepickerContainerComponent_div_11_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NgxMaterialTimepickerContainerComponent_ngx_material_timepicker_minutes_face_12_Template, 4, 13, "ngx-material-timepicker-minutes-face", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMaterialTimepickerContainerComponent_Template_div_click_14_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NgxMaterialTimepickerContainerComponent_ng_container_15_Template, 1, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMaterialTimepickerContainerComponent_Template_div_click_16_listener() { return ctx.setTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NgxMaterialTimepickerContainerComponent_ng_container_17_Template, 1, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NgxMaterialTimepickerContainerComponent_ng_template_18_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NgxMaterialTimepickerContainerComponent_ng_template_20_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        let tmp_8_0;
        let tmp_9_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlay", ctx.preventOverlayClick)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx.appendToInput));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appendToInput", ctx.appendToInput)("inputElement", ctx.inputElement)("ngxMaterialTimepickerTheme", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@timepicker", ctx.animationState)("ngClass", ctx.timepickerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("format", ctx.format)("hour", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 23, ctx.selectedHour)) == null ? null : tmp_8_0.time)("minute", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 25, ctx.selectedMinute)) == null ? null : tmp_9_0.time)("period", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 27, ctx.selectedPeriod))("activeTimeUnit", ctx.activeTimeUnit)("minTime", ctx.minTime)("maxTime", ctx.maxTime)("isEditable", ctx.enableKeyboardInput)("editableHintTmpl", ctx.editableHintTmpl)("minutesGap", ctx.minutesGap)("hoursOnly", ctx.hoursOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.activeTimeUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.timeUnit.HOUR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.timeUnit.MINUTE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.cancelBtnTmpl ? ctx.cancelBtnTmpl : _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.confirmBtnTmpl ? ctx.confirmBtnTmpl : _r6);
    } }, directives: function () { return [OverlayDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, NgxMaterialTimepickerContentComponent, NgxMaterialTimepickerThemeDirective, NgxMaterialTimepickerDialComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, NgxMaterialTimepicker24HoursFaceComponent, NgxMaterialTimepicker12HoursFaceComponent, NgxMaterialTimepickerMinutesFaceComponent, NgxMaterialTimepickerButtonComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe]; }, styles: ["[_nghost-%COMP%]{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:deepskyblue;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:deepskyblue;--dial-editable-active-color:deepskyblue;--dial-editable-background-color:#fff;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:deepskyblue}.timepicker-backdrop-overlay[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-backdrop-overlay--transparent[_ngcontent-%COMP%]{background-color:transparent}.timepicker-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker[_ngcontent-%COMP%]{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header[_ngcontent-%COMP%]{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header[_ngcontent-%COMP%]{background-color:var(--dial-background-color)}}.timepicker__body[_ngcontent-%COMP%]{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body[_ngcontent-%COMP%]{background-color:var(--body-background-color)}}.timepicker__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions[_ngcontent-%COMP%]{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker[_ngcontent-%COMP%]{display:flex;width:515px}.timepicker__header[_ngcontent-%COMP%]{display:flex;align-items:center}.timepicker__main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.timepicker__actions[_ngcontent-%COMP%]{padding:5px;margin-top:-1px}}"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('timepicker', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(`* => ${AnimationState.ENTER}`, [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-30%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0)' }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(`${AnimationState.ENTER} => ${AnimationState.LEAVE}`, [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0)', opacity: 1 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-30%)', opacity: 0 }))
                ])
            ])
        ] } });
NgxMaterialTimepickerContainerComponent.ctorParameters = () => [
    { type: NgxMaterialTimepickerService },
    { type: NgxMaterialTimepickerEventService },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerContainerComponent.prototype, "defaultTime", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('keydown', ['$event'])
], NgxMaterialTimepickerContainerComponent.prototype, "onKeydown", null);
NgxMaterialTimepickerContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(2, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], NgxMaterialTimepickerContainerComponent);

const ESCAPE = 27;
let NgxMaterialTimepickerComponent = class NgxMaterialTimepickerComponent {
    constructor(eventService, domService) {
        this.eventService = eventService;
        this.domService = domService;
        this.timeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.isEsc = true;
        this.hoursOnly = false;
        this.timeSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /**
     * @deprecated Since version 5.1.1. Will be deleted on version 6.0.0. Use @Input() theme instead
     */
    set ngxMaterialTimepickerTheme(theme) {
        console.warn(`'ngxMaterialTimepickerTheme' is deprecated. Use 'theme' instead`);
        this._ngxMaterialTimepickerTheme = theme;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
    }
    get format() {
        return this.timepickerInput ? this.timepickerInput.format : this._format;
    }
    set minutesGap(gap) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }
    get minutesGap() {
        return this._minutesGap;
    }
    get minTime() {
        return this.timepickerInput ? this.timepickerInput.min : this.min;
    }
    get maxTime() {
        return this.timepickerInput ? this.timepickerInput.max : this.max;
    }
    get disabled() {
        return this.timepickerInput && this.timepickerInput.disabled;
    }
    get time() {
        return this.timepickerInput && this.timepickerInput.value;
    }
    get inputElement() {
        return this.timepickerInput && this.timepickerInput.element;
    }
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input) {
        if (this.timepickerInput) {
            throw Error('A Timepicker can only be associated with a single input.');
        }
        this.timepickerInput = input;
    }
    open() {
        this.domService.appendTimepickerToBody(NgxMaterialTimepickerContainerComponent, {
            timepickerBaseRef: this,
            time: this.time,
            defaultTime: this.defaultTime,
            maxTime: this.maxTime,
            minTime: this.minTime,
            format: this.format,
            minutesGap: this.minutesGap,
            disableAnimation: this.disableAnimation,
            cancelBtnTmpl: this.cancelBtnTmpl,
            confirmBtnTmpl: this.confirmBtnTmpl,
            editableHintTmpl: this.editableHintTmpl,
            disabled: this.disabled,
            enableKeyboardInput: this.enableKeyboardInput,
            preventOverlayClick: this.preventOverlayClick,
            appendToInput: this.appendToInput,
            hoursOnly: this.hoursOnly,
            theme: this.theme || this._ngxMaterialTimepickerTheme,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement
        });
        this.opened.next();
        this.subscribeToEvents();
    }
    close() {
        this.domService.destroyTimepicker();
        this.closed.next();
        this.unsubscribeFromEvents();
    }
    updateTime(time) {
        this.timeUpdated.next(time);
    }
    subscribeToEvents() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.eventService.backdropClick, this.eventService.keydownEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(e => e.keyCode === ESCAPE && this.isEsc)))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe))
            .subscribe(() => this.close());
    }
    unsubscribeFromEvents() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
};
NgxMaterialTimepickerComponent.ɵfac = function NgxMaterialTimepickerComponent_Factory(t) { return new (t || NgxMaterialTimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaterialTimepickerEventService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DomService)); };
NgxMaterialTimepickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerComponent, selectors: [["ngx-material-timepicker"]], inputs: { isEsc: ["ESC", "isEsc"], hoursOnly: "hoursOnly", ngxMaterialTimepickerTheme: "ngxMaterialTimepickerTheme", format: "format", minutesGap: "minutesGap", cancelBtnTmpl: "cancelBtnTmpl", editableHintTmpl: "editableHintTmpl", confirmBtnTmpl: "confirmBtnTmpl", enableKeyboardInput: "enableKeyboardInput", preventOverlayClick: "preventOverlayClick", disableAnimation: "disableAnimation", appendToInput: "appendToInput", defaultTime: "defaultTime", timepickerClass: "timepickerClass", theme: "theme", min: "min", max: "max" }, outputs: { timeSet: "timeSet", opened: "opened", closed: "closed", hourSelected: "hourSelected", timeChanged: "timeChanged" }, decls: 0, vars: 0, template: function NgxMaterialTimepickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
NgxMaterialTimepickerComponent.ctorParameters = () => [
    { type: NgxMaterialTimepickerEventService },
    { type: DomService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "cancelBtnTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "editableHintTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "confirmBtnTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('ESC')
], NgxMaterialTimepickerComponent.prototype, "isEsc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "enableKeyboardInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "preventOverlayClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "disableAnimation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "appendToInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "hoursOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "defaultTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "timepickerClass", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "theme", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "ngxMaterialTimepickerTheme", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "format", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerComponent.prototype, "minutesGap", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerComponent.prototype, "timeSet", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerComponent.prototype, "opened", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerComponent.prototype, "closed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerComponent.prototype, "hourSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerComponent.prototype, "timeChanged", void 0);

/* To override a default toggle icon */
let NgxMaterialTimepickerToggleIconDirective = class NgxMaterialTimepickerToggleIconDirective {
};
NgxMaterialTimepickerToggleIconDirective.ɵfac = function NgxMaterialTimepickerToggleIconDirective_Factory(t) { return new (t || NgxMaterialTimepickerToggleIconDirective)(); };
NgxMaterialTimepickerToggleIconDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgxMaterialTimepickerToggleIconDirective, selectors: [["", "ngxMaterialTimepickerToggleIcon", ""]] });

let NgxMaterialTimepickerToggleComponent = class NgxMaterialTimepickerToggleComponent {
    get disabled() {
        return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    open(event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
};
NgxMaterialTimepickerToggleComponent.ɵfac = function NgxMaterialTimepickerToggleComponent_Factory(t) { return new (t || NgxMaterialTimepickerToggleComponent)(); };
NgxMaterialTimepickerToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerToggleComponent, selectors: [["ngx-material-timepicker-toggle"]], contentQueries: function NgxMaterialTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgxMaterialTimepickerToggleIconDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
    } }, inputs: { disabled: "disabled", timepicker: ["for", "timepicker"] }, ngContentSelectors: _c2, decls: 3, vars: 2, consts: [["type", "button", 1, "ngx-material-timepicker-toggle", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px"], ["d", "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"]], template: function NgxMaterialTimepickerToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMaterialTimepickerToggleComponent_Template_button_click_0_listener($event) { return ctx.open($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerToggleComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.customIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".ngx-material-timepicker-toggle[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle[_ngcontent-%COMP%]:focus{background-color:rgba(0,0,0,.07)}"] });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('for')
], NgxMaterialTimepickerToggleComponent.prototype, "timepicker", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerToggleComponent.prototype, "disabled", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild)(NgxMaterialTimepickerToggleIconDirective, { static: true })
], NgxMaterialTimepickerToggleComponent.prototype, "customIcon", void 0);

var TimepickerDirective_1;
let TimepickerDirective = TimepickerDirective_1 = class TimepickerDirective {
    constructor(elementRef, locale) {
        this.elementRef = elementRef;
        this.locale = locale;
        this._format = 12;
        this._value = '';
        this.timepickerSubscriptions = [];
        this.onTouched = () => {
        };
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.value = this._value;
            this._timepicker.updateTime(this._value);
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set min(value) {
        if (typeof value === 'string') {
            this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._min = value;
    }
    get min() {
        return this._min;
    }
    set max(value) {
        if (typeof value === 'string') {
            this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get max() {
        return this._max;
    }
    set timepicker(picker) {
        this.registerTimepicker(picker);
    }
    set value(value) {
        if (!value) {
            this._value = '';
            this.updateInputValue();
            return;
        }
        const time = TimeAdapter.formatTime(value, { locale: this.locale, format: this.format });
        const isAvailable = TimeAdapter.isTimeAvailable(time, this._min, this._max, 'minutes', this._timepicker.minutesGap, this._format);
        if (isAvailable) {
            this._value = time;
            this.updateInputValue();
            return;
        }
        console.warn('Selected time doesn\'t match min or max value');
    }
    get value() {
        if (!this._value) {
            return '';
        }
        return TimeAdapter.toLocaleTimeString(this._value, { format: this.format, locale: this.locale });
    }
    get element() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    set defaultTime(time) {
        this._timepicker.defaultTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
    }
    updateValue(value) {
        this.value = value;
        this.onChange(value);
    }
    ngOnChanges(changes) {
        if (changes['value'] && changes['value'].currentValue) {
            this.defaultTime = changes['value'].currentValue;
        }
    }
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }
    writeValue(value) {
        this.value = value;
        if (value) {
            this.defaultTime = value;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnDestroy() {
        this.timepickerSubscriptions.forEach(s => s.unsubscribe());
    }
    registerTimepicker(picker) {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this.timepickerSubscriptions.push(this._timepicker.timeSet.subscribe((time) => {
                this.value = time;
                this.onChange(this.value);
                this.onTouched();
                this.defaultTime = this._value;
            }));
        }
        else {
            throw new Error('NgxMaterialTimepickerComponent is not defined.' +
                ' Please make sure you passed the timepicker to ngxTimepicker directive');
        }
    }
    updateInputValue() {
        this.elementRef.nativeElement.value = this.value;
    }
};
TimepickerDirective.ɵfac = function TimepickerDirective_Factory(t) { return new (t || TimepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE)); };
TimepickerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TimepickerDirective, selectors: [["", "ngxTimepicker", ""]], hostVars: 1, hostBindings: function TimepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function TimepickerDirective_change_HostBindingHandler($event) { return ctx.updateValue($event.target.value); })("blur", function TimepickerDirective_blur_HostBindingHandler() { return ctx.onTouched(); })("click", function TimepickerDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", value: "value", min: "min", max: "max", timepicker: ["ngxTimepicker", "timepicker"], disabled: "disabled", disableClick: "disableClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
                useExisting: TimepickerDirective_1,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
TimepickerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "format", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "min", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "max", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('ngxTimepicker')
], TimepickerDirective.prototype, "timepicker", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "value", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], TimepickerDirective.prototype, "disableClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('click', ['$event'])
], TimepickerDirective.prototype, "onClick", null);
TimepickerDirective = TimepickerDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], TimepickerDirective);

let NgxMaterialTimepickerThemeDirective = class NgxMaterialTimepickerThemeDirective {
    constructor(elementRef) {
        this.element = elementRef.nativeElement;
    }
    ngAfterViewInit() {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    }
    setTheme(theme) {
        for (const val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === 'string') {
                    for (const prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this.element.style.setProperty(`--${camelCaseToDash(prop)}`, theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    }
};
NgxMaterialTimepickerThemeDirective.ɵfac = function NgxMaterialTimepickerThemeDirective_Factory(t) { return new (t || NgxMaterialTimepickerThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
NgxMaterialTimepickerThemeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgxMaterialTimepickerThemeDirective, selectors: [["", "ngxMaterialTimepickerTheme", ""]], inputs: { theme: ["ngxMaterialTimepickerTheme", "theme"] } });
NgxMaterialTimepickerThemeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('ngxMaterialTimepickerTheme')
], NgxMaterialTimepickerThemeDirective.prototype, "theme", void 0);
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// @dynamic
class TimepickerTimeUtils {
    static getHours(format) {
        return Array(format).fill(1).map((v, i) => {
            const angleStep = 30;
            const time = v + i;
            const angle = angleStep * time;
            return { time: time === 24 ? 0 : time, angle };
        });
    }
    static disableHours(hours, config) {
        if (config.min || config.max) {
            return hours.map(value => {
                const hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);
                const currentTime = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({ hour }).toFormat(TimeFormat.TWELVE);
                return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours') });
            });
        }
        return hours;
    }
    static getMinutes(gap = 1) {
        const minutesCount = 60;
        const angleStep = 360 / minutesCount;
        const minutes = [];
        for (let i = 0; i < minutesCount; i++) {
            const angle = angleStep * i;
            if (i % gap === 0) {
                minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
            }
        }
        return minutes;
    }
    static disableMinutes(minutes, selectedHour, config) {
        if (config.min || config.max) {
            const hour = TimeAdapter.formatHour(selectedHour, config.format, config.period);
            return minutes.map(value => {
                const currentTime = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({ hour, minute: value.time }).toFormat(TimeFormat.TWELVE);
                return Object.assign({}, value, { disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes') });
            });
        }
        return minutes;
    }
}

class NgxMaterialTimepickerHoursFace {
    constructor(format) {
        this.hourChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.hoursList = [];
        this.hoursList = TimepickerTimeUtils.getHours(format);
    }
    onTimeSelected(time) {
        this.hourSelected.next(time);
    }
}
NgxMaterialTimepickerHoursFace.ɵfac = function NgxMaterialTimepickerHoursFace_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
NgxMaterialTimepickerHoursFace.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgxMaterialTimepickerHoursFace, inputs: { selectedHour: "selectedHour", minTime: "minTime", maxTime: "maxTime", format: "format" }, outputs: { hourChange: "hourChange", hourSelected: "hourSelected" } });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerHoursFace.prototype, "selectedHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerHoursFace.prototype, "minTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerHoursFace.prototype, "maxTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerHoursFace.prototype, "format", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerHoursFace.prototype, "hourChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerHoursFace.prototype, "hourSelected", void 0);

let NgxMaterialTimepicker24HoursFaceComponent = class NgxMaterialTimepicker24HoursFaceComponent extends NgxMaterialTimepickerHoursFace {
    constructor() {
        super(24);
    }
    ngAfterContentInit() {
        this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
};
NgxMaterialTimepicker24HoursFaceComponent.ɵfac = function NgxMaterialTimepicker24HoursFaceComponent_Factory(t) { return new (t || NgxMaterialTimepicker24HoursFaceComponent)(); };
NgxMaterialTimepicker24HoursFaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepicker24HoursFaceComponent, selectors: [["ngx-material-timepicker-24-hours-face"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 3, consts: [[3, "selectedTime", "faceTime", "format", "timeChange", "timeSelected"]], template: function NgxMaterialTimepicker24HoursFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeChange", function NgxMaterialTimepicker24HoursFaceComponent_Template_ngx_material_timepicker_face_timeChange_0_listener($event) { return ctx.hourChange.next($event); })("timeSelected", function NgxMaterialTimepicker24HoursFaceComponent_Template_ngx_material_timepicker_face_timeSelected_0_listener($event) { return ctx.onTimeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList)("format", ctx.format);
    } }, directives: function () { return [NgxMaterialTimepickerFaceComponent]; }, encapsulation: 2, changeDetection: 0 });

let NgxMaterialTimepicker12HoursFaceComponent = class NgxMaterialTimepicker12HoursFaceComponent extends NgxMaterialTimepickerHoursFace {
    constructor() {
        super(12);
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
};
NgxMaterialTimepicker12HoursFaceComponent.ɵfac = function NgxMaterialTimepicker12HoursFaceComponent_Factory(t) { return new (t || NgxMaterialTimepicker12HoursFaceComponent)(); };
NgxMaterialTimepicker12HoursFaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepicker12HoursFaceComponent, selectors: [["ngx-material-timepicker-12-hours-face"]], inputs: { period: "period" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 2, consts: [[3, "selectedTime", "faceTime", "timeChange", "timeSelected"]], template: function NgxMaterialTimepicker12HoursFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeChange", function NgxMaterialTimepicker12HoursFaceComponent_Template_ngx_material_timepicker_face_timeChange_0_listener($event) { return ctx.hourChange.next($event); })("timeSelected", function NgxMaterialTimepicker12HoursFaceComponent_Template_ngx_material_timepicker_face_timeSelected_0_listener($event) { return ctx.onTimeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList);
    } }, directives: function () { return [NgxMaterialTimepickerFaceComponent]; }, encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepicker12HoursFaceComponent.prototype, "period", void 0);

let NgxMaterialTimepickerMinutesFaceComponent = class NgxMaterialTimepickerMinutesFaceComponent {
    constructor() {
        this.minutesList = [];
        this.timeUnit = TimeUnit;
        this.minuteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue) {
            const minutes = TimepickerTimeUtils.getMinutes(this.minutesGap);
            this.minutesList = TimepickerTimeUtils.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
};
NgxMaterialTimepickerMinutesFaceComponent.ɵfac = function NgxMaterialTimepickerMinutesFaceComponent_Factory(t) { return new (t || NgxMaterialTimepickerMinutesFaceComponent)(); };
NgxMaterialTimepickerMinutesFaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerMinutesFaceComponent, selectors: [["ngx-material-timepicker-minutes-face"]], inputs: { selectedMinute: "selectedMinute", selectedHour: "selectedHour", period: "period", minTime: "minTime", maxTime: "maxTime", format: "format", minutesGap: "minutesGap" }, outputs: { minuteChange: "minuteChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 4, consts: [[3, "faceTime", "selectedTime", "minutesGap", "unit", "timeChange"]], template: function NgxMaterialTimepickerMinutesFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-material-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeChange", function NgxMaterialTimepickerMinutesFaceComponent_Template_ngx_material_timepicker_face_timeChange_0_listener($event) { return ctx.minuteChange.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("faceTime", ctx.minutesList)("selectedTime", ctx.selectedMinute)("minutesGap", ctx.minutesGap)("unit", ctx.timeUnit.MINUTE);
    } }, directives: function () { return [NgxMaterialTimepickerFaceComponent]; }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedMinute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "selectedHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "period", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "maxTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "format", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minutesGap", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerMinutesFaceComponent.prototype, "minuteChange", void 0);

const CLOCK_HAND_STYLES = {
    small: {
        height: '75px',
        top: 'calc(50% - 75px)'
    },
    large: {
        height: '103px',
        top: 'calc(50% - 103px)'
    }
};
let NgxMaterialTimepickerFaceComponent = class NgxMaterialTimepickerFaceComponent {
    constructor() {
        this.timeUnit = TimeUnit;
        this.innerClockFaceSize = 85;
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterViewInit() {
        this.setClockHandPosition();
        this.addTouchEvents();
    }
    ngOnChanges(changes) {
        const faceTimeChanges = changes['faceTime'];
        const selectedTimeChanges = changes['selectedTime'];
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(time => time.time === this.selectedTime.time);
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this.setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => this.selectAvailableTime());
        }
    }
    trackByTime(_, time) {
        return time.time;
    }
    onMousedown(e) {
        e.preventDefault();
        this.isStarted = true;
    }
    selectTime(e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        const arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        const circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        const isInnerClockChosen = this.format && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        const angleStep = this.unit === TimeUnit.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        const roundedAngle = roundAngle(circleAngle, angleStep);
        const angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
        const selectedTime = this.faceTime.find(val => val.angle === angle);
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this.isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    }
    onMouseup(e) {
        e.preventDefault();
        this.isStarted = false;
    }
    ngOnDestroy() {
        this.removeTouchEvents();
    }
    addTouchEvents() {
        this.touchStartHandler = this.onMousedown.bind(this);
        this.touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.addEventListener('touchend', this.touchEndHandler);
    }
    removeTouchEvents() {
        this.clockFace.nativeElement.removeEventListener('touchstart', this.touchStartHandler);
        this.clockFace.nativeElement.removeEventListener('touchend', this.touchEndHandler);
    }
    setClockHandPosition() {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this.decreaseClockHand();
            }
            else {
                this.increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = `rotate(${this.selectedTime.angle}deg)`;
    }
    selectAvailableTime() {
        const currentTime = this.faceTime.find(time => this.selectedTime.time === time.time);
        this.isClockFaceDisabled = this.faceTime.every(time => time.disabled);
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            const availableTime = this.faceTime.find(time => !time.disabled);
            this.timeChange.next(availableTime);
        }
    }
    isInnerClockFace(x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    }
    decreaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    }
    increaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    }
};
NgxMaterialTimepickerFaceComponent.ɵfac = function NgxMaterialTimepickerFaceComponent_Factory(t) { return new (t || NgxMaterialTimepickerFaceComponent)(); };
NgxMaterialTimepickerFaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerFaceComponent, selectors: [["ngx-material-timepicker-face"]], viewQuery: function NgxMaterialTimepickerFaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clockFace = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clockHand = _t.first);
    } }, hostBindings: function NgxMaterialTimepickerFaceComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function NgxMaterialTimepickerFaceComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function NgxMaterialTimepickerFaceComponent_click_HostBindingHandler($event) { return ctx.selectTime($event); })("touchmove", function NgxMaterialTimepickerFaceComponent_touchmove_HostBindingHandler($event) { return ctx.selectTime($event.changedTouches[0]); })("touchend", function NgxMaterialTimepickerFaceComponent_touchend_HostBindingHandler($event) { return ctx.selectTime($event.changedTouches[0]); })("mousemove", function NgxMaterialTimepickerFaceComponent_mousemove_HostBindingHandler($event) { return ctx.selectTime($event); })("mouseup", function NgxMaterialTimepickerFaceComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); });
    } }, inputs: { selectedTime: "selectedTime", faceTime: "faceTime", unit: "unit", format: "format", minutesGap: "minutesGap" }, outputs: { timeChange: "timeChange", timeSelected: "timeSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 6, consts: [[1, "clock-face"], ["clockFace", ""], ["class", "clock-face__container", 4, "ngIf", "ngIfElse"], [1, "clock-face__clock-hand", 3, "ngClass", "hidden"], ["clockHand", ""], ["minutesFace", ""], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "clock-face__inner", 3, "top", 4, "ngIf"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [3, "ngStyle", "ngClass"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "ngStyle", "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"]], template: function NgxMaterialTimepickerFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMaterialTimepickerFaceComponent_div_2_Template, 4, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxMaterialTimepickerFaceComponent_ng_template_5_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unit !== ctx.timeUnit.MINUTE)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c7, ctx.unit === ctx.timeUnit.MINUTE))("hidden", ctx.isClockFaceDisabled);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, ActiveHourPipe, TimeLocalizerPipe, ActiveMinutePipe, MinutesFormatterPipe]; }, styles: [".clock-face[_ngcontent-%COMP%]{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face[_ngcontent-%COMP%]{background-color:var(--clock-face-background-color)}}.clock-face__inner[_ngcontent-%COMP%]{position:absolute}.clock-face__container[_ngcontent-%COMP%]{margin-left:-2px}.clock-face__number[_ngcontent-%COMP%]{position:absolute;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer[_ngcontent-%COMP%]{height:calc(290px / 2 - 20px)}.clock-face__number--outer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-family:var(--primary-font-family)}}.clock-face__number[_ngcontent-%COMP%] > span.active[_ngcontent-%COMP%]{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number[_ngcontent-%COMP%] > span.active[_ngcontent-%COMP%]{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand[_ngcontent-%COMP%]{height:103px;width:2px;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand[_ngcontent-%COMP%]{background-color:var(--clock-hand-color)}}.clock-face__clock-hand[_ngcontent-%COMP%]:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute[_ngcontent-%COMP%]:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute[_ngcontent-%COMP%]:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face[_ngcontent-%COMP%]{width:225px;height:225px;padding:5px}.clock-face__number--outer[_ngcontent-%COMP%]{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute[_ngcontent-%COMP%]:before{top:0}}"], changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerFaceComponent.prototype, "faceTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerFaceComponent.prototype, "selectedTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerFaceComponent.prototype, "unit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerFaceComponent.prototype, "format", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerFaceComponent.prototype, "minutesGap", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerFaceComponent.prototype, "timeChange", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerFaceComponent.prototype, "timeSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('clockFace', { static: true })
], NgxMaterialTimepickerFaceComponent.prototype, "clockFace", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild)('clockHand', { static: true })
], NgxMaterialTimepickerFaceComponent.prototype, "clockHand", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('mousedown', ['$event'])
], NgxMaterialTimepickerFaceComponent.prototype, "onMousedown", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('click', ['$event']),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('touchmove', ['$event.changedTouches[0]']),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('touchend', ['$event.changedTouches[0]']),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('mousemove', ['$event'])
], NgxMaterialTimepickerFaceComponent.prototype, "selectTime", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('mouseup', ['$event'])
], NgxMaterialTimepickerFaceComponent.prototype, "onMouseup", null);
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}

let NgxMaterialTimepickerButtonComponent = class NgxMaterialTimepickerButtonComponent {
};
NgxMaterialTimepickerButtonComponent.ɵfac = function NgxMaterialTimepickerButtonComponent_Factory(t) { return new (t || NgxMaterialTimepickerButtonComponent)(); };
NgxMaterialTimepickerButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerButtonComponent, selectors: [["ngx-material-timepicker-button"]], ngContentSelectors: _c8, decls: 3, vars: 0, consts: [["type", "button", 1, "timepicker-button"]], template: function NgxMaterialTimepickerButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".timepicker-button[_ngcontent-%COMP%]{display:inline-block;height:36px;min-width:88px;line-height:36px;border:12px;border-radius:2px;background-color:transparent;text-align:center;transition:450ms cubic-bezier(.23,1,.32,1);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:pointer;outline:0;color:#00bfff}@supports (color:var(--button-color)){.timepicker-button[_ngcontent-%COMP%]{color:var(--button-color)}}.timepicker-button[_ngcontent-%COMP%]:focus, .timepicker-button[_ngcontent-%COMP%]:hover{background-color:rgba(153,153,153,.2)}.timepicker-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;font-weight:600;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-family:var(--primary-font-family)}}"] });

let NgxMaterialTimepickerDialComponent = class NgxMaterialTimepickerDialComponent {
    constructor(locale) {
        this.locale = locale;
        this.timeUnit = TimeUnit;
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_0__.Info.meridiems({ locale: this.locale });
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.hourChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.minuteChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['period'] && changes['period'].currentValue
            || changes['format'] && changes['format'].currentValue) {
            const hours = TimepickerTimeUtils.getHours(this.format);
            this.hours = TimepickerTimeUtils.disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (changes['period'] && changes['period'].currentValue
            || changes['hour'] && changes['hour'].currentValue) {
            const minutes = TimepickerTimeUtils.getMinutes(this.minutesGap);
            this.minutes = TimepickerTimeUtils.disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
    changeTimeUnit(unit) {
        this.timeUnitChanged.next(unit);
    }
    changePeriod(period) {
        this.periodChanged.next(period);
    }
    changeHour(hour) {
        this.hourChanged.next(hour);
    }
    changeMinute(minute) {
        this.minuteChanged.next(minute);
    }
    showHint() {
        this.isHintVisible = true;
    }
    hideHint() {
        this.isHintVisible = false;
    }
};
NgxMaterialTimepickerDialComponent.ɵfac = function NgxMaterialTimepickerDialComponent_Factory(t) { return new (t || NgxMaterialTimepickerDialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE)); };
NgxMaterialTimepickerDialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerDialComponent, selectors: [["ngx-material-timepicker-dial"]], inputs: { editableHintTmpl: "editableHintTmpl", hour: "hour", minute: "minute", format: "format", period: "period", activeTimeUnit: "activeTimeUnit", minTime: "minTime", maxTime: "maxTime", isEditable: "isEditable", minutesGap: "minutesGap", hoursOnly: "hoursOnly" }, outputs: { periodChanged: "periodChanged", timeUnitChanged: "timeUnitChanged", hourChanged: "hourChanged", minuteChanged: "minuteChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 25, consts: [[1, "timepicker-dial"], [1, "timepicker-dial__container"], [1, "timepicker-dial__time"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "timeUnitChanged", "timeChanged", "focused", "unfocused"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "minutesGap", "disabled", "timeUnitChanged", "timeChanged", "focused", "unfocused"], [1, "timepicker-dial__period", 3, "ngClass", "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet"], ["editableHintDefault", ""], [1, "timepicker-dial__hint"]], template: function NgxMaterialTimepickerDialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-material-timepicker-dial-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeUnitChanged", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_timeUnitChanged_3_listener($event) { return ctx.changeTimeUnit($event); })("timeChanged", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_timeChanged_3_listener($event) { return ctx.changeHour($event); })("focused", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_focused_3_listener() { return ctx.showHint(); })("unfocused", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_unfocused_3_listener() { return ctx.hideHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-material-timepicker-dial-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeUnitChanged", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_timeUnitChanged_6_listener($event) { return ctx.changeTimeUnit($event); })("timeChanged", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_timeChanged_6_listener($event) { return ctx.changeMinute($event); })("focused", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_focused_6_listener() { return ctx.showHint(); })("unfocused", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_dial_control_unfocused_6_listener() { return ctx.hideHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngx-material-timepicker-period", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("periodChanged", function NgxMaterialTimepickerDialComponent_Template_ngx_material_timepicker_period_periodChanged_7_listener($event) { return ctx.changePeriod($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgxMaterialTimepickerDialComponent_div_8_Template, 4, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("timeList", ctx.hours)("time", ctx.hour)("timeUnit", ctx.timeUnit.HOUR)("isActive", ctx.activeTimeUnit === ctx.timeUnit.HOUR)("isEditable", ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("timeList", ctx.minutes)("time", ctx.minute)("timeUnit", ctx.timeUnit.MINUTE)("isActive", ctx.activeTimeUnit === ctx.timeUnit.MINUTE)("isEditable", ctx.isEditable)("minutesGap", ctx.minutesGap)("disabled", ctx.hoursOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c10, ctx.format === 24))("selectedPeriod", ctx.period)("activeTimeUnit", ctx.activeTimeUnit)("maxTime", ctx.maxTime)("minTime", ctx.minTime)("format", ctx.format)("hours", ctx.hours)("minutes", ctx.minutes)("selectedHour", ctx.hour)("meridiems", ctx.meridiems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditable || ctx.editableHintTmpl);
    } }, directives: function () { return [NgxMaterialTimepickerDialControlComponent, NgxMaterialTimepickerPeriodComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet]; }, styles: [".timepicker-dial[_ngcontent-%COMP%]{text-align:right}.timepicker-dial__container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time[_ngcontent-%COMP%]{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time[_ngcontent-%COMP%]{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period[_ngcontent-%COMP%]{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden[_ngcontent-%COMP%], .timepicker-dial__period--hidden[_ngcontent-%COMP%]{visibility:hidden}.timepicker-dial__hint[_ngcontent-%COMP%]{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint[_ngcontent-%COMP%]{color:var(--dial-active-color)}}.timepicker-dial__hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container[_ngcontent-%COMP%]{flex-direction:column}.timepicker-dial__period[_ngcontent-%COMP%]{margin-left:0}}"], changeDetection: 0 });
NgxMaterialTimepickerDialComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "editableHintTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "hour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "minute", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "format", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "period", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "activeTimeUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "minTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "maxTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "isEditable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "minutesGap", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialComponent.prototype, "hoursOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialComponent.prototype, "periodChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialComponent.prototype, "timeUnitChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialComponent.prototype, "hourChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialComponent.prototype, "minuteChanged", void 0);
NgxMaterialTimepickerDialComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], NgxMaterialTimepickerDialComponent);

let TimeParserPipe = class TimeParserPipe {
    constructor(locale) {
        this.locale = locale;
        this.numberingSystem = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().setLocale(this.locale).resolvedLocaleOpts().numberingSystem;
    }
    transform(time, timeUnit = TimeUnit.HOUR) {
        if (time == null || time === '') {
            return '';
        }
        if (!isNaN(+time)) {
            return time;
        }
        if (timeUnit === TimeUnit.MINUTE) {
            return this.parseTime(time, 'm', 'minute');
        }
        return this.parseTime(time, 'H', 'hour');
    }
    parseTime(time, format, timeMeasure) {
        const parsedTime = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromFormat(String(time), format, { numberingSystem: this.numberingSystem })[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }
        throw new Error(`Cannot parse time - ${time}`);
    }
};
TimeParserPipe.ɵfac = function TimeParserPipe_Factory(t) { return new (t || TimeParserPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE, 16)); };
TimeParserPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timeParser", type: TimeParserPipe, pure: true });
TimeParserPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimeParserPipe, factory: function (t) { return TimeParserPipe.ɵfac(t); } });
TimeParserPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
TimeParserPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], TimeParserPipe);

let NgxMaterialTimepickerDialControlComponent = class NgxMaterialTimepickerDialControlComponent {
    constructor(timeParserPipe) {
        this.timeParserPipe = timeParserPipe;
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.unfocused = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    get selectedTime() {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }
    }
    saveTimeAndChangeTimeUnit(event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    }
    updateTime() {
        const time = this.selectedTime;
        if (time) {
            this.timeChanged.next(time);
            this.previousTime = time.time;
        }
    }
    changeTimeByKeyboard(e) {
        const char = String.fromCharCode(e.keyCode);
        if (isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
    }
    onKeydown(e) {
        if (!isDigit(e)) {
            e.preventDefault();
        }
        else {
            this.changeTimeByArrow(e.keyCode);
        }
    }
    onModelChange(value) {
        this.time = this.timeParserPipe.transform(value, this.timeUnit).toString();
    }
    changeTimeByArrow(keyCode) {
        const ARROW_UP = 38;
        const ARROW_DOWN = 40;
        let time;
        if (keyCode === ARROW_UP) {
            time = String(+this.time + (this.minutesGap || 1));
        }
        else if (keyCode === ARROW_DOWN) {
            time = String(+this.time - (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    }
};
NgxMaterialTimepickerDialControlComponent.ɵfac = function NgxMaterialTimepickerDialControlComponent_Factory(t) { return new (t || NgxMaterialTimepickerDialControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TimeParserPipe)); };
NgxMaterialTimepickerDialControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerDialControlComponent, selectors: [["ngx-material-timepicker-dial-control"]], inputs: { time: "time", timeList: "timeList", timeUnit: "timeUnit", isActive: "isActive", isEditable: "isEditable", minutesGap: "minutesGap", disabled: "disabled" }, outputs: { timeUnitChanged: "timeUnitChanged", timeChanged: "timeChanged", focused: "focused", unfocused: "unfocused" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([TimeParserPipe])], decls: 3, vars: 2, consts: [["class", "timepicker-dial__control timepicker-dial__item", "readonly", "", 3, "ngClass", "ngModel", "disabled", "timepickerAutofocus", "ngModelChange", "input", "focus", 4, "ngIf", "ngIfElse"], ["editableTemplate", ""], ["readonly", "", 1, "timepicker-dial__control", "timepicker-dial__item", 3, "ngClass", "ngModel", "disabled", "timepickerAutofocus", "ngModelChange", "input", "focus"], [1, "timepicker-dial__control", "timepicker-dial__item", "timepicker-dial__control_editable", 3, "ngClass", "ngModel", "disabled", "timepickerAutofocus", "ngModelChange", "input", "focus", "keydown", "keypress"]], template: function NgxMaterialTimepickerDialControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxMaterialTimepickerDialControlComponent_input_0_Template, 2, 9, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerDialControlComponent_ng_template_1_Template, 3, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditable)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, AutofocusDirective]; }, pipes: function () { return [TimeLocalizerPipe, TimeParserPipe]; }, styles: [".timepicker-dial__item[_ngcontent-%COMP%]{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item[_ngcontent-%COMP%]{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active[_ngcontent-%COMP%]{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active[_ngcontent-%COMP%]{color:var(--dial-active-color)}}.timepicker-dial__control[_ngcontent-%COMP%]{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:right}.timepicker-dial__control_editable[_ngcontent-%COMP%]:focus{color:#00bfff;background-color:#fff;outline:#00bfff}@supports (color:var(--dial-editable-active-color)){.timepicker-dial__control_editable[_ngcontent-%COMP%]:focus{color:var(--dial-editable-active-color)}}@supports (background-color:var(--dial-editable-background-color)){.timepicker-dial__control_editable[_ngcontent-%COMP%]:focus{background-color:var(--dial-editable-background-color)}}@supports (outline:var(--dial-editable-active-color)){.timepicker-dial__control_editable[_ngcontent-%COMP%]:focus{outline:var(--dial-editable-active-color)}}.timepicker-dial__control[_ngcontent-%COMP%]:disabled{cursor:default}"] });
NgxMaterialTimepickerDialControlComponent.ctorParameters = () => [
    { type: TimeParserPipe }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "timeList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "time", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "isActive", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "isEditable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "minutesGap", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerDialControlComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialControlComponent.prototype, "timeUnitChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialControlComponent.prototype, "timeChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialControlComponent.prototype, "focused", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerDialControlComponent.prototype, "unfocused", void 0);
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    const selectedTime = timeList.find(value => value.time === +time);
    return !selectedTime || (selectedTime && selectedTime.disabled);
}

let NgxMaterialTimepickerPeriodComponent = class NgxMaterialTimepickerPeriodComponent {
    constructor() {
        this.timePeriod = TimePeriod;
        this.isPeriodAvailable = true;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    changePeriod(period) {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    }
    animationDone() {
        this.isPeriodAvailable = true;
    }
    isSwitchPeriodAvailable(period) {
        const time = this.getDisabledTimeByPeriod(period);
        return !time.every(t => t.disabled);
    }
    getDisabledTimeByPeriod(period) {
        switch (this.activeTimeUnit) {
            case TimeUnit.HOUR:
                return TimepickerTimeUtils.disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            case TimeUnit.MINUTE:
                return TimepickerTimeUtils.disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            default:
                throw new Error('no such TimeUnit');
        }
    }
};
NgxMaterialTimepickerPeriodComponent.ɵfac = function NgxMaterialTimepickerPeriodComponent_Factory(t) { return new (t || NgxMaterialTimepickerPeriodComponent)(); };
NgxMaterialTimepickerPeriodComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerPeriodComponent, selectors: [["ngx-material-timepicker-period"]], inputs: { selectedPeriod: "selectedPeriod", format: "format", activeTimeUnit: "activeTimeUnit", hours: "hours", minutes: "minutes", minTime: "minTime", maxTime: "maxTime", selectedHour: "selectedHour", meridiems: "meridiems" }, outputs: { periodChanged: "periodChanged" }, decls: 6, vars: 9, consts: [[1, "timepicker-period"], ["type", "button", 1, "timepicker-dial__item", "timepicker-period__btn", 3, "ngClass", "click"], ["class", "timepicker-period__warning", 4, "ngIf"], [1, "timepicker-period__warning"]], template: function NgxMaterialTimepickerPeriodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMaterialTimepickerPeriodComponent_Template_button_click_1_listener() { return ctx.changePeriod(ctx.timePeriod.AM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMaterialTimepickerPeriodComponent_Template_button_click_3_listener() { return ctx.changePeriod(ctx.timePeriod.PM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxMaterialTimepickerPeriodComponent_div_5_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c11, ctx.selectedPeriod === ctx.timePeriod.AM));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meridiems[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c11, ctx.selectedPeriod === ctx.timePeriod.PM));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meridiems[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPeriodAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".timepicker-dial__item[_ngcontent-%COMP%]{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item[_ngcontent-%COMP%]{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active[_ngcontent-%COMP%]{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active[_ngcontent-%COMP%]{color:var(--dial-active-color)}}.timepicker-period[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.timepicker-period__btn[_ngcontent-%COMP%]{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn[_ngcontent-%COMP%]:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning[_ngcontent-%COMP%]{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn[_ngcontent-%COMP%], .timepicker-period__warning[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-family:var(--primary-font-family)}}"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('.2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(1)' })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.sequence)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 })),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }))
                    ])
                ])
            ])
        ] } });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "selectedPeriod", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "format", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "activeTimeUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "hours", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "minutes", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "minTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "maxTime", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "selectedHour", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerPeriodComponent.prototype, "meridiems", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxMaterialTimepickerPeriodComponent.prototype, "periodChanged", void 0);

let TimeFormatterPipe = class TimeFormatterPipe {
    transform(time, timeUnit) {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case TimeUnit.HOUR:
                return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({ hour: +time }).toFormat('HH');
            case TimeUnit.MINUTE:
                return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({ minute: +time }).toFormat('mm');
            default:
                throw new Error('no such time unit');
        }
    }
};
TimeFormatterPipe.ɵfac = function TimeFormatterPipe_Factory(t) { return new (t || TimeFormatterPipe)(); };
TimeFormatterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timeFormatter", type: TimeFormatterPipe, pure: true });

let OverlayDirective = class OverlayDirective {
    constructor(eventService) {
        this.eventService = eventService;
    }
    onClick(e) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    }
};
OverlayDirective.ɵfac = function OverlayDirective_Factory(t) { return new (t || OverlayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaterialTimepickerEventService)); };
OverlayDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OverlayDirective, selectors: [["", "overlay", ""]], hostBindings: function OverlayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlayDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { preventClick: ["overlay", "preventClick"] } });
OverlayDirective.ctorParameters = () => [
    { type: NgxMaterialTimepickerEventService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('overlay')
], OverlayDirective.prototype, "preventClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('click', ['$event'])
], OverlayDirective.prototype, "onClick", null);

let MinutesFormatterPipe = class MinutesFormatterPipe {
    transform(minute, gap = 5) {
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    }
};
MinutesFormatterPipe.ɵfac = function MinutesFormatterPipe_Factory(t) { return new (t || MinutesFormatterPipe)(); };
MinutesFormatterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "minutesFormatter", type: MinutesFormatterPipe, pure: true });

let AutofocusDirective = class AutofocusDirective {
    constructor(element, document) {
        this.element = element;
        this.document = document;
        this.activeElement = this.document.activeElement;
    }
    ngOnChanges() {
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(() => this.element.nativeElement.focus({ preventScroll: true }));
        }
    }
    ngOnDestroy() {
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(() => this.activeElement.focus({ preventScroll: true }));
    }
};
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8)); };
AutofocusDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "timepickerAutofocus", ""]], inputs: { isFocusActive: ["timepickerAutofocus", "isFocusActive"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('timepickerAutofocus')
], AutofocusDirective.prototype, "isFocusActive", void 0);
AutofocusDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT))
], AutofocusDirective);

var NgxTimepickerFieldComponent_1;
let NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = class NgxTimepickerFieldComponent {
    constructor(timepickerService, locale) {
        this.timepickerService = timepickerService;
        this.locale = locale;
        this.minHour = 1;
        this.maxHour = 12;
        this.timeUnit = TimeUnit;
        this.buttonAlign = 'right';
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this._format = 12;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.isFirstTimeChange = true;
        this.onChange = () => {
        };
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        this.minHour = this._format === 12 ? 1 : 0;
        this.maxHour = this._format === 12 ? 12 : 23;
        this.hoursList = TimepickerTimeUtils.getHours(this._format);
        const isDynamicallyChanged = value && (this.previousFormat && this.previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.updateTime(this.timepickerTime);
        }
        this.previousFormat = this._format;
    }
    get format() {
        return this._format;
    }
    set min(value) {
        if (typeof value === 'string') {
            this._min = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._min = value;
    }
    get min() {
        return this._min;
    }
    set max(value) {
        if (typeof value === 'string') {
            this._max = TimeAdapter.parseTime(value, { locale: this.locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get max() {
        return this._max;
    }
    set defaultTime(val) {
        this._defaultTime = val;
        this.isDefaultTime = !!val;
    }
    get defaultTime() {
        return this._defaultTime;
    }
    ngOnInit() {
        this.initTime(this.defaultTime);
        this.hoursList = TimepickerTimeUtils.getHours(this._format);
        this.minutesList = TimepickerTimeUtils.getMinutes();
        this.isTimeRangeSet = !!(this.min || this.max);
        this.hour$ = this.timepickerService.selectedHour.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)((clockTime) => this.selectedHour = clockTime.time), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(this.changeDefaultTimeValue.bind(this)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.isTimeRangeSet && this.updateAvailableMinutes()));
        this.minute$ = this.timepickerService.selectedMinute.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(this.changeDefaultTimeValue.bind(this)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.isFirstTimeChange = false));
        if (this.format === 12) {
            this.timepickerService.selectedPeriod.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)((period) => this.period = period), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(period => this.isChangePeriodDisabled = this.isPeriodDisabled(period)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(() => this.isTimeRangeSet && this.updateAvailableTime());
        }
    }
    writeValue(val) {
        if (val) {
            this.initTime(val);
        }
        else {
            this.resetTime();
        }
    }
    registerOnTouched(fn) {
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    changeHour(hour) {
        this.timepickerService.hour = this.hoursList.find(h => h.time === hour);
        this.changeTime();
    }
    changeMinute(minute) {
        this.timepickerService.minute = this.minutesList.find(m => m.time === minute);
        this.changeTime();
    }
    changePeriod(period) {
        this.timepickerService.period = period;
        this.changeTime();
    }
    onTimeSet(time) {
        this.updateTime(time);
        this.emitLocalTimeChange(time);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    changeTime() {
        const time = this.timepickerService.getFullTime(this.format);
        this.timepickerTime = time;
        this.emitLocalTimeChange(time);
    }
    resetTime() {
        this.timepickerService.hour = { angle: 0, time: null };
        this.timepickerService.minute = { angle: 0, time: null };
    }
    emitLocalTimeChange(time) {
        const localTime = TimeAdapter.toLocaleTimeString(time, { format: this.format, locale: this.locale });
        this.onChange(localTime);
        this.timeChanged.emit(localTime);
    }
    changeDefaultTimeValue(clockFaceTime) {
        if (!this.isDefaultTime && this.isFirstTimeChange) {
            return Object.assign({}, clockFaceTime, { time: null });
        }
        return clockFaceTime;
    }
    updateAvailableHours() {
        this.hoursList = TimepickerTimeUtils.disableHours(this.hoursList, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    }
    updateAvailableMinutes() {
        this.minutesList = TimepickerTimeUtils.disableMinutes(this.minutesList, this.selectedHour, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    }
    updateAvailableTime() {
        this.updateAvailableHours();
        if (this.selectedHour) {
            this.updateAvailableMinutes();
        }
    }
    updateTime(time) {
        if (time) {
            const formattedTime = TimeAdapter.formatTime(time, { locale: this.locale, format: this.format });
            this.timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min, this.max, this.format);
            this.timepickerTime = formattedTime;
        }
    }
    initTime(time) {
        const isDefaultTimeAvailable = TimeAdapter
            .isTimeAvailable(time, this.min, this.max, 'minutes', null, this.format);
        if (!isDefaultTimeAvailable) {
            if (this.min) {
                this.updateTime(TimeAdapter.fromDateTimeToString(this.min, this.format));
                return;
            }
            if (this.max) {
                this.updateTime(TimeAdapter.fromDateTimeToString(this.max, this.format));
                return;
            }
        }
        this.updateTime(time);
    }
    isPeriodDisabled(period) {
        return TimepickerTimeUtils.disableHours(TimepickerTimeUtils.getHours(12), {
            min: this.min,
            max: this.max,
            format: 12,
            period: period === TimePeriod.AM ? TimePeriod.PM : TimePeriod.AM
        }).every(time => time.disabled);
    }
};
NgxTimepickerFieldComponent.ɵfac = function NgxTimepickerFieldComponent_Factory(t) { return new (t || NgxTimepickerFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaterialTimepickerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE)); };
NgxTimepickerFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxTimepickerFieldComponent, selectors: [["ngx-timepicker-field"]], inputs: { buttonAlign: "buttonAlign", format: "format", min: "min", max: "max", defaultTime: "defaultTime", disabled: "disabled", toggleIcon: "toggleIcon", clockTheme: "clockTheme", controlOnly: "controlOnly", cancelBtnTmpl: "cancelBtnTmpl", confirmBtnTmpl: "confirmBtnTmpl" }, outputs: { timeChanged: "timeChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            NgxMaterialTimepickerService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
                useExisting: NgxTimepickerFieldComponent_1,
                multi: true
            }
        ])], decls: 13, vars: 32, consts: [[1, "ngx-timepicker", 3, "ngClass"], [1, "ngx-timepicker__control--first", 3, "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "ngx-timepicker__time-colon", "ngx-timepicker__control--second"], [1, "ngx-timepicker__control--third", 3, "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], ["class", "ngx-timepicker__control--forth", 3, "selectedPeriod", "disabled", "periodSelected", 4, "ngIf"], ["class", "ngx-timepicker__toggle", 3, "ngClass", "for", "disabled", 4, "ngIf"], [3, "min", "max", "theme", "defaultTime", "format", "cancelBtnTmpl", "confirmBtnTmpl", "timeSet"], ["timepicker", ""], ["defaultIcon", ""], [1, "ngx-timepicker__control--forth", 3, "selectedPeriod", "disabled", "periodSelected"], [1, "ngx-timepicker__toggle", 3, "ngClass", "for", "disabled"], ["ngxMaterialTimepickerToggleIcon", ""], [4, "ngTemplateOutlet"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px"], ["d", "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"]], template: function NgxTimepickerFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-timepicker-time-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeChanged", function NgxTimepickerFieldComponent_Template_ngx_timepicker_time_control_timeChanged_1_listener($event) { return ctx.changeHour($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-timepicker-time-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeChanged", function NgxTimepickerFieldComponent_Template_ngx_timepicker_time_control_timeChanged_5_listener($event) { return ctx.changeMinute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgxTimepickerFieldComponent_ngx_timepicker_period_selector_7_Template, 1, 2, "ngx-timepicker-period-selector", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgxTimepickerFieldComponent_ngx_material_timepicker_toggle_8_Template, 3, 6, "ngx-material-timepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ngx-material-timepicker", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeSet", function NgxTimepickerFieldComponent_Template_ngx_material_timepicker_timeSet_9_listener($event) { return ctx.onTimeSet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NgxTimepickerFieldComponent_ng_template_11_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_10_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c13, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "HH")("time", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 26, ctx.hour$)) == null ? null : tmp_2_0.time)("min", ctx.minHour)("max", ctx.maxHour)("timeUnit", ctx.timeUnit.HOUR)("disabled", ctx.disabled)("timeList", ctx.hoursList)("preventTyping", ctx.isTimeRangeSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "MM")("time", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 28, ctx.minute$)) == null ? null : tmp_10_0.time)("min", 0)("max", 59)("timeUnit", ctx.timeUnit.MINUTE)("disabled", ctx.disabled)("timeList", ctx.minutesList)("preventTyping", ctx.isTimeRangeSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.format !== 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.controlOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("theme", ctx.clockTheme)("defaultTime", ctx.timepickerTime)("format", ctx.format)("cancelBtnTmpl", ctx.cancelBtnTmpl)("confirmBtnTmpl", ctx.confirmBtnTmpl);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, NgxTimepickerTimeControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, NgxMaterialTimepickerComponent, NgxTimepickerPeriodSelectorComponent, NgxMaterialTimepickerToggleComponent, NgxMaterialTimepickerToggleIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe]; }, styles: [".ngx-timepicker[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled[_ngcontent-%COMP%]{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon[_ngcontent-%COMP%]{margin-left:10px}.ngx-timepicker__control--first[_ngcontent-%COMP%]{order:1}.ngx-timepicker__control--second[_ngcontent-%COMP%]{order:2}.ngx-timepicker__control--third[_ngcontent-%COMP%]{order:3}.ngx-timepicker__control--forth[_ngcontent-%COMP%], .ngx-timepicker__toggle[_ngcontent-%COMP%]{order:4}.ngx-timepicker__toggle--left[_ngcontent-%COMP%]{order:0}"], changeDetection: 0 });
NgxTimepickerFieldComponent.ctorParameters = () => [
    { type: NgxMaterialTimepickerService },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "toggleIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "buttonAlign", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "clockTheme", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "controlOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "cancelBtnTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "confirmBtnTmpl", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "format", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "min", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "max", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerFieldComponent.prototype, "defaultTime", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxTimepickerFieldComponent.prototype, "timeChanged", void 0);
NgxTimepickerFieldComponent = NgxTimepickerFieldComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], NgxTimepickerFieldComponent);

let NgxTimepickerTimeControlComponent = class NgxTimepickerTimeControlComponent {
    constructor(timeParser) {
        this.timeParser = timeParser;
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.timeList && this.time != null) {
            if (this.isSelectedTimeDisabled(this.time)) {
                this.setAvailableTime();
            }
        }
    }
    changeTime(event) {
        event.stopPropagation();
        const char = String.fromCharCode(event.keyCode);
        const time = concatTime(String(this.time), char);
        this.changeTimeIfValid(time);
    }
    onKeydown(event) {
        event.stopPropagation();
        if (!isDigit(event)) {
            event.preventDefault();
        }
        switch (event.key) {
            case 'ArrowUp':
                this.increase();
                break;
            case 'ArrowDown':
                this.decrease();
                break;
        }
        if (this.preventTyping && event.key !== 'Tab') {
            event.preventDefault();
        }
    }
    increase() {
        if (!this.disabled) {
            let nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            if (this.isSelectedTimeDisabled(nextTime)) {
                nextTime = this.getAvailableTime(nextTime, this.getNextAvailableTime.bind(this));
            }
            if (nextTime !== this.time) {
                this.timeChanged.emit(nextTime);
            }
        }
    }
    decrease() {
        if (!this.disabled) {
            let previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            if (this.isSelectedTimeDisabled(previousTime)) {
                previousTime = this.getAvailableTime(previousTime, this.getPrevAvailableTime.bind(this));
            }
            if (previousTime !== this.time) {
                this.timeChanged.emit(previousTime);
            }
        }
    }
    onFocus() {
        this.isFocused = true;
        this.previousTime = this.time;
    }
    onBlur() {
        this.isFocused = false;
        if (this.previousTime !== this.time) {
            this.changeTimeIfValid(+this.time);
        }
    }
    onModelChange(value) {
        this.time = +this.timeParser.transform(value, this.timeUnit);
    }
    changeTimeIfValid(value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                const timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
    }
    isSelectedTimeDisabled(time) {
        return this.timeList.find((faceTime) => faceTime.time === time).disabled;
    }
    getNextAvailableTime(index) {
        const timeCollection = this.timeList;
        const maxValue = timeCollection.length;
        for (let i = index + 1; i < maxValue; i++) {
            const time = timeCollection[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    }
    getPrevAvailableTime(index) {
        for (let i = index; i >= 0; i--) {
            const time = this.timeList[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    }
    getAvailableTime(currentTime, fn) {
        const currentTimeIndex = this.timeList.findIndex(time => time.time === currentTime);
        const availableTime = fn(currentTimeIndex);
        return availableTime != null ? availableTime : this.time;
    }
    setAvailableTime() {
        this.time = this.timeList.find(t => !t.disabled).time;
        this.timeChanged.emit(this.time);
    }
};
NgxTimepickerTimeControlComponent.ɵfac = function NgxTimepickerTimeControlComponent_Factory(t) { return new (t || NgxTimepickerTimeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TimeParserPipe)); };
NgxTimepickerTimeControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxTimepickerTimeControlComponent, selectors: [["ngx-timepicker-time-control"]], inputs: { time: "time", min: "min", max: "max", placeholder: "placeholder", timeUnit: "timeUnit", disabled: "disabled", timeList: "timeList", preventTyping: "preventTyping" }, outputs: { timeChanged: "timeChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([TimeParserPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 13, consts: [[1, "ngx-timepicker-control", 3, "ngClass"], ["maxlength", "2", 1, "ngx-timepicker-control__input", 3, "ngModel", "placeholder", "disabled", "ngModelChange", "keydown", "keypress", "focus", "blur"], [1, "ngx-timepicker-control__arrows"], ["role", "button", 1, "ngx-timepicker-control__arrow", 3, "click"]], template: function NgxTimepickerTimeControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgxTimepickerTimeControlComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onModelChange($event); })("keydown", function NgxTimepickerTimeControlComponent_Template_input_keydown_1_listener($event) { return ctx.onKeydown($event); })("keypress", function NgxTimepickerTimeControlComponent_Template_input_keypress_1_listener($event) { return ctx.changeTime($event); })("focus", function NgxTimepickerTimeControlComponent_Template_input_focus_1_listener() { return ctx.onFocus(); })("blur", function NgxTimepickerTimeControlComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "timeLocalizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "timeParser");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerTimeControlComponent_Template_span_click_5_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u25B2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerTimeControlComponent_Template_span_click_7_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u25BC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c14, ctx.isFocused));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 8, ctx.time, ctx.timeUnit), ctx.timeUnit, true))("placeholder", ctx.placeholder)("disabled", ctx.disabled);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel]; }, pipes: function () { return [TimeLocalizerPipe, TimeParserPipe]; }, styles: [".ngx-timepicker-control[_ngcontent-%COMP%]{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active[_ngcontent-%COMP%]:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input[_ngcontent-%COMP%]{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input[_ngcontent-%COMP%]:disabled{background-color:transparent}.ngx-timepicker-control__arrows[_ngcontent-%COMP%]{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow[_ngcontent-%COMP%]{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.9)}"], changeDetection: 0 });
NgxTimepickerTimeControlComponent.ctorParameters = () => [
    { type: TimeParserPipe }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "time", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "placeholder", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "timeUnit", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "timeList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerTimeControlComponent.prototype, "preventTyping", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxTimepickerTimeControlComponent.prototype, "timeChanged", void 0);
function concatTime(currentTime, nextTime) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return +time;
    }
}

let NgxTimepickerPeriodSelectorComponent = class NgxTimepickerPeriodSelectorComponent {
    constructor(locale) {
        this.locale = locale;
        this.periodSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.period = TimePeriod;
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_0__.Info.meridiems({ locale: this.locale });
    }
    set selectedPeriod(period) {
        if (period) {
            const periods = [TimePeriod.AM, TimePeriod.PM];
            this.localizedPeriod = this.meridiems[periods.indexOf(period)];
        }
    }
    open() {
        if (!this.disabled) {
            this.isOpened = true;
        }
    }
    select(period) {
        this.periodSelected.next(period);
        this.isOpened = false;
    }
    backdropClick() {
        this.isOpened = false;
    }
};
NgxTimepickerPeriodSelectorComponent.ɵfac = function NgxTimepickerPeriodSelectorComponent_Factory(t) { return new (t || NgxTimepickerPeriodSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE)); };
NgxTimepickerPeriodSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxTimepickerPeriodSelectorComponent, selectors: [["ngx-timepicker-period-selector"]], inputs: { selectedPeriod: "selectedPeriod", isOpened: "isOpened", disabled: "disabled" }, outputs: { periodSelected: "periodSelected" }, decls: 9, vars: 6, consts: [[1, "period"], [1, "period-control"], ["type", "button", 1, "period-control__button", "period__btn--default", 3, "ngClass", "click"], [1, "period-control__arrow"], ["class", "period-selector", 3, "timepickerAutofocus", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "period-selector", 3, "timepickerAutofocus"], ["type", "button", 1, "period-selector__button", "period__btn--default", 3, "ngClass", "click"], [1, "overlay", 3, "click"]], template: function NgxTimepickerPeriodSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxTimepickerPeriodSelectorComponent_Template_button_click_2_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u25BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgxTimepickerPeriodSelectorComponent_ul_7_Template, 7, 10, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgxTimepickerPeriodSelectorComponent_div_8_Template, 1, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c16, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localizedPeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, AutofocusDirective], styles: [".period[_ngcontent-%COMP%]{position:relative}.period__btn--default[_ngcontent-%COMP%]{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control[_ngcontent-%COMP%]{position:relative}.period-control__button[_ngcontent-%COMP%]{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button[_ngcontent-%COMP%]:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow[_ngcontent-%COMP%]{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button[_ngcontent-%COMP%]{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active[_ngcontent-%COMP%]{color:#00bfff}.period-selector__button[_ngcontent-%COMP%]:focus{background-color:#eee}.overlay[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(1)', opacity: 1 }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
NgxTimepickerPeriodSelectorComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerPeriodSelectorComponent.prototype, "isOpened", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerPeriodSelectorComponent.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxTimepickerPeriodSelectorComponent.prototype, "selectedPeriod", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], NgxTimepickerPeriodSelectorComponent.prototype, "periodSelected", void 0);
NgxTimepickerPeriodSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], NgxTimepickerPeriodSelectorComponent);

let TimeLocalizerPipe = class TimeLocalizerPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(time, timeUnit, isKeyboardEnabled = false) {
        if (time == null || time === '') {
            return '';
        }
        switch (timeUnit) {
            case TimeUnit.HOUR: {
                const format = (time === 0 || isKeyboardEnabled) ? 'HH' : 'H';
                return this.formatTime('hour', time, format);
            }
            case TimeUnit.MINUTE:
                return this.formatTime('minute', time, 'mm');
            default:
                throw new Error(`There is no Time Unit with type ${timeUnit}`);
        }
    }
    formatTime(timeMeasure, time, format) {
        try {
            return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({ [timeMeasure]: +time }).setLocale(this.locale).toFormat(format);
        }
        catch (_a) {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this.locale}`);
        }
    }
};
TimeLocalizerPipe.ɵfac = function TimeLocalizerPipe_Factory(t) { return new (t || TimeLocalizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TIME_LOCALE, 16)); };
TimeLocalizerPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timeLocalizer", type: TimeLocalizerPipe, pure: true });
TimeLocalizerPipe.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [TIME_LOCALE,] }] }
];
TimeLocalizerPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([ (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(TIME_LOCALE))
], TimeLocalizerPipe);

let ActiveHourPipe = class ActiveHourPipe {
    transform(hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    }
};
ActiveHourPipe.ɵfac = function ActiveHourPipe_Factory(t) { return new (t || ActiveHourPipe)(); };
ActiveHourPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "activeHour", type: ActiveHourPipe, pure: true });

let ActiveMinutePipe = class ActiveMinutePipe {
    transform(minute, currentMinute, gap, isClockFaceDisabled) {
        if (minute == null || isClockFaceDisabled) {
            return false;
        }
        const defaultGap = 5;
        return ((currentMinute === minute) && (minute % (gap || defaultGap) === 0));
    }
};
ActiveMinutePipe.ɵfac = function ActiveMinutePipe_Factory(t) { return new (t || ActiveMinutePipe)(); };
ActiveMinutePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "activeMinute", type: ActiveMinutePipe, pure: true });

let NgxMaterialTimepickerContentComponent = class NgxMaterialTimepickerContentComponent {
};
NgxMaterialTimepickerContentComponent.ɵfac = function NgxMaterialTimepickerContentComponent_Factory(t) { return new (t || NgxMaterialTimepickerContentComponent)(); };
NgxMaterialTimepickerContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMaterialTimepickerContentComponent, selectors: [["ngx-material-timepicker-content"]], inputs: { appendToInput: "appendToInput", inputElement: "inputElement" }, ngContentSelectors: _c8, decls: 5, vars: 2, consts: [[3, "ngxAppendToInput", 4, "ngIf", "ngIfElse"], ["timepickerModal", ""], ["timepickerOutlet", ""], [3, "ngxAppendToInput"], [4, "ngTemplateOutlet"]], template: function NgxMaterialTimepickerContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxMaterialTimepickerContentComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMaterialTimepickerContentComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxMaterialTimepickerContentComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appendToInput)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, AppendToInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet]; }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerContentComponent.prototype, "appendToInput", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], NgxMaterialTimepickerContentComponent.prototype, "inputElement", void 0);

let AppendToInputDirective = class AppendToInputDirective {
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    get inputCords() {
        return this.inputElement.getBoundingClientRect();
    }
    get direction() {
        const height = this.element.offsetHeight;
        const { bottom, top } = this._inputCords;
        const isElementFit = (window && window.innerHeight) - bottom < height;
        const isTop = isElementFit && top > height;
        const isCenter = isElementFit && top < height;
        if (isTop) {
            return 'top';
        }
        else if (isCenter) {
            return 'center';
        }
        return 'bottom';
    }
    ngAfterViewInit() {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    }
    changePosition() {
        const { bottom, top } = this.inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', `${y}px`);
    }
    append() {
        const { left, bottom, top } = this._inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', `${left}px`);
        this.setStyle('top', `${y}px`);
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.element, style, value);
    }
    defineElementYByDirection(inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
    }
};
AppendToInputDirective.ɵfac = function AppendToInputDirective_Factory(t) { return new (t || AppendToInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
AppendToInputDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AppendToInputDirective, selectors: [["", "ngxAppendToInput", ""]], hostBindings: function AppendToInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppendToInputDirective_scroll_HostBindingHandler() { return ctx.changePosition(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { inputElement: ["ngxAppendToInput", "inputElement"] } });
AppendToInputDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)('ngxAppendToInput')
], AppendToInputDirective.prototype, "inputElement", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('window:scroll')
], AppendToInputDirective.prototype, "changePosition", null);

var NgxMaterialTimepickerModule_1;
let NgxMaterialTimepickerModule = NgxMaterialTimepickerModule_1 = class NgxMaterialTimepickerModule {
    static setLocale(locale) {
        return {
            ngModule: NgxMaterialTimepickerModule_1,
            providers: [
                { provide: TIME_LOCALE, useValue: locale }
            ]
        };
    }
};
NgxMaterialTimepickerModule.ɵfac = function NgxMaterialTimepickerModule_Factory(t) { return new (t || NgxMaterialTimepickerModule)(); };
NgxMaterialTimepickerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxMaterialTimepickerModule });
NgxMaterialTimepickerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-container',
                template: "<div class=\"timepicker-backdrop-overlay\" [overlay]=\"preventOverlayClick\"\n     [ngClass]=\"{'timepicker-backdrop-overlay--transparent': appendToInput}\"></div>\n<div class=\"timepicker-overlay\">\n    <ngx-material-timepicker-content [appendToInput]=\"appendToInput\"\n                                     [inputElement]=\"inputElement\"\n                                     [ngxMaterialTimepickerTheme]=\"theme\">\n        <div class=\"timepicker\"\n             [@timepicker]=\"animationState\"\n             (@timepicker.done)=\"animationDone($event)\"\n             [ngClass]=\"timepickerClass\">\n            <header class=\"timepicker__header\">\n                <ngx-material-timepicker-dial [format]=\"format\" [hour]=\"(selectedHour | async)?.time\"\n                                              [minute]=\"(selectedMinute | async)?.time\"\n                                              [period]=\"selectedPeriod | async\"\n                                              [activeTimeUnit]=\"activeTimeUnit\"\n                                              [minTime]=\"minTime\"\n                                              [maxTime]=\"maxTime\"\n                                              [isEditable]=\"enableKeyboardInput\"\n                                              [editableHintTmpl]=\"editableHintTmpl\"\n                                              [minutesGap]=\"minutesGap\"\n                                              [hoursOnly]=\"hoursOnly\"\n                                              (periodChanged)=\"changePeriod($event)\"\n                                              (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                              (hourChanged)=\"onHourChange($event)\"\n                                              (minuteChanged)=\"onMinuteChange($event)\"\n                ></ngx-material-timepicker-dial>\n            </header>\n            <div class=\"timepicker__main-content\">\n                <div class=\"timepicker__body\" [ngSwitch]=\"activeTimeUnit\">\n                    <div *ngSwitchCase=\"timeUnit.HOUR\">\n                        <ngx-material-timepicker-24-hours-face *ngIf=\"format === 24;else ampmHours\"\n                                                               (hourChange)=\"onHourChange($event)\"\n                                                               [selectedHour]=\"selectedHour | async\"\n                                                               [minTime]=\"minTime\"\n                                                               [maxTime]=\"maxTime\"\n                                                               [format]=\"format\"\n                                                               (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-24-hours-face>\n                        <ng-template #ampmHours>\n                            <ngx-material-timepicker-12-hours-face\n                                (hourChange)=\"onHourChange($event)\"\n                                [selectedHour]=\"selectedHour | async\"\n                                [period]=\"selectedPeriod | async\"\n                                [minTime]=\"minTime\"\n                                [maxTime]=\"maxTime\"\n                                (hourSelected)=\"onHourSelected($event)\"></ngx-material-timepicker-12-hours-face>\n                        </ng-template>\n                    </div>\n                    <ngx-material-timepicker-minutes-face *ngSwitchCase=\"timeUnit.MINUTE\"\n                                                          [selectedMinute]=\"selectedMinute | async\"\n                                                          [selectedHour]=\"(selectedHour | async)?.time\"\n                                                          [minTime]=\"minTime\"\n                                                          [maxTime]=\"maxTime\"\n                                                          [format]=\"format\"\n                                                          [period]=\"selectedPeriod | async\"\n                                                          [minutesGap]=\"minutesGap\"\n                                                          (minuteChange)=\"onMinuteChange($event)\"></ngx-material-timepicker-minutes-face>\n                </div>\n                <div class=\"timepicker__actions\">\n                    <div (click)=\"close()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"cancelBtnTmpl ? cancelBtnTmpl : cancelBtnDefault\"></ng-container>\n                    </div>\n                    <div (click)=\"setTime()\">\n                        <!--suppress HtmlUnknownAttribute -->\n                        <ng-container\n                            *ngTemplateOutlet=\"confirmBtnTmpl ? confirmBtnTmpl : confirmBtnDefault\"></ng-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ngx-material-timepicker-content>\n</div>\n<ng-template #cancelBtnDefault>\n    <ngx-material-timepicker-button>Cancel</ngx-material-timepicker-button>\n</ng-template>\n<ng-template #confirmBtnDefault>\n    <ngx-material-timepicker-button>Ok</ngx-material-timepicker-button>\n</ng-template>\n",
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('timepicker', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(`* => ${AnimationState.ENTER}`, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-30%)' }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0)' }))
                        ]),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(`${AnimationState.ENTER} => ${AnimationState.LEAVE}`, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0)', opacity: 1 }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('0.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(-30%)', opacity: 0 }))
                        ])
                    ])
                ],
                providers: [NgxMaterialTimepickerService],
                styles: [":host{--body-background-color:#fff;--primary-font-family:'Roboto',sans-serif;--button-color:deepskyblue;--dial-active-color:#fff;--dial-inactive-color:rgba(255, 255, 255, .5);--dial-background-color:deepskyblue;--dial-editable-active-color:deepskyblue;--dial-editable-background-color:#fff;--clock-face-time-active-color:#fff;--clock-face-time-inactive-color:#6c6c6c;--clock-face-inner-time-inactive-color:#929292;--clock-face-time-disabled-color:#c5c5c5;--clock-face-background-color:#f0f0f0;--clock-hand-color:deepskyblue}.timepicker-backdrop-overlay{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3);z-index:999;pointer-events:auto}.timepicker-backdrop-overlay--transparent{background-color:transparent}.timepicker-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999;pointer-events:none}.timepicker{width:300px;border-radius:2px;box-shadow:rgba(0,0,0,.25) 0 14px 45px,rgba(0,0,0,.22) 0 10px 18px;outline:0;position:static;z-index:999;pointer-events:auto}.timepicker__header{padding:15px 30px;background-color:#00bfff}@supports (background-color:var(--dial-background-color)){.timepicker__header{background-color:var(--dial-background-color)}}.timepicker__body{padding:15px 5px;display:flex;justify-content:center;align-items:center;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__body{background-color:var(--body-background-color)}}.timepicker__actions{display:flex;justify-content:flex-end;padding:15px;background-color:#fff}@supports (background-color:var(--body-background-color)){.timepicker__actions{background-color:var(--body-background-color)}}@media (max-device-width:1023px) and (orientation:landscape){.timepicker{display:flex;width:515px}.timepicker__header{display:flex;align-items:center}.timepicker__main-content{display:flex;flex-direction:column;width:100%}.timepicker__actions{padding:5px;margin-top:-1px}}"]
            }]
    }], function () { return [{ type: NgxMaterialTimepickerService }, { type: NgxMaterialTimepickerEventService }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, { defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker',
                template: ''
            }]
    }], function () { return [{ type: NgxMaterialTimepickerEventService }, { type: DomService }]; }, { isEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['ESC']
        }], hoursOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], hourSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], ngxMaterialTimepickerTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cancelBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], editableHintTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], confirmBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], enableKeyboardInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], preventOverlayClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], appendToInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timepickerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerToggleIconDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: '[ngxMaterialTimepickerToggleIcon]' }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-toggle',
                template: "<button class=\"ngx-material-timepicker-toggle\" (click)=\"open($event)\" [disabled]=\"disabled\" type=\"button\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" *ngIf=\"!customIcon\">\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n\n    <ng-content select=\"[ngxMaterialTimepickerToggleIcon]\"></ng-content>\n</button>\n",
                styles: [".ngx-material-timepicker-toggle{display:flex;justify-content:center;align-items:center;padding:4px;background-color:transparent;border-radius:50%;text-align:center;border:none;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .3s;cursor:pointer}.ngx-material-timepicker-toggle:focus{background-color:rgba(0,0,0,.07)}"]
            }]
    }], null, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['for']
        }], customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
            args: [NgxMaterialTimepickerToggleIconDirective, { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[ngxTimepicker]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
                        useExisting: TimepickerDirective_1,
                        multi: true
                    }
                ],
                host: {
                    '[disabled]': 'disabled',
                    '(change)': 'updateValue($event.target.value)',
                    '(blur)': 'onTouched()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['ngxTimepicker']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['click', ['$event']]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerThemeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: '[ngxMaterialTimepickerTheme]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['ngxMaterialTimepickerTheme']
        }] }); })();

(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepicker24HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-24-hours-face',
                template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\" [format]=\"format\"\n                              (timeChange)=\"hourChange.next($event)\"\n                              (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepicker12HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-12-hours-face',
                template: "<ngx-material-timepicker-face [selectedTime]=\"selectedHour\" [faceTime]=\"hoursList\"\n                              (timeChange)=\"hourChange.next($event)\" (timeSelected)=\"onTimeSelected($event)\"></ngx-material-timepicker-face>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerMinutesFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-minutes-face',
                template: "<ngx-material-timepicker-face [faceTime]=\"minutesList\" [selectedTime]=\"selectedMinute\"\n                              [minutesGap]=\"minutesGap\"\n                              (timeChange)=\"minuteChange.next($event)\" [unit]=\"timeUnit.MINUTE\"></ngx-material-timepicker-face>\n"
            }]
    }], function () { return []; }, { minuteChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], selectedMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], selectedHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-face',
                template: "<div class=\"clock-face\" #clockFace>\n    <div *ngIf=\"unit !== timeUnit.MINUTE;else minutesFace\" class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime | slice: 0 : 12; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}\n            </span>\n        </div>\n        <div class=\"clock-face__inner\" *ngIf=\"faceTime.length > 12\"\n             [style.top]=\"'calc(50% - ' + innerClockFaceSize + 'px)'\">\n            <div class=\"clock-face__number clock-face__number--inner\"\n                 [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n                 [style.height.px]=\"innerClockFaceSize\"\n                 *ngFor=\"let time of faceTime | slice: 12 : 24; trackBy: trackByTime\">\n\t\t\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n                  [ngClass]=\"{'active': time.time | activeHour: selectedTime?.time : isClockFaceDisabled,\n                   'disabled': time.disabled}\">\n                {{time.time | timeLocalizer: timeUnit.HOUR}}</span>\n            </div>\n        </div>\n    </div>\n\n    <span class=\"clock-face__clock-hand\" [ngClass]=\"{'clock-face__clock-hand_minute': unit === timeUnit.MINUTE}\"\n          #clockHand [hidden]=\"isClockFaceDisabled\"></span>\n</div>\n<ng-template #minutesFace>\n    <div class=\"clock-face__container\">\n        <div class=\"clock-face__number clock-face__number--outer\"\n             [ngStyle]=\"{'transform': 'rotateZ('+ time.angle +'deg) translateX(-50%)'}\"\n             *ngFor=\"let time of faceTime; trackBy: trackByTime\">\n\t<span [ngStyle]=\"{'transform': 'rotateZ(-'+ time.angle +'deg)'}\"\n          [ngClass]=\"{'active': time.time | activeMinute: selectedTime?.time:minutesGap:isClockFaceDisabled,\n           'disabled': time.disabled}\">\n\t{{time.time | minutesFormatter: minutesGap | timeLocalizer: timeUnit.MINUTE}}</span>\n        </div>\n    </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".clock-face{width:290px;height:290px;border-radius:50%;position:relative;display:flex;justify-content:center;padding:20px;box-sizing:border-box;background-color:#f0f0f0}@supports (background-color:var(--clock-face-background-color)){.clock-face{background-color:var(--clock-face-background-color)}}.clock-face__inner{position:absolute}.clock-face__container{margin-left:-2px}.clock-face__number{position:absolute;transform-origin:0 100%;width:50px;text-align:center;z-index:2}.clock-face__number--outer{height:calc(290px / 2 - 20px)}.clock-face__number--outer>span{font-size:16px;color:#6c6c6c}@supports (color:var(--clock-face-time-inactive-color)){.clock-face__number--outer>span{color:var(--clock-face-time-inactive-color)}}.clock-face__number--inner>span{font-size:14px;color:#929292}@supports (color:var(--clock-face-inner-time-inactive-color)){.clock-face__number--inner>span{color:var(--clock-face-inner-time-inactive-color)}}.clock-face__number>span{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:30px;height:30px;display:flex;justify-content:center;align-items:center;margin:auto;border-radius:50%;font-weight:500;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.clock-face__number>span{font-family:var(--primary-font-family)}}.clock-face__number>span.active{background-color:#00bfff;color:#fff}@supports (background-color:var(--clock-hand-color)){.clock-face__number>span.active{background-color:var(--clock-hand-color);color:var(--clock-face-time-active-color)}}.clock-face__number>span.disabled{color:#c5c5c5}@supports (color:var(--clock-face-time-disabled-color)){.clock-face__number>span.disabled{color:var(--clock-face-time-disabled-color)}}.clock-face__clock-hand{height:103px;width:2px;transform-origin:0 100%;position:absolute;top:calc(50% - 103px);z-index:1;background-color:#00bfff}@supports (background-color:var(--clock-hand-color)){.clock-face__clock-hand{background-color:var(--clock-hand-color)}}.clock-face__clock-hand:after{content:'';width:7px;height:7px;border-radius:50%;background-color:inherit;position:absolute;bottom:-3px;left:-3.5px}.clock-face__clock-hand_minute:before{content:'';width:7px;height:7px;background-color:#fff;border-radius:50%;position:absolute;top:-8px;left:calc(50% - 8px);box-sizing:content-box;border:4px solid #00bfff}@supports (border-color:var(--clock-hand-color)){.clock-face__clock-hand_minute:before{border-color:var(--clock-hand-color)}}@media (max-device-width:1023px) and (orientation:landscape){.clock-face{width:225px;height:225px;padding:5px}.clock-face__number--outer{height:calc(225px / 2 - 5px)}.clock-face__clock-hand_minute:before{top:0}}"]
            }]
    }], function () { return []; }, { timeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], timeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], selectedTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['mousedown', ['$event']]
        }], selectTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['click', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['touchmove', ['$event.changedTouches[0]']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['touchend', ['$event.changedTouches[0]']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['mousemove', ['$event']]
        }], onMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['mouseup', ['$event']]
        }], faceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], clockFace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['clockFace', { static: true }]
        }], clockHand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['clockHand', { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-button',
                template: "<button class=\"timepicker-button\" type=\"button\">\n  <span><ng-content></ng-content></span>\n</button>\n",
                styles: [".timepicker-button{display:inline-block;height:36px;min-width:88px;line-height:36px;border:12px;border-radius:2px;background-color:transparent;text-align:center;transition:450ms cubic-bezier(.23,1,.32,1);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;cursor:pointer;outline:0;color:#00bfff}@supports (color:var(--button-color)){.timepicker-button{color:var(--button-color)}}.timepicker-button:focus,.timepicker-button:hover{background-color:rgba(153,153,153,.2)}.timepicker-button>span{font-size:14px;text-transform:uppercase;font-weight:600;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-button>span{font-family:var(--primary-font-family)}}"]
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-dial',
                template: "<div class=\"timepicker-dial\">\n    <div class=\"timepicker-dial__container\">\n        <div class=\"timepicker-dial__time\">\n            <ngx-material-timepicker-dial-control [timeList]=\"hours\" [time]=\"hour\" [timeUnit]=\"timeUnit.HOUR\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.HOUR\"\n                                                  [isEditable]=\"isEditable\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeHour($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n            <span>:</span>\n            <ngx-material-timepicker-dial-control [timeList]=\"minutes\" [time]=\"minute\" [timeUnit]=\"timeUnit.MINUTE\"\n                                                  [isActive]=\"activeTimeUnit === timeUnit.MINUTE\"\n                                                  [isEditable]=\"isEditable\"\n                                                  [minutesGap]=\"minutesGap\"\n                                                  [disabled]=\"hoursOnly\"\n                                                  (timeUnitChanged)=\"changeTimeUnit($event)\"\n                                                  (timeChanged)=\"changeMinute($event)\"\n                                                  (focused)=\"showHint()\"\n                                                  (unfocused)=\"hideHint()\">\n\n            </ngx-material-timepicker-dial-control>\n        </div>\n        <ngx-material-timepicker-period class=\"timepicker-dial__period\"\n                                        [ngClass]=\"{'timepicker-dial__period--hidden': format === 24}\"\n                                        [selectedPeriod]=\"period\" [activeTimeUnit]=\"activeTimeUnit\"\n                                        [maxTime]=\"maxTime\" [minTime]=\"minTime\" [format]=\"format\"\n                                        [hours]=\"hours\" [minutes]=\"minutes\" [selectedHour]=\"hour\"\n                                        [meridiems]=\"meridiems\"\n                                        (periodChanged)=\"changePeriod($event)\"></ngx-material-timepicker-period>\n    </div>\n    <div *ngIf=\"isEditable || editableHintTmpl\" [ngClass]=\"{'timepicker-dial__hint-container--hidden': !isHintVisible}\">\n        <!--suppress HtmlUnknownAttribute -->\n        <ng-container *ngTemplateOutlet=\"editableHintTmpl ? editableHintTmpl : editableHintDefault\"></ng-container>\n        <ng-template #editableHintDefault>\n            <small class=\"timepicker-dial__hint\"> * use arrows (<span>&#8645;</span>) to change the time</small>\n        </ng-template>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".timepicker-dial{text-align:right}.timepicker-dial__container{display:flex;align-items:center;justify-content:flex-end;-webkit-tap-highlight-color:transparent}.timepicker-dial__time{display:flex;align-items:baseline;line-height:normal;font-size:50px;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__time{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__period{display:block;margin-left:10px}.timepicker-dial__hint-container--hidden,.timepicker-dial__period--hidden{visibility:hidden}.timepicker-dial__hint{display:inline-block;font-size:10px;color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__hint{color:var(--dial-active-color)}}.timepicker-dial__hint span{font-size:14px}@media (max-device-width:1023px) and (orientation:landscape){.timepicker-dial__container{flex-direction:column}.timepicker-dial__period{margin-left:0}}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, { periodChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], timeUnitChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], hourChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], minuteChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], editableHintTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], hour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], activeTimeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], isEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], hoursOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimeParserPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'timeParser'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerDialControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-dial-control',
                template: "<!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n<input class=\"timepicker-dial__control timepicker-dial__item\"\n       [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n       [ngModel]=\"time | timeLocalizer: timeUnit\"\n       (ngModelChange)=\"time = $event\"\n       [disabled]=\"disabled\"\n       (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n       readonly [timepickerAutofocus]=\"isActive\"\n       *ngIf=\"!isEditable;else editableTemplate\">\n\n<ng-template #editableTemplate>\n    <!--suppress HtmlFormInputWithoutLabel, HtmlUnknownAttribute -->\n    <input class=\"timepicker-dial__control timepicker-dial__item timepicker-dial__control_editable\"\n           [ngClass]=\"{'timepicker-dial__item_active': isActive}\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [disabled]=\"disabled\"\n           (input)=\"updateTime()\" (focus)=\"saveTimeAndChangeTimeUnit($event, timeUnit)\"\n           [timepickerAutofocus]=\"isActive\" (keydown)=\"onKeydown($event)\" (keypress)=\"changeTimeByKeyboard($event)\">\n</ng-template>\n",
                providers: [TimeParserPipe],
                styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-dial__control{border:none;background-color:transparent;font-size:50px;width:60px;padding:0;border-radius:3px;text-align:right}.timepicker-dial__control_editable:focus{color:#00bfff;background-color:#fff;outline:#00bfff}@supports (color:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{color:var(--dial-editable-active-color)}}@supports (background-color:var(--dial-editable-background-color)){.timepicker-dial__control_editable:focus{background-color:var(--dial-editable-background-color)}}@supports (outline:var(--dial-editable-active-color)){.timepicker-dial__control_editable:focus{outline:var(--dial-editable-active-color)}}.timepicker-dial__control:disabled{cursor:default}"]
            }]
    }], function () { return [{ type: TimeParserPipe }]; }, { timeUnitChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], focused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], unfocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], isEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerPeriodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-period',
                template: "<div class=\"timepicker-period\">\n\t\t\t<button class=\"timepicker-dial__item timepicker-period__btn\"\n                  [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.AM}\"\n                  (click)=\"changePeriod(timePeriod.AM)\"\n                  type=\"button\">{{meridiems[0]}}</button>\n    <button class=\"timepicker-dial__item timepicker-period__btn\"\n          [ngClass]=\"{'timepicker-dial__item_active': selectedPeriod === timePeriod.PM}\"\n          (click)=\"changePeriod(timePeriod.PM)\"\n          type=\"button\">{{meridiems[1]}}</button>\n    <div class=\"timepicker-period__warning\" [@scaleInOut] (@scaleInOut.done)=\"animationDone()\" *ngIf=\"!isPeriodAvailable\">\n        <p>Current time would be invalid in this period.</p>\n    </div>\n</div>\n",
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleInOut', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)' }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('.2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(1)' })),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.sequence)([
                                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 })),
                                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('.3s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }))
                            ])
                        ])
                    ])
                ],
                styles: [".timepicker-dial__item{cursor:pointer;color:rgba(255,255,255,.5);font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-dial__item{font-family:var(--primary-font-family);color:var(--dial-inactive-color)}}.timepicker-dial__item_active{color:#fff}@supports (color:var(--dial-active-color)){.timepicker-dial__item_active{color:var(--dial-active-color)}}.timepicker-period{display:flex;flex-direction:column;position:relative}.timepicker-period__btn{padding:1px 3px;border:0;background-color:transparent;font-size:18px;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:0;border-radius:3px;transition:background-color .5s;font-family:Roboto,sans-serif}.timepicker-period__btn:focus{background-color:rgba(0,0,0,.07)}.timepicker-period__warning{padding:5px 10px;border-radius:3px;background-color:rgba(0,0,0,.55);color:#fff;position:absolute;width:200px;left:-20px;top:40px}.timepicker-period__warning>p{margin:0;font-size:12px;font-family:Roboto,sans-serif}@supports (font-family:var(--primary-font-family)){.timepicker-period__btn,.timepicker-period__warning>p{font-family:var(--primary-font-family)}}"]
            }]
    }], function () { return []; }, { periodChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], selectedPeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], activeTimeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], selectedHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], meridiems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimeFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'timeFormatter'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[overlay]'
            }]
    }], function () { return [{ type: NgxMaterialTimepickerEventService }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['click', ['$event']]
        }], preventClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['overlay']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinutesFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'minutesFormatter'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[timepickerAutofocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }] }]; }, { isFocusActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['timepickerAutofocus']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxTimepickerFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-timepicker-field',
                template: "<div class=\"ngx-timepicker\" [ngClass]=\"{'ngx-timepicker--disabled': disabled}\">\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--first\"\n        [placeholder]=\"'HH'\"\n        [time]=\"(hour$ | async)?.time\"\n        [min]=\"minHour\"\n        [max]=\"maxHour\"\n        [timeUnit]=\"timeUnit.HOUR\"\n        [disabled]=\"disabled\"\n        [timeList]=\"hoursList\"\n        [preventTyping]=\"isTimeRangeSet\"\n        (timeChanged)=\"changeHour($event)\"></ngx-timepicker-time-control>\n    <span class=\"ngx-timepicker__time-colon ngx-timepicker__control--second\">:</span>\n    <ngx-timepicker-time-control\n        class=\"ngx-timepicker__control--third\"\n        [placeholder]=\"'MM'\"\n        [time]=\"(minute$ | async)?.time\"\n        [min]=\"0\"\n        [max]=\"59\"\n        [timeUnit]=\"timeUnit.MINUTE\"\n        [disabled]=\"disabled\"\n        [timeList]=\"minutesList\"\n        [preventTyping]=\"isTimeRangeSet\"\n        (timeChanged)=\"changeMinute($event)\"></ngx-timepicker-time-control>\n    <ngx-timepicker-period-selector\n        class=\"ngx-timepicker__control--forth\"\n        [selectedPeriod]=\"period\"\n        [disabled]=\"disabled || isChangePeriodDisabled\"\n        (periodSelected)=\"changePeriod($event)\"\n        *ngIf=\"format !== 24\"></ngx-timepicker-period-selector>\n    <ngx-material-timepicker-toggle\n        class=\"ngx-timepicker__toggle\"\n        *ngIf=\"!controlOnly\"\n        [ngClass]=\"{'ngx-timepicker__toggle--left': buttonAlign === 'left'}\"\n        [for]=\"timepicker\"\n        [disabled]=\"disabled\">\n        <span ngxMaterialTimepickerToggleIcon>\n            <!--suppress HtmlUnknownAttribute -->\n            <ng-container *ngTemplateOutlet=\"toggleIcon || defaultIcon\"></ng-container>\n        </span>\n    </ngx-material-timepicker-toggle>\n</div>\n<ngx-material-timepicker\n    [min]=\"min\"\n    [max]=\"max\"\n    [theme]=\"clockTheme\"\n    [defaultTime]=\"timepickerTime\"\n    [format]=\"format\"\n    [cancelBtnTmpl]=\"cancelBtnTmpl\"\n    [confirmBtnTmpl]=\"confirmBtnTmpl\"\n    (timeSet)=\"onTimeSet($event)\" #timepicker></ngx-material-timepicker>\n\n<ng-template #defaultIcon>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\">\n        <!--suppress CheckEmptyScriptTag -->\n        <path\n            d=\"M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z\"/>\n    </svg>\n</ng-template>\n",
                providers: [
                    NgxMaterialTimepickerService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NG_VALUE_ACCESSOR,
                        useExisting: NgxTimepickerFieldComponent_1,
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".ngx-timepicker{display:flex;align-items:center;height:100%;border-bottom:1px solid rgba(0,0,0,.12)}.ngx-timepicker--disabled{background:rgba(0,0,0,.07);pointer-events:none}.ngx-timepicker__time-colon{margin-left:10px}.ngx-timepicker__control--first{order:1}.ngx-timepicker__control--second{order:2}.ngx-timepicker__control--third{order:3}.ngx-timepicker__control--forth,.ngx-timepicker__toggle{order:4}.ngx-timepicker__toggle--left{order:0}"]
            }]
    }], function () { return [{ type: NgxMaterialTimepickerService }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, { buttonAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], toggleIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], clockTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], controlOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cancelBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], confirmBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxTimepickerTimeControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-timepicker-time-control',
                template: "<div class=\"ngx-timepicker-control\" [ngClass]=\"{'ngx-timepicker-control--active': isFocused}\">\n    <!--suppress HtmlFormInputWithoutLabel -->\n    <input class=\"ngx-timepicker-control__input\"\n           maxlength=\"2\"\n           [ngModel]=\"time | timeParser: timeUnit | timeLocalizer: timeUnit : true\"\n           (ngModelChange)=\"onModelChange($event)\"\n           [placeholder]=\"placeholder\"\n           [disabled]=\"disabled\"\n           (keydown)=\"onKeydown($event)\"\n           (keypress)=\"changeTime($event)\"\n           (focus)=\"onFocus()\"\n           (blur)=\"onBlur()\">\n    <div class=\"ngx-timepicker-control__arrows\">\n            <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"increase()\">\n                &#9650;\n            </span>\n        <span class=\"ngx-timepicker-control__arrow\" role=\"button\" (click)=\"decrease()\">\n                &#9660;\n            </span>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                providers: [TimeParserPipe],
                styles: [".ngx-timepicker-control{position:relative;display:flex;width:60px;height:30px;padding:0 5px;box-sizing:border-box}.ngx-timepicker-control--active:after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;background-color:#00bfff}.ngx-timepicker-control__input{width:100%;height:100%;padding:0 5px 0 0;border:0;font-size:1rem;color:inherit;outline:0;text-align:center}.ngx-timepicker-control__input:disabled{background-color:transparent}.ngx-timepicker-control__arrows{position:absolute;right:2px;top:0;display:flex;flex-direction:column}.ngx-timepicker-control__arrow{font-size:11px;color:rgba(0,0,0,.4);cursor:pointer;transition:color .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-timepicker-control__arrow:hover{color:rgba(0,0,0,.9)}"]
            }]
    }], function () { return [{ type: TimeParserPipe }]; }, { timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], timeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], preventTyping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxTimepickerPeriodSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-timepicker-period-selector',
                template: "<div class=\"period\">\n    <div class=\"period-control\">\n        <button class=\"period-control__button period__btn--default\"\n                [ngClass]=\"{'period-control__button--disabled': disabled}\"\n                type=\"button\"\n                (click)=\"open()\">\n            <span>{{localizedPeriod}}</span>\n            <span class=\"period-control__arrow\">&#9660;</span>\n        </button>\n    </div>\n    <ul class=\"period-selector\" @scaleInOut *ngIf=\"isOpened\" [timepickerAutofocus]=\"true\">\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.AM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[0]}\">{{meridiems[0]}}</button>\n        </li>\n        <li>\n            <button class=\"period-selector__button period__btn--default\"\n                    type=\"button\"\n                    (click)=\"select(period.PM)\"\n                    [ngClass]=\"{'period-selector__button--active': localizedPeriod === meridiems[1]}\">{{meridiems[1]}}</button>\n        </li>\n    </ul>\n</div>\n<div class=\"overlay\" (click)=\"backdropClick()\" *ngIf=\"isOpened\"></div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('scaleInOut', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(1)', opacity: 1 }))
                        ]),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'scale(0)', opacity: 0 }))
                        ])
                    ])
                ],
                styles: [".period{position:relative}.period__btn--default{padding:0;border:none;background-color:transparent;cursor:pointer;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;outline:0}.period-control{position:relative}.period-control__button{position:relative;width:60px;font-size:1rem;color:inherit;text-align:center}.period-control__button:not(.period-control__button--disabled):focus:after{content:'';position:absolute;bottom:-8px;left:0;width:100%;height:1px;background-color:#00bfff}.period-control__arrow{margin-left:10px;font-size:12px;color:rgba(0,0,0,.4)}.period-selector{position:absolute;top:calc(50% - 50px);right:calc(-50% + -50px);max-width:135px;width:150px;padding:6px 0;margin:0;list-style:none;background-color:#f5f5f5;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);z-index:201}.period-selector__button{width:100%;height:48px;padding:0 16px;line-height:48px}.period-selector__button--active{color:#00bfff}.period-selector__button:focus{background-color:#eee}.overlay{position:fixed;width:100%;height:100%;top:0;left:0;background-color:transparent;z-index:200}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, { periodSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], selectedPeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], isOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimeLocalizerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'timeLocalizer'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [TIME_LOCALE]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActiveHourPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'activeHour'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActiveMinutePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'activeMinute'
            }]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'ngx-material-timepicker-content',
                template: "<div [ngxAppendToInput]=\"inputElement\" *ngIf=\"appendToInput;else timepickerModal\">\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</div>\n\n<ng-template #timepickerModal>\n    <!--suppress HtmlUnknownAttribute -->\n    <ng-container *ngTemplateOutlet=\"timepickerOutlet\"></ng-container>\n</ng-template>\n\n<ng-template #timepickerOutlet>\n    <ng-content></ng-content>\n</ng-template>\n"
            }]
    }], null, { appendToInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppendToInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[ngxAppendToInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }]; }, { changePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['window:scroll']
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['ngxAppendToInput']
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaterialTimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
                ],
                exports: [
                    NgxMaterialTimepickerComponent,
                    NgxMaterialTimepickerToggleComponent,
                    NgxTimepickerFieldComponent,
                    TimepickerDirective,
                    NgxMaterialTimepickerToggleIconDirective,
                    NgxMaterialTimepickerThemeDirective,
                    NgxMaterialTimepicker24HoursFaceComponent,
                    NgxMaterialTimepicker12HoursFaceComponent,
                    NgxMaterialTimepickerMinutesFaceComponent,
                    NgxMaterialTimepickerFaceComponent,
                    NgxMaterialTimepickerDialComponent,
                    NgxMaterialTimepickerDialControlComponent
                ],
                declarations: [
                    NgxMaterialTimepickerComponent,
                    NgxMaterialTimepicker24HoursFaceComponent,
                    NgxMaterialTimepicker12HoursFaceComponent,
                    NgxMaterialTimepickerMinutesFaceComponent,
                    NgxMaterialTimepickerFaceComponent,
                    NgxMaterialTimepickerToggleComponent,
                    NgxMaterialTimepickerButtonComponent,
                    NgxMaterialTimepickerDialComponent,
                    NgxMaterialTimepickerDialControlComponent,
                    NgxMaterialTimepickerPeriodComponent,
                    TimeFormatterPipe,
                    TimepickerDirective,
                    OverlayDirective,
                    NgxMaterialTimepickerToggleIconDirective,
                    AutofocusDirective,
                    MinutesFormatterPipe,
                    NgxMaterialTimepickerThemeDirective,
                    NgxTimepickerFieldComponent,
                    NgxTimepickerTimeControlComponent,
                    NgxTimepickerPeriodSelectorComponent,
                    TimeLocalizerPipe,
                    TimeParserPipe,
                    ActiveHourPipe,
                    ActiveMinutePipe,
                    NgxMaterialTimepickerContainerComponent,
                    NgxMaterialTimepickerContentComponent,
                    AppendToInputDirective
                ],
                entryComponents: [NgxMaterialTimepickerContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMaterialTimepickerModule, { declarations: function () { return [NgxMaterialTimepickerComponent, NgxMaterialTimepicker24HoursFaceComponent, NgxMaterialTimepicker12HoursFaceComponent, NgxMaterialTimepickerMinutesFaceComponent, NgxMaterialTimepickerFaceComponent, NgxMaterialTimepickerToggleComponent, NgxMaterialTimepickerButtonComponent, NgxMaterialTimepickerDialComponent, NgxMaterialTimepickerDialControlComponent, NgxMaterialTimepickerPeriodComponent, TimeFormatterPipe, TimepickerDirective, OverlayDirective, NgxMaterialTimepickerToggleIconDirective, AutofocusDirective, MinutesFormatterPipe, NgxMaterialTimepickerThemeDirective, NgxTimepickerFieldComponent, NgxTimepickerTimeControlComponent, NgxTimepickerPeriodSelectorComponent, TimeLocalizerPipe, TimeParserPipe, ActiveHourPipe, ActiveMinutePipe, NgxMaterialTimepickerContainerComponent, NgxMaterialTimepickerContentComponent, AppendToInputDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]; }, exports: function () { return [NgxMaterialTimepickerComponent, NgxMaterialTimepickerToggleComponent, NgxTimepickerFieldComponent, TimepickerDirective, NgxMaterialTimepickerToggleIconDirective, NgxMaterialTimepickerThemeDirective, NgxMaterialTimepicker24HoursFaceComponent, NgxMaterialTimepicker12HoursFaceComponent, NgxMaterialTimepickerMinutesFaceComponent, NgxMaterialTimepickerFaceComponent, NgxMaterialTimepickerDialComponent, NgxMaterialTimepickerDialControlComponent]; } }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-material-timepicker.js.map

/***/ }),

/***/ 40987:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/technician_view/button/edit-user-button/edit-user-button.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserButtonComponent": function() { return /* binding */ EditUserButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 42522);


class EditUserButtonComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.citizen_id = this.value;
    }
    newBookingFromCitizen() {
        if (confirm("Vuoi davvero salvare le modifiche?")) {
            console.log("Confirmed edit");
        }
    }
}
EditUserButtonComponent.ɵfac = function EditUserButtonComponent_Factory(t) { return new (t || EditUserButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogService)); };
EditUserButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserButtonComponent, selectors: [["ngx-edit-user-button"]], inputs: { value: "value" }, decls: 2, vars: 0, consts: [["nbButton", "", "status", "warning", 3, "click"], ["icon", "edit-outline", 1, "action-icon"]], template: function EditUserButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserButtonComponent_Template_button_click_0_listener() { return ctx.newBookingFromCitizen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();


/***/ }),

/***/ 79387:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/technician_view/button/new-booking-button/new-booking-button.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBookingButtonComponent": function() { return /* binding */ NewBookingButtonComponent; }
/* harmony export */ });
/* harmony import */ var _modal_window_new_booking_modal_window_new_booking_modal_window_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal_window/new-booking-modal-window/new-booking-modal-window.component */ 40948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 42522);



class NewBookingButtonComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.renderValue = this.value.toString();
    }
    newBookingFromCitizen() {
        this.dialogService.open(_modal_window_new_booking_modal_window_new_booking_modal_window_component__WEBPACK_IMPORTED_MODULE_0__.NewBookingModalWindowComponent, {
            context: {
                toDialogSSN: this.value
            },
        }); /**
        .onClose.subscribe(returnedObj => {
          if (returnedObj == false) { } else {
            if (confirm("Vuoi davvero salvare le modifiche?")) {
              
            }
          }
          console.log(returnedObj);
        }); */
    }
}
NewBookingButtonComponent.ɵfac = function NewBookingButtonComponent_Factory(t) { return new (t || NewBookingButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDialogService)); };
NewBookingButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewBookingButtonComponent, selectors: [["ngx-new-booking-button"]], inputs: { value: "value" }, decls: 2, vars: 0, consts: [["nbButton", "", "status", "info", 3, "click"], ["icon", "plus-outline", 1, "action-icon"]], template: function NewBookingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewBookingButtonComponent_Template_button_click_0_listener() { return ctx.newBookingFromCitizen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();


/***/ }),

/***/ 40948:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/technician_view/modal_window/new-booking-modal-window/new-booking-modal-window.component.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBookingModalWindowComponent": function() { return /* binding */ NewBookingModalWindowComponent; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 55384);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _shared_citizen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/citizen.service */ 39261);
/* harmony import */ var _shared_medical_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/medical_service.service */ 76989);
/* harmony import */ var _shared_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/booking.service */ 26547);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









function NewBookingModalWindowComponent_nb_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pres_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", pres_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", pres_r8.nome, " ");
} }
class NewBookingModalWindowComponent {
    constructor(ref, citizen_service, medicalService_service, bookingService, dateService) {
        this.ref = ref;
        this.citizen_service = citizen_service;
        this.medicalService_service = medicalService_service;
        this.bookingService = bookingService;
        this.dateService = dateService;
        this.selected_medicalservice = {};
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.LocalDataSource();
        this.citizen = "";
        this.booking = {};
        this.medicalservices = "";
    }
    ngOnInit() {
        this.min = this.dateService.addDay(this.dateService.today(), -5);
        this.max = this.dateService.addDay(this.dateService.today(), 5);
        this.citizen_service.getBySSN(this.toDialogSSN).subscribe(result => {
            this.citizen = result;
            console.log(this.citizen);
            console.log(this.citizen.ref_categoria);
        });
        this.medicalService_service.getMedicalServices().subscribe(result => {
            this.medicalservices = result;
            console.log(this.medicalservices);
        });
    }
    cancel() {
        this.ref.close(false);
    }
    fillDatePicker(selectedMedicalService) {
        console.log("Value changed");
        console.log(selectedMedicalService);
    }
    submit(ssn) {
        console.log(this.selected_medicalservice.nome);
        this.booking.dataRichiesta = this.getMoment();
        this.booking.codicePrenotazione = this.generateBookingCode(this.citizen.ssn);
        this.booking.dataPrenotazione = "2021-06-29 02:00:00";
        this.booking.oraPrenotazione = "15:33:00";
        this.booking.cittadino = this.citizen;
        // this.booking.cittadino.id = this.citizen.id;
        this.booking.prestazione = this.selected_medicalservice;
        if (confirm("Vuoi davvero salvare le modifiche?")) {
            this.bookingService.insertBooking(this.booking).subscribe(() => this.ref.close());
        }
    }
    generateBookingCode(ssn) {
        let outString_first = '';
        let outString_second = '';
        let inOptions = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ' + ssn;
        let nlast = new Date().getTime().toString().slice(-6);
        for (let i = 0; i < 4; i++) {
            outString_first += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
        }
        for (let i = 0; i < 4; i++) {
            outString_second += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
        }
        return outString_first + nlast + outString_second;
    }
    getMoment() {
        let now = new Date();
        return moment__WEBPACK_IMPORTED_MODULE_0__(now).format('YYYY-MM-DD HH:MM:SS');
    }
}
NewBookingModalWindowComponent.ɵfac = function NewBookingModalWindowComponent_Factory(t) { return new (t || NewBookingModalWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_citizen_service__WEBPACK_IMPORTED_MODULE_1__.CitizenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_medical_service_service__WEBPACK_IMPORTED_MODULE_2__.MedicalServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDateService)); };
NewBookingModalWindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewBookingModalWindowComponent, selectors: [["ngx-new-booking-modal-window"]], inputs: { toDialogSSN: "toDialogSSN" }, decls: 62, vars: 14, consts: [[3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], ["for", "inputFirstName", 1, "label"], ["type", "text", "nbInput", "", "disabled", "", "fullWidth", "", "id", "inputFirstName", "placeholder", "First Name", 3, "value"], ["firstname", ""], ["for", "inputLastName", 1, "label"], ["type", "text", "nbInput", "", "disabled", "", "fullWidth", "", "id", "inputLastName", "placeholder", "Last Name", 3, "value"], ["lastname", ""], ["for", "inputEmail", 1, "label"], ["type", "email", "nbInput", "", "disabled", "", "fullWidth", "", "id", "inputEmail", "placeholder", "Email", 3, "value"], ["email", ""], ["for", "inputWebsite", 1, "label"], ["type", "text", "nbInput", "", "disabled", "", "fullWidth", "", "id", "inputWebsite", "placeholder", "Website", 3, "value"], ["cellphone", ""], ["disabled", "", "type", "email", "nbInput", "", "fullWidth", "", "placeholder", "Indirizzo", 3, "value"], ["indirizzo", ""], ["type", "text", "disabled", "", "nbInput", "", "fullWidth", "", "id", "inputSSN", "placeholder", "Codice fiscale", 3, "value"], ["SSN", ""], ["placeholder", "-- Prestazione --", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "placeholder", "Min Max Picker", 3, "nbDatepicker"], [3, "min", "max"], ["picker", ""], ["nbButton", "", "status", "danger", 1, "cancel", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], [3, "value"]], template: function NewBookingModalWindowComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nuova prenotazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NewBookingModalWindowComponent_Template_nb_card_body_ngModelChange_3_listener($event) { return ctx.citizen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Cellulare");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Indirizzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Codice fiscale");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "nb-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NewBookingModalWindowComponent_Template_nb_select_ngModelChange_46_listener($event) { return ctx.selected_medicalservice = $event; })("change", function NewBookingModalWindowComponent_Template_nb_select_change_46_listener($event) { return ctx.fillDatePicker($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, NewBookingModalWindowComponent_nb_option_47_Template, 2, 2, "nb-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "nb-datepicker", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewBookingModalWindowComponent_Template_button_click_58_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Indietro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NewBookingModalWindowComponent_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](42); return ctx.submit(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Prenota");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.citizen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.citizen.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.citizen.cognome);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.citizen.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.citizen.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate3"]("value", "via ", ctx.citizen.via, " ", ctx.citizen.civico, ", ", ctx.citizen.comune, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.citizen.ssn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selected_medicalservice);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.medicalservices);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nbDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx.min)("max", ctx.max);


/***/ }),

/***/ 80813:
/*!******************************************************************!*\
  !*** ./src/app/pages/technician_view/module/user-list.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListModule": function() { return /* binding */ UserListModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _routing_user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routing/user-list-routing.module */ 8630);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _button_new_booking_button_new_booking_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/new-booking-button/new-booking-button.component */ 79387);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/theme.module */ 19466);
/* harmony import */ var _modal_window_new_booking_modal_window_new_booking_modal_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal_window/new-booking-modal-window/new-booking-modal-window.component */ 40948);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-material-timepicker */ 8936);
/* harmony import */ var _button_edit_user_button_edit_user_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/edit-user-button/edit-user-button.component */ 40987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-list/user-list.component */ 29321);












class UserListModule {
}
UserListModule.ɵfac = function UserListModule_Factory(t) { return new (t || UserListModule)(); };
UserListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserListModule });
UserListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _routing_user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__.NgxMaterialTimepickerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserListModule, { declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__.UserListComponent, _button_new_booking_button_new_booking_button_component__WEBPACK_IMPORTED_MODULE_1__.NewBookingButtonComponent, _modal_window_new_booking_modal_window_new_booking_modal_window_component__WEBPACK_IMPORTED_MODULE_3__.NewBookingModalWindowComponent, _button_edit_user_button_edit_user_button_component__WEBPACK_IMPORTED_MODULE_4__.EditUserButtonComponent], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _routing_user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_11__.NgxMaterialTimepickerModule] }); })();


/***/ }),

/***/ 8630:
/*!***************************************************************************!*\
  !*** ./src/app/pages/technician_view/routing/user-list-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListRoutingModule": function() { return /* binding */ UserListRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-list/user-list.component */ 29321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [{
        path: '',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent,
        children: [],
    }];
class UserListRoutingModule {
}
UserListRoutingModule.ɵfac = function UserListRoutingModule_Factory(t) { return new (t || UserListRoutingModule)(); };
UserListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserListRoutingModule });
UserListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent
];


/***/ }),

/***/ 29321:
/*!************************************************************************!*\
  !*** ./src/app/pages/technician_view/user-list/user-list.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": function() { return /* binding */ UserListComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 3315);
/* harmony import */ var _button_new_booking_button_new_booking_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/new-booking-button/new-booking-button.component */ 79387);
/* harmony import */ var _button_edit_user_button_edit_user_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/edit-user-button/edit-user-button.component */ 40987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_citizen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/citizen.service */ 39261);
/* harmony import */ var _shared_pathology_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pathology.service */ 92007);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 42522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









class UserListComponent {
    constructor(citizenService, pathologyService, dialogService, route, router) {
        this.citizenService = citizenService;
        this.pathologyService = pathologyService;
        this.dialogService = dialogService;
        this.route = route;
        this.toggleHidden = true;
        this.hideEdit = true;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            columns: {
                nome: {
                    title: 'Nome',
                    type: 'string',
                },
                cognome: {
                    title: 'Cognome',
                    type: 'string',
                },
                ssn: {
                    title: 'SSN',
                    type: 'string',
                },
                data_nascita: {
                    title: 'Data nascita',
                    type: 'string',
                    filter: false
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                indirizzo: {
                    title: 'Indirizzo',
                    type: 'string',
                    filter: false,
                    valuePrepareFunction: (cell, row) => {
                        return row.via + " " + row.civico + ", " + row.comune;
                    },
                },
                telefono: {
                    title: 'Telefono',
                    type: 'string',
                },
                categoria: {
                    title: 'Categoria',
                    type: 'string',
                    filter: false,
                    valuePrepareFunction: (cell, row) => {
                        return row.categoria.nome;
                    },
                },
                patologia: {
                    title: 'Patologia',
                    type: 'string',
                    // valuePrepareFunction: (cell, row) => {
                    //   this.pathologyService.getPathologyByCitizenId(row.id).subscribe(pathology => this.pathology);
                    //   return "AA";
                    // },
                    filter: false,
                },
                modifica: {
                    title: 'Elimina',
                    type: 'custom',
                    filter: false,
                    hide: this.hideEdit,
                    valuePrepareFunction: (cell, row) => {
                        return row.id;
                    },
                    renderComponent: _button_edit_user_button_edit_user_button_component__WEBPACK_IMPORTED_MODULE_1__.EditUserButtonComponent
                },
                prenotazione: {
                    title: 'Prenotazione',
                    type: 'custom',
                    filter: false,
                    hide: this.toggleHidden,
                    valuePrepareFunction: (cell, row) => {
                        return row.ssn;
                    },
                    renderComponent: _button_new_booking_button_new_booking_button_component__WEBPACK_IMPORTED_MODULE_0__.NewBookingButtonComponent
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
        route.params.subscribe(params => {
            if (params['action'] === "show") {
                this.toggleHidden = true;
            }
            else {
                if (params['action'] === "edit") {
                    this.hideEdit = false;
                }
                else {
                    this.toggleHidden = false;
                }
            }
            ;
            console.log(params);
        });
        /*This do the trick!*/
        router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    ngOnInit() {
        this.citizenService.getCitizens().subscribe(citizens => {
            this.citizens = citizens;
            console.log(this.citizens);
            this.source.load(this.citizens);
        });
        //retrieve patologia by citizen id
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_citizen_service__WEBPACK_IMPORTED_MODULE_2__.CitizenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_pathology_service__WEBPACK_IMPORTED_MODULE_3__.PathologyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["ngx-user-list"]], inputs: { value: "value" }, decls: 5, vars: 2, consts: [[3, "settings", "source"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Lista utenti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ng2-smart-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
function Schemas(arg0) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 90005:
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-material-timepicker/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_technician_view_module_user-list_module_ts-es2015.js.map