import Link from "components/atoms/link/link";
import { Heading } from "@chakra-ui/react";
import { Global } from "@emotion/react"; // Import the Global component from emotion

const Logo = () => {
  return (
    <>
      <Global
        styles={`
          /* Add the font-face for Dollar Outline font */
          @font-face {
            font-family: 'Dollar Outline';
            src: url("../../public/fonts/DollarOutlineDemo-DO499.ttf") format('woff2'),
                 url("../../public/fonts/DollarOutlineDemo-DO499.ttf") format('woff');
            /* Add more font formats if necessary */
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      <Link href="/">
        <Heading
          as="h1"
          fontSize="1.5em"
          fontFamily="Dollar Outline, HirukoPro-Black" // Use "Dollar Outline" font along with fallback
          className="logo"
        >
          ARVRTISE
        </Heading>
      </Link>
    </>
  );
};

export default Logo;
