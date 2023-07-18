import { Box, VStack } from "@chakra-ui/react";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import Icon from "components/atoms/icon/icon";
import { SiTwitter, SiLinkedin } from "react-icons/si";

const HireChadDetails = () => {
  return ( 
    <Box as="div" className="w-full text-center lg:text-left text-lg lg:text-xl leading-[41px]">
      <VStack className="!flex gap-8 lg:gap-2 lg:!items-start" justifyContent="center" alignItems="center">
        <HeaderText level="h2" className="text-secondary py-2">
          Hire Hahz Terry
        </HeaderText>
        <DefaultText as="p" w={{ base: "80%", lg: "70%" }}>
          Hahz Terry aka The Wizard of Hahz is a Web 3 thought leader who has been lecturing around 
          the world about NFT use cases since 2021 at NFT.NYC <a href="https://nftnyc.medium.com/148-new-speakers-for-nft-nyc-in-person-nov-2-3-ba38ced79709" target="_blank" rel="noopener noreferrer">NFT.NYC</a>.
          And has worked on NFT projects for celebs, athletes, and brands such as Hulu, Audio Mack, UMG, 
          and The World Poker Tour. To date, Hahz has contributed to over $1 million in NFT sales.
        </DefaultText>
        <div className="flex w-4/5 flex-col outline-none">
          <DefaultText className="text-black text-[23px] capitalize py-6 font-bold">
            Check out my links
          </DefaultText>
          <div className="flex gap-12 w-full items-center justify-center lg:justify-start">
            <Link href="https://www.twitter.com/hahzterry">
              <Icon Icon={SiTwitter} iconAlt="Hahz Terry Twitter" />
            </Link>
            <Link href="https://www.linkedin.com/in/hahzterry/">
              <Icon Icon={SiLinkedin} iconAlt="Hahz Terry LinkedIn" />
            </Link>
          </div>
        </div>
      </VStack>
    </Box>
  );
};

export default HireChadDetails;
