import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BookOpenSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M10.063 21.792c.326.356.937.161.937-.322V4c-1-1-2.087-1.428-3.216-1.678-2-.44-3.782-.345-4.871-.203C1.705 2.276 1 3.349 1 4.406v13.16a2.503 2.503 0 0 0 2.568 2.5c1.142-.038 2.727.003 4.163.35a4.4 4.4 0 0 1 2.332 1.376M13.937 21.792c-.326.356-.937.161-.937-.322V4c1-1 2.087-1.428 3.216-1.678 2-.44 3.782-.345 4.871-.203C22.295 2.276 23 3.349 23 4.406v13.16a2.503 2.503 0 0 1-2.568 2.5c-1.142-.038-2.727.003-4.163.35a4.4 4.4 0 0 0-2.332 1.376" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default BookOpenSolid;
