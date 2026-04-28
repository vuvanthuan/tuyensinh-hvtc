import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaPlaySolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.506 3.15c-1.331-.856-3.081.1-3.081 1.682v14.336c0 1.583 1.75 2.538 3.081 1.683l11.15-7.169a2 2 0 0 0 0-3.364z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaPlaySolid;
