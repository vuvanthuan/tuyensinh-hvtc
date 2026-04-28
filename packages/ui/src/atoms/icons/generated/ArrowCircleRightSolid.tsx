import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCircleRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 6.833c0-.337.209-.64.53-.77a.88.88 0 0 1 .933.181l4.286 4.167a.817.817 0 0 1 0 1.178l-4.286 4.167a.88.88 0 0 1-.934.18.83.83 0 0 1-.529-.77V14H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCircleRightSolid;
