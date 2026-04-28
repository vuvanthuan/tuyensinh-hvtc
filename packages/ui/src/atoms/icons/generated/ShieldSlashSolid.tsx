import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ShieldSlashSolid(allProps: IconWrapperProps): React.ReactElement {
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
          <g fill="#11181C" clipPath="url(#prefix__a)">
            <path d="M23.354 1.354a1 1 0 0 1 0 1.414L2.768 23.354a1 1 0 0 1-1.414 0l-.708-.708a1 1 0 0 1 0-1.414L4.74 17.14C3.738 15.689 3 13.957 3 12V5a1 1 0 0 1 .983-1h.007q.022 0 .103-.01c.108-.012.298-.038.586-.096.576-.115 1.535-.353 3.005-.843 1.436-.479 2.37-.95 2.927-1.283.278-.168.464-.301.572-.385a2 2 0 0 0 .107-.088l.012-.011a1 1 0 0 1 1.396 0l.012.011q.027.024.107.088c.108.084.294.217.572.385.558.334 1.49.804 2.927 1.283.779.26 1.414.449 1.925.586l2.991-2.99a1 1 0 0 1 1.414 0zM20.383 9.197a1 1 0 0 1 .617.924v1.88c0 3.446-2.282 6.2-4.341 8.002a22.7 22.7 0 0 1-4.104 2.836C12.287 22.98 12 23 12 23s-.238.01-.659-.216a18 18 0 0 1-.539-.303 23 23 0 0 1-1.778-1.15 1 1 0 0 1-.126-1.522L19.293 9.414a1 1 0 0 1 1.09-.217" />
          </g>
          <defs>
            <clipPath id="prefix__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
}

export default ShieldSlashSolid;
