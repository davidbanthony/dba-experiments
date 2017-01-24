require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"OrientationEvents":[function(require,module,exports){

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        window.addEventListener("devicemotion", _motion);
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return window.addEventListener("devicemotion", _motion);
      default:
        return console.warn('Device orientation and motion events are not support on this device.');
    }
  })();
};

_motion = function(event) {
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  exports.motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
  if (typeof motion !== "undefined" && motion !== null) {
    return motion;
  }
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma,
    absolute: event.absolute
  };
  if (typeof orientation !== "undefined" && orientation !== null) {
    return orientation;
  }
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvVEovR29vZ2xlIERyaXZlL19EZXNpZ24vX0ZyYW1lci9wbGF5Z3JvdW5kLzY1ZmJQYXBlci5mcmFtZXIvbW9kdWxlcy9PcmllbnRhdGlvbkV2ZW50cy5jb2ZmZWUiLCIvVXNlcnMvVEovR29vZ2xlIERyaXZlL19EZXNpZ24vX0ZyYW1lci9wbGF5Z3JvdW5kLzY1ZmJQYXBlci5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7Ozs7QUFBQSxJQUFBOztBQVlBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCOztBQUd0QixPQUFPLENBQUMsTUFBUixHQUFpQjs7QUFHakIsT0FBTyxDQUFDLGlCQUFSLEdBQTRCOztBQUM1QixPQUFPLENBQUMsWUFBUixHQUF1Qjs7QUFHdkIsYUFBQSxHQUFnQjs7QUFDaEIsWUFBQSxHQUFlOztBQUNmLGFBQUEsR0FBZ0I7O0FBR2hCLFNBQUEsR0FBWTs7QUFDWixTQUFBLEdBQVk7O0FBQ1osU0FBQSxHQUFZOztBQUNaLGFBQUEsR0FBZ0I7O0FBQ2hCLGFBQUEsR0FBZ0I7O0FBQ2hCLGFBQUEsR0FBZ0I7O0FBSWhCLE9BQU8sQ0FBQyxpQkFBUixHQUE0QixTQUFBO0FBQzNCLE1BQUE7U0FBQSxNQUFBO0FBQVMsWUFBQSxLQUFBO0FBQUEsYUFDSCxNQUFNLENBQUMsc0JBQVAsSUFBaUMsQ0FBRSxNQUFNLENBQUMsa0JBRHZDO1FBRVAsTUFBTSxDQUFDLGdCQUFQLENBQXdCLG1CQUF4QixFQUE2QyxZQUE3QztlQUVBLEtBQUEsQ0FBTSxzREFBTjtBQUpPLGFBS0gsTUFBTSxDQUFDLGlCQUFQLElBQTRCLENBQUUsTUFBTSxDQUFDLHVCQUxsQztRQU1QLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QyxPQUF4QztlQUVBLEtBQUEsQ0FBTSwyREFBTjtBQVJPLGFBU0gsTUFB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Q3ZFZixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMjI1xuXG5CYXNlZCB3aXRoIHZhbHVlcyBkb2N1bWVudGVkIGluOlxuXG5kZXZpY2VvcmllbnRhdGlvbiAtPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvZGV2aWNlb3JpZW50YXRpb25cbmRldmljZW1vdGlvbiAtID4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2RldmljZW1vdGlvblxuXG4jIyNcblxuIyDigJPigJPigJPigJMgVkFSSUFCTEVTXG5cbiMgT3JpZW50YXRpb24gdmFsdWVzXG5leHBvcnRzLm9yaWVudGF0aW9uID0gbnVsbFxuXG4jIE1vdGlvbiBWYWx1ZXNcbmV4cG9ydHMubW90aW9uID0gbnVsbFxuXG4jIFVzZWQgZm9yIHNtb290aGluZyBvdXQgZGF0YSB2YWx1ZXNcbmV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24gPSAxXG5leHBvcnRzLnNtb290aE1vdGlvbiA9IDFcblxuIyBGaWx0ZXJlZCB2YXJpYWJsZXMgZm9yIG9yaWVudGF0aW9uXG5maWx0ZXJlZEFscGhhID0gMFxuZmlsdGVyZWRCZXRhID0gMFxuZmlsdGVyZWRHYW1tYSA9IDBcblxuIyBGaWx0ZXJlZCB2YXJpYWJsZXMgZm9yIG1vdGlvblxuZmlsdGVyZWRYID0gMFxuZmlsdGVyZWRZID0gMFxuZmlsdGVyZWRaID0gMFxuZmlsdGVyZWRHcmF2WCA9IDBcbmZpbHRlcmVkR3JhdlkgPSAwXG5maWx0ZXJlZEdyYXZaID0gMFxuXG4jIOKAk+KAk+KAk+KAkyBQVUJMSUNcblxuZXhwb3J0cy5PcmllbnRhdGlvbkV2ZW50cyA9IC0+XG5cdGV2ZW50cyA9IHN3aXRjaFxuXHRcdHdoZW4gd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgISh3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQpXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW9yaWVudGF0aW9uXCIsIF9vcmllbnRhdGlvblxuXG5cdFx0XHRwcmludCBcIkRldmljZSBtb3Rpb24gZXZlbnRzIGFyZSBub3Qgc3VwcG9ydCBvbiB0aGlzIGRldmljZS5cIlxuXHRcdHdoZW4gd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICEod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQpXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW1vdGlvblwiLCBfbW90aW9uXG5cblx0XHRcdHByaW50IFwiRGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50cyBhcmUgbm90IHN1cG9ydGVkIG9uIHRoaXMgZGV2aWNlXCJcblx0XHR3aGVuIHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmIHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudFxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXCJkZXZpY2VvcmllbnRhdGlvblwiLCBfb3JpZW50YXRpb25cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFwiZGV2aWNlbW90aW9uXCIsIF9tb3Rpb25cblx0XHRlbHNlIFxuXHRcdFx0Y29uc29sZS53YXJuKCdEZXZpY2Ugb3JpZW50YXRpb24gYW5kIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLicpXG5cbiMg4oCT4oCT4oCT4oCTIFBSSVZBVEVcblxuX21vdGlvbiA9IChldmVudCkgLT5cblx0ZmlsdGVyZWRYID0gKGV2ZW50LmFjY2VsZXJhdGlvbi54ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWCAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRZID0gKGV2ZW50LmFjY2VsZXJhdGlvbi55ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWSAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRaID0gKGV2ZW50LmFjY2VsZXJhdGlvbi56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWiAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblxuXHRmaWx0ZXJlZEdyYXZYID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZYICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZEdyYXZZID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZZICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZEdyYXZaID0gKGV2ZW50LmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueiAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZEdyYXZaICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXG5cdGV4cG9ydHMubW90aW9uID0gXG5cdFx0eDogZmlsdGVyZWRYXG5cdFx0eTogZmlsdGVyZWRZXG5cdFx0ejogZmlsdGVyZWRaXG5cdFx0Z3Jhdlg6IGZpbHRlcmVkR3Jhdlhcblx0XHRncmF2WTogZmlsdGVyZWRHcmF2WVxuXHRcdGdyYXZaOiBmaWx0ZXJlZEdyYXZaXG5cdFx0cm90YXRpb25SYXRlOiBldmVudC5yb3RhdGlvblJhdGVcblx0XHRpbnRlcnZhbDogZXZlbnQuaW50ZXJ2YWxcblxuXHRyZXR1cm4gbW90aW9uIGlmIG1vdGlvbj9cblxuX29yaWVudGF0aW9uID0gKGV2ZW50KSAtPlxuXHRmaWx0ZXJlZEFscGhhID0gKGV2ZW50LmFscGhhICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRBbHBoYSAqICgxLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSlcblx0ZmlsdGVyZWRCZXRhID0gKGV2ZW50LmJldGEgKiBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSArIChmaWx0ZXJlZEJldGEgKiAoMS0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpXG5cdGZpbHRlcmVkR2FtbWEgPSAoZXZlbnQuZ2FtbWEgKiBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSArIChmaWx0ZXJlZEdhbW1hICogKDEtIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pKVxuXG5cdGV4cG9ydHMub3JpZW50YXRpb24gPSBcblx0XHRhbHBoYTogZmlsdGVyZWRBbHBoYVxuXHRcdGJldGE6IGZpbHRlcmVkQmV0YVxuXHRcdGdhbW1hOiBmaWx0ZXJlZEdhbW1hXG5cdFx0YWJzb2x1dGU6IGV2ZW50LmFic29sdXRlXG5cblx0cmV0dXJuIG9yaWVudGF0aW9uIGlmIG9yaWVudGF0aW9uP1xuXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
