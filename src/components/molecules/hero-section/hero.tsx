import Image from "next/image";
import React from "react";
import { Box } from "@chakra-ui/react";
import { HeroImage } from "../../../images/Index";

import Icon from "components/atoms/icon/icon";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <Box className="h-full w-full bg-[#eaeaea]">
      <div className={`min-h-[650px] bg-[url('/assets/images/hero-bg-image.jpg')]`}>
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <h1 className="text-4xl font-DollarOutlineDemo-DO499 md:text-6xl md:leading-[70px] text-white">
              The first <span className="text-[#E6007E]">Blockchain</span> advertising agency{" "}
              <span className="text-[#E6007E]">NFT Marketplace</span>
            </h1>
            <p className="py-6 text-base text-white">
              You only need to learn how your ARVRtise ad works for you. Smart contracts are the new agency contracts.
              Claim your 🆓 ad with $KSM on our{" "}
              <a href="https://ad.arvrtise.com" className="text-[#E6007E]">
                marketplace.
              </a>
            </p>
          </div>
          <div className="relative mt-6 min-h-[20rem] w-full md:h-[30rem] lg:mt-0 lg:h-[35rem]">
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
