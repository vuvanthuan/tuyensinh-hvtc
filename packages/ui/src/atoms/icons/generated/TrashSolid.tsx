import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TrashSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8 1.5v1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-5v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M3.923 7.5h16.154l-.943 12.722A3 3 0 0 1 16.143 23H7.857a3 3 0 0 1-2.992-2.778z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TrashSolid;
