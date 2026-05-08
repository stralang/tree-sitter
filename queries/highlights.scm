; Default
((name) @variable (#set! priority 95))

; Keywords
[
  "struct"
] @keyword.type
("fn") @keyword.function
("return") @keyword.return
[
  "if"
  "else"
] @keyword.conditional

; Field
(field name: (name) @property)

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
