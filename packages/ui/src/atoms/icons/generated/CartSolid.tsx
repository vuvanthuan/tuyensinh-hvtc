import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CartSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M4 .75H1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h2.012l2.724 11.481A4.25 4.25 0 0 0 9.765 18V18h7.822a4 4 0 0 0 3.943-3.325l1.256-7.338A2 2 0 0 0 20.814 5H5.997l-.78-3.289A1.25 1.25 0 0 0 4 .75M10 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CartSolid;
