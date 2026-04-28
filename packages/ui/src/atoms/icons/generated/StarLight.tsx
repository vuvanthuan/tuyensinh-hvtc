import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function StarLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M10.632 1.879c.526-1.172 2.19-1.172 2.715 0L15.915 7.6l6.236.674c1.276.138 1.79 1.72.838 2.582l-4.648 4.21 1.286 6.139c.263 1.257-1.083 2.234-2.197 1.596l-5.44-3.12-5.441 3.12c-1.114.638-2.46-.34-2.197-1.596l1.286-6.139-4.648-4.21c-.952-.862-.438-2.444.839-2.582L8.064 7.6zm1.358 1.86L9.768 8.687a1.49 1.49 0 0 1-1.197.87l-5.393.583 4.02 3.642c.392.355.566.89.458 1.408l-1.112 5.309L11.25 17.8a1.49 1.49 0 0 1 1.48 0l4.705 2.698-1.112-5.31a1.49 1.49 0 0 1 .458-1.407l4.02-3.642-5.393-.583a1.49 1.49 0 0 1-1.197-.87z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default StarLight;
