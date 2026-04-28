import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PencilSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M17.067 2.272a3.568 3.568 0 0 1 3.888 5.818l-.518.518-5.045-5.045.518-.518a3.6 3.6 0 0 1 1.157-.773M13.977 4.977 3.655 15.3a1 1 0 0 0-.258.444l-1.362 4.993a1 1 0 0 0 1.228 1.228l4.993-1.362a1 1 0 0 0 .444-.258l10.323-10.322z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default PencilSolid;
