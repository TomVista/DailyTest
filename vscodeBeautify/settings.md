Within VS Code, subordinate settings on `js`, `html`, and `css` are accepted. Note that this is non-standard operation for js-beautify.

vs code认可以下js/html/css设置,但这些配置不是js-beautify的标准.(翻译不过来.)

Setting                         | Formatter | [Type] Description / Default
---------------------------------|-----------|------------------------------
eol                             | _All_     |  [String] **Character(s) to use as line terminators.** <br> "\n"
end_with_newline                | _All_     |  [Boolean] **在文件末尾或者script/style标签内的末尾以空行结尾.** <br> false
indent_char                     | _All_     |  [String] **缩进字符.** <br> " "<-这是一个空格
indent_size                     | _All_     |  [Integer] **缩进字符数量.** <br> 4
indent_with_tabs                | _All_     |  [Boolean] **使用tab缩进,此设置将覆盖'indent_char ','indent_size'** <br> false
preserve_newlines               | _All_     |  [Boolean] **保留代码中的空行.** <br> true
max_preserve_newlines           | JS, HTML  |  [Integer] **最大连续空行数.** <br> 10
wrap_line_length                | JS, HTML  |  [Integer] **单行最长字符数. (0不换行)** <br> 0
extra_liners                    | HTML      |  [Array&lt;String>] **在指定标签后加一个空行.** <br> ["head", "body", "/html"]
indent_body_inner_html          | HTML      |  [Boolean] **是否在`<body>`标签内启用缩进** <br> true
indent_handlebars               | HTML      |  [Boolean] **format and indent `{{#foo}}` and `{{/foo}}`.(不懂)** <br> false
indent_head_inner_html          | HTML      |  [Boolean] **是否在`<header>`标签内启用缩进.** <br> true
indent_inner_html               | HTML      |  [Boolean] **是否缩进`<head>`和`<body>`块.** <br> false
indent_scripts                  | HTML      |  [String] **影响`script`和`style`内的缩进,可取值:"keep", "separate", "normal"** <br> "normal"
inline                          | HTML      |  [Array&lt;String>] **不知道是啥** <br>[ "a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt" ]
wrap_attributes                 | HTML      |  [String] **标签属性(class,style等)换行. 可取值:"auto", "force", "force-aligned", "force-expand-multiline", "align-multiple", "preserve", "preserve-aligned"** <br> "auto"
wrap_attributes_indent_size     | HTML      |  [Boolean] **Indent wrapped attributes to after N characters. Defaults to 'indent_size'.(不知道是啥)** <br> false
unformatted                     | HTML      |  [Array&lt;String>] **不进行格式化的标签** <br> []
content_unformatted             | HTML      |  [Array&lt;String>] **内容不格式化的标签**<br>["pre", "textarea"]
void_elements                   | HTML      |  [Array&lt;String>] **HTML void elements - aka self-closing tags(不知道是啥)**<br> ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "?=", "basefont", "isindex"]
newline_between_rules           | CSS       |  [Boolean] **在css规则块之间添加空行.** <br> false
selector_separator_newline      | CSS       |  [Boolean] **在多个选择器之间添加空行.** <br> true
space_around_combinator         | CSS       |  [Boolean] **确保选择器分隔符左右都是空格(>+~).** <br> false
brace_style                     | JS        |  [String] **花括号格式,可取值:"collapse", "expand", "end-expand", "none", "collapse,preserve-inline", "expand,preserve-inline", "end-expand,preserve-inline", or "none,preserve-inline"** <br> "collapse"
break_chained_methods           | JS        |  [Boolean] **链式方法(.then().catch())跨行.** <br> false
comma_first                     | JS        |  [Boolean] **将逗号放在新行的开头而不是结尾.** <br> false
e4x                             | JS        |  [Boolean] **Pass E4X xml literals through untouched.(不知道是啥)** <br> false
indent_level                    | JS        |  [Integer] **初始缩进,每行都缩进n个字符后,在进行缩进.** <br> 0
jslint_happy                    | JS        |  [Boolean] **Enable jslint-stricter mode. (Forces 'space_after_anon_function')(不知道是啥)** <br> false
keep_array_indentation          | JS        |  [Boolean] **数组是否进行缩进.** <br> false
keep_function_indentation       | JS        |  [Boolean] **function是否进行缩进.** <br> false
operator_position               | JS        |  [String] **运算符前后存在换行时,运算符的位置. 可取值:"before-newline", "after-newline", or "preserve-newline"** <br> "before-newline"
space_after_anon_function       | JS        |  [Boolean] **在匿名函数的括号前边加空格.例. `function ()`.** <br> false
space_after_named_function      | JS        |  [Boolean] **在不匿名函数的括号前边加空格.例. `function example ()`.** <br> false
space_before_conditional        | JS        |  [Boolean] **确保条件语句前有空格.** <br> true
space_in_empty_paren            | JS        |  [Boolean] **没有参数时,添加一个空格, ie. `f( )`.** <br> false
space_in_paren                  | JS        |  [Boolean] **在参数前加空格,在括号最后加空格, 例. `f( a, b )`.** <br> false
unescape_strings                | JS        |  [Boolean] **Decode printable characters encoded in xNN notation.** <br> false
unindent_chained_methods        | JS        |  [Boolean] **不缩进链式方法(.then().catch())**