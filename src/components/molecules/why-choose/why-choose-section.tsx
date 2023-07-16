import React from "react";
import DefaultText from "components/atoms/typography/default-text";
import { SiTwitter } from "react-icons/si";
import { TbRefresh } from "react-icons/tb";
import { BsFillKeyFill } from "react-icons/bs";
import Icon from "components/atoms/icon/icon";
import HeaderText from "components/atoms/typography/heading-text";

const WhyChooseSection = () => {
  return (
    <section className="mx-auto w-full max-w-screen-2xl bg-white">
      <figure className="m-10 pb-10">
        <header className="mb-10 lg:w-[30%] ">
        <HeaderText level="h2" size="xl" className="text-left font-DollarOutlineDemo-DO499 font-extrabold leading-[2.8rem]">
        Choose your blockchain
        </HeaderText>

        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
            <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for Tech Is Hiring">
              ADS
            </span>
            </div>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
               🅰️rvrtise Ads
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Launch your NFT ad campaign on Polkadot blockchain and create a 
                new $KSM income stream for your business.<a href="https://ads.arvrtise.com">NFT Marketplace</a>
              </DefaultText>
            </div>
          </div>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
          <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for ARVRtise">
             ORDINALX
            </span>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
               🅰️rvrtise 🅾️rdinal❌
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Launch your Ordinals NFT ad campaign on and create a new $BTC income stream 
                for your blockchain business.<a href="https://ordinalx.arvrtise.com">NFT Marketplace</a>
              </DefaultText>
            </div>
          </figure>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
          <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for ARVRtise">
              NEWS
            </span>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
               📰 Substack
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Subsribe to our Substack to learn the new digital economy and how
                to create marketing campaign that works for you by turning your 
                customers or followers to you marketing team.<a href="https://arvrtise.substack.com">Subsribe</a>
              </DefaultText>
            </div>
          </figure>
        </div>
      </figure>
    </section>
  );
};

export default WhyChooseSection;