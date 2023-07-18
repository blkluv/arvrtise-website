import { Fragment, useState } from "react";
import Icon from "components/atoms/icon/icon";
import {
  SiTwitter,
  SiLinkedin,
  SiPatreon,
  SiSubstack,
  SiGithub,
  SiDiscord
} from "react-icons/si";
import useMainNav from "lib/hooks/use-nav";
import { FiExternalLink } from "react-icons/fi";
import Link from "components/atoms/link/link";
import NavLink from "components/atoms/nav-link/nav-link";
import { Text, Image, Divider, Input, Button } from "@chakra-ui/react";
import DefaultText from "components/atoms/typography/default-text";

interface FooterProps {
  mobileNav: JSX.Element[];
}

const MobileFooter = ({ mobileNav }: FooterProps) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement the desired behavior when subscribing to the newsletter
    console.log(`Subscribing with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col space-y-2">
        <DefaultText className="text-center font-inter text-lg font-semibold text-white">
          Subscribe to our Newsletter
        </DefaultText>
        <div className="flex items-center space-x-2 rounded-lg bg-white p-2">
          <Input
            focusBorderColor="white"
            placeholder="Enter your email address"
            border={0}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            size="sm"
            variant="ghost"
            colorScheme="linkedin"
            px="8"
            onClick={handleSubscribe}
          >
            Subscribe Now
          </Button>
        </div>
      </div>

      {/* Rest of the code */}
    </div>
  );
};

// Rest of the code...
