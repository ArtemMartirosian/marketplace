"use client";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useRouter, useSearchParams } from "next/navigation";
import { TABS } from "../constants/lots.constants";
import { Tabs } from "../types/lots.types";
import { LegalEntitySection } from "./LegalEntitySection";
import { LoanSection } from "./LoanSection";
import { ProjectSection } from "./ProjectSection";

export const LotTabs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get("tab") || 'loan';
  const isValidTab = TABS.some((item) => item.params === currentTab);

  const handleChangeTab = (tab: Tabs["params"]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  useIsomorphicLayoutEffect(() => {
    if (!currentTab || !isValidTab) {
      const defaultTab = TABS[0].params;
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", defaultTab);
      router.replace(`?${params.toString()}`);
    }
  }, [currentTab, isValidTab, router, searchParams]);

  return (
    <section className=" w-full h-fit flex flex-col 2xl:gap-[60px] gap-10">
      <div className=" w-full h-fit flex items-center sm:gap-8 xs:gap-6 gap-4 border-b border-gray-border">
        {TABS.map((item, index) => (
          <button
            key={index + item.params}
            data-active={currentTab === item.params ? "on" : "off"}
            onClick={() => handleChangeTab(item.params)}
            className=" h-[27px] font-medium sm:text-[18px] text-sm leading-[18px] border-b-[2px] border-transparent text-gray-800 data-[active=on]:border-blue-700 data-[active=on]:text-blue-700 transition-all"
          >
            {item.tab}
          </button>
        ))}
      </div>

      {currentTab === TABS[0].params ? (
        <LoanSection />
      ) : currentTab === TABS[1].params ? (
        <ProjectSection />
      ) : (
        <LegalEntitySection />
      )}
    </section>
  );
};
