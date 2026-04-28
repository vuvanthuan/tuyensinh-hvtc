import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PrinterLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M5 3a1 1 0 0 1 1-1h9a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 19 6v2h1a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-2v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3H3a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3h1zm-1 7a1 1 0 0 0-1 1v5h2v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2h2v-5a1 1 0 0 0-1-1zm13-2H7V4h7.586L17 6.414zM7 15v5h10v-5z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PrinterLight;
