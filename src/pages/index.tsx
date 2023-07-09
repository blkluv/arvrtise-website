import WithPageLayout from "interfaces/with-page-layouts";
import DefaultLayout from "components/templates/layouts/default-layout";
import TwitterFeed from "components/organisms/twitter-feed/twitter-feed";
import Head from "next/head";
import Hero from "components/molecules/hero-section/hero";
import WhyChooseSection from "components/molecules/why-choose/why-choose-section";
import HighlightsContent from "components/organisms/highlights-content/highlights-content";

interface HomeProps {}

const Home: WithPageLayout<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>ARVRtise - Subscribe to our newsletter and launch your ARVRtising campaign for free.</title>
        <meta
          property="og:description"
          content={"ARVRtise - Subscribe to our newsletter and launch your ARVRtising campaign for free."}
        />
      </Head>
      <Hero />
      <WhyChooseSection />
      <HighlightsContent />
      <TwitterFeed />
    </>
  );
};

Home.PageLayout = DefaultLayout;

export default Home;
