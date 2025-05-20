"use client";

import { Separator } from "@/Components/Separator";
import { ChatIcon } from "@/icons/ChatIcon";
import Link from "next/link";
import { useState } from "react";
import { MENU_CONSTANT } from "../constants/menu.constants";
import { MenuIcon } from "@/icons/MenuIcon";
import { CrossIcon } from "@/icons/CrossIcon";

export const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onToggle = () => setOpen((prev) => !prev);
  const onClose = () => setOpen(false);

  return (
    <>
      <button onClick={onToggle} className=" w-fit h-fit lg:hidden">
        <MenuIcon />
      </button>

      {/* overlay */}
      <div
        data-open={open ? "opened" : "closed"}
        className="w-full h-dvh bg-black-500/50 data-[open=opened]:visible data-[open=opened]:opacity-100 opacity-0 invisible absolute top-0 left-0 transition-all duration-500 ease-in-out z-[60]"
        onClick={onClose}
      ></div>

      {/* sidebar */}
      <div
        data-open={open ? "opened" : "closed"}
        className=" w-96 h-dvh bg-white-500 z-[99] absolute top-0 border-l border-gray-light p-4 flex flex-col gap-3 data-[open=opened]:right-0 data-[open=opened]:opacity-100 data-[open=opened]:visible invisible opacity-50 -right-full transition-all duration-500 ease-in-out"
      >
        <div className=" w-full h-fit flex items-center justify-between">
          <p className=" font-medium text-lg">Меню</p>
          <button onClick={onClose} className=" w-fit h-fit">
            <CrossIcon />
          </button>
        </div>

        <Separator />

        <div className=" w-full h-fit flex flex-col gap-4">
          {MENU_CONSTANT.map((item) => {
            return (
              <Link
                href={item.link}
                className=" w-fit h-fit hover:text-primary-blue cursor-pointer"
                key={item.id}
              >
                {item.name}
              </Link>
            );
          })}

          <Separator className=" md:hidden" />

          <Link
            href="/"
            className="w-fit h-fit md:hidden flex items-center gap-2"
          >
            <ChatIcon />
            <span className="text-primary-blue">Связаться с нами</span>
          </Link>
        </div>
      </div>
    </>
  );
};
