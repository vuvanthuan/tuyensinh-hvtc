import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnUpLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M8.383 3.076A1 1 0 0 1 9 4v2.5h6.5A5.5 5.5 0 0 1 21 12v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-8a2.5 2.5 0 0 0-2.5-2.5H9V12a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.09-.217"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnUpLeftSolid;
