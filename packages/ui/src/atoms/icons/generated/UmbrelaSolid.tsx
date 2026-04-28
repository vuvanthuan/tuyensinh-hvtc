import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function UmbrelaSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1C5.925 1 1 5.925 1 12a1 1 0 0 0 1 1h8.5v6a4.5 4.5 0 1 0 9 0v-.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v.5a1.5 1.5 0 0 1-3 0v-6H22a1 1 0 0 0 1-1c0-6.075-4.925-11-11-11"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default UmbrelaSolid;
