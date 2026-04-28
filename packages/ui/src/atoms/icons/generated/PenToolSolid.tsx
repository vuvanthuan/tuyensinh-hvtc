import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PenToolSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M4.236 1.511c-.491-.119-.828.482-.471.84l6.717 6.717A2.002 2.002 0 0 1 13 11a2 2 0 1 1-3.932-.518L2.35 3.765c-.358-.357-.959-.02-.84.47l3.017 12.5a1 1 0 0 0 .776.746l5.765 1.153a1 1 0 0 0 .224 1.073l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.073-.224L17.48 5.304a1 1 0 0 0-.746-.776z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PenToolSolid;
