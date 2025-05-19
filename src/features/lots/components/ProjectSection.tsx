import videoImage from "@/assets/resources/image 32.png";
import { PlayIcon } from "@/icons/PlayIcon";
import Image from "next/image";

export const ProjectSection = () => {
  return (
    <div>
      <div className=" w-full h-[565px] relative overflow-hidden rounded-sm">
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
  );
};
