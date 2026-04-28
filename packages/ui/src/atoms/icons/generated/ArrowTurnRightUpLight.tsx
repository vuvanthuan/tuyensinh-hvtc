import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowTurnRightUpLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M10.707 9.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L16 6.414V16a5 5 0 0 1-5 5H4a1 1 0 1 1 0-2h7a3 3 0 0 0 3-3V6.414z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowTurnRightUpLight;
