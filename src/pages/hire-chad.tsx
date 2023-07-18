import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import HireChadContent from "components/organisms/hire-chad-content/hire-chad-content";
import Head from "next/head";

interface HireChadProps {

};

const HireChad: WithPageLayout<HireChadProps> = () => {

  return ( 
    <div>

      <Head>
        <title>Arvrtise - Hire Hahz Terry</title>
        <meta
          property="og:description"
          content={"Arvrtise - Hire Hahz Terry"}
        />
          <meta name="twitter:card" content="summary" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:image" content="/Hahz-Terry-profile-card.jpg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <HireChadContent />

    </div>
  );
};
HireChad.PageLayout = DefaultLayout;
export default HireChad;