import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function GiftboxSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="m11.939 4.018.061.113.061-.113C12.807 2.662 14.194 1 16.5 1a3.5 3.5 0 0 1 3.162 5H22a1 1 0 0 1 1 1v5H13V8h-2v4H1V7a1 1 0 0 1 1-1h2.338A3.5 3.5 0 0 1 7.5 1c2.306 0 3.693 1.662 4.439 3.018M7.5 6h3.154a8 8 0 0 0-.468-1.018C9.557 3.838 8.694 3 7.5 3a1.5 1.5 0 0 0 0 3m5.846 0H16.5a1.5 1.5 0 0 0 0-3c-1.194 0-2.057.838-2.686 1.982A8 8 0 0 0 13.346 6"
              clipRule="evenodd"
            />
            <path d="M3 14h8v8H4a1 1 0 0 1-1-1zM13 22v-8h8v7a1 1 0 0 1-1 1z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default GiftboxSolid;
