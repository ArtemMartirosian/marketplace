interface Props {
  percent: number;
}

export const PriceBar = ({ percent }: Props) => {
  return (
    <div className=" w-full h-[24px] rounded-l-[4px] bg-white-700 overflow-hidden">
      <div
        className=" h-full bg-primary-blue transition-all duration-300 ease-linear"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};
