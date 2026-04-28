import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TrashLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4a1 1 0 1 1 0 2h-1.06l-.825 13.187A3 3 0 0 1 16.121 23H7.88a3 3 0 0 1-2.994-2.813L4.06 7H3a1 1 0 0 1 0-2h4zm2 1h6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zM6.064 7l.817 13.062a1 1 0 0 0 .998.938h8.242a1 1 0 0 0 .998-.938L17.936 7z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TrashLight;
