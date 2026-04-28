import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SpeakerWave1Light(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M13 3.745c0-.472-.127-1.245-.834-1.6-.75-.379-1.45.049-1.804.367L4.947 7.437H3a2 2 0 0 0-2 2v5.188a2 2 0 0 0 2 2h1.95l5.412 4.864c.355.32 1.054.744 1.804.366.706-.355.834-1.126.834-1.599zM6.006 9.177 11 4.635v14.738l-4.998-4.492a1 1 0 0 0-.669-.256H3V9.437h2.333a1 1 0 0 0 .673-.26"
              clipRule="evenodd"
            />
            <path d="M16.287 8.042a1 1 0 1 0-.573 1.916C16.37 10.154 17 10.921 17 12c0 1.08-.63 1.846-1.286 2.042a1 1 0 1 0 .572 1.916C17.93 15.467 19 13.808 19 12s-1.07-3.467-2.713-3.958" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default SpeakerWave1Light;
