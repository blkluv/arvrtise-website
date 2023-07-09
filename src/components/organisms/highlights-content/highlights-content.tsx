import HeaderText from "components/atoms/typography/heading-text";
import HighlightsDetails from "components/molecules/highlights-details/highlights-details";

const HighlightsContent = () => {
  return (
    <section className="flex flex-col items-center bg-[#000000] px-4 py-8">
      <header>
          <HeaderText level="h2" size="xl" className="text-left !font-inter !font-extrabold !leading-[2.8rem] py-8">
          ARVRtise Highlights
        </HeaderText>
      </header>
      <HighlightsDetails />
    </section>
  );
};

export default HighlightsContent;