import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BookmarkLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M3.5 3a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v19a1 1 0 0 1-1.519.855L12 18.615l-6.981 4.24A1 1 0 0 1 3.5 22zm15 0h-13v17.223l5.981-3.632a1 1 0 0 1 1.038 0l5.981 3.632z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default BookmarkLight;
