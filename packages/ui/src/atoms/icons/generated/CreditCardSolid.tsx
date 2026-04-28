import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CreditCardSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M0 10.997V18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-7.003l-.083.003H.083Q.042 11 0 10.997M24 9.003V6a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v3.003L.083 9h23.834q.041 0 .083.003" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default CreditCardSolid;
