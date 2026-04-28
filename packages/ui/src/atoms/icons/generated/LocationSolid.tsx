import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LocationSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M21.304 4.693c.604-1.273-.724-2.6-1.997-1.997L2.834 10.498c-1.272.603-1.088 2.47.279 2.811l6.062 1.516 1.516 6.062c.341 1.367 2.208 1.551 2.81.279z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default LocationSolid;
