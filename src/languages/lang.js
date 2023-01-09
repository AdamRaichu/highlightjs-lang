/* 
  Language: Minecraft Lang
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

export default function(hljs) {
  return {
    name: "lang",
    case_insensitive: false,
    // §[0-9a-gk-or]{1}
    keywords: ["§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f", "§g", "§k", "§l", "§m", "§n", "§o"],
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
        contains: []
      },
      hljs.COMMENT("#", "$")
    ]
  }
}
