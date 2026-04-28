import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SearchSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M10 .5a9.5 9.5 0 1 0 0 19c2.082 0 4.008-.67 5.573-1.806l4.72 4.72a1 1 0 0 0 1.414 0l.707-.707a1 1 0 0 0 0-1.414l-4.72-4.72A9.46 9.46 0 0 0 19.5 10 9.5 9.5 0 0 0 10 .5M3.5 10a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default SearchSolid;
