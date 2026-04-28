import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BookmarkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M5.5 1a2 2 0 0 0-2 2v19a1 1 0 0 0 1.519.855L12 18.615l6.981 4.24A1 1 0 0 0 20.5 22V3a2 2 0 0 0-2-2z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default BookmarkSolid;
