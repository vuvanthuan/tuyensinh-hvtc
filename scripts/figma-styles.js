import fs from "fs";
import path from "path";

const paths = {
  getStyles: "/styles",
};

const parseFigmaColor = (styles) => {
  const result = styles.map((style) => {
    return {
      name: style.name,
      description: style.description,
      styleType: style.style_type,
    };
  });
  return result;
};

const toCssVar = (name) => {
  const prefix = "--";
  const convertName =
    prefix +
    name
      .toLowerCase()
      .trim()
      .replace(/[≥]/g, "")
      .replace(/[()]/g, "")
      .replace(/[:]/g, "")
      .replace(/[\/\s]+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return convertName;
};

const buildCssVariables = (styles) => {
  const codes = [];
  styles.forEach((style) => {
    const desc = style?.description?.trim();
    if (desc) {
      codes.push(`  ${toCssVar(style?.name)}: ${desc};`);
    }
  });

  codes.sort((a, b) => a.localeCompare(b));

  return `:root {\n${codes.join("\n")}\n}`;
};

const getStylesFigma = async () => {
  const response = await fetch(
    `${process.env.FIGMA_API_URL}/${process.env.FIGMA_FILE_KEY}${paths.getStyles}`,
    {
      headers: {
        "X-Figma-Token": process.env.FIGMA_TOKEN,
      },
    },
  );
  const data = await response.json();

  if (!data) throw new Error("No data from Figma API");

  const styles = parseFigmaColor(data?.meta?.styles);

  return styles;
};

const writeCssFile = async () => {
  const filePath = path.resolve("tooling/tailwind/styles-figma.css");
  const styles = await getStylesFigma();

  if (!styles) throw new Error("No styles found");

  const css = buildCssVariables(styles);

  fs.writeFileSync(filePath, css, "utf-8");

  console.log("✅ CSS file generated:", filePath);
};

writeCssFile();
