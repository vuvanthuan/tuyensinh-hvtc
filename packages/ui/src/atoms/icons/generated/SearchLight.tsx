import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SearchLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M10 1a9 9 0 1 0 5.618 16.032l4.675 4.675a1 1 0 0 0 1.414-1.414l-4.675-4.675A9 9 0 0 0 10 1m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default SearchLight;
