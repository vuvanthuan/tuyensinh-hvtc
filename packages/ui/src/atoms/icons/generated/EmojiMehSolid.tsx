import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function EmojiMehSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m9.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7 15a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1m9.5-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default EmojiMehSolid;
