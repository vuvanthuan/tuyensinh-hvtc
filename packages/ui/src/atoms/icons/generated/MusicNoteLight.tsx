import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function MusicNoteLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M21.646 2.237A1 1 0 0 1 22 3v13a4 4 0 1 1-2-3.465V4.18L10 5.847v12.156a4 4 0 1 1-2-3.468V5a1 1 0 0 1 .836-.986l12-2a1 1 0 0 1 .81.223M20 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default MusicNoteLight;
