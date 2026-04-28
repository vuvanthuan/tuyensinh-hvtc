import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FloppyDiskSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 16 2H9v5h7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a1 1 0 0 1-1-1zM6 13c-.552 0-1 .384-1 .857v4.286c0 .473.448.857 1 .857h12c.552 0 1-.384 1-.857v-4.286c0-.473-.448-.857-1-.857z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default FloppyDiskSolid;
