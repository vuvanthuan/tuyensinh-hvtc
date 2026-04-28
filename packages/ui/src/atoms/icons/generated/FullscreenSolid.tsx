import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FullscreenSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="m7.692 18.278 2.015 2.015A1 1 0 0 1 9 22H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1.707-.707l1.864 1.864 3.682-3.682a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414zM16.308 5.722l-2.015-2.015A1 1 0 0 1 15 2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1.707.707l-1.864-1.864-3.682 3.682a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default FullscreenSolid;
