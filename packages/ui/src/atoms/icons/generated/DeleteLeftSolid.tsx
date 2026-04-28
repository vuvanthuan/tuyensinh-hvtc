import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function DeleteLeftSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M6.31 3.544A4 4 0 0 1 9.467 2H21c.836 0 1.61.375 2.162.995A3.4 3.4 0 0 1 24 5.25v13.5a3.4 3.4 0 0 1-.838 2.255A2.9 2.9 0 0 1 21 22H9.467a4 4 0 0 1-3.157-1.544L.688 13.228a2 2 0 0 1 0-2.456zm3.94 3.499a1 1 0 0 1 1.414 0l2.829 2.828 2.828-2.828a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-2.828 2.829 2.828 2.828a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414 0l-2.828-2.828-2.829 2.828a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 0-1.414l2.828-2.828-2.828-2.829a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default DeleteLeftSolid;
