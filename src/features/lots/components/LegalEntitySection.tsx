import image from "@/assets/resources/image 29.png";
import { Separator } from "@/Components/Separator";
import { InformationIcon } from "@/icons/InformationIcon";
import Image from "next/image";
import { Documents } from "./Documents";
import {
  LoanInformationGroup,
  LoanInformationName,
  LoanInformations,
  LoanInformationsTitle,
  LoanInformationValue,
} from "./LoanInformations";

export const LegalEntitySection = () => {
  return (
    <div className=" w-full h-fit flex xl:flex-row flex-col gap-x-6 gap-y-8">
      <div className=" w-[319px] h-fit flex items-center justify-center aspect-square min-w-[319px] border rounded-sm overflow-hidden border-white-700 relative">
        <Image src={image} alt="image" width={257} />
      </div>

      <div className=" w-full h-fit flex flex-col sm:gap-8 gap-6">
        <LoanInformations>
          <LoanInformationsTitle>Информация</LoanInformationsTitle>
          <div className=" w-full h-fit flex flex-col gap-4">
            <LoanInformationGroup>
              <LoanInformationName>Название</LoanInformationName>
              <LoanInformationValue>Россельмашпромторг</LoanInformationValue>
            </LoanInformationGroup>
          </div>
          <div className=" w-full h-fit flex flex-col gap-4">
            <LoanInformationGroup>
              <LoanInformationName>учредитель 1</LoanInformationName>
              <LoanInformationValue>Иванов Иван Иванович</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>учредитель 2</LoanInformationName>
              <LoanInformationValue>Петров Петр Петрович</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>ИНН</LoanInformationName>
              <LoanInformationValue>985984727398374</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>КПП</LoanInformationName>
              <LoanInformationValue>9859847273</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>ОГРН</LoanInformationName>
              <LoanInformationValue>844949494</LoanInformationValue>
            </LoanInformationGroup>
          </div>
          <div className=" w-full h-fit flex flex-col gap-4">
            <LoanInformationGroup>
              <LoanInformationName>адрес</LoanInformationName>
              <LoanInformationValue>
                Россия, Москва, 117312, ул. Вавилова, д. 23
              </LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>сайт</LoanInformationName>
              <LoanInformationValue>www.4738993er.ru</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>описание бизнеса</LoanInformationName>
              <LoanInformationValue>
                Текст про бизнес, текст про бизнес, чем занимаются, как
                зарабатывают, что делают. Описание бизнеса, текст про бизнес,
                чем занимаются, как зарабатывают, что делают.
              </LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>карточка на rusprofile</LoanInformationName>
              <LoanInformationValue>
                https://www.rusprofile.ru/id/1247800028893
              </LoanInformationValue>
            </LoanInformationGroup>
          </div>
          <Separator />
          <div className=" w-full h-fit flex flex-col gap-4">
            <LoanInformationGroup>
              <LoanInformationName>дата образования</LoanInformationName>
              <LoanInformationValue>20.03.1999</LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>
                выручка за 2023 год <InformationIcon />
              </LoanInformationName>
              <LoanInformationValue type="box" className="bg-[#E5FAFCB2]">
                363 млн. ₽
              </LoanInformationValue>
            </LoanInformationGroup>
            <LoanInformationGroup>
              <LoanInformationName>
                баланс за 2023 год <InformationIcon />
              </LoanInformationName>
              <LoanInformationValue type="box" className="bg-[#E5FAFCB2]">
                40 млн. ₽
              </LoanInformationValue>
            </LoanInformationGroup>
          </div>
        </LoanInformations>

        <Separator />

        <Documents />
      </div>
    </div>
  );
};
