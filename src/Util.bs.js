// Generated by Melange
'use strict';

var Fs = require("fs");
var Curry = require("bs-platform/lib/js/curry.js");
var Printf = require("bs-platform/lib/js/printf.js");
var Console = require("console");

function benchmark(f) {
  var start = Date.now();
  Curry._1(f, undefined);
  var elapsed = Date.now() - start;
  console.log("elapsed: " + String(elapsed));
  
}

function clog(o) {
  Console.dir(o, {
        depth: "null"
      });
  
}

function splitLines(s) {
  return s.trim().split("\n");
}

function splitParagraphs(s) {
  return s.trim().split("\n\n");
}

function readInput(year, day) {
  var path = Curry._2(Printf.sprintf(/* Format */{
            _0: {
              TAG: /* String_literal */11,
              _0: "resources/year",
              _1: {
                TAG: /* Int */4,
                _0: /* Int_d */0,
                _1: {
                  TAG: /* Lit_padding */0,
                  _0: /* Zeros */2,
                  _1: 4
                },
                _2: /* No_precision */0,
                _3: {
                  TAG: /* String_literal */11,
                  _0: "/day",
                  _1: {
                    TAG: /* Int */4,
                    _0: /* Int_d */0,
                    _1: {
                      TAG: /* Lit_padding */0,
                      _0: /* Zeros */2,
                      _1: 2
                    },
                    _2: /* No_precision */0,
                    _3: {
                      TAG: /* String_literal */11,
                      _0: ".in",
                      _1: /* End_of_format */0
                    }
                  }
                }
              }
            },
            _1: "resources/year%04d/day%02d.in"
          }), year, day);
  var dir = __dirname + "/../";
  return Fs.readFileSync(dir + path, "utf8");
}

exports.benchmark = benchmark;
exports.clog = clog;
exports.splitLines = splitLines;
exports.splitParagraphs = splitParagraphs;
exports.readInput = readInput;
/* fs Not a pure module */
