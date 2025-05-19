import { PdfIcon } from "@/icons/PdfIcon";
import { PriceBar } from "./PriceBar";
import {
  LoanInformationGroup,
  LoanInformationName,
  LoanInformations,
  LoanInformationsTitle,
  LoanInformationValue,
} from "./LoanInformations";

export const LoanSection = () => {
  return (
    <div className=" w-full h-fit flex flex-col sm:gap-[44px] gap-8">
      {/* ---------------------------------- */}

      <div className=" w-full h-fit flex flex-col sm:gap-8 gap-6">
        <p className=" text-[20px] leading-[28px] text-blue-500 font-bold">
          Статус
        </p>
        <div className=" w-full h-fit flex sm:justify-between sm:flex-row flex-col gap-y-4 gap-x-[75px]">
          <div className=" w-[259px] h-fit">
            <button className=" w-fit h-fit text-gray-800 leading-[18px] sm:text-[18px] font-medium">
              сбор денег
            </button>
          </div>
          <div className=" w-full flex flex-col gap-2">
            <div className=" w-full h-fit flex items-center justify-between">
              <p className=" text-primary-blue font-medium sm:text-[18px] leading-[24px]">
                1 399 499 ₽
              </p>
              <p className=" text-gray-light font-medium sm:text-[18px] leading-[24px]">
                из 5 700 000 ₽
              </p>
            </div>

            <PriceBar percent={60} />
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}

      <div className=" w-full h-px bg-white-700"></div>

      {/* ---------------------------------- */}

      <LoanInformations>
        <LoanInformationsTitle>Информация</LoanInformationsTitle>

        <div className=" w-full max-w-[973px] h-fit flex flex-col sm:gap-8 gap-5">
          <LoanInformationGroup>
            <LoanInformationName>юридическое лицо</LoanInformationName>
            <LoanInformationValue>ООО Россельзохмашторг</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>ID заема</LoanInformationName>
            <LoanInformationValue>844949494</LoanInformationValue>
          </LoanInformationGroup>
        </div>

        <div className=" w-full max-w-[973px] h-fit flex flex-col sm:gap-8 gap-5">
          <LoanInformationGroup>
            <LoanInformationName>даты сбора</LoanInformationName>
            <LoanInformationValue>17.03.2024 — 20.04.2024</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>срок заема</LoanInformationName>
            <LoanInformationValue>320 дней</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>фиксированная ставка</LoanInformationName>
            <LoanInformationValue type="box">21 %</LoanInformationValue>
          </LoanInformationGroup>
        </div>
        <div className=" w-full max-w-[973px] h-fit flex flex-col sm:gap-8 gap-5">
          <LoanInformationGroup>
            <LoanInformationName>начисление</LoanInformationName>
            <LoanInformationValue>На остаток долга</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>частота выплат</LoanInformationName>
            <LoanInformationValue>Ежемесячно</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>обеспечение</LoanInformationName>
            <LoanInformationValue>Право собственности</LoanInformationValue>
          </LoanInformationGroup>
          <LoanInformationGroup>
            <LoanInformationName>цель займа</LoanInformationName>
            <LoanInformationValue type="box" className="bg-[#E5FAFCB2]">
              развитие
            </LoanInformationValue>
          </LoanInformationGroup>
        </div>
      </LoanInformations>

      {/* ---------------------------------- */}

      <div className=" w-full h-px bg-white-700"></div>

      {/* ---------------------------------- */}

      <div className=" w-full h-fit flex flex-col sm:gap-8 gap-6">
        <p className=" font-bold sm:text-[20px] text-[18px] leading-[28px] text-blue-500">
          Документы
        </p>

        <div className=" w-full max-w-[660px] h-[69.47px] px-4 sm:py-5 py-3 rounded-[4px] border flex items-center justify-between bg-gray-500">
          <p className=" font-medium leading-[18px] sm:text-[18px] text-blue-500">
            Инвестиционное предложение
          </p>
          <PdfIcon />
        </div>
      </div>
    </div>
  );
};
