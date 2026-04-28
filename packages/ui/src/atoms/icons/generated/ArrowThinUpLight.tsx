import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowThinUpLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 5.414V21a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowThinUpLight;
