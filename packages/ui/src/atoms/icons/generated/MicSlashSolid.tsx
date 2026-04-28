import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MicSlashSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M12 1c1.645 0 3.059.993 3.673 2.413L8 11.086V5a4 4 0 0 1 4-4M6.25 12q0 .395.053.782l-2.051 2.052A8.3 8.3 0 0 1 3.75 12v-.156a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1zM7.324 18.797l-3.556 3.557a1 1 0 0 1-1.414 0l-.708-.708a1 1 0 0 1 0-1.414L20.232 1.646a1 1 0 0 1 1.414 0l.707.708a1 1 0 0 1 0 1.414L16 10.12V12a4 4 0 0 1-5.562 3.684l-1.302 1.302A5.75 5.75 0 0 0 17.75 12v-.156a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1V12a8.25 8.25 0 0 1-7 8.155V23h-2.5v-2.845a8.25 8.25 0 0 1-3.426-1.358" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default MicSlashSolid;
