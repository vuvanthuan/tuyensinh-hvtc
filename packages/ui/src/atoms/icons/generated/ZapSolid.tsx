import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ZapSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M14.97 2.243a1 1 0 0 0-1.738-.883l-10 12A1 1 0 0 0 4 15h6.72l-1.69 6.758a1 1 0 0 0 1.738.882l10-12A1 1 0 0 0 20 9h-6.72z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ZapSolid;
