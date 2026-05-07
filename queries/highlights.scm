; Default
((name) @variable (#set! priority 95))

; Keywords

; Field
(field name: (name) @property)

; Types
(primitive_type) @type
("const") @keyword.type

; Literals
(number) @number
(string) @string
(char) @character
(bool) @boolean

; Punctuation
[
  "."
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
