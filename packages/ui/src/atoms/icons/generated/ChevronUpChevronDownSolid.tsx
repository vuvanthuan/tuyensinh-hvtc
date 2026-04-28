import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ChevronUpChevronDownSolid(
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
            <path d="M6.076 9.383A1 1 0 0 0 7 10h10a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0-.217 1.09M6.076 14.617A1 1 0 0 1 7 14h10a1 1 0 0 1 .707 1.707l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1-.217-1.09" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ChevronUpChevronDownSolid;
