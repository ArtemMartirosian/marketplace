import { PdfIcon } from "@/icons/PdfIcon";

export const PDFDocument = () => {
  return (
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
  );
};
