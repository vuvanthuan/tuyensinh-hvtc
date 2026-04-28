import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PencilLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M18.432 4a1.57 1.57 0 0 0-1.108.46L5.257 16.525l-.832 3.049 3.049-.832L19.54 6.676A1.569 1.569 0 0 0 18.432 4m-1.365-1.728a3.568 3.568 0 0 1 3.888 5.818L8.7 20.345a1 1 0 0 1-.444.258l-4.993 1.362a1 1 0 0 1-1.228-1.228l1.362-4.993a1 1 0 0 1 .258-.444L15.91 3.045a3.6 3.6 0 0 1 1.157-.773"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PencilLight;
