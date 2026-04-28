import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaBackwardLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M9.58 4.838c.984-.766 2.42-.064 2.42 1.184v11.956c0 1.248-1.436 1.95-2.42 1.184l-8.194-6.373a1 1 0 0 1 0-1.578zM3.628 12 10 16.955v-9.91z" />
            <path d="M12 12a1 1 0 0 0 .386.79l8.193 6.372c.985.766 2.421.064 2.421-1.184V6.022c0-1.248-1.436-1.95-2.42-1.184l-8.194 6.373A1 1 0 0 0 12 12m2.629 0L21 16.955v-9.91z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaBackwardLight;
