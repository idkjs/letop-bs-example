// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var a = 10;

var b = 3;

function let$dotopt(x, f) {
  if (x !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(x));
  }
  
}

function and$dotopt(a, b) {
  if (a !== undefined && b !== undefined) {
    return [
            Caml_option.valFromOption(a),
            Caml_option.valFromOption(b)
          ];
  }
  
}

var z = let$dotopt(and$dotopt(a, b), (function (param) {
        return param[0] + param[1] | 0;
      }));

console.log("ok", z);

console.log("ok2", z);

var x = 10;

exports.x = x;
exports.a = a;
exports.b = b;
exports.let$dotopt = let$dotopt;
exports.and$dotopt = and$dotopt;
exports.z = z;
/* z Not a pure module */
