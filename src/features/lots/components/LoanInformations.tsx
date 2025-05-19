"use client";

import { cn } from "@/lib/utils";
import { createContext, ReactNode, useContext } from "react";

const LoanInformationContext = createContext<boolean | undefined>(undefined);

interface ChildrenProps {
  children: ReactNode;
}

type LoanInformationValueProps = ChildrenProps & {
  className?: string;
  type?: "text" | "box";
};

export const LoanInformations = ({ children }: ChildrenProps) => {
  return (
    <LoanInformationContext value={true}>
      <div className=" w-full max-w-[973px] h-fit flex flex-col gap-8">
        {children}
      </div>
    </LoanInformationContext>
  );
};

export const LoanInformationsTitle = ({ children }: ChildrenProps) => {
  useLoanContext("LoanInformationsTitle");

  return (
    <p className=" text-[20px] leading-[28px] font-bold text-blue-500">
      {children}
    </p>
  );
};

const LoanInformationGroupContext = createContext<boolean | undefined>(
  undefined
);

export const LoanInformationGroup = ({ children }: ChildrenProps) => {
  useLoanContext("LoanInformationGroup");

  return (
    <LoanInformationGroupContext value={true}>
      <div className=" w-full h-fit grid grid-cols-[303px_1fr] items-center gap-8">
        {children}
      </div>
    </LoanInformationGroupContext>
  );
};

export const LoanInformationName = ({ children }: ChildrenProps) => {
  useLoanInformationGroupContext("LoanInformationName");

  return (
    <p className=" text-[18px] leading-[18px] font-medium text-gray-800">
      {children}
    </p>
  );
};

export const LoanInformationValue = ({
  children,
  className,
  type = "text",
}: LoanInformationValueProps) => {
  useLoanInformationGroupContext("LoanInformationValue");

  if (type === "text") {
    return (
      <p className=" text-[18px] leading-[18px] font-medium text-gray-dark">
        {children}
      </p>
    );
  }

  return (
    <div
      className={cn(
        " w-fit h-[30px] flex items-center justify-center px-2.5 py-1.5 rounded-[4px] text-[18px] leading-[10px] font-medium text-blue-500 bg-blue-levander/60",
        className
      )}
    >
      {children}
    </div>
  );
};

function useLoanContext(component: string) {
  const context = useContext(LoanInformationContext);
  if (!context) {
    throw new Error(
      `${component} should be used within LoanInformationContext`
    );
  }
  return context;
}

function useLoanInformationGroupContext(component: string) {
  const context = useContext(LoanInformationContext);
  if (!context) {
    throw new Error(
      `${component} should be used within LoanInformationContext`
    );
  }
  return context;
}
