import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function EnvelopeLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M23 6v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3M3.107 5.554C3.272 5.227 3.612 5 4 5h16c.388 0 .728.227.893.554L12 11.779zM3 7.921l7.853 5.497a2 2 0 0 0 2.294 0L21 7.92V18c0 .548-.452 1-1 1H4c-.548 0-1-.452-1-1z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default EnvelopeLight;
