"use client";
import SeeMoreButton from "@/Components/SeeMoreButton";
import Select from "@/Components/Select";
import LotListItem from "@/features/lots/components/LotListItem";
import { LOTS_FILTER } from "@/features/lots/constants/losts.constants";
import { useState } from "react";
import { EntryAmountRange } from "./EntryAmountRange";
import { ProfitabilityPerYearRange } from "./ProfitabilityPerYearRange";

const LotsPage = () => {
  const [selectType, setSelectType] = useState<number>(1);
  const [entryAmount, setEntryAmount] = useState<number[]>([100, 1000000]);
  const [profitabilityPerYear, setProfitabilityPerYear] = useState<number[]>([
    5, 98,
  ]);

  const [selectLotsType, setSelectLotsType] = useState(1);

  return (
    <div className="w-full  bg-[#F3F4F8] flex justify-between pb-[115px]">
      <div className="max-w-[1920px] w-full mx-auto">
        <div className="max-w-[1480px] mx-auto 2xl:px-[80px] sm:px-[30px] px-5 flex flex-col gap-8  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full">
          <h4 className="text-blue-500 font-semibold 2xl:text-[50px] sm:text-[32px] text-[24px] 2xl:leading-[52px] sm:leading-[30px] leading-[24px]">
            Лоты
          </h4>

          <div className="flex mt-6 gap-6">
            <span
              onClick={() => setSelectType(1)}
              className={
                selectType === 1
                  ? "text-blue-700 font-medium text-[18px] border-b-blue-700 border-b-[2px] cursor-pointer"
                  : "text-gray-800 cursor-pointer font-medium text-[18px]"
              }
            >
              в процессе сбора
            </span>
            <span
              onClick={() => setSelectType(2)}
              className={
                selectType === 2
                  ? "text-blue-700 font-medium text-[18px] border-b-blue-700 border-b-[2px] cursor-pointer"
                  : "text-gray-800 cursor-pointer font-medium text-[18px]"
              }
            >
              завершенные
            </span>
          </div>

          <div className="2xl:mt-[78px] mt-[40px]">
            <div className=" w-fit h-fit flex flex-wrap items-end gap-6">
              <div className="2xs:rounded-[4px] sm:w-[480px] 2xs:w-full w-fit flex 2xs:grid grid-cols-4 2xs:h-12 h-fit 2xs:bg-white-800 2xs:border-b-none border-b border-b-gray-300">
                {LOTS_FILTER.map(({ id, name }) => {
                  return (
                    <button
                      key={id}
                      onClick={() => setSelectLotsType(id)}
                      className={`font-medium xs:text-base text-sm leading-[24px] whitespace-nowrap 2xs:p-0 px-2 py-1 2xs:rounded-[4px] ${
                        selectLotsType === id
                          ? " bg-primary-blue text-white-500"
                          : "text-gray-800"
                      }`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
              <EntryAmountRange
                values={entryAmount}
                onChangeValues={setEntryAmount}
                step={1}
                min={100}
                max={1_000_000}
              />
              <ProfitabilityPerYearRange
                values={profitabilityPerYear}
                onChangeValues={setProfitabilityPerYear}
                step={1}
                min={5}
                max={98}
              />
            </div>

            <div className="mt-[24px]">
              <div className="flex sm:flex-row flex-col gap-6">
                <div className="flex flex-col gap-[6px] w-full max-w-[480px]">
                  <p className="font-medium text-[14px] leading-[12px] text-gray-900">
                    сфера деятельности
                  </p>
                  <Select />
                </div>

                <div className="flex flex-col gap-[6px] w-full max-w-[480px]">
                  <p className="font-medium text-[14px] leading-[12px] text-gray-900">
                    сортировать
                  </p>
                  <Select />
                </div>
              </div>
            </div>
          </div>

          <div className="grid 2xl:grid-cols-3 2xl:mt-[80px] mt-[40px] sm:grid-cols-2 grid-cols-1 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return <LotListItem key={item} />;
            })}
          </div>

          <SeeMoreButton title="посмотреть еще" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default LotsPage;
