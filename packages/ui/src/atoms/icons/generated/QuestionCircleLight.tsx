import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function QuestionCircleLight(allProps: IconWrapperProps): React.ReactElement {
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
            <path
              fillRule="evenodd"
              d="M10.661 7.862c-.247.185-.411.451-.411.888a1 1 0 1 1-2 0c0-1.063.458-1.922 1.21-2.487.719-.54 1.637-.763 2.54-.763 1.078 0 1.987.324 2.644.945.651.616.96 1.436 1.01 2.255.094 1.604-.79 3.369-2.408 4.293a1.7 1.7 0 0 0-.293.203 1 1 0 0 1-1.75.907h-.001L11.2 14.1a1.6 1.6 0 0 1-.286-1.142c.083-.682.559-1.256 1.34-1.702.962-.55 1.453-1.598 1.403-2.438-.024-.403-.167-.712-.387-.92-.216-.204-.598-.399-1.27-.399-.602 0-1.059.152-1.339.362"
              clipRule="evenodd"
            />
            <path d="M12 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
              clipRule="evenodd"
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  );
}

export default QuestionCircleLight;
