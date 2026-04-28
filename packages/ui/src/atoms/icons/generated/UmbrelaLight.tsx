import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function UmbrelaLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1C5.925 1 1 5.925 1 12a1 1 0 0 0 1 1h9v6a4 4 0 0 0 8 0 1 1 0 1 0-2 0 2 2 0 1 1-4 0v-6h9a1 1 0 0 0 1-1c0-6.075-4.925-11-11-11m0 2c4.633 0 8.448 3.5 8.945 8H3.055C3.552 6.5 7.367 3 12 3"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default UmbrelaLight;
