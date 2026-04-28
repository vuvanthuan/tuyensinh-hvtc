import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChevronRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.207 20.707a1 1 0 0 1 0-1.414L14.5 12 7.207 4.707a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.415 0l8.353 8.353a1.5 1.5 0 0 1 0 2.122L9.33 21.414a1 1 0 0 1-1.415 0z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChevronRightSolid;
