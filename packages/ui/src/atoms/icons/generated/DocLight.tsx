import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DocLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V10a1 1 0 0 0-.293-.707l-8-8A1 1 0 0 0 13 1zm6 2H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9h-7a1 1 0 0 1-1-1zm6.586 6L14 4.414V9z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default DocLight;
