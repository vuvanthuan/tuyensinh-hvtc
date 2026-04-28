import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MusicNoteSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M22 16V3.366a2 2 0 0 0-2.333-1.972l-11 1.858A2 2 0 0 0 7 5.224v8.902A4 4 0 1 0 10 18V6.07l9-1.52v7.576A4 4 0 1 0 22 16"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MusicNoteSolid;
