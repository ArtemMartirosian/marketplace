import { LotTabs } from "./LotTabs";

export const SingleLotPage = () => {
  return (
    <section className=" w-full max-w-[1345px] mx-auto 2xl:py-[80px] py-12 2xl:px-0 px-8">
      <div className=" w-full h-fit flex flex-col gap-8">
        <div className=" w-full flex sm:items-center sm:justify-between sm:flex-row flex-col gap-y-2">
          <p className=" font-bold leading-[42px] 2xl:text-[32px] md:text-[24px] text-[18px] text-blue-500">
            Заем под залог права требования
          </p>
          <button className=" rounded-[4px] border border-primary-blue md:px-5 md:py-3 py-1.5 px-3 2xl:text-[17px] text-sm leading-[18px] font-medium text-primary-blue">
            Перейти на сайт проекта
          </button>
        </div>

        <LotTabs />
      </div>
    </section>
  );
};
