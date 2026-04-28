import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function GlobeLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M9.726 3.29A9.01 9.01 0 0 0 3.055 11H7.05a16.3 16.3 0 0 1 2.676-7.71m4.548 0A16.3 16.3 0 0 1 16.95 11h3.995a9.01 9.01 0 0 0-6.67-7.71m.668 7.71A14.3 14.3 0 0 0 12 3.55 14.3 14.3 0 0 0 9.058 11zm-5.884 2h5.884A14.3 14.3 0 0 1 12 20.45 14.3 14.3 0 0 1 9.058 13M7.05 13H3.055a9.01 9.01 0 0 0 6.67 7.71A16.3 16.3 0 0 1 7.05 13m7.224 7.71A16.3 16.3 0 0 0 16.95 13h3.995a9.01 9.01 0 0 1-6.67 7.71"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default GlobeLight;
