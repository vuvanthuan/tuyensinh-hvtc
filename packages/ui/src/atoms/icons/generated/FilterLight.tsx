import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function FilterLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M2.732 5.329C1.585 4.039 2.502 2 4.227 2h15.546c1.726 0 2.641 2.039 1.495 3.329L15 12.38V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.62zM19.773 4H4.227l6.52 7.336A1 1 0 0 1 11 12v6.382l2 1V12a1 1 0 0 1 .253-.664z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default FilterLight;
