import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PaperPlaneLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M21.944 3.33a1 1 0 0 0-1.274-1.274L1.86 8.64c-1.282.448-1.355 2.234-.114 2.786l7.496 3.332 3.332 7.496c.552 1.241 2.338 1.168 2.787-.114zM9.779 12.807 3.71 10.111 19.37 4.63l-5.48 15.659-2.697-6.068 3.514-3.514a1 1 0 0 0-1.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PaperPlaneLight;
