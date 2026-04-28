import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function ThumbsDownLight(allProps: IconWrapperProps): React.ReactElement {
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
            d="M13.75 24a1.53 1.53 0 0 1-1.384-.888L8.377 15H3.983A2.99 2.99 0 0 1 1 12V5c0-1.649 1.328-3 2.983-3h14.66a2.99 2.99 0 0 1 2.95 2.545l1.372 9C23.241 15.352 21.854 17 20.016 17h-3.133v3.372c0 .347 0 .74-.04 1.11-.04.383-.127.82-.353 1.226-.518.933-1.498 1.292-2.74 1.292m-3.578-9.882 3.87 7.872c.593-.043.68-.214.698-.249l.002-.004c.04-.074.086-.21.113-.463a9 9 0 0 0 .027-.929V16a1 1 0 0 1 1-1h4.134a.995.995 0 0 0 .972-1.153l-1.373-9A.99.99 0 0 0 18.643 4H8v9h.377a2 2 0 0 1 1.795 1.118M6 13V4H3.983A.99.99 0 0 0 3 5v7c0 .56.448 1 .983 1z"
            clipRule="evenodd"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default ThumbsDownLight;
