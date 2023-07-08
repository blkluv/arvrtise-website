import React from 'react';
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { 
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from "react-icons/si";

export default function AboutDetails() {
  return (
    <article className={"flex justify-center text-center lg:text-left text-lg lg:text-xl leading-[41px] py-0 lg:py-20 items-center flex-col gap-8 font-700 text-altDark "}>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          <b>ARVRtise</b> is the blockchain standard for crypto advertising campaigns. ARVRtise
          is the first one stop shop marketing agency to utilize an NFT marketplace to create 
          customized campaigns for creators and companies. We aim to educate the world of how
          blockchain marketing campaigns can benefit your brand and your customers.
        </DefaultText>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          During the pandemic,
          <Link href="https://www.linkedin.com/in/ChadRStewart/" className="text-primary">
            <b> Chad R. Stewart</b>
          </Link>
          , the <b>Founder of TechIsHiring</b>, noticed that many 
          people were tweeting about job openings they had discovered and advertising possibilities 
          that they had come across, which is how <b>TechIsHiring</b> came to be. Since there was no one place  
          where these tweets could be collected, the hashtag 
          <Link
            href={"https://twitter.com/arvrtise/"}>
            <b className="text-primary font-800 cursor-pointer"> #ARVRtise</b>
          </Link> and the TechIsHiring account were created.
        </DefaultText>
        <DefaultText as={"p"} w={{base:"80%", lg:"70%"}}>
          Looking to work with the Founder directly?
          <Link href="/hire-chad">
            <b className="text-primary cursor-pointer"> Hire Chad R. Stewart</b>
          </Link>
          .
        </DefaultText>
        <div className="flex lg:hidden w-4/5 flex-col border-t-2 border-t-[#838383] outline-none">
          <DefaultText className={"text-black text-[23px] capitalize pt-14 pb-8 font-bold "}>Follow us</DefaultText>
          <div className="flex gap-12 w-full items-center justify-center">
            <Link href="https://www.twitter.com/arvrtise/">
              <Icon Icon={SiTwitter} iconAlt="Learn blockchain advertising" />
            </Link>
            <Link href="https://www.linkedin.com/showcase/89771536/">
              <Icon Icon={SiLinkedin} iconAlt="Learn blockchain advertising" />
            </Link>
            <Link href="https://www.youtube.com/@arvrtise">
              <Icon Icon={SiYoutube} iconAlt="Learn blockchain advertising"/> 
            </Link>
          </div>
        </div>
        
        <aside className="text-primary py-8 px-10 lg:px-0">‘The first blockchain advertising platform with an NFT marketplace and customized services.’</aside>
        
      </article>
  )
}
