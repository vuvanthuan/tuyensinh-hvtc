import fs from "fs";

const file = "design-tokens.json";
let content = fs.readFileSync(file, "utf-8");

content = content.replace(/"1\. colors"/g, '"colors"');
content = content.replace(/{1\. colors/g, "{colors");
content = content.replace(/overlay white/g, "overlayWhite");
content = content.replace(/overlay black/g, "overlayBlack");
content = content.replace(/"([^"]*?)\s+([^"]*?)":/g, (_, a, b) => {
  return `"${a}${b}":`;
});

fs.writeFileSync("design-tokens.fixed.json", content);
console.log("✅ Fixed file generated");
