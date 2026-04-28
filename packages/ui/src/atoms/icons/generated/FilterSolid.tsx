import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FilterSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4.227 2C2.5 2 1.585 4.039 2.732 5.329L9 12.38V19a1 1 0 0 0 .553.894l4 2A1 1 0 0 0 15 21v-8.62l6.268-7.051C22.414 4.039 21.498 2 19.773 2z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default FilterSolid;
