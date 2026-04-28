import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CheckmarkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M21.229 6.604a1 1 0 0 1 0 1.414L10.256 18.99a1 1 0 0 1-1.408.006l-6.186-6.075a1 1 0 0 1-.012-1.414l.7-.714a1 1 0 0 1 1.414-.013l4.772 4.687 9.571-9.572a1 1 0 0 1 1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CheckmarkSolid;
