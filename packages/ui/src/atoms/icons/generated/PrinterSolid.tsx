import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PrinterSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C">
            <path d="M6 8V3a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707V8h2a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-1v-6H4v6H3a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3z" />
            <path d="M17 14H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default PrinterSolid;
