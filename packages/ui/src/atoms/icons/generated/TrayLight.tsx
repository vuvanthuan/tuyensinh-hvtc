import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TrayLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M7.236 3a3 3 0 0 0-2.683 1.658L1 11.764V17a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-5.236l-3.553-7.106A3 3 0 0 0 16.764 3zm13.146 8-2.724-5.447A1 1 0 0 0 16.764 5H7.236a1 1 0 0 0-.894.553L3.618 11H8a1 1 0 0 1 .832.445L10.535 14h2.93l1.703-2.555A1 1 0 0 1 16 11zM3 13v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-4.465l-1.703 2.555A1 1 0 0 1 14 16h-4a1 1 0 0 1-.832-.445L7.465 13z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TrayLight;
