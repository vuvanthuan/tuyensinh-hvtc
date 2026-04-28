import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CartLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M1 1a1 1 0 0 0 0 2h2.206l2.78 11.909a4 4 0 0 0 3.779 3.09V18h7.822a4 4 0 0 0 3.943-3.325l1.256-7.338A2 2 0 0 0 20.814 5H5.727l-.753-3.227A1 1 0 0 0 4 1zm5.194 6 1.739 7.454A2 2 0 0 0 9.88 16h7.706a2 2 0 0 0 1.972-1.663L20.814 7z"
              clipRule="evenodd"
            />
            <path d="M8 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CartLight;
