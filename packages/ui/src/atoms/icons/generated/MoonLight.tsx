import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MoonLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.097 2.53a1 1 0 0 1-.041 1.07 6 6 0 0 0 8.345 8.345 1 1 0 0 1 1.563.907C21.531 17.976 17.236 22 12 22 6.477 22 2 17.523 2 12c0-5.236 4.024-9.531 9.148-9.964a1 1 0 0 1 .95.494M9.424 4.423a8 8 0 1 0 10.152 10.152A8 8 0 0 1 9.425 4.424"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MoonLight;
