import Image from "next/image";
import React from "react";
import { HeroImage } from "../../../images/Index";

import Icon from "components/atoms/icon/icon";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-full w-full bg-[#eaeaea] ">
      <div className={`min-h-[650px] bg-[url('/assets/images/hero-bg-image.jpg')]`}>
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <p className="text-4xl font-[750] md:text-6xl md:leading-[70px]">
              The first <span className="text-[#E6007E]">Blockchain</span> advertising agency{" "}
              <span className="text-[#73F6FD]">NFT Marketplace</span> with custom
              services and shops
            </p>
            <p className="py-6 text-base">
              Launch your NFT collection on Polkadot or the Bitcoin 
              blockchain. Let's brainstorm and build your project.
            </p>

            {/* Commented out based on whether we commit to continuing to use the Twitter API
            
            <div className="flex items-center  justify-between rounded-lg bg-white p-2">
              <div className="flex items-center text-[#E6007E]">
                <Icon Icon={AiOutlineSearch} iconAlt="Search Icon" />

                <input
                  type="search"
                  placeholder="Search job title"
                  className="px-2 focus:outline-none"
                />
              </div>
              <div>
                <button className="rounded-xl bg-[#165C9C] p-3 font-bold text-white">
                  Search
                </button>
              </div>
            </div> */}

          </div>
          <div className="relative mt-6 min-h-[20rem] w-full md:h-[30rem] lg:mt-0 lg:h-[35rem] ">
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
