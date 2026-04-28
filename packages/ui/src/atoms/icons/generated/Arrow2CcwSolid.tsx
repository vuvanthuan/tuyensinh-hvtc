import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function Arrow2CcwSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M22.279 9.848c.113.54-.288 1.036-.837 1.097l-.994.11c-.549.06-1.036-.338-1.17-.874A7.504 7.504 0 0 0 12 4.5c-1.518 0-2.807.584-4.088 1.537l-.261.2 1.556 1.556A1 1 0 0 1 8.5 9.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1.707-.707l1.81 1.81q.3-.244.603-.472C7.713 2.445 9.62 1.5 12 1.5c5.062 0 9.285 3.58 10.279 8.348M1.721 14.152c-.113-.54.288-1.036.837-1.097l.994-.11c.549-.06 1.036.338 1.17.874A7.504 7.504 0 0 0 12 19.5c1.518 0 2.807-.584 4.088-1.537q.132-.099.261-.2l-1.556-1.556A1 1 0 0 1 15.5 14.5H21a1 1 0 0 1 1 1V21a1 1 0 0 1-1.707.707l-1.81-1.81q-.3.244-.603.472C16.287 21.555 14.38 22.5 12 22.5c-5.062 0-9.285-3.58-10.279-8.348" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default Arrow2CcwSolid;
