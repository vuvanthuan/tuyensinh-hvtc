import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TraySolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M23 17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-4.482a2 2 0 0 1 .252-.971l4.176-7.518A2 2 0 0 1 7.177 3h9.646a2 2 0 0 1 1.749 1.029l4.176 7.518a2 2 0 0 1 .252.971zm-3.416-6H16a1 1 0 0 0-.832.445L13.465 14h-2.93l-1.703-2.555A1 1 0 0 0 8 11H4.415l3.056-5.5h9.058z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TraySolid;
