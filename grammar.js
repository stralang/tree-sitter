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
    source_file: $ => seq(choice(
      seq($.field, ';'),
    )),

    field: $ => seq(
      field('name', $.name),
      ':',
      field('type', optional($.expr)),
      optional(prec(100, seq(
        choice('=', ':'),
        field('default', $.expr),
      )))
    ),

    expr: $ => choice(
      $.literal_expr,
      $.binary_expr,
      $.unary_expr,
    ),
    literal_expr: $ => choice(
      $.number,
      $.char,
      $.string,
      $.bool,
    ),
    binary_expr: $ => choice(
      prec.right(0, seq($.expr, '=', $.expr)),
      prec.left(1, seq($.expr, '||', $.expr)),
      prec.left(2, seq($.expr, '&&', $.expr)),
      prec.left(3, seq($.expr, '|', $.expr)),
      prec.left(4, seq($.expr, '^', $.expr)),
      prec.left(5, seq($.expr, '&', $.expr)),
      prec.left(6, seq($.expr, '==', $.expr)),
      prec.left(6, seq($.expr, '!=', $.expr)),
      prec.left(7, seq($.expr, '>', $.expr)),
      prec.left(7, seq($.expr, '<', $.expr)),
      prec.left(7, seq($.expr, '>=', $.expr)),
      prec.left(7, seq($.expr, '<=', $.expr)),
      prec.left(8, seq($.expr, '<<', $.expr)),
      prec.left(8, seq($.expr, '>>', $.expr)),
      prec.left(9, seq($.expr, '+', $.expr)),
      prec.left(9, seq($.expr, '-', $.expr)),
      prec.left(10, seq($.expr, '*', $.expr)),
      prec.left(10, seq($.expr, '/', $.expr)),
      prec.left(10, seq($.expr, '%', $.expr)),

      prec.left(12, seq($.expr, 'as', $.expr)),
      prec.left(12, seq($.expr, 'bitcast', $.expr)),
      prec.left(13, seq($.expr, '.', $.expr)),
    ),
    unary_expr: $ => prec.right(11, choice(
      seq('-', $.expr),
      seq('!', $.expr),
      seq('~', $.expr),
      seq('&', $.expr),
      seq('*', $.expr),
    )),

    name: $ => /[_a-zA-Z][_a-zA-Z0-9]*/,
    number: $ => choice(
      /-?0x[\dA-Fa-f]+/,
      /-?\d+(\.\d+)?/,
      /-?0o[0-7]+/,
      /-?0b[01]+/,
    ),
    char: $ => /\'(?:.|\\.)\'/,
    string: $ => /"(?:[^"\\]|\\.)*"/,
    bool: $ => choice('true', 'false'),
  }
});
