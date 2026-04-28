import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ScissorsLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C">
            <path
              fillRule="evenodd"
              d="M9.446 8.032a4 4 0 1 0-1.414 1.414L10.586 12l-2.554 2.554a4 4 0 1 0 1.414 1.414l11.261-11.26a1 1 0 0 0-1.414-1.415L12 10.586zM6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
              clipRule="evenodd"
            />
            <path d="M14.293 14.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ScissorsLight;
