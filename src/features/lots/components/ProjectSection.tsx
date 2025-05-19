import videoImage from "@/assets/resources/image 32.png";
import { Separator } from "@/Components/Separator";
import { PlayIcon } from "@/icons/PlayIcon";
import Image from "next/image";
import {
  LoanInformationGroup,
  LoanInformationName,
  LoanInformations,
  LoanInformationsTitle,
  LoanInformationValue,
} from "./LoanInformations";
import { PDFDocument } from "./PDFDocument";

export const ProjectSection = () => {
  return (
    <div className=" w-full h-fit flex flex-col items-center gap-4">
      <div className=" w-full 2xl:h-[565px] h-[440px] relative overflow-hidden rounded-sm">
        <Image
          src={videoImage}
          alt="video image"
          fill
          className=" w-full h-full object-cover"
        />

        <button className=" w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <PlayIcon />
        </button>
      </div>
      <div className=" w-full h-fit flex flex-col items-center 2xl:gap-[100px] lg:gap-[80px] gap-[60px] 2xl:px-[60px]">
        <div className=" w-full h-fit flex flex-col gap-[60px]">
          <div className=" w-fit h-fit flex items-center flex-wrap gap-3 gap-y-1.5">
            <button className=" bg-white-700 text-primary-blue px-2.5 2xl:py-3 py-2.5 rounded-sm 2xl:text-[18px] lg:text-base text-sm font-medium leading-[10px]">
              чистое озеро
            </button>
            <button className=" bg-white-700 text-primary-blue px-2.5 2xl:py-3 py-2.5 rounded-sm 2xl:text-[18px] lg:text-base text-sm font-medium leading-[10px]">
              высокий спрос
            </button>
            <button className=" bg-white-700 text-primary-blue px-2.5 2xl:py-3 py-2.5 rounded-sm 2xl:text-[18px] lg:text-base text-sm font-medium leading-[10px]">
              круглогодичный поток
            </button>
          </div>

          <div className=" w-full h-fit flex flex-col md:gap-5 gap-3">
            <p className=" 2xl:text-[40px] md:text-[32px] text-[24px] 2xl:leading-[61px] md:leading-[53px] leading-[45px] font-bold">
              Промозаголовок про проект
            </p>
            <p className=" font-medium text-[18px] leading-[28px]">
              Пример текста. Разнообразный и богатый опыт курс на
              социально-ориентированный национальный проект способствует
              подготовке и реализации дальнейших направлений развитая системы
              массового участия. Практический опыт показывает, что рамки и место
              обучения кадров обеспечивает широкому кругу специалистов участие в
              формировании существующих финансовых и административных условий.
            </p>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col md:gap-10 gap-5">
          <p className=" 2xl:text-[40px] md:text-[32px] text-[24px] 2xl:leading-[61px] md:leading-[53px] leading-[45px] font-bold">
            Интервью с основателем
          </p>
          <div className=" w-full h-fit grid lg:grid-cols-[393px_1fr] gap-5">
            <div className=" w-full lg:max-w-[353px] h-fit">
              <p className=" font-medium text-[18px] leading-[28px]">
                Пример текста. Разнообразный и богатый опыт курс на
                социально-ориентированный национальный проект способствует
                подготовке и реализации дальнейших направлений развитая системы
                массового участия. Практический опыт показывает, что рамки и
                место обучения кадров обеспечивает широкому кругу специалистов
                участие в формировании существующих финансовых и
                административных условий.
              </p>
            </div>
            <div className=" w-full 2xl:h-[565px] h-[440px] relative overflow-hidden rounded-sm">
              <Image
                src={videoImage}
                alt="video image"
                fill
                className=" w-full h-full object-cover"
              />

              <button className=" w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>

        <div className=" w-full h-fit flex flex-col 2xl:gap-10 gap-5">
          <p className=" 2xl:text-[32px] text-[24px] 2xl:leading-[42px] leading-[34px] font-bold">
            Преимущества
          </p>
          <div className=" w-full h-fit grid lg:grid-cols-3 items-center 2xl:gap-[100px] lg:gap-[80px] gap-[45px]">
            <div className=" w-full h-fit flex flex-col lg:gap-6 gap-3">
              <p className=" 2xl:text-[100px] lg:text-[80px] text-[60px] 2xl:leading-[100px] lg:leading-[80px] leading-[60px] text-primary-blue font-bold">
                01
              </p>
              <div className=" w-full h-fit flex flex-col gap-4 py-2.5">
                <p className=" 2xl:text-[24px] text-[20px] 2xl:leading-[26px] leading-[24px] font-bold">
                  Отличное качество
                </p>
                <span className=" lg:text-[18px] lg:leading-[26px] leading-[24px] font-medium">
                  Пример текста. Разнообразный и богатый опыт курс на
                  социально-ориентированный национальный проект способствует
                  подготовке и реализации дальнейших направлений развитая
                  системы массового участия.
                </span>
              </div>
            </div>
            <div className=" w-full h-fit flex flex-col lg:gap-6 gap-3">
              <p className=" 2xl:text-[100px] lg:text-[80px] text-[60px] 2xl:leading-[100px] lg:leading-[80px] leading-[60px] text-primary-blue font-bold">
                02
              </p>
              <div className=" w-full h-fit flex flex-col gap-4 py-2.5">
                <p className=" 2xl:text-[24px] text-[20px] 2xl:leading-[26px] leading-[24px] font-bold">
                  Отличное качество
                </p>
                <span className=" lg:text-[18px] lg:leading-[26px] leading-[24px] font-medium">
                  Не следует, однако, забывать о том, что новая модель
                  организационной деятельности играет важную роль в формировании
                  новых предложений! Повседневная практика показывает, что новая
                  модель организационной
                </span>
              </div>
            </div>
            <div className=" w-full h-fit flex flex-col lg:gap-6 gap-3">
              <p className=" 2xl:text-[100px] lg:text-[80px] text-[60px] 2xl:leading-[100px] lg:leading-[80px] leading-[60px] text-primary-blue font-bold">
                03
              </p>
              <div className=" w-full h-fit flex flex-col gap-4 py-2.5">
                <p className=" 2xl:text-[24px] text-[20px] 2xl:leading-[26px] leading-[24px] font-bold">
                  Отличное качество
                </p>
                <span className=" lg:text-[18px] lg:leading-[26px] leading-[24px] font-medium">
                  Не следует, однако, забывать о том, что новая модель
                  организационной деятельности играет важную роль в формировании
                  новых предложений! Повседневная практика показывает, что новая
                  модель организационной
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-fit flex flex-col gap-[44px]">
          <div className=" w-full h-fit">
            <LoanInformations>
              <LoanInformationsTitle>Информация</LoanInformationsTitle>
              <div className=" w-full h-fit flex flex-col gap-4">
                <LoanInformationGroup>
                  <LoanInformationName>юридическое лицо</LoanInformationName>
                  <LoanInformationValue>
                    Россия, Москва, 117312, ул. Вавилова, д. 23
                  </LoanInformationValue>
                </LoanInformationGroup>
                <LoanInformationGroup>
                  <LoanInformationName>сайт компании</LoanInformationName>
                  <LoanInformationValue>www.4738993er.ru</LoanInformationValue>
                </LoanInformationGroup>
              </div>
            </LoanInformations>
          </div>

          <Separator />

          <PDFDocument />
        </div>
      </div>
    </div>
  );
};
