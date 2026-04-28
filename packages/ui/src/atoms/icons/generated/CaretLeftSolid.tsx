import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CaretLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M15.5 17a1 1 0 0 1-1.707.707l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 0 1 15.5 7z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CaretLeftSolid;
