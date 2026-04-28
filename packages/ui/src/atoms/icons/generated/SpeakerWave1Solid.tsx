import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function SpeakerWave1Solid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12.166 2.144c.707.356.834 1.13.834 1.6v16.512c0 .473-.128 1.244-.834 1.6-.75.377-1.449-.048-1.804-.367L4.95 16.625H3a2 2 0 0 1-2-2V9.437a2 2 0 0 1 2-2h1.947l5.415-4.925c.354-.318 1.053-.746 1.804-.368M16.119 7.73l.24.072c1.766.529 2.891 2.3 2.891 4.198s-1.125 3.67-2.892 4.198l-.24.071a1 1 0 0 1-1.244-.671l-.143-.48a1 1 0 0 1 .671-1.244l.24-.072c.533-.159 1.108-.814 1.108-1.802s-.575-1.643-1.108-1.802l-.24-.072a1 1 0 0 1-.671-1.245l.143-.479a1 1 0 0 1 1.245-.671" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default SpeakerWave1Solid;
