import Link from "components/atoms/link/link";
import { Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="https://arvrtise.com">
      <Image
        src="/arvrtise-logo.png" // Replace with the actual path to your SVG file
        alt="Arvrtise Logo"
        boxSize={["60px", "70px"]} // Set the desired size for the logo
      />
    </Link>
  );
};

export default Logo;
