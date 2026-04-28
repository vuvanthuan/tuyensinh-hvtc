import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnUpRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M15.617 3.076A1 1 0 0 0 15 4v2.5H8.5A5.5 5.5 0 0 0 3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8a2.5 2.5 0 0 1 2.5-2.5H15V12a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-.495-.495-.01-.01-3.495-3.495a1 1 0 0 0-1.09-.217"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnUpRightSolid;
