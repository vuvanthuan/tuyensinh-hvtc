import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CheckmarkDoubleSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M23.228 8.018a1 1 0 0 0 0-1.414l-.706-.708a1 1 0 0 0-1.415 0l-11.02 11.016a1 1 0 0 0 0 1.415l.706.707a1 1 0 0 0 1.414 0zM17.229 8.018a1 1 0 0 0 0-1.414l-.707-.708a1 1 0 0 0-1.415 0l-9.561 9.562-2.778-2.777a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 0 1.414l4.192 4.192a1 1 0 0 0 1.414 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CheckmarkDoubleSolid;
