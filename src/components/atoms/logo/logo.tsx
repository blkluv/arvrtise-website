import Link from "components/atoms/link/link";
import { Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="https://arvrtise.com">
      <Image
        src="/arvrtise-logo.png" // Replace with the actual path to your SVG file
        alt="Arvrtise Logo"
        
         width="100%"
        height="auto"
        objectFit="contain"
      />
    </Link>
  );
};

export default Logo;
