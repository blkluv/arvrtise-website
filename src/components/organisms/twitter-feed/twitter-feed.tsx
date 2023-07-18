import { useEffect, useState } from 'react';
import Card from "components/atoms/card/card";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import HeaderText from "components/atoms/typography/heading-text";
import Spinner from "components/atoms/spinner/spinner";

const TwitterFeed = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a delay of 3 seconds before loading the feed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card section className="min-w-full md:px-[10%]">
      <>
        <header>
          <HeaderText
            level="h2"
            className="text-left font-DollarOutlineDemo-DO499 !font-inter !font-extrabold !leading-[2.8rem] py-8"
          >
            Latest Tweets from #ARVRtise:
          </HeaderText>
        </header>
        {isLoading && (
          <div className="flex my-3 inset-0 justify-center items-center">
            <Spinner />
          </div>
        )}
        {!isLoading && (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ARVRtise"
            options={{ height: 400 }} // Adjust the height as per your requirement
          />
        )}
      </>
    </Card>
  );
};

export default TwitterFeed;
