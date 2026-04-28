// Script to generate Icon Gallery preview
const fs = require("fs");
const path = require("path");

const exportFile = fs.readFileSync(
  path.join(process.env.ICONS_DIR_PATH, "index.ts"),
  {
    encoding: "utf8",
  },
);

const exportFileLines = exportFile.split("\n");
const components = exportFileLines
  .map((line) => {
    const match = line.match(/as (\w+)/);
    return match ? match[1] : null;
  })
  .filter(Boolean);

const renderIcon = (iconComponent) =>
  `      <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-slate-50 transition-colors">
      <${iconComponent} size={32} />
      <span className="mt-2 text-xs text-slate-500 text-center">${iconComponent}</span>
    </div>`;

let iconGalleryContent = `import React from "react";
import dynamic from 'next/dynamic';
${components
  .map(
    (component) => `
const ${component} = dynamic(() => import("@acme/ui").then(m => m.${component}), { ssr: false });`,
  )
  .join("")}

export default function IconGallery(): React.ReactElement {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Icon Gallery</h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        ${components.map((component) => renderIcon(component)).join("\n")}
      </div>
    </div>
  );
}
`;

const outputDir = "./apps/lms/src/app/(dev)/icon-gallery";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(path.join(outputDir, "page.tsx"), iconGalleryContent);
