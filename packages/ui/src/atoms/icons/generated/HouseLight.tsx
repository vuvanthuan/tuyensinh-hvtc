import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function HouseLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.614 1.21a1 1 0 0 0-1.228 0l-9 7A1 1 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a1 1 0 0 0-.386-.79zM16 20h4V9.49l-8-6.223-8 6.222V20h4v-8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-6 0v-7h4v7z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default HouseLight;
