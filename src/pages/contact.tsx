import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import ContactContent from "components/organisms/contact-content/contact-content";
import Head from "next/head";

interface ContactProps {

};

const Contact: WithPageLayout<ContactProps> = () => {

  return ( 
    <div>
      <Head>
        <title>ARVRtise - Contact</title>
        <meta
          property="og:description"
          content={"ARVRtise - Contact"}
        />
      </Head>

      <ContactContent />

    </div>
  );
};
Contact.PageLayout = DefaultLayout;
export default Contact;