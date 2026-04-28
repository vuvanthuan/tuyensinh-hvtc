import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function BoxSolid(allProps: IconWrapperProps): React.ReactElement {
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
            <path d="M10.502 1.403a3 3 0 0 1 2.996 0l.002.001 7 4q.245.142.458.325L12 10.85l-8.958-5.12a3 3 0 0 1 .458-.325l.004-.002zM2.048 7.465A3 3 0 0 0 2 8v8.002a3 3 0 0 0 1.5 2.595l.004.002 6.996 3.998.002.001q.24.138.498.23V12.58zM13 22.826q.259-.09.498-.229h.002l6.996-3.999.004-.002a3 3 0 0 0 1.5-2.595V8q0-.27-.048-.534L13 12.58z" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default BoxSolid;
