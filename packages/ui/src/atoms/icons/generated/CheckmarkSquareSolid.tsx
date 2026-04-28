import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CheckmarkSquareSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5zm16.787 5.075a1 1 0 0 0-.003-1.414l-.709-.705a1 1 0 0 0-1.414.003l-5.772 5.796L7.57 9.98a1 1 0 0 0-1.415.01l-.702.712a1 1 0 0 0 .01 1.414L10.2 16.79a1 1 0 0 0 1.411-.007z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CheckmarkSquareSolid;
