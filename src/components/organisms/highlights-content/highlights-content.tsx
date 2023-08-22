import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const HighlightsDetails = () => {
  return (
    <div className="flex justify-center"> {/* Add the flex justify-center class */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ARVRtise"
        options={{ height: 400 }} // Adjust the height as per your requirement
      />
    </div>
  );
};

export default HighlightsDetails;
