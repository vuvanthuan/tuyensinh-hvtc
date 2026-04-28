import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Layers3Light(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M11.553 1.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788zM4.236 7 12 10.882 19.764 7 12 3.118z"
              clipRule="evenodd"
            />
            <path d="M1.106 16.553a1 1 0 0 1 1.341-.448L12 20.883l9.553-4.777a1 1 0 0 1 .894 1.79l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1-.447-1.342" />
            <path d="M2.447 11.106a1 1 0 0 0-.894 1.788l10 5a1 1 0 0 0 .894 0l10-5a1 1 0 1 0-.894-1.789L12 15.883z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Layers3Light;
