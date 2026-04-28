import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCircleUpSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6.833 0a.83.83 0 0 1-.77-.53.88.88 0 0 1 .181-.933l4.167-4.286a.817.817 0 0 1 1.178 0l4.167 4.286c.238.245.31.614.18.934a.83.83 0 0 1-.77.529H14v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCircleUpSolid;
