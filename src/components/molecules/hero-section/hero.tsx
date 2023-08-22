import Image from "next/image";
import React from "react";
import { Heading } from "@chakra-ui/react";
import { HeroImage } from "../../../images/Index";

const Hero = () => {
  return (
    <div className="h-full w-full bg-[#eaeaea]">
      <div
        className={`min-h-[650px] bg-[url('/assets/images/hero-bg-image.jpg')]`}
      >
        <div className="mx-auto flex h-full max-w-[1210px] flex-col items-center justify-between px-10 py-8 lg:flex-row">
          <div className="w-full max-w-[650px]">
            <Heading as="h1" fontSize="4xl" fontFamily="HirukoPro-Black" className="text-white">
              CREATE AN NFT MARKETING <br />
              AD CAMPAIGN TODAY
            </Heading>
            <p className="py-6 text-base text-white">
              No contracts, no upfront fees or no hidden fees.
              Apply <a href="https://forms.gle/YoUBZ4tJJrArYMcA8" className="text-[#E6007E]">
                here
              </a> to start your blockchain ad campaign. Apply <a href="https://www.linkedin.com/jobs/view/3660358379" className="text-[#E6007E]">
                here
              </a> to get paid to 
              onboard small businesses and creators to blockchain
              with Arvrtise ads. Subscribe to our{" "}
              <a href="https://arvrtise.substack.com" className="text-[#E6007E]">
                Substack
              </a>{" "}
              to learn about the new digital economy benefits your business.
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
