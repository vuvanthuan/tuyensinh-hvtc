import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function TypeMonoColoredTrue(allProps: IconWrapperProps): React.ReactElement {
  const { svgProps: props, icon: _icon, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 64 64"
          {...props}
        >
          <g fill="#012950">
            <path d="M40.39 1.561 4.903 60.859c-.795 1.328.646 2.858 2.026 2.158 27.218-13.79 39.278-21.932 42.985-25.225.623-.553 1.576-.657 2.245-.16l1.063.79c.996.74 2.414.066 2.47-1.174l.79-17.558c.055-1.244-1.305-2.042-2.363-1.386l-14.882 9.227a1.54 1.54 0 0 0 .123 2.687c.888.444 1.13 1.6.475 2.347-4.346 4.945-9.498 9.56-13.582 12.902-1.276 1.044-2.883-.36-2.081-1.8l11.29-20.266c.548-.984 2.004-.847 2.36.221a1.295 1.295 0 0 0 1.908.694l7.832-4.82c.606-.373.88-1.11.664-1.788L43.193 1.886C42.79.616 41.074.417 40.39 1.56M50.858 41.857c-1.362 1.22-3.3 2.411-4.75 3.204-.678.37-1.017 1.167-.779 1.901l2.523 7.772c.208.638.802 1.07 1.473 1.07h8.449a1.548 1.548 0 0 0 1.473-2.024l-3.233-10.011a1.55 1.55 0 0 0-.729-.882l-2.417-1.326c-.65-.356-1.459-.198-2.01.296" />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default TypeMonoColoredTrue;
