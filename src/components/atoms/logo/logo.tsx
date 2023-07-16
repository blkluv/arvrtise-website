import Link from "components/atoms/link/link";
import { Image, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="https://arvrtise.com">
      <Box maxW={["60px", "70px"]} width="100%" height="auto">
        <Image
          src="/arvrtise-logo.png" // Replace with the actual path to your SVG file
          alt="Arvrtise Logo"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </Box>
    </Link>
  );
};

export default Logo;
