import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import cards from "../../public/cards.png";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <div className="flex flex-col px-3 lg:px-0 gap-3 items-center text-center justify-center pt-[60px] lg:pt-[128px] bg-[#e8f2ee] dark:bg-background">
      <h1 className="heading1">All in one card.</h1>
      <h4 className="heading4">
        Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae et
        leo duis ut diam.
      </h4>
      <div className="flex items-center gap-6 mt-6 mb-[65px] lg:mb-[152px]">
        <Button className="px-4 py-2 text-white bg-[#5BB5A2] rounded-lg">
          Open Account
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-[#5BB5A2]"
        >
          Compare Cards <IoMdArrowForward />
        </Button>
      </div>
      <Image
        src={cards}
        alt="card-image"
        placeholder="blur"
        layout="responsive"
        width={16}
        height={9}
        className="max-w-full object-cover"
      />
    </div>
  );
}
