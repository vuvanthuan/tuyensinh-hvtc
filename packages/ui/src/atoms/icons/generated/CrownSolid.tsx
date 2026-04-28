import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CrownSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12.83 3.443a1 1 0 0 0-1.66 0L7.39 9.079 2.748 3.852a1 1 0 0 0-1.73.854l2.687 13.865A3 3 0 0 0 6.65 21h10.7a3 3 0 0 0 2.946-2.43l2.686-13.864a1 1 0 0 0-1.73-.854L16.611 9.08z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CrownSolid;
