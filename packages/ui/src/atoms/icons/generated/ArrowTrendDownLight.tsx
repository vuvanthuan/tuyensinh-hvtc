import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTrendDownLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1.707 5.293A1 1 0 0 0 .293 6.707l7.5 7.5a1 1 0 0 0 1.414 0L13.5 9.914 20.586 17H17a1 1 0 1 0 0 2h6.003a.996.996 0 0 0 .996-.952L24 18v-6a1 1 0 1 0-2 0v3.586l-7.793-7.793a1 1 0 0 0-1.414 0L8.5 12.086z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTrendDownLight;
