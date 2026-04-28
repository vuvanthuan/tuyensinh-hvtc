import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaForwardEndSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M21.5 4.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zM3 5.869c0-1.598 1.78-2.55 3.11-1.665l9.197 6.132a2 2 0 0 1 0 3.328l-9.198 6.132C4.78 20.682 3 19.729 3 18.13z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaForwardEndSolid;
