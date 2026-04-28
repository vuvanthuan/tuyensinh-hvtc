import React from "react";

import type { IconWrapperProps } from "./IconWrapper/types";
import { cn } from "../../../index";

export function IconWrapper({
  icon,
  className,
  size = 24,
  color = "currentColor",
  ...props
}: IconWrapperProps) {
  if (!icon) return null;

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      style={{ width: size, height: size, color }}
      {...props}
    >
      {React.cloneElement(
        icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
        {
          width: "100%",
          height: "100%",
          fill: "currentColor",
        },
      )}
    </div>
  );
}
