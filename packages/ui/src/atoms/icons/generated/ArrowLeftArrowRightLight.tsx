import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowLeftArrowRightLight(
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
            <path d="M15.293 10.293a1 1 0 0 0 1.414 1.414l4-4A1 1 0 0 0 21 6.966a1 1 0 0 0-.304-.685l-3.988-3.988a1 1 0 1 0-1.414 1.414L17.586 6H4a1 1 0 1 0 0 2h13.586zM20 16H6.414l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 18H20a1 1 0 1 0 0-2" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowLeftArrowRightLight;
