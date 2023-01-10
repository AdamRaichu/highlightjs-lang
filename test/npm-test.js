const hljs = require("highlight.js");
const lang = require("../");
const fs = require("fs");

hljs.registerLanguage("lang", lang);
var forced = hljs.highlight("gameTip.findTree=Punch a tree to gather wood.", { language: "lang" });
var auto = hljs.highlightAuto("gameTip.findTree=Punch a tree to gather wood.\n");
var longAuto = hljs.highlightAuto(fs.readFileSync("./test/markup/lang/default.txt", "utf8"));
console.log("forced: " + forced.value);
console.log("auto: " + auto.value);
console.log("longAuto: " + longAuto.value);
