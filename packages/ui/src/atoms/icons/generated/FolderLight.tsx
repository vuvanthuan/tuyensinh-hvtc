import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FolderLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-8.465a2 2 0 0 1-1.664-.89L8.465 4zM1.879 2.879A3 3 0 0 1 4 2h4.465a2 2 0 0 1 1.664.89L11.535 5H20a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 .879-2.121"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default FolderLight;
