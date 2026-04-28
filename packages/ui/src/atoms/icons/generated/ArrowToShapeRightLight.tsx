import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToShapeRightLight(
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
            <path d="M17 20a1 1 0 1 0 0 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3a1 1 0 1 0 0 2h3v16z" />
            <path d="M16.707 12.707a1 1 0 0 0 .293-.704v-.006a1 1 0 0 0-.28-.69l-.014-.016-4.999-4.998a1 1 0 1 0-1.414 1.414L13.586 11H3a1 1 0 1 0 0 2h10.586l-3.293 3.293a1 1 0 1 0 1.414 1.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToShapeRightLight;
