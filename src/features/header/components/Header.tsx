import Logo from "@/assets/Logo.svg";
import { MENU_CONSTANT } from "@/features/header/constants/menu.constants";
import { ChatIcon } from "@/icons/ChatIcon";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full text-black max-w-[1920px] mx-auto 2xl:px-[80px] px-[20px] h-[64px] flex items-center justify-between bg-white-500 z-50">
      <div className="flex 2xl:gap-[70px] gap-8">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="lg:flex hidden 2xl:gap-8 gap-4">
          {MENU_CONSTANT.map((item) => {
            return (
              <Link
                href={item.link}
                className="hover:text-primary-blue cursor-pointer"
                key={item.id}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className=" w-fit h-fit flex items-center gap-6">
        <Link
          href="/"
          className=" w-fit h-fit md:flex hidden gap-2 items-center"
        >
          <ChatIcon />
          <span className="text-primary-blue">Связаться с нами</span>
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
