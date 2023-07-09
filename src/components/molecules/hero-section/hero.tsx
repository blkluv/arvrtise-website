import Image from "next/image";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { HeroImage } from "../../../images/Index";

const Hero = () => {
  return (
    <div className="h-full w-full bg-[#eaeaea]">
      <div className={`min-h-[650px] bg-[url('/assets/images/hero-bg-image.jpg')]`}>
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <Heading
              as="h1"
              fontSize="4xl"
              fontFamily="Dollar Outline, HirukoPro-Black"
              className="text-white"
            >
              The first <span className="text-[#000000]">Blockchain</span> advertising agency{" "}
              <span className="text-[#E6007E]">NFT Marketplace</span>
            </Heading>
            <p className="py-6 text-base text-white">
              You only need to learn how your ARVRtise ad works for you. Smartcontracts are the new agency contracts.
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
    </div>
  );
};

export default Hero;
