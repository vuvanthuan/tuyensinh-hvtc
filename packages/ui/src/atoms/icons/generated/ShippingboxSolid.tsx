import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShippingboxSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M6.44 3.945 3 5.856l9 5 3.44-1.911zM13 12.588l9-5V17a1 1 0 0 1-.514.874L13 22.588zM2 17V7.588l9 5v10l-8.486-4.714A1 1 0 0 1 2 17M12.486 1.132a1 1 0 0 0-.972 0L8.56 2.774l9 5L21 5.862z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ShippingboxSolid;
