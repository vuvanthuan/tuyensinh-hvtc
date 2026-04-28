import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChevronLeftChevronRightSolid(
  allProps: IconWrapperProps,
): React.ReactElement {
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M14.586 5.293a1 1 0 0 0 0 1.414L19.879 12l-5.293 5.293a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414 0l6.354-6.353a1.5 1.5 0 0 0 0-2.122l-6.354-6.353a1 1 0 0 0-1.414 0zM9.414 5.293a1 1 0 0 1 0 1.414L4.121 12l5.293 5.293a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0L.939 13.061a1.5 1.5 0 0 1 0-2.122l6.354-6.353a1 1 0 0 1 1.414 0z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChevronLeftChevronRightSolid;
