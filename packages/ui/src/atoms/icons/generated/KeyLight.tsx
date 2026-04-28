import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function KeyLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M21.707 2.293a1 1 0 0 1 0 1.414l-.543.543 1.625 1.625a2 2 0 0 1 0 2.828l-2.476 2.477a2 2 0 0 1-2.829 0L15.86 9.555l-3.11 3.11a6.5 6.5 0 1 1-1.414-1.414l8.958-8.958a1 1 0 0 1 1.414 0M17.274 8.14l1.624 1.624 2.477-2.476-1.625-1.625zM7.5 12a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default KeyLight;
