import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowCcwSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.621 6.207C8.811 5.255 10.257 4.5 12 4.5a7.5 7.5 0 1 1-7.065 10.026c-.186-.52-.71-.87-1.25-.755l-.979.208c-.54.114-.89.647-.724 1.174C3.322 19.411 7.298 22.5 12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5c-2.783 0-4.952 1.268-6.511 2.575L3.707 2.293A1 1 0 0 0 2 3v5.5a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .707-1.707z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowCcwSolid;
