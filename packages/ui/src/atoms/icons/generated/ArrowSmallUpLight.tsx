import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowSmallUpLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.707 4.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 7.414V19a1 1 0 1 0 2 0V7.414l3.293 3.293a1 1 0 0 0 1.414-1.414z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowSmallUpLight;
