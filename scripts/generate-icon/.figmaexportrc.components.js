const { pascalCase } = require("@figma-export/utils");
const fs = require("fs");
const iconFolderPath = process.env.ICONS_DIR_PATH;

if (fs.existsSync(iconFolderPath)) {
  fs.rmSync(iconFolderPath, { recursive: true });
}

fs.mkdirSync(iconFolderPath, { recursive: true });

const seen = new Set();

module.exports = {
  commands: [
    [
      "components",
      {
        fileId: process.env.ICON_FILE_ID,
        ids: [process.env.FIGMA_FILE_NODE_ID_ICON.replace("-", ":")],
        filterComponent: (_component) => {
          return true;
        },
        outputters: [
          require("@figma-export/output-components-as-svgr").default({
            output: iconFolderPath,
            getFileExtension: () => ".tsx",
            getDirname: () => ".",
            getExportTemplate: (options) => {
              const reactComponentName = pascalCase(options.basename);
              return `export {default as ${reactComponentName}} from "./${reactComponentName}";`;
            },
            getSvgrConfig: () => ({
              typescript: true,
              icon: true,
              expandProps: "end",
              plugins: [
                "@svgr/plugin-svgo",
                "@svgr/plugin-jsx",
                "@svgr/plugin-prettier",
              ],
              template: (
                { componentName, props, jsx, exports },
                { tpl },
              ) => tpl`
              import type React from 'react';
              ${"\n"}
              import type {IconWrapperProps} from "../base/IconWrapper/types";
              import {IconWrapper} from "../base/IconWrapper";
              ${"\n"}
              function ${componentName}(allProps: IconWrapperProps): React.ReactElement {
                const { svgProps: props, icon: _icon, ...restProps } = allProps;
                return <IconWrapper icon={${jsx}} {...restProps} />;
              }
              ${"\n"}
              ${exports}
            `,
            }),
          }),
        ],
      },
    ],
  ],
};
