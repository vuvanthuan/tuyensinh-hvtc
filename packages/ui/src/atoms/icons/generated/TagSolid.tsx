import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TagSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1.95 4.45a2.5 2.5 0 0 1 2.5-2.5h7.57a3 3 0 0 1 2.122.879l7.9 7.899a4 4 0 0 1 0 5.657l-5.657 5.657a4 4 0 0 1-5.657 0l-7.9-7.9a3 3 0 0 1-.878-2.121zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default TagSolid;
