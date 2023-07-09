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
              WE MINT BLOCKCHAIN
              <span className="text-[#E6007E]">A</span>D CAMPAIGNS 
            </Heading>
            <p className="py-6 text-base text-white">
              We reward our loyal newsletter subscribers with customized content and NFT ads
              that work for you. Learn how blockchain marketing benefits your business today.
              Claim your 🆓 ad money with $KSM on our{" "}
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
