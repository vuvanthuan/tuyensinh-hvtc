import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ArrowSmallLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M11.295 18.911c.427-.18.705-.606.705-1.078V15h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7V6.167c0-.472-.278-.898-.706-1.078a1.13 1.13 0 0 0-1.245.253l-5.714 5.833a1.184 1.184 0 0 0 0 1.65l5.714 5.833c.327.334.818.434 1.245.253"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ArrowSmallLeftSolid;
