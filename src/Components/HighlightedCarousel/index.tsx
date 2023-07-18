import { HighlightedEpisodeCard } from "../HighLightedEpisodeCard";
import { StyledHighlightedList } from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fakeVideos } from "./fakeVideos";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Services/api";

export const HighLightedCarousel = () => {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["highLightedCarrossel"],
  //   queryFn: async () => {
  //     return await baseURL.get("/apiyt").then((response) => response.data);
  //   },
  // });

  // if (isError) {
  //   return <div>Deu erro.</div>;
  // }

  // if (isLoading) {
  //   return <div>Carregando...</div>;
  // }

  // console.log(data);

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
