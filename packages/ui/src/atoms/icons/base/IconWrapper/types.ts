import type React from "react";

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  size?: number | string;
  color?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}
