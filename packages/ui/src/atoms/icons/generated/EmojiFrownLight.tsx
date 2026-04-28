import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function EmojiFrownLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.797 16.604A1 1 0 0 1 7.4 16.8a1.01 1.01 0 0 1-.198-1.403 5 5 0 0 1 .35-.402c.211-.22.521-.512.922-.804.798-.58 2-1.191 3.526-1.191s2.728.61 3.526 1.191c.4.292.71.583.922.804.123.129.244.262.35.404h.002a1 1 0 0 1-1.597 1.205l-.005-.006-.033-.041a4.94 4.94 0 0 0-.815-.748c-.578-.42-1.376-.81-2.35-.81s-1.772.39-2.35.81a5 5 0 0 0-.815.748l-.034.041z" />
            <path
              fillRule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default EmojiFrownLight;
