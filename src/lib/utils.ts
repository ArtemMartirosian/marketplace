import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classess: ClassValue[]) {
  return twMerge(clsx(classess));
}
