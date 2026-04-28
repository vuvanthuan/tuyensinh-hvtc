import type React from "react";

import type { IconWrapperProps } from "../base/IconWrapper/types";
import { IconWrapper } from "../base/IconWrapper";

function PhoneSlashSolid(allProps: IconWrapperProps): React.ReactElement {
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
            d="M20.586 2a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707L3.414 22a.5.5 0 0 1-.707 0L2 21.293a.5.5 0 0 1 0-.707l4.872-4.873.328-.327-.302-.352C4.402 12.121 2.784 8.456 2.505 4.507 2.428 3.413 3.357 2.5 4.545 2.5h3.061c.532 0 1.011.32 1.216.813l1.28 3.079a1.324 1.324 0 0 1-.393 1.54l-.798.64c-.529.424-.726 1.172-.396 1.804q.486.931 1.1 1.776l.345.474zM16.08 14.315c.367-.46.993-.62 1.535-.394l3.073 1.282c.49.205.811.687.811 1.22V19.5c0 1.168-.93 2.074-2.042 1.995-3.228-.23-6.27-1.36-8.866-3.142l2.694-2.694.036.026c.644.421 1.471.242 1.927-.329z"
          />
        </svg>
      }
      {...restProps}
    />
  );
}

export default PhoneSlashSolid;
