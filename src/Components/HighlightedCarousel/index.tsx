import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { baseURL } from "../../Services/api";
import { HighlightedEpisodeCard } from "../HighLightedEpisodeCard";
import { StyledHighlightedList } from "./style";
import { VideoType } from "../../Interfaces/videosInterfaces";

export const HighLightedCarousel = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["highLightedCarousel"],
    queryFn: async () => {
      return await baseURL.get("/apiyt").then((response) => response.data);
    },
    retry: false,
  });

  if (isError) {
    return <div>Deu erro.</div>;
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <StyledHighlightedList>
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        centerMode={true}
        centerSlidePercentage={100}
        showThumbs={false}
        emulateTouch={true}
      >
        {data.map((video: VideoType) => (
          <HighlightedEpisodeCard
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
          />
        ))}
      </Carousel>
    </StyledHighlightedList>
  );
};
