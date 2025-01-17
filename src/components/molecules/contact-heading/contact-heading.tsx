import { Box, VStack } from "@chakra-ui/react";
import HeaderText from "components/atoms/typography/heading-text";
import DefaultText from "components/atoms/typography/default-text";
import Link from "components/atoms/link/link";
import React from "react";

const ContactHeading = () => {
  return ( 
    <Box as={"div"}>
      <VStack justifyContent={"flex-start"} alignItems={"flex-start"}>
        <HeaderText level={"h2"} className={"text-secondary py-2"}>
                Contact Us
        </HeaderText>
        <DefaultText className={"text-gray"}>
                You can reach us anytime via 
          <br/>
          <Link
            href={"mailto:info@arvrtise.com"}
            className={"text-primary"}
          >
              <>info@arvrtise.com</>
          </Link>
          
                
        </DefaultText>
      </VStack>
    </Box>
  );
};
 
export default ContactHeading;