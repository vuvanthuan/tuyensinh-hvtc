import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BagSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M18.25 8h1.25A1.5 1.5 0 0 1 21 9.5V18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9.5A1.5 1.5 0 0 1 4.5 8h1.25V6.773c0-1.617.673-3.155 1.851-4.28A6.37 6.37 0 0 1 12 .75c1.64 0 3.223.621 4.399 1.744a5.92 5.92 0 0 1 1.851 4.279zM12 3.25a3.87 3.87 0 0 0-2.672 1.052 3.42 3.42 0 0 0-1.078 2.47V8h7.5V6.773c0-.915-.38-1.805-1.078-2.47A3.87 3.87 0 0 0 12 3.25"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default BagSolid;
