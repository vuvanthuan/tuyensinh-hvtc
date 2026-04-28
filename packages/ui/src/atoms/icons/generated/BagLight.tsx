import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BagLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M6 7V5.773c0-1.547.644-3.02 1.774-4.098A6.12 6.12 0 0 1 12 0c1.577 0 3.098.597 4.226 1.675A5.67 5.67 0 0 1 18 5.773V7h1a2 2 0 0 1 2 2v9a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a2 2 0 0 1 2-2zm3.155-3.879A4.12 4.12 0 0 1 12 2c1.076 0 2.098.408 2.845 1.121A3.67 3.67 0 0 1 16 5.773V7H8V5.773c0-.985.41-1.94 1.155-2.652M5 18V9h14v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default BagLight;
