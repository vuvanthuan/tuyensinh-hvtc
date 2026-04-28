import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function EyeSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 2.5c-4.19 0-7.194 2.343-9.097 4.569a18 18 0 0 0-2.825 4.493.94.94 0 0 0-.01.727c.67 1.652 1.612 3.2 2.75 4.569C4.7 19.124 7.707 21.5 12 21.5s7.298-2.376 9.182-4.642a17.4 17.4 0 0 0 2.749-4.57.94.94 0 0 0-.01-.726 17.8 17.8 0 0 0-2.824-4.493C19.193 4.843 16.19 2.5 12 2.5m3.5 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default EyeSolid;
