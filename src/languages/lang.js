/* 
  Language: Minecraft Lang
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

export default function (hljs) {
  return {
    name: "lang",
    case_insensitive: false,
    // §[0-9a-gk-or]{1}
    contains: [
      {
        className: "string",
        begin: "^[A-Za-z0-9]",
        end: "[A-Za-z0-9](?==)|(?=#)",
        contains: [
          {
            begin: "[A-Za-z0-9\\-_]+:[A-Za-z0-9\\-_]+",
            end: "(?=\\.)"
          }
        ]
      },
      {
        begin: "\\=",
        end: "(?!.)|(?=#)",
        contains: [
          {
            className: "built_in",
            begin: "§(?=[0-9a-gk-or])",
            end: "."
          },
          {
            className: "variable",
            begin: ":_",
            end: ":|(?!.)"
          },
          {
            className: "regexp",
            begin: "%([1-9]+\\$)?(\\d)*(\\.(\\d)+)?(?=[dcbsfexh0-9])",
            end: "[dcbsfexh0-9]"
          }
        ]
      },
      hljs.COMMENT("#", "$")
    ]
  }
}
