import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenExitLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M21.707 3.707 16.414 9H20a1 1 0 1 1 0 2h-6.003a1 1 0 0 1-.702-.29l-.004-.005a1 1 0 0 1-.291-.702V4a1 1 0 1 1 2 0v3.586l5.293-5.293a1 1 0 1 1 1.414 1.414M9 20a1 1 0 1 0 2 0v-6.003a.997.997 0 0 0-.997-.997H4a1 1 0 1 0 0 2h3.586l-5.293 5.293a1 1 0 1 0 1.414 1.414L9 16.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenExitLight;
