import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Dots6HorizontalSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M6.5 15.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M6.5 8.25a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M12 13.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M14.5 8.25a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M20 13.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M22.5 8.25a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Dots6HorizontalSolid;
