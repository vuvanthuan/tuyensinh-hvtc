import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function CrownLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M12 3a1 1 0 0 1 .83.443l3.78 5.636 4.642-5.227a1 1 0 0 1 1.73.854l-2.686 13.865A3 3 0 0 1 17.35 21H6.65a3 3 0 0 1-2.946-2.43L1.018 4.707a1 1 0 0 1 1.73-.854L7.389 9.08l3.78-5.636A1 1 0 0 1 12 3m0 2.795-3.67 5.472a1 1 0 0 1-1.578.107L3.676 7.91l1.992 10.28a1 1 0 0 0 .982.81h10.7a1 1 0 0 0 .982-.81l1.992-10.28-3.076 3.464a1 1 0 0 1-1.579-.107z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default CrownLight;
