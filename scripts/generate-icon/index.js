const { exec } = require("node:child_process");

exec(
  `figma-export use-config scripts/generate-icon/.figmaexportrc.components.js && eslint --fix ${process.env.ICONS_DIR_PATH}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output:\n${stdout}`);
  },
);
