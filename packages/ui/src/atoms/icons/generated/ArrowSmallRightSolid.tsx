import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowSmallRightSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.706 18.911A1.17 1.17 0 0 1 12 17.833V15H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h7V6.167c0-.472.278-.898.706-1.078s.918-.08 1.245.253l5.714 5.833a1.184 1.184 0 0 1 0 1.65l-5.714 5.833a1.13 1.13 0 0 1-1.245.253"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowSmallRightSolid;
