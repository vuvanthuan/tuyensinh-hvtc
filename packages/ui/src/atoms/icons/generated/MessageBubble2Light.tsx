import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MessageBubble2Light(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v2.865l4.36-3.633A1 1 0 0 1 13 16h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-6.638L7.64 22.768A1 1 0 0 1 6 22v-4H4a3 3 0 0 1-3-3z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MessageBubble2Light;
