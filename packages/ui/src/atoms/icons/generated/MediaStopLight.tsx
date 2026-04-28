import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaStopLight(allProps: IconWrapperProps): React.ReactElement {
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
            fillRule="evenodd"
            d="M3 5.333A2.333 2.333 0 0 1 5.333 3h13.334A2.333 2.333 0 0 1 21 5.333v13.334A2.333 2.333 0 0 1 18.667 21H5.333A2.333 2.333 0 0 1 3 18.667zM5.333 5A.333.333 0 0 0 5 5.333v13.334c0 .184.15.333.333.333h13.334c.184 0 .333-.15.333-.333V5.333A.333.333 0 0 0 18.667 5z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaStopLight;
