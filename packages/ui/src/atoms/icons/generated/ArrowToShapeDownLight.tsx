import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowToShapeDownLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 2a1 1 0 0 1 1 1v10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4.998 4.999-.015.014a1 1 0 0 1-.691.28h-.006a1 1 0 0 1-.704-.293l-5-5a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1" />
            <path d="M4 17a1 1 0 1 0-2 0v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H4z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowToShapeDownLight;
