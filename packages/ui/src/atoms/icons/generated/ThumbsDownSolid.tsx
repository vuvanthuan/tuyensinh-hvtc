import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ThumbsDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12.366 23.112c.247.535.782.888 1.384.888 1.242 0 2.222-.359 2.74-1.292.226-.407.314-.843.354-1.225.039-.37.039-.764.039-1.111V17h3.133c1.838 0 3.225-1.648 2.95-3.455l-1.374-9A2.99 2.99 0 0 0 18.643 2H8v13h.377zM6 15H3.983A2.99 2.99 0 0 1 1 12V5c0-1.649 1.328-3 2.983-3H6z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ThumbsDownSolid;
