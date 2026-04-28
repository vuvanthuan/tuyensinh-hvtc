import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MedalLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 0a8 8 0 0 0-6 13.292V23a1 1 0 0 0 1.496.868L12 21.295l4.504 2.573A1 1 0 0 0 18 23v-9.708A8 8 0 0 0 12 0M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8m10 6.93A7.96 7.96 0 0 1 12 16a7.96 7.96 0 0 1-4-1.07v6.347l3.504-2.002a1 1 0 0 1 .992 0L16 21.277z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MedalLight;
