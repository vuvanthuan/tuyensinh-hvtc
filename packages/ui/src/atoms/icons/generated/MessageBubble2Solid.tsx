import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MessageBubble2Solid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h2v4a1 1 0 0 0 1.64.768L13.362 18H20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MessageBubble2Solid;
