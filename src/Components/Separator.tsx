import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export const Separator = ({ className, orientation = "horizontal" }: Props) => {
  return (
    <div
      className={cn(
        " bg-white-700",
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        className
      )}
    ></div>
  );
};
