import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ZapLight(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, icon: _icon, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="#11181C"
            fillRule="evenodd"
            d="M14.453 1.108a1 1 0 0 1 .517 1.135L13.28 9H20a1 1 0 0 1 .768 1.64l-10 12a1 1 0 0 1-1.738-.883L10.72 15H4a1 1 0 0 1-.768-1.64l10-12a1 1 0 0 1 1.22-.252M6.135 13H12a1 1 0 0 1 .97 1.243L12.03 18l5.835-7H12a1 1 0 0 1-.97-1.243l.94-3.76z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ZapLight;
