// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function let$dotopt(x, f) {
  if (x !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(x));
  }
  
}

function let$dot$ampopt(x, f) {
  if (x !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(x)));
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

var x = let$dotopt(1, (function (a) {
        var left = and$dotopt(2, 3);
        return let$dotopt(and$dotopt(left, 4), (function (param) {
                      var match = param[0];
                      return [
                              a,
                              match[0],
                              match[1],
                              param[1]
                            ];
                    }));
      }));

var left = and$dotopt(1, undefined);

var y = let$dotopt(and$dotopt(left, 4), (function (param) {
        var match = param[0];
        return [
                match[0],
                match[1],
                param[1]
              ];
      }));

if (!Caml_obj.caml_equal(x, [
        1,
        2,
        3,
        4
      ])) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "Basic.re",
          19,
          0
        ],
        Error: new Error()
      };
}

if (y !== undefined) {
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "Basic.re",
          20,
          0
        ],
        Error: new Error()
      };
}

console.log("Success");

exports.let$dotopt = let$dotopt;
exports.let$dot$ampopt = let$dot$ampopt;
exports.and$dotopt = and$dotopt;
exports.x = x;
exports.y = y;
/* x Not a pure module */