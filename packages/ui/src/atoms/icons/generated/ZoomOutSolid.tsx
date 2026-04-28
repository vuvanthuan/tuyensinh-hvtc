import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ZoomOutSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M6.5 8.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
            <path
              fillRule="evenodd"
              d="M.5 10a9.5 9.5 0 1 1 19 0c0 2.082-.67 4.008-1.806 5.573l4.72 4.72a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0l-4.72-4.72A9.46 9.46 0 0 1 10 19.5 9.5 9.5 0 0 1 .5 10M10 3.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ZoomOutSolid;
