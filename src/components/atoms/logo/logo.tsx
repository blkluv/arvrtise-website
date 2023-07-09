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
            src: url("/fonts/DollarOutlineDemo-DO499.ttf") format('woff2'),
                 url("/fonts/DollarOutlineDemo-DO499.ttf") format('woff');
            /* Add more font formats if necessary */
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      <Link href="https://arvrtise.com">
        <Heading
          as="h1"
          fontSize="2.0em"
          fontFamily="Dollar Outline, HirukoPro-Black" // Use "Dollar Outline" font along with fallback
          style={{ color: "black" }} // Apply the color directly to the style
        >
          ARVRTISE
        </Heading>
      </Link>
    </>
  );
};

export default Logo;
