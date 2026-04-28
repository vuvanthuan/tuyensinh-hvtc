import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TextItalicLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M15.023 3H18a1 1 0 1 1 0 2h-2.307l-5.25 14H12a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h2.307l5.25-14H12a1 1 0 1 1 0-2h3.023"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TextItalicLight;
