import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTrendUpLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1.707 18.707a1 1 0 0 1-1.414-1.414l7.5-7.5a1 1 0 0 1 1.414 0l4.293 4.293L20.586 7H17a1 1 0 1 1 0-2h6.003A.997.997 0 0 1 24 6v6a1 1 0 1 1-2 0V8.414l-7.793 7.793a1 1 0 0 1-1.414 0L8.5 11.914z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTrendUpLight;
