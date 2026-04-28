import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShapeRhombusSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M2.121 8.465a5 5 0 0 0 0 7.07l6.344 6.344a5 5 0 0 0 7.07 0l6.344-6.343a5 5 0 0 0 0-7.071L15.536 2.12a5 5 0 0 0-7.071 0z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ShapeRhombusSolid;
