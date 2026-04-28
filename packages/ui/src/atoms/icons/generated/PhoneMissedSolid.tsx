import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PhoneMissedSolid(allProps: IconWrapperProps): React.ReactElement {
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
            stroke="#11181C"
            d="M4.545 2.5h3.061c.532 0 1.011.32 1.216.813l1.28 3.078a1.324 1.324 0 0 1-.393 1.542l-.798.64c-.529.423-.726 1.171-.396 1.803a14.2 14.2 0 0 0 4.807 5.308c.644.422 1.472.243 1.928-.328l.831-1.04c.367-.46.993-.621 1.535-.395l3.073 1.282c.49.205.811.687.811 1.22v.563h-.041v2.464c0 1.193-.912 2.123-2.001 2.045-8.872-.631-16.324-8.076-16.953-16.988-.077-1.094.852-2.007 2.04-2.007ZM21.646.94a.5.5 0 0 1 .707 0l.707.706a.5.5 0 0 1 0 .707L19.88 5.535l.353.354 2.829 2.829a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L18.465 6.95l-.354.354-2.829 2.828a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l2.828-2.83.354-.353-3.182-3.182a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0l2.83 2.828.353.354z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PhoneMissedSolid;
