((stmt_block) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))
((switch_stmt) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))
((assembly_stmt) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))
((struct) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))
((enum) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))
((union) @indent.align
    (#set! indent.open_delimiter "{")
    (#set! indent.close_delimiter "}"))

("}" @indent.branch)

["(" "["] @indent.begin
[")" "]"] @indent.end

(string) @indent.auto
