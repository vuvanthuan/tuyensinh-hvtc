import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TagLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
              fillRule="evenodd"
              d="M4.45 1.95a2.5 2.5 0 0 0-2.5 2.5v7.57a3 3 0 0 0 .878 2.122l7.9 7.9a4 4 0 0 0 5.657 0l5.657-5.657a4 4 0 0 0 0-5.657l-7.9-7.9a3 3 0 0 0-2.121-.878zm-.5 2.5a.5.5 0 0 1 .5-.5h7.57a1 1 0 0 1 .708.293l7.9 7.9a2 2 0 0 1 0 2.828l-5.657 5.657a2 2 0 0 1-2.829 0l-7.9-7.9a1 1 0 0 1-.292-.707z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TagLight;
