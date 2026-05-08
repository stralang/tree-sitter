/**
 * @file grammer for the stra programming language
 * @author PixelDoted
 * @license zlib
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

function repeatSeperated(rule, seperator) {
  return optional(seq(
    rule,
    repeat(seq(seperator, rule)),
    optional(seperator),
  ))
}

module.exports = grammar({
  name: "stra",

  conflicts: $ => [
    [$.field],
  ],

  extras: ($) => [
    /\s/,
    $.comment,
  ],
  rules: {
    source_file: $ => repeat($.stmt),

    comment: $ => token(choice(
      seq("//", /.*/),
      seq("/*", /[^\*\/]*/, "*/"),
    )),

    field: $ => seq(
      field('name', $.name),
      ':',
      field('type', optional($.expr)),
      optional(prec(100, seq(
        choice('=', ':'),
        field('default', choice($.expr, '---')),
      )))
    ),

    stmt_block: $ => seq('{', repeat($.stmt), '}'),
    stmt: $ => seq(
      choice(
        $.field,
        $.expr,
        $.return_stmt,
        $.if_stmt,
      ),
      optional(';')
    ),
    return_stmt: $ => seq('return', $.expr),
    if_stmt: $ => seq(
      'if',
      field('condition', $.expr),
      $.stmt_block,
      optional(field('else', seq(
        'else',
        choice($.stmt_block, $.if_stmt),
      ))),
    ),

    expr: $ => choice(
      $.name,
      $.literal_expr,
      $.binary_expr,
      $.unary_expr,
      $.function,
      $.struct,
      $.function_type,
      $.const_type,
      $.primitive_type,
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

    function: $ => prec.right(1000, seq(
      $.function_type,
      choice($.stmt_block, '---')
    )),
    struct: $ => seq(
      'struct',
      '{',
      repeat(seq(
        $.field, optional(choice(',', ';'))
      )),
      '}'
    ),

    function_type: $ => prec.left(0, seq(
      'fn',
      '(',
      repeatSeperated($.field, ','),
      ')',
      optional(field('return', $.expr)),
    )),
    const_type: $ => prec.right(0, seq('const', ' ', $.expr)),
    primitive_type: $ => choice(
      $.void_type,
      $.bool_type,
      $.integer_type,
      $.float_type,
    ),
    void_type: $ => 'void',
    bool_type: $ => 'bool',
    integer_type: $ => choice(
      /[ui]\d+/,
      'usize',
      'isize',
    ),
    float_type: $ => choice(
      'f16',
      'f32',
      'f64',
      'f128',
    ),

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
