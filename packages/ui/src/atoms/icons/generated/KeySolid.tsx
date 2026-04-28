import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function KeySolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M22.06 4.06a1.5 1.5 0 0 0-2.12-2.12l-8.665 8.664a7 7 0 1 0 2.121 2.121l2.817-2.817 1.271 1.272a2 2 0 0 0 2.828 0l2.477-2.477a2 2 0 0 0 0-2.828l-1.271-1.271zM3.5 16.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default KeySolid;
