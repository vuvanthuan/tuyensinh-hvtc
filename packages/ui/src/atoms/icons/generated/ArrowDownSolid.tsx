import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowDownSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M5.089 14.706c.18-.428.606-.706 1.078-.706H9V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11h2.833c.472 0 .898.278 1.078.706s.08.918-.253 1.245l-5.833 5.714a1.184 1.184 0 0 1-1.65 0l-5.833-5.714a1.13 1.13 0 0 1-.253-1.245"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowDownSolid;
