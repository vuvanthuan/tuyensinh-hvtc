import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MediaPlayCircleLight(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" fillRule="evenodd" clipRule="evenodd">
            <path d="M10.295 6.63A1.5 1.5 0 0 0 8 7.902v8.196a1.5 1.5 0 0 0 2.295 1.272l6.557-4.098a1.5 1.5 0 0 0 0-2.544zM10 15.196V8.804L15.113 12z" />
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MediaPlayCircleLight;
