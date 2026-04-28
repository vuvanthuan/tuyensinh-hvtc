import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCircleLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m0 6.833a.83.83 0 0 0-.53-.77.88.88 0 0 0-.933.181L6.25 11.411a.817.817 0 0 0 0 1.178l4.286 4.167c.245.238.614.31.934.18a.83.83 0 0 0 .529-.77V14h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCircleLeftSolid;
