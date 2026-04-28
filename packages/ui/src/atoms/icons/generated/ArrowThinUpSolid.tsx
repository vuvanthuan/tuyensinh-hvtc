import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowThinUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.076 7.383A1 1 0 0 0 8 8h2.5v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8H16a1 1 0 0 0 .707-1.707l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.217 1.09"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowThinUpSolid;
