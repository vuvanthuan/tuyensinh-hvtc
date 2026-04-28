import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SpeakerXmarkSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12.166 2.144c.707.356.834 1.13.834 1.6v16.512c0 .473-.128 1.244-.834 1.6-.75.377-1.449-.048-1.804-.367L4.95 16.625H3a2 2 0 0 1-2-2V9.437a2 2 0 0 1 2-2h1.947l5.415-4.925c.354-.318 1.053-.746 1.804-.368M21.823 15.677a1 1 0 0 1-1.414 0l-1.909-1.91-1.909 1.91a1 1 0 0 1-1.414 0l-.354-.354a1 1 0 0 1 0-1.414L16.733 12l-1.91-1.909a1 1 0 0 1 0-1.414l.354-.354a1 1 0 0 1 1.414 0l1.909 1.91 1.909-1.91a1 1 0 0 1 1.414 0l.354.354a1 1 0 0 1 0 1.414L20.267 12l1.91 1.909a1 1 0 0 1 0 1.414z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default SpeakerXmarkSolid;
