import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function LayoutSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3H2zM2 10v9a3 3 0 0 0 3 3h3V10zM10 22h9a3 3 0 0 0 3-3v-9H10z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default LayoutSolid;
