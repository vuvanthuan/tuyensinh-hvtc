import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShareSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M18 1a4 4 0 0 0-3.96 4.572L8.449 8.836a4 4 0 1 0 0 6.327l5.593 3.26a4 4 0 1 0 1.515-2.59L9.96 12.572a4 4 0 0 0 0-1.144l5.593-3.264A4 4 0 1 0 18 1"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ShareSolid;
