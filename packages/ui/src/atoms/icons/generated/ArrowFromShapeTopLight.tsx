import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowFromShapeTopLight(
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
            <path d="M12 2q.205.001.383.076l.318.21.006.007 5 5a1 1 0 0 1-1.414 1.414L13 5.414V16a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 12 2" />
            <path d="M4 17a1 1 0 1 0-2 0v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H4z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowFromShapeTopLight;
