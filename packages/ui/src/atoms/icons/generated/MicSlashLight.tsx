import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MicSlashLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" clipPath="url(#prefix__a)">
            <path
              fillRule="evenodd"
              d="m16 9.414 7.707-7.707A1 1 0 0 0 22.293.293l-22 22a1 1 0 1 0 1.414 1.414l5.388-5.387a8 8 0 0 0 3.907 1.617L11 20v2a1 1 0 1 0 2 0v-2q0-.032-.002-.062A8 8 0 0 0 20 12v-2a1 1 0 1 0-2 0v2a6 6 0 0 1-9.476 4.89l1.444-1.444A4 4 0 0 0 16 12zm-2 2-2.518 2.518Q11.73 14 12 14a2 2 0 0 0 2-2z"
              clipRule="evenodd"
            />
            <path d="M8 5a4 4 0 0 1 7.945-.665 1 1 0 1 1-1.973.33A2 2 0 0 0 10 5v5.5a1 1 0 1 1-2 0zM6 10a1 1 0 1 0-2 0v2c0 .781.114 1.55.333 2.286a1 1 0 1 0 1.917-.572A6 6 0 0 1 6 12z" />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MicSlashLight;
