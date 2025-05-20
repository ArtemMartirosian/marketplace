import frame from "@/assets/resources/Frame 2863.png";
import intersect from "@/assets/resources/Intersect.png";
import desktopWorkers from "@/assets/resources/inwiswork-19 1 (1).png";
import workers from "@/assets/resources/inwiswork-19 1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-fit flex flex-col relative bg-white-500">
      {/* --------- top part ---------- */}
      <div className=" w-full max-w-[1768px] md:min-h-[580px] sm:min-h-[460px] min-h-[500px] md:pb-0 mb-8 relative mx-auto h-fit">
        {/* dekstop */}
        <Image
          src={desktopWorkers}
          alt="workers"
          className="2xl:block hidden w-full h-full object-cover"
        />
        {/* tablet and mobile */}
        <Image
          src={workers}
          alt="workers"
          className="2xl:hidden w-full h-full object-cover"
        />

        <div className=" w-full max-w-[1078px] text-center h-fit absolute 3xl:top-[140px] sm:top-[100px] top-[60px] left-1/2 -translate-x-1/2 flex flex-col gap-5 items-center text-black-500 z-20 px-3">
          <p className=" 2xl:text-[60px] 2xl:leading-[72px] lg:text-[52px] lg:leading-[64px] md:text-[42px] md:leading-[54px] text-[32px] leading-[44px] font-semibold">
            Соединяем инвесторов, брокеров и бизнесы. Cоздаем прозрачность
            инвестиций
          </p>
          <p className=" max-w-[671px] md:text-[24px] md:leading-[36px] text-[18px] leading-[30px]">
            Информационный сервис для инвесторов, работающих с различными
            инвест. сообществами и брокерами
          </p>
          <button className=" w-fit h-[60px] border border-primary-blue rounded-sm flex items-center justify-center py-3 px-8 md:text-[20px] md:leading-[18px] font-medium text-primary-blue">
            начать инвестировать
          </button>
        </div>
      </div>

      {/* -------- bottom part ---------- */}
      <div className=" w-full h-fit relative mt-8">
        <div className=" w-full max-w-[1059px] absolute left-1/2 -translate-x-1/2 md:-top-[20%] sm:-top-1/4 xs:-top-[28%] 2xs:-top-[32%] -top-[40%]">
          <Image
            src={frame}
            alt="frame"
            className=" h-[583px] object-contain"
          />
        </div>
        <Image
          src={intersect}
          alt="intersect"
          className=" w-full lg:h-[805px] md:h-[768px] sm:h-[700px] h-[540px]"
        />

        <div className=" w-full max-w-[1078px] text-center h-fit absolute left-1/2 -translate-x-1/2 md:bottom-36 sm:bottom-28 xs:bottom-24 bottom-14 flex flex-col items-center gap-1 px-6">
          <p className=" font-semibold lg:text-[42px] lg:leading-[52px] md:text-[36px] md:leading-[46px] sm:text-[32px] sm:leading-[42px] text-[24px] leading-[34px] text-white-500">
            Отчеты, проверки, камеры видеонаблюдения, таймлайны проектов и
            многое другое
          </p>
          <p className=" lg:text-[24px] lg:leading-[36px] sm:text-[18px] sm:leading-[30px] text-white-500">
            Помогаем инвесторам следить за состоянием вложений и быть в курсе
            последних изменений. Помогаем бизнесам стать прозрачными и
            внушающими доверие.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
