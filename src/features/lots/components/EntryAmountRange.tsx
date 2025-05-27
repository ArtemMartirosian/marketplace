import { DualRangeSlider } from "@/Components/ui/dual-range-slider";
import { NUMERIC_REGEX } from "@/constants/global.constants";
import { ChangeEvent } from "react";

interface Props {
  values: number[];
  onChangeValues: (values: number[]) => void;
  min: number;
  max: number;
  step: number;
}

export const EntryAmountRange = ({
  values,
  onChangeValues,
  min,
  max,
  step,
}: Props) => {
  const handleMinEntryAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (NUMERIC_REGEX.test(value)) {
      const num = Number(value);
      if (num <= max) {
        onChangeValues([num, values[1]]);
      }
    }
  };

  const handleMaxEntryAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (NUMERIC_REGEX.test(value)) {
      const num = Number(value);
      if (num <= max) {
        onChangeValues([values[0], num]);
      }
    }
  };

  return (
    <div className=" w-fit h-fit flex flex-col gap-1.5">
      <span className=" text-sm leading-[12px] font-medium text-gray-900">
        сумма входа, ₽
      </span>
      <div className=" h-12 w-[311px] bg-white-500 border border-white-800 rounded-sm grid grid-cols-2 relative">
        <div className=" w-full h-full border-r border-white-800 p-3">
          <div className=" w-fit h-fit flex items-center gap-2">
            <span className=" leading-[24px] font-medium text-gray-900">
              от
            </span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full text-blue-500 outline-none font-medium"
              value={values[0]}
              onChange={handleMinEntryAmountChange}
            />
          </div>
        </div>
        <div className=" w-full h-full p-3">
          <div className=" w-fit h-fit flex items-center gap-2">
            <span className=" leading-[24px] font-medium text-gray-900">
              до
            </span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full text-blue-500 outline-none font-medium"
              value={values[1]}
              onChange={handleMaxEntryAmountChange}
            />
          </div>
        </div>

        <DualRangeSlider
          value={values}
          onValueChange={onChangeValues}
          max={max}
          min={min}
          step={step}
          className=" w-[285px] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};
