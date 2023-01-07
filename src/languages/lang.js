/* 
  Language: Minecraft Lang
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

/**
 * @param {import("../highlight").HLJSApi} hljs
 */
export default function(hljs) {
  return {
    name: "lang",
    case_insensitive: false,
    keywords: "",
    contains: [
      {
        className: "string",
        begin: "^",
        end: "[A-Za-z0-9](?==)|(?=#)"
      },
      hljs.COMMENT("#", "$")
    ]
  }
}
