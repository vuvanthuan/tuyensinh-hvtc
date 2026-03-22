import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));

export { cn };

export * from "./atoms/button";
export * from "./atoms/input";
export * from "./atoms/label";
export * from "./atoms/checkbox";
export * from "./atoms/separator";
export * from "./atoms/textarea";
export * from "./atoms/avatar";

export * from "./molecules/alert";
export * from "./molecules/card";
export * from "./molecules/toast";
export * from "./molecules/select";
export * from "./molecules/collapsible";
export * from "./molecules/theme";

export * from "./organisms/form";
export * from "./organisms/field";
export * from "./organisms/dialog";
export * from "./organisms/dropdown-menu";
