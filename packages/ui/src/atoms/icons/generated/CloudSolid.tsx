import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CloudSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M11 2a7 7 0 0 0-6.9 5.813A7.5 7.5 0 0 0 7.5 22H19a1 1 0 0 0 .361-.067 5.501 5.501 0 0 0 1.518-10.393q.12-.502.121-1.04a4.5 4.5 0 0 0-3.635-4.417A7 7 0 0 0 11 2"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CloudSolid;
