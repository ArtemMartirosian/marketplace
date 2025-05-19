import { LotTabs } from "./LotTabs";

export const SingleLotPage = () => {
  return (
    <section className=" w-full max-w-[1345px] mx-auto py-[80px]">
      <div className=" w-full h-fit flex flex-col gap-8">
        <div className=" w-full flex items-center justify-between">
          <p className=" font-bold leading-[42px] text-[32px] text-blue-500">
            Заем под залог права требования
          </p>
          <button className=" rounded-[4px] border border-primary-blue px-5 py-3 text-[17px] leading-[18px] font-medium text-primary-blue">
            Перейти на сайт проекта
          </button>
        </div>

        <LotTabs />
      </div>
    </section>
  );
};
