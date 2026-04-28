import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function IconGrid(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, icon: _icon, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 25 25"
          {...props}
        >
          <path
            stroke="#F9C8C8"
            strokeLinecap="square"
            strokeWidth={0.375}
            d="m.27.27 24.46 24.46m0-24.46L.27 24.73M22.691 12.5c0 5.629-4.562 10.192-10.191 10.192S2.309 18.129 2.309 12.5 6.87 2.309 12.5 2.309 22.691 6.87 22.691 12.5Zm-5.095 0a5.096 5.096 0 1 1-10.192 0 5.096 5.096 0 0 1 10.192 0ZM4.346 2.309h16.307v20.383H4.347zm18.345 2.038v16.306H2.31V4.347zM3.328 3.327h18.344v18.345H3.328z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default IconGrid;
