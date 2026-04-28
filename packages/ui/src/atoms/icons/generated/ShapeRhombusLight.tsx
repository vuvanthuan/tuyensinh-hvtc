import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShapeRhombusLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g clipPath="url(#prefix__a)">
            <path
              fill="#11181C"
              fillRule="evenodd"
              d="M2.121 15.536a5 5 0 0 1 0-7.071L8.464 2.12a5 5 0 0 1 7.072 0l6.343 6.343a5 5 0 0 1 0 7.072l-6.343 6.343a5 5 0 0 1-7.071 0zm1.415-5.657a3 3 0 0 0 0 4.242l6.343 6.344a3 3 0 0 0 4.242 0l6.344-6.344a3 3 0 0 0 0-4.242L14.12 3.536a3 3 0 0 0-4.242 0z"
              clipRule="evenodd"
            />
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

export default ShapeRhombusLight;
