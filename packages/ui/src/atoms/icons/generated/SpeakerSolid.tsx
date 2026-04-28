import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SpeakerSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M13 3.745c0-.472-.127-1.245-.834-1.6-.75-.379-1.45.049-1.804.367L4.947 7.437H3a2 2 0 0 0-2 2v5.188a2 2 0 0 0 2 2h1.95l5.412 4.864c.355.32 1.054.744 1.804.366.706-.355.834-1.126.834-1.599z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default SpeakerSolid;
