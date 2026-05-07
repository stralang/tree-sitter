; Default
((name) @variable (#set! priority 95))

; Keywords
[
  "fn"
  "struct"
] @keyword.type

; Field
(field name: (name) @property)

; Types
(primitive_type) @type
(void_type) @type
(bool_type) @type
(integer_type) @type
(float_type) @type
("const") @keyword.type

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
