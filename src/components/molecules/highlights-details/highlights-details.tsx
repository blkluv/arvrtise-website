import Spinner from "components/atoms/spinner/spinner";
import { TwitterTweetEmbed } from "react-twitter-embed";

const HighlightsDetails = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center gap-10">
      <TwitterTweetEmbed
        tweetId="1678097400454434816"
        placeholder={<Spinner />}
      />
      <TwitterTweetEmbed
        tweetId="1678115420681666565"
        placeholder={<Spinner />}
      />
      <TwitterTweetEmbed
        tweetId="1676707469240745984"
        placeholder={<Spinner />}
      />
    </section>
  )
};

export default HighlightsDetails;