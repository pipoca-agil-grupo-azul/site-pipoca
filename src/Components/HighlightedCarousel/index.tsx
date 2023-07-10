import { HighlightedEpisodeCard } from "../HighLightedEpisodeCard";
import { StyledHighlightedList } from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fakeVideos } from "./fakeVideos";

export const HighLightedCarousel = () => {
  return (
    <StyledHighlightedList>
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={2000}
        centerMode={true}
        centerSlidePercentage={100}
        showThumbs={false}
        emulateTouch={true}
      >
        {fakeVideos.map((video) => (
          <HighlightedEpisodeCard key={video.id} videoContent={video} />
        ))}
      </Carousel>
    </StyledHighlightedList>
  );
};
