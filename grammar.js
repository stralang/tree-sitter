/**
 * @file grammer for the stra programming language
 * @author PixelDoted
 * @license zlib
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "stra",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
