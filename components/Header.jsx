import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex item-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-4xl group">
              <span className="font-bold">
                rodnie
              </span>
              <span className="font-thin group-hover:font-bold  transition-all duration-150">galvan</span>
              <span className="text-accent">.</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
