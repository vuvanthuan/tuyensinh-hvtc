import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowThinRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M16.617 16.924A1 1 0 0 1 16 16v-2.5H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h13V8a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.09.217"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowThinRightSolid;
