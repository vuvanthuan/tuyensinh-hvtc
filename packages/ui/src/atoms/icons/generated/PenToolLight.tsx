import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PenToolLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1.293 1.293a1 1 0 0 1 .96-.26l14.482 3.495a1 1 0 0 1 .698.613l2.424 6.302L22 13.586a2 2 0 0 1 0 2.828L16.414 22a2 2 0 0 1-2.828 0l-2.143-2.143-6.302-2.424a1 1 0 0 1-.613-.698L1.032 2.253a1 1 0 0 1 .26-.96m7.586 9L3.806 5.22l2.543 10.535 6.01 2.312a1 1 0 0 1 .348.226L15 20.586 20.586 15l-2.293-2.293a1 1 0 0 1-.226-.348l-2.312-6.01L5.22 3.806l5.073 5.073q.091.092.154.198a2 2 0 1 1-1.37 1.37 1 1 0 0 1-.198-.154"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PenToolLight;
