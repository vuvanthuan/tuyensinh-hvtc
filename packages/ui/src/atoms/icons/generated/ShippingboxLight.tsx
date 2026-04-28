import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShippingboxLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M10.543 1.665a3 3 0 0 1 2.914 0l8.029 4.46A1 1 0 0 1 22 7v9.412a2 2 0 0 1-1.029 1.748l-8.47 4.705a1.04 1.04 0 0 1-1.002 0l-8.47-4.705A2 2 0 0 1 2 16.412V7a1 1 0 0 1 .514-.874zm1.943 1.749a1 1 0 0 0-.972 0L9.56 4.5 16.5 8.356 18.94 7zM5.059 7 7.5 5.644 14.44 9.5 12 10.856zM13 20.3l7-3.888V8.7l-7 3.888zM4 8.7l7 3.888v7.713l-7-3.89z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ShippingboxLight;
