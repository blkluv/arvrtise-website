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
          <HeaderText level="h2" size="xl" className="text-left !font-inter !font-extrabold !leading-[2.8rem]">
            Easy as 1,2,3
          </HeaderText>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col space-y-3 rounded-xl border p-6">
            <div className="relative h-8 w-8 ">
            <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for Tech Is Hiring">
              1️⃣
            </span>
            </div>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Subscribe
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Subscribe to our newsletter and learn how to market your ARVRtising 
                campaign to your customers or followers. Or receive daily ad deals 
                within the industries that you love.
              </DefaultText>
            </div>
          </div>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
          <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for ARVRtise">
             2️⃣
            </span>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Promote 
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Create a Twitter post about your ARVRtise newsletter subscription,
                tag us <a href="https://twitter.com/arvrtise">@arvrtise</a> and we 
                will create your first ARVRtise ad for free. 
              </DefaultText>
            </div>
          </figure>
          <figure className="flex flex-col space-y-3 rounded-xl border p-6">
          <div className="relative h-8 w-8">
            <span role="img" aria-label="Twitter for ARVRtise">
             3️⃣
            </span>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-lg font-extrabold">
                Community
              </DefaultText>
            </div>
            <div className="">
              <DefaultText className="text-left font-inter text-base font-normal">
                Claim your free ARVRtise ad, Join our <a href="https://discord.gg/nfAmqTGNAU">Discord</a>, 
                request an article about how your NFT ARVRtising campaign works.
              </DefaultText>
            </div>
          </figure>
        </div>
      </figure>
    </section>
  );
};

export default WhyChooseSection;