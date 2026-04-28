import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FloppyDiskLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 16 2zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h1a1 1 0 0 0 1-1V8.414L15.586 4H9v3h7a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1V4zm3 10v6h8v-6z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default FloppyDiskLight;
