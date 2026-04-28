import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SpeakerLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M11 4.635 6.006 9.177a1 1 0 0 1-.673.26H3v5.188h2.333a1 1 0 0 1 .669.256L11 19.373zm1.166-2.49c.707.355.834 1.128.834 1.6v16.511c0 .473-.128 1.244-.834 1.6-.75.377-1.449-.048-1.804-.367L4.95 16.625H3a2 2 0 0 1-2-2V9.437a2 2 0 0 1 2-2h1.947l5.415-4.925c.354-.318 1.053-.746 1.804-.368"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default SpeakerLight;
