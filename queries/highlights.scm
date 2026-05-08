; Default
((name) @variable (#set! priority 95))

; Keywords
[
  "defer"
  "asm"
] @keyword
[
  "struct"
  "enum"
] @keyword.type
("fn") @keyword.function
("return") @keyword.return
[
  "if"
  "else"
  "switch"
] @keyword.conditional
[
  "for"
  "in"
  "break"
  "continue"
] @keyword.repeat

; Field
(field name: (name) @property)
(enumerator name: (name) @constant)

; Types
(primitive_type) @type.builtin
(void_type) @type.builtin
(bool_type) @type.builtin
(integer_type) @type.builtin
(float_type) @type.builtin
("const") @keyword.type

("---") @type.builtin ; Undefined

; Literals
(number) @number
(string) @string
(char) @character
(bool) @boolean

; Punctuation
[
  "{"
  "}"
  "("
  ")"
] @punctuation.bracket

[
  "."
  ","
  ":"
  ";"
] @punctuation.delimiter

[
  "@"
  "=>"
] @punctuation.special

[
  "="
  "+"
  "-"
  "*"
  "/"
  "%"
  "|"
  "^"
  "&"
  "<<"
  ">>"
  "||"
  "&&"
  "=="
  "!="
  "<"
  ">"
  "<="
  ">="
  "!"
  "~"
] @operator

[
  "as"
  "bitcast"
] @keyword.operator

; Extras

(comment) @comment @spell
