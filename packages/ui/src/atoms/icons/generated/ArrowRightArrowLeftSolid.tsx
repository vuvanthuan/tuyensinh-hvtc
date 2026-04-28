import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowRightArrowLeftSolid(
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
          <g fill="#11181C">
            <path d="M3 6.5a1 1 0 0 1 1-1h11V3a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 15 11V8.5H4a1 1 0 0 1-1-1zM9 21a1 1 0 0 1-1.707.707L4.086 18.5H4v-.086l-.707-.707a1 1 0 0 1 0-1.414L4 15.586V15.5h.086l3.207-3.207A1 1 0 0 1 9 13v2.5h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowRightArrowLeftSolid;
